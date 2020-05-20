#include <HCSR04.h>
int Buzzer = 3;
float jarak;

HCSR04 hc(5,6);

void setup() {
  // put your setup code here, to run once:
  pinMode(Buzzer, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  jarak = hc.dist();
  if(jarak < 5){
    digitalWrite(Buzzer, HIGH);
    delay(100);
    digitalWrite(Buzzer, LOW);
    delay(100);
  } else if(jarak < 10){
    digitalWrite(Buzzer, HIGH);
    delay(250);
    digitalWrite(Buzzer, LOW);
    delay(250);
  } else if(jarak < 15){
    digitalWrite(Buzzer, HIGH);
    delay(500);
    digitalWrite(Buzzer, LOW);
    delay(500);
  }
}
