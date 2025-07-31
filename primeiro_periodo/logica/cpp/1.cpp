#include <iostream>
using namespace std;

int main() {
    int num1, num2;

    cout << "Digite dois numeros: "<<endl;
    cin >> num1>>num2;

    if (num1 % 2 == 0 && num2 % 2 == 0) {
        cout << "OS DOIS SÃO PARES\n";
    } else if (num1 % 2 != 0 && num2 % 2 != 0) {
        cout << "OS DOIS SÃO ÍMPARES\n";
    } else if (num1 % 2 == 0 && num2 % 2 != 0) {
        cout << "O PRIMEIRO É PAR E O SEGUNDO É ÍMPAR\n";
    } else {
        cout << "O PRIMEIRO É ÍMPAR E O SEGUNDO É PAR\n";
    }

    return 0;
}