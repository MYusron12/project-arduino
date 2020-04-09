int pinPot=A0;
int nilai=0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  nilai = analogRead(pinPot);
  Serial.println(nilai);
  delay(1000);
}
