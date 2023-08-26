/**
 * Confirmação de exclusão de um contato
 * @autor Arthur Gomes de Oliveira
 * @param idcon
 */

 function confirmar(idcon) {
	 let resposta = confirm("Confirmar a exclusão deste contato?")
	 if (resposta === true) {
		 window.location.href = "delete?idcon=" + idcon
	 }
 }