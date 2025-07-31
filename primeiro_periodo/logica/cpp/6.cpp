#include <iostream>
using namespace std;

int main()
{
int m[3][5],n,i,j;
    for(i=0;i<3;i++){
        for(j=0;j<5;j++){
        cout<<"digite um numero"<<endl;
        cin>>n;
        if(n>=100){n=0;}
        m[i][j]=n;
        }
    }
    cout<<"matriz: "<<endl;
    for(i=0;i<3;i++){
        for(j=0;j<5;j++){
        cout<<m[i][j]<<" ";
        }
        cout<<"\n";
    }

        return 0;
}
