programa{
	funcao inicio(){
		real distancia,consumo,valor,gasto,litro_gasto,valor_gasto

		escreva("Informe a distancia, consumo do veiculo e o valor da gasolina")
		leia(distancia,consumo,valor)

		litro_gasto = distancia/consumo
		valor_gasto = litro_gasto*valor

		escreva("você gastara",valor_gasto,"R$, em combustivel para a viagem")
	}
}