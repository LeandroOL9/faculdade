#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");
    int n[20],cont=0;
    
    for(int i=0;i<20;i++){
        cout<<"digite um numero: "<<endl;
        cin>>n[i];
       if(n[i]%5==0){
        cont++;
        }
    }
    cout<<cont;
    return 0;
}