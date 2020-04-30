int relay1 = 8;
int relay2 = 9;

void setup() {
  // put your setup code here, to run once:
  pinMode(relay1, OUTPUT);
  pinMode(relay2, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(relay1, LOW);
  delay(500);
  digitalWrite(relay1, HIGH);
  delay(500);
  digitalWrite(relay2, LOW);
  delay(500);
  digitalWrite(relay2, HIGH);
  delay(500);
}
