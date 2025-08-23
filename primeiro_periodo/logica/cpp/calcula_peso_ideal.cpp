#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");
    string sexo;
    float h,peso,pesoideal;

    cout<<"Escreva seu genero, em seguida seu peso e altura"<<endl;
    cin>>sexo>>peso>>h;

    if(sexo=="feminino"){
            pesoideal=(62.1*h)-44.7;
    }else if(sexo=="masculino"){
            pesoideal=(72.7*h)-58.0;
    }

    cout<<"Peso ideal: "<<pesoideal<<endl;
    
    if(peso<=pesoideal){
        cout<<"Voce esta em forma"<<endl;
    }else{
        cout<<"Melhor fazer uma dieta"<<endl;
    }
    return 0;
}