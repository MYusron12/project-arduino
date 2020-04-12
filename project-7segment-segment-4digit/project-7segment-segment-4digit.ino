#include <TM1637Display.h>

#define CLK 5
#define DIO 4

int angka;
TM1637Display display (CLK, DIO);

void setup() {
  // put your setup code here, to run once:
  display.setBrightness(0x0f);
}

void loop() {
  // put your main code here, to run repeatedly:
  angka = 1234;
  display.showNumberDec(angka);
}
