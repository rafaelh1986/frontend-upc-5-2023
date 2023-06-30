/// <reference types="cypress" />

describe('CRUD Alumnos', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
            //cy.visit('http://localhost:8200')//Frontend de Test
    })

    //Servicio API - GetAlumno()
    it('GetAlumno()', () => {
        cy.wait(1000);
        //cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(5).click(); // click en el TAB de Alumno
        cy.wait(1000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
    });

    //Servicio API - AddAlumno(entidad)
    it('AddAlumno(entidad)', () => {
        cy.get('ion-tab-button').eq(5).click(); // click en el TAB de Alumno
        cy.wait(1000);
        cy.get('#nombreCompleto').type('Jorge Fernandez', { delay: 100 })
        .should('have.value', 'Jorge Fernandez');
        cy.wait(500);
        cy.get('#curso').type('3ero A', { delay: 100 })
        .should('have.value', '3ero A');
        cy.wait(500);
        cy.get('#gestion').type('2023', { delay: 100 })
        .should('have.value', '2023');
        cy.get('#agregarAlumno').not('[disabled]').click();
    });

    //Servicio API - UpdateAlumno(entidad)
    it('UpdateAlumno(entidad)', () => {
        cy.get('ion-tab-button').eq(5).click(); // click en el TAB de Alumno
        cy.wait(1000);
        cy.get('#updateAlumno').eq(0).click(); //Click al boton de Editar una alumno
        cy.wait(1000);
        cy.get('#nombreCompleto').invoke('val', ''); //Vaciar el campo del textfield de Alumno
        cy.get('#nombreCompleto').type('update NOMBRE Cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de nombreCompleto"
        cy.wait(500);
        cy.get('#guardarCambios').not('[disabled]').click(); //Click en guardar cambios
    });

    //Servicio API - DeletePago(id)
    it('DeleteAlumno(id)', () => {
        cy.get('ion-tab-button').eq(5).click(); // click en el TAB de alumno
        cy.wait(1000);
        cy.get('#deleteAlumno').eq(0).click(); //Click al boton de Eliminar un alumno
    });
    
});