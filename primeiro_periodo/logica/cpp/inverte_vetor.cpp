#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");    
    int a[8],b[8];

    cout<<"lista:"<<endl;
    for(int i=0;i<8;i++){
        cout<<"digite um numero: "<<endl;
        cin>>a[i];
    }

    for(i=7;i>=0;i--){
        b[7-1]=a[i];
    }

    for(i=0;i<8;I++){
        cout<<a[i]<<" ";
    }
    return 0;
}