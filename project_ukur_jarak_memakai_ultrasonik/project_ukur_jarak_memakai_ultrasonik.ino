#include <HCSR04.h>

float jarak;

HCSR04 hc(5,6);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  jarak = hc.dist();
  Serial.print(jarak);
  Serial.println(" cm");
  delay(1000);
}
