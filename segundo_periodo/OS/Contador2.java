public class Contador2 {
 // VARIÁVEL COMPARTILHADA
 private int contador = 0;
 // Método que as threads irão executar
 public void incrementar() {
 contador++;
 }
 public int getContador() {
 return contador;
 }
 public static void main(String[] args) throws InterruptedException {
 Contador2 c2 = new Contador2();
 final int NUM_INCREMENTOS = 10000;
 // Tarefa que incrementa o contador
 Runnable tarefaIncremento = () -> {
 for (int i = 0; i < NUM_INCREMENTOS; i++) {
 c2.incrementar();
 }
 };
 // Cria as duas Threads
 Thread t1 = new Thread(tarefaIncremento, "Thread-1");
 Thread t2 = new Thread(tarefaIncremento, "Thread-2");
 // Inicia a execução
 t1.start();
 t2.start();
 // Espera as duas threads terminarem
 t1.join();
 t2.join();
 System.out.println("-------------------------------------------");
 System.out.println("Valor Esperado: " + (2 * NUM_INCREMENTOS));
 System.out.println("Valor Obtido: " + c2.getContador());
 System.out.println("-------------------------------------------");

 // A saída será quase sempre um valor abaixo de 20000,
 // o que prova que o sincronismo falhou.
 }
}