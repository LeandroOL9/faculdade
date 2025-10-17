public class Contador1 {
 private int contador = 0;
 public synchronized void incrementar() {
 contador++;
 }
 public int getContador() {
 return contador;
 }
 public static void main(String[] args) throws InterruptedException {
 Contador1 c1 = new Contador1();
 final int NUM_INCREMENTOS = 10000;
 Runnable tarefaIncremento = () -> {
 for (int i = 0; i < NUM_INCREMENTOS; i++) {
 c1.incrementar();
 }
 };
 Thread t1 = new Thread(tarefaIncremento, "Thread-1");
 Thread t2 = new Thread(tarefaIncremento, "Thread-2");
 t1.start();
 t2.start();
 t1.join();
 t2.join();
 System.out.println("-------------------------------------------");
 System.out.println("Valor Esperado: " + (2 * NUM_INCREMENTOS));
 System.out.println("Valor Obtido: " + c1.getContador());
 System.out.println("-------------------------------------------");
 }
}