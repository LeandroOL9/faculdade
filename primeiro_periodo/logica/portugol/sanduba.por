programa{	
	funcao inicio(){
		inteiro sanduba

		real queijoG,carneG,presuntoG,queijoKg,carneKg,presuntoKg
	
		escreva("Quantos sanduiches fazer?")
		leia(sanduba)

		queijoG =sanduba*100
		carneG =sanduba*100
		presuntoG =sanduba*50

		queijoKg = queijoG/1000
		carneKg = carneG/1000
		presuntoKg = presuntoG/1000

		escreva("precisa de ",queijoKg,"Kg de queijo\n")
		escreva("precisa de ",carneKg,"Kg de carne\n")
		escreva("precisa de ",presuntoKg,"Kg de presunto\n")		
	}
}