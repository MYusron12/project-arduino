#define ldr A1
#define led 12
int sensorValue;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  pinMode(ldr, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  sensorValue = analogRead(ldr);
  Serial.print("Nilai Sensor: ");
  Serial.print(sensorValue);
  if(sensorValue <= 15){
    digitalWrite(led, HIGH);
    Serial.print(" (Lampu ON)");
  } else {
    digitalWrite(led, LOW);
    Serial.println(" (Lampu OFF)");
  } delay(100);
}
