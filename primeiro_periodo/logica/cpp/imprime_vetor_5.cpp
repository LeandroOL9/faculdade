#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");        
    int n[5];
  
    for(int i=0;i<5;i++){
        cout<<"digite um numero: "<<endl;
        cin>>n[i];
    }
  
    cout<<endl;
    for(int i=0;i<5;i++){
     cout<<n[i]<<" ";

    }
    return 0;
}