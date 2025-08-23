programa{	
	funcao inicio(){
		real km_inicial,km_final,distancia,consumo_litros,valor_entregas,mediac,l

		escreva("Informe o km inicial, km final, quantos litros consumiu e quanto recebeu:")
		leia(km_inicial,km_final,consumo_litros,valor_entregas)

		distancia=km_final-km_inicial
		mediac=distancia/consumo_litros

		l=valor_entregas-consumo_litros*6.50
		
		escreva("A media de consumo foi de:",mediac," litros e teve um lucro de: ",l)	
	}
}