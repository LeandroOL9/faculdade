#include <iostream>
#include <locale.h>
#include <cstdlib>
#include <ctime>
#include <windows.h>

using namespace std;

int main() {
    setlocale(LC_ALL, "portuguese");
    srand(time(0));

    char matrizPrincipal[4][4] = {
        {'D', 'G', 'A', 'F'},
        {'H', 'B', 'E', 'C'},
        {'F', 'A', 'H', 'D'},
        {'C', 'E', 'B', 'G'}
    };

    char matrizGabarito[4][4];
    char matrizJogo[4][4];
    bool matrizRevelada[4][4] = {false};

    int transformacao = rand() % 4 + 1;

    switch (transformacao) {
        case 1:
            for (int i = 0; i < 4; i++) {
                for (int j = 0; j < 4; j++) {
                    matrizGabarito[i][j] = matrizPrincipal[i][j];
                }
            }
            break;

        case 2: 
            for (int i = 0; i < 4; i++) {
                for (int j = 0; j < 4; j++) {
                    matrizGabarito[j][i] = matrizPrincipal[i][j];
                }
            }
            break;

        case 3: 
            for (int i = 0; i < 4; i++) {
                for (int j = 0; j < 4; j++) {
                    matrizGabarito[3 - i][j] = matrizPrincipal[i][j];
                }
            }
            break;

        case 4:
            for (int i = 0; i < 4; i++) {
                for (int j = 0; j < 4; j++) {
                    matrizGabarito[i][3 - j] = matrizPrincipal[i][j];
                }
            }
            break;
    }

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            matrizJogo[i][j] = '-';
        }
    }

    int jogadasRestantes = 24;
    int paresEncontrados = 0;
    bool primeiraJogada = true;
    int linha1, coluna1, linha2, coluna2;

    while (jogadasRestantes > 0 && paresEncontrados < 8) {
        system("cls");

        cout << "Jogo da Memoria - Jogadas restantes: " << jogadasRestantes << endl;
        cout << "Pares encontrados: " << paresEncontrados << "/8" << endl << endl;

        cout << "   0 1 2 3" << endl;
        for (int i = 0; i < 4; i++) {
            cout << i << "  ";
            for (int j = 0; j < 4; j++) {
                cout << matrizJogo[i][j] << " ";
            }
            cout << endl;
        }
        cout << endl;

        if (primeiraJogada) {
            cout << "Primeira jogada:" << endl;
            cout << "Digite a linha (0-3): ";
            cin >> linha1;
            cout << "Digite a coluna (0-3): ";
            cin >> coluna1;

            if (linha1 < 0 || linha1 > 3 || coluna1 < 0 || coluna1 > 3 || matrizRevelada[linha1][coluna1]) {
                cout << "Jogada invalida! Tente novamente." << endl;
                system("pause");
                continue;
            }

            matrizJogo[linha1][coluna1] = matrizGabarito[linha1][coluna1];
            primeiraJogada = false;
        } else {
            cout << "Segunda jogada:" << endl;
            cout << "Digite a linha (0-3): ";
            cin >> linha2;
            cout << "Digite a coluna (0-3): ";
            cin >> coluna2;

            if (linha2 < 0 || linha2 > 3 || coluna2 < 0 || coluna2 > 3 ||
                matrizRevelada[linha2][coluna2] || (linha2 == linha1 && coluna2 == coluna1)) {
                cout << "Jogada invalida! Tente novamente." << endl;
                system("pause");
                continue;
            }
            matrizJogo[linha2][coluna2] = matrizGabarito[linha2][coluna2];

            system("cls");
            cout << "Jogo da Memoria - Jogadas restantes: " << jogadasRestantes << endl;
            cout << "Pares encontrados: " << paresEncontrados << "/8" << endl << endl;

            cout << "   0 1 2 3" << endl;
            for (int i = 0; i < 4; i++) {
                cout << i << "  ";
                for (int j = 0; j < 4; j++) {
                    cout << matrizJogo[i][j] << " ";
                }
                cout << endl;
            }
            cout << endl;

            if (matrizGabarito[linha1][coluna1] == matrizGabarito[linha2][coluna2]) {
                cout << "ACERTOU!" << endl;
                matrizRevelada[linha1][coluna1] = true;
                matrizRevelada[linha2][coluna2] = true;
                paresEncontrados++;
            } else {
                cout << "ERROU!" << endl;
                matrizJogo[linha1][coluna1] = '-';
                matrizJogo[linha2][coluna2] = '-';
            }

            jogadasRestantes--;
            primeiraJogada = true;
            system("pause");
        }
    }
    system("cls");

    if (paresEncontrados == 8) {
        cout << "PARABENS! Voce venceu o jogo!" << endl;
    } else {
        cout << "Fim de jogo! Voce nao conseguiu encontrar todos os pares." << endl;
    }

    cout << "Pares encontrados: " << paresEncontrados << "/8" << endl;
    cout << "Jogadas utilizadas: " << (24 - jogadasRestantes) << endl << endl;
    cout << "Matriz gabarito:" << endl;
    cout << "   0 1 2 3" << endl;
    for (int i = 0; i < 4; i++) {
        cout << i << "  ";
        for (int j = 0; j < 4; j++) {
            cout << matrizGabarito[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}