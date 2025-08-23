#include <iostream>
#include <locale.h>
#include <stdlib.h>
#include <time.h>
using namespace std;

int main()
{
    setlocale(LC_ALL, "portuguese");
    int opcao;
    cout << "--- MENU ---\n\n1 - Jogar\n2 - Sobre\n3 - Fim\n\nDigite o número da opção do menu: ";
    cin >> opcao;
    int r;
    char und1 = '_';
    char und2 = '_';
    char und3 = '_';
    char und4 = '_';
    char und5 = '_';
    char und6 = '_';
    char L1, L2, L3, L4, L5, L6;
    char chute;
    int contAcertos = 0, contTentativas = 10;

    srand(time(NULL));
    r=rand()%10;  

    switch(opcao){ 
        case 1:
            system("cls");
            switch(r){ 
                case 0:
                    L1 = 'B';
                    L2 = 'A';
                    L3 = 'N';
                    L4 = 'A';
                    L5 = 'N';
                    L6 = 'A';
                    break;

                case 1:
                    L1 = 'F';
                    L2 = 'A';
                    L3 = 'R';
                    L4 = 'O';
                    L5 = 'F';
                    L6 = 'A';
                    break;

                case 2:
                    L1 = 'B';
                    L2 = 'E';
                    L3 = 'X';
                    L4 = 'I';
                    L5 = 'G';
                    L6 = 'A';
                    break;

                case 3:
                    L1 = 'M';
                    L2 = 'I';
                    L3 = 'M';
                    L4 = 'O';
                    L5 = 'S';
                    L6 = 'A';
                    break;

                case 4:
                    L1 = 'M';
                    L2 = 'A';
                    L3 = 'L';
                    L4 = 'E';
                    L5 = 'T';
                    L6 = 'A';
                    break;

                case 5:
                    L1 = 'S';
                    L2 = 'A';
                    L3 = 'C';
                    L4 = 'O';
                    L5 = 'L';
                    L6 = 'A';
                    break;

                case 6:
                    L1 = 'C';
                    L2 = 'A';
                    L3 = 'N';
                    L4 = 'E';
                    L5 = 'T';
                    L6 = 'A';
                    break;

                case 7:
                    L1 = 'B';
                    L2 = 'I';
                    L3 = 'R';
                    L4 = 'U';
                    L5 = 'T';
                    L6 = 'A';
                    break;

                case 8:
                    L1 = 'R';
                    L2 = 'E';
                    L3 = 'G';
                    L4 = 'A';
                    L5 = 'T';
                    L6 = 'A';
                    break;

                case 9:
                    L1 = 'J';
                    L2 = 'A';
                    L3 = 'N';
                    L4 = 'E';
                    L5 = 'L';
                    L6 = 'A';
                    break;
            }
            cout << "Tente adivinhar a palavra!\n\n\n";
            while(contAcertos < 6 && contTentativas > 0){  //Loop das tentativas feitas pelo usuário
                cout << und1 << " " << und2 << " " << und3 << " " << und4 << " " << und5 << " " << und6 << "\n\n";
                cout << "\nVocê acertou " << contAcertos << " letra(s) e ainda tem " << contTentativas << " tentativas.\nDigite uma letra: ";
                cin >> chute;
                if(chute == L1 || chute == L2 || chute == L3 || chute == L4 || chute == L5 || chute == L6){
                    if(chute == L1){
                    und1 = L1;
                    contAcertos++;
                    }if(chute == L2){
                    und2 = L2;
                    contAcertos++;
                    }if(chute == L3){
                    und3 = L3;
                    contAcertos++;
                    }if(chute == L4){
                    und4 = L4;
                    contAcertos++;
                    }if(chute == L5){
                    und5 = L5;
                    contAcertos++;
                    }if(chute == L6){
                    und6 = L6;
                    contAcertos++;
                    }
                    cout << "\n\nVocê acertou!\n\n\n";
                }else{
                    contTentativas--;
                    cout << "\n\nVocê errou.\n\n\n";
                }
            }
            if(contTentativas == 0){  //Apresenta o resultado do jogo
                cout << "***Suas tentativas acabaram. Você perdeu.***\n\nVoltando ao menu. ";
                system("pause");
                system("cls");
                return main();
            }else{
                cout << "***Você ganhou! A palavra era " << und1 << und2 << und3 << und4 << und5 << und6 << "! Parabéns!***\n\nVoltando ao menu. ";
                system("pause");
                system("cls");
                return main();
            }
        break;

        case 2:
            system("cls");
            cout << "Equipe:\nWillian Jose Kotlewski Kulakowski\n\Vinicius Tadeu\nLeandro de Oliveira\n\nmaio/2025\n\nProfessora: Cristina Horita\nProgramação e Algoritmos\n\nRegras do jogo:\nUse sempre letras maiúsculas. Uma letra por vez. Não use letras que já foram usadas.\n\n";
            system("pause");
            system("cls");
            return main();
            break;

        case 3:
            system("cls");
            cout << "Obrigado por jogar! Volte sempre!\n";
            return 0;
            break;

        default:
            cout << "\nEssa opção não está disponível. ";
            system("pause");
            system("cls");
            return main();
    }
}