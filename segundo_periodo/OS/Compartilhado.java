public class Compartilhado {
 private static final Object MONITOR = new Object();
 private static boolean pronto = false;
 public static void main(String[] args) {

 Thread threadA = new Thread(() -> {
 String nomeThread = Thread.currentThread().getName();

 synchronized (MONITOR) {
 System.out.println(nomeThread + ": Iniciado. Verificando condição.");

while (!pronto) {
 try {
 System.out.println(nomeThread + ": Condição não satisfeita. Entrando em WAIT.");
MONITOR.wait();
 } catch (InterruptedException e) {
 Thread.currentThread().interrupt();
 }
 }

 System.out.println(nomeThread + ": Fui notificado! A condição 'pronto' é " + pronto + ".");
 }
 try {
 System.out.println(nomeThread + ": Vou dormir por 1 segundo (sleep).");
 Thread.sleep(1000);
 } catch (InterruptedException e) {
 Thread.currentThread().interrupt();
 }

 System.out.println(nomeThread + ": Terminou.");
 }, "Thread-A");


 Thread threadB = new Thread(() -> {
 String nomeThread = Thread.currentThread().getName();

 try {
 System.out.println(nomeThread + ": Fazendo trabalho (sleep de 2s).");
 Thread.sleep(2000);
 } catch (InterruptedException e) {
 Thread.currentThread().interrupt();
 }

 synchronized (MONITOR) {
 System.out.println(nomeThread + ": Adquiriu o lock. Mudando a condição.");
pronto = true;

 MONITOR.notify();
System.out.println(nomeThread + ": Chamou NOTIFY. Thread A deve acordar.");
 }

 System.out.println(nomeThread + ": Terminou.");
 }, "Thread-B");

 threadA.start();
 threadB.start();
 }
 
}