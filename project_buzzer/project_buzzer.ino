const int pinBuzzer = 2;

void setup() {
  // put your setup code here, to run once:
  pinMode(pinBuzzer, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  //bunyi pendek
  digitalWrite(pinBuzzer, HIGH);
  delay(100);
  digitalWrite(pinBuzzer, LOW);
  delay(100);

  //bunyi panjang
  digitalWrite(pinBuzzer, HIGH);
  delay(1000);
  digitalWrite(pinBuzzer, LOW);
  delay(1000);
}
