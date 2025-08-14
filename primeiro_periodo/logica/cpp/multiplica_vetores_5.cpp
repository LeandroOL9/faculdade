#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int a[5],b[5],c[5];
    cout<<"lista:"<<endl;
    for(int i=0;i<5;i++){
        cout<<"digite dois numeros: "<<endl;
        cin>>a[i]>>b[i];
        c[i]=a[i]*b[i];
    }
    for(int i=0;i<5;i++){
        cout<<c[i]<<" ";
    }

    return 0;
}
