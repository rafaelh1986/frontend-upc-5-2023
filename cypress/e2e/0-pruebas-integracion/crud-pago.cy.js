/// <reference types="cypress" />

describe('CRUD Pago', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
            //cy.visit('http://localhost:8200')//Frontend de Test
    })

    //Servicio API - GetAlumno()
    it('GetPagos()', () => {
        cy.wait(1000);
        //cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(6).click(); // click en el TAB de Alumno
        cy.wait(1000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
    });

    //Servicio API - AddPago(entidad)
    it('AddPago(entidad)', () => {
        cy.get('ion-tab-button').eq(6).click(); // click en el TAB de Alumno
        cy.wait(1000);
        cy.get('#monto').type('30', { delay: 100 })
        .should('have.value', '30');
        cy.wait(500);
        cy.get('#idAlumnoPago').type('3', { delay: 100 })
        .should('have.value', '3');
        cy.wait(500);
        cy.get('#addPago').not('[disabled]').click();
    });

    //Servicio API - UpdateCategoria(entidad)
    it('UpdatePago(entidad)', () => {
        cy.get('ion-tab-button').eq(6).click(); // click en el TAB de Pago
        cy.wait(1000);
        cy.get('#updatePago').eq(0).click(); //Click al boton de Editar una Pago
        cy.wait(1000);
        cy.get('#monto').invoke('val', ''); //Vaciar el campo del textfield de nombreCategoria
        cy.get('#monto').type('30', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de Monto"
        cy.wait(500);
        
        cy.get('#guardarCambios').not('[disabled]').click(); //Click en guardar cambios
    });

    //Servicio API - DeleteCategoria(id)
    it('DeletePago(id)', () => {
        cy.get('ion-tab-button').eq(6).click(); // click en el TAB de Pago
        cy.wait(1000);
        cy.get('#deletePago').eq(0).click(); //Click al boton de Eliminar una pago
    });

});