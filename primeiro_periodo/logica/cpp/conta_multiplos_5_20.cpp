#include <iostream>
#include <vector>

using namespace std;

int main()
{
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
