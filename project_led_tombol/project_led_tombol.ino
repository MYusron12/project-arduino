 const int tombol = 6;
 const int ledtest = 5;
 int tomboltest = 0;
  
void setup() {
  // put your setup code here, to run once:
  pinMode(ledtest, OUTPUT);
  pinMode(tombol, INPUT_PULLUP);
}

void loop() {
  // put your main code here, to run repeatedly:
  tomboltest = digitalRead(tombol);
  if (tomboltest == HIGH){
    digitalWrite(ledtest, LOW);
  } else {
    digitalWrite(ledtest, HIGH);
  }
}
