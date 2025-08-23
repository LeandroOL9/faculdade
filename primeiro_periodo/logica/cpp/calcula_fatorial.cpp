#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");
    int num, fat = 1;

    cout << "Digite um número: ";
    cin >> num;

    for (int i = 1; i <= num; i++)
    {
        fat *= i;
    }
    cout << "O fatorial é: " << fat << endl;
    return 0;
}