#include <WiFi.h>
#include <FirebaseESP32.h>
#include "Ultrasonic.h"
#include <TinyGPS++.h>

// Replace with your network credentials
const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// Replace with your Firebase project credentials
const char* firebaseHost = "YOUR_FIREBASE_PROJECT.firebaseio.com";
const char* firebaseAuth = "YOUR_FIREBASE_DATABASE_SECRET";

#define TRIG_PIN 5 // Change to your ESP32's specific pin number
#define ECHO_PIN 18 // Change to your ESP32's specific pin number
#define MQT135_PIN 34 // Change to your ESP32's specific analog pin number

Ultrasonic ultrasonic(TRIG_PIN, ECHO_PIN);
TinyGPSPlus gps;

void setup() {
  Serial.begin(115200);
  Serial1.begin(9600, SERIAL_8N1, 16, 17); // Assuming GPS is connected to GPIO 16 (RX) and 17 (TX)
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected to WiFi");
  Firebase.begin(firebaseHost, firebaseAuth);
}

void loop() {
  // Read from the ultrasonic sensor
  long distance = ultrasonic.distanceRead(CM);

  // Read from the MQT-135 sensor
  int gasValue = analogRead(MQT135_PIN);

  // Read GPS data
  while (Serial1.available() > 0) {
    if (gps.encode(Serial1.read())) {
      if (gps.location.isValid()) {
        // GPS data is valid
        float latitude = gps.location.lat();
        float longitude = gps.location.lng();
        
        // Transmit data to Firebase
        Firebase.setFloat("dustbin/distance", distance);
        Firebase.setInt("dustbin/gasValue", gasValue);
        Firebase.setFloat("dustbin/latitude", latitude);
        Firebase.setFloat("dustbin/longitude", longitude);
      }
    }
  }

  delay(10000); // Delay for a bit before the next read
}
