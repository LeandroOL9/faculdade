#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");       
    int n[10],soma=0, media;

    for(int i=0;i<10;i++){
        cout<<"digite um numero: "<<endl;
        cin>>n[i];
        soma=soma+n[i];
        }
        
        media=soma/10;

        cout<<"a media eh de: "<<media<<endl;
        for(int i=0; i<10; i++){
            if(n[i]>media){
                cout<<n[i]<<endl;
            }
        }
    return 0;
}