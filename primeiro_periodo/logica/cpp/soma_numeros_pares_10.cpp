#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int n[10], soma=0;
    for(int i=0;i<10;i++){
        cout<<"digite um numero: "<<endl;
        cin>>n[i];
        if(n[i]%2==0){
        soma=soma+n[i];
        }
    }
cout<<soma;

    return 0;
}
