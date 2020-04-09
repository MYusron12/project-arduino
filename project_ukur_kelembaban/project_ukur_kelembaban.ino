#include "DHT.h"
#define DHTPIN A5
#define DHTTYPE DHT11

DHT dht (DHTPIN, DHTTYPE);

float t;
float h;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(2000);
  t = dht.readTemperature();
  h = dht.readHumidity();

  Serial.print("Suhu: ");
  Serial.print(t);
  Serial.print(" *C ");
  Serial.print("kelembapan: ");
  Serial.print(h);
  Serial.println(" %/t");
}
