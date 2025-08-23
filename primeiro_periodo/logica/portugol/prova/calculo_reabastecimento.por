programa{
	funcao inicio(){
		real cpm,qv,qr,consumo,qlm,ckm,consumo_volta,consumot
		
		escreva("informe o comprimento da pista, quantas voltas são, a quantidade de reabastecimentos e o consumo em KM do veiculo: ")
		leia(cpm,qv,qr,consumo)

		ckm=cpm/1000
		consumo_volta=ckm/consumo
		consumot=consumo_volta*qv
		qlm=consumot/qr
		
		escreva("a quantidade minima de litros sera de:",qlm)
	}
}