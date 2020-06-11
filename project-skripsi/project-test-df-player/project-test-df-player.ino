#include <DFPlayer_Mini_Mp3.h>
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3);
const int busyPin = 4;
void setup() {
  // put your setup code here, to run once:
  pinMode(busyPin, INPUT);
  mySerial.begin(9600);
  mp3_set_serial(mySerial);
  delay(10);
  mp3_reset();
  delay(10);
  mp3_set_volume(15);
  delay(1000);
}

void loop() {
  // put your main code here, to run repeatedly:
  mp3_play(1);
  if(busyPin == HIGH){
    mp3_next();
  }
  for(int i=1; i<=10; i++){
    mp3_play(i);
    delay(2000);
  }
}
