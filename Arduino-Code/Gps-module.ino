#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <FirebaseESP32.h>
#define FIREBASE_HOST "Enter Your Firebase URL"
#define FIREBASE_AUTH "Enter Your Firebase API"
#define WIFI_SSID "Enter your SSID"
#define WIFI_PASSWORD "Enter Your password" //        


//Define FirebaseESP32 data object
FirebaseData firebaseData;
FirebaseJson json;
int Vresistor = A0;
int Vrdata = 0;
TinyGPSPlus gps;

void setup() {

  Serial.begin(9600);
  Serial2.begin(9600);
  pinMode(Vresistor, INPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //Set database read timeout to 1 minute (max 15 minutes)
  Firebase.setReadTimeout(firebaseData, 1000 * 60);
  //tiny, small, medium, large and unlimited.
  //Size and its write timeout e.g. tiny (1s), small (10s), medium (30s) and large (60s).
  Firebase.setwriteSizeLimit(firebaseData, "tiny");

  /*
    This option allows get and delete functions (PUT and DELETE HTTP requests) works for device connected behind the
    Firewall that allows only GET and POST requests.

    Firebase.enableClassicRequest(firebaseData, true);
  */

  //String path = "/data";

  Serial.println("------------------------------------");
  Serial.println("Connected...");

  delay(3000);
}


void loop() {

  while (Serial2.available() > 0)
    if (gps.encode(Serial2.read()))

      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No GPS detected: check wiring."));

    while (true);
  }
}


void displayInfo()
{

  Serial.print(F("Location: "));

  if (gps.location.isValid()) {

    Serial.print("Lat: ");

    Serial.print(gps.location.lat(), 6);

    Serial.print(F(","));

    Serial.print("Lng: ");

    Serial.print(gps.location.lng(), 6);

    Serial.println();

    String address =  "https://maps.google.com/?q=" + String( gps.location.lat()) + "," + String (gps.location.lng());
    Serial.println(address);

    // Vrdata = analogRead(Vresistor);
    int Sdata = random(0, 1023) ;

    delay(100);
    json.set("/one", Sdata);
    json.set("/address", address);

    delay(1000);

    Firebase.updateNode(firebaseData, "/Address", json);
  }
  else
  {
    Serial.print(F("INVALID"));
  }
}


void updateSerial()
{
  delay(500);

  while (Serial.available())
  {
    Serial2.write(Serial.read());//Forward what Serial received to Software Serial Port

  }

  while (Serial2.available())
  {
    Serial.write(Serial2.read());//Forward what Software Serial received to Serial Port
  }
}