/**
 * Confirmação de exclusão de um contato
 * @autor Arthur Gomes de Oliveira
 */

 function confirmar(idcon) {
	 let resposta = confirm("Confirmar a exclusão deste contato?")
	 if (resposta === true) {
		 alert(idcon)
	 }
 }