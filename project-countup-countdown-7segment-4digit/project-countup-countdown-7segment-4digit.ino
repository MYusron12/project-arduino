#include <TM1637Display.h>
#define CLK 5
#define DIO 4
int switchUpPin = 7;
int switchDownPin = 6;
int counter = 0;
int buttonUpState = 0;
int buttonDownState = 0;

TM1637Display display(CLK, DIO);

void setup() {
  // put your setup code here, to run once:
  display.setBrightness(0x0f);
  pinMode(switchUpPin, INPUT);
  pinMode(switchDownPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  buttonUpState = digitalRead(switchUpPin);
  buttonDownState = digitalRead(switchDownPin);
  if (buttonUpState == HIGH){
    if(counter == 999){
      counter = 0;
    } else {
      counter++;
    }
  }
  if (buttonDownState == HIGH){
    if(counter == 0){
      counter = 999;
    } else {
      counter--;
    }
  }
display.showNumberDec(counter);
delay(200);
}
