const int pinBuzzer=2; //pinBuzzer pada pin 2
void setup() {
pinMode(pinBuzzer,OUTPUT); //pinBuzzer sebagai output
}
void loop() {
//nada pendek
digitalWrite(pinBuzzer,HIGH); //menyalakan Buzzer
delay(100); //Buzzer menyala dengan nada pendek karena delay hanya 100ms
digitalWrite(pinBuzzer,LOW);
delay(100);
//nada panjang
digitalWrite(pinBuzzer,HIGH);
delay(1000);
digitalWrite(pinBuzzer,LOW);
delay(1000);
}
