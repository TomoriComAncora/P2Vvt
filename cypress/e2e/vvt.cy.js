///<reference types="cypress"/>

describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://172.19.16.237:8080/')
    // cy.get('.ma-2 > .v-btn__content').click()
    // cy.get('#input-35').type("empresa4@email.com");
    // cy.get('#input-40').type("empresa4@email.com");
    // cy.get('.ml-3').click();
    
  });

  const logar = ()=>{
      cy.get('.ma-2 > .v-btn__content').click()
      cy.get('#input-35').type("empresa4@email.com");
      cy.get('#input-40').type("empresa4@email.com");
      cy.get('.ml-3').click();
  }
  
  it('login_errado', ()=>{
    logar();  
    cy.get('.v-card__text').contains("Email ou senha incorretos.").should('be.visible');
   })

   it('cadastrar_vaga_primeira', ()=>{
    logar();
    cy.get('#input-96').click().type("Vaga de DevOps")
    cy.get('#input-100').click().type("Contrata-se uma PCD que seja desenvolvedor.");
    cy.get('#input-104').click().type("Desenvolvedor java.");
    cy.get('#input-108').clear().click().type(2);
    cy.get('.v-input__icon > .v-icon').click();
    cy.get('#list-item-145-0 > .v-list-item__content > .v-list-item__title').click();
    cy.get('#input-118').click().type("700000");
    cy.get('#list-item-145-3 > .v-list-item__content > .v-list-item__title').click({force:true});
    cy.get('.v-card > :nth-child(1) > .v-btn > .v-btn__content').click();
    cy.get('#input-126').click().type("8 horas de trabalho por dia 40 por semana");
    cy.get('#input-130').click().type("Folga 1 dia por dia");
    cy.get('#input-134').click().type("Ter ensino médio completo");
    cy.get('.ml-3').click();
    // cy.get('.col-sm-12').contains("Vaga cadastrada com sucesso!").should('be.visible');
  },)

it('cadastrar_vaga', ()=>{
  logar();
  cy.get(':nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn').click();
  cy.get('.ml-3').click();
  cy.get('#input-177').click().type("Vaga de DevOps")
    cy.get('#input-181').click().type("Contrata-se uma PCD que seja desenvolvedor.");
    cy.get('#input-185').click().type("Desenvolvedor java.");
    cy.get('#input-189').clear().click().type(2);
    cy.get('.v-input__icon > .v-icon').click();
    cy.get('#list-item-226-0 > .v-list-item__content > .v-list-item__title').click();
    cy.get('#input-199').click().type("700000");
    cy.get('.v-card > :nth-child(1) > .v-btn > .v-btn__content').click();
    cy.get('#input-207').click().type("8 horas de trabalho por dia 40 por semana");
    cy.get('#input-211').click().type("Folga 1 dia por dia");
    cy.get('#input-215').click().type("Ter ensino médio completo");
    cy.get('.ml-3').click();
    cy.get('.col-sm-12').contains("Vaga cadastrada com sucesso!").should('be.visible');
})
  it('cadastrar_vaga_falha', ()=>{
    logar(); 
    cy.get('#input-129').click().type("Vaga de DevOps")
    cy.get('#input-133').click().type("Contrata-se uma PCD que seja desenvolvedor.");
    cy.get('#input-137').click().type("Desenvolvedor java.");
    // cy.get('#input-141').clear().click().type(2);
    cy.get('.v-input__icon > .v-icon').click();
    cy.get('#list-item-178-0 > .v-list-item__content > .v-list-item__title').click();
    cy.get('#input-151').click().type("700000");
    cy.get('.v-card > :nth-child(1) > .v-btn').should('be.disabled')
  },)
  // it('ContinuarCadastroEmpresa', ()=>{
  //   cy.get('#input-75').clear().type("");
  //   cy.get('[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .v-card > :nth-child(1) > .v-btn > .v-btn__content').click();
  //   cy.get('#input-90').click().type('67000000000');
  //   cy.get('.mb-12 > :nth-child(1) > .primary > .v-btn__content').click();
  //   cy.get('#input-118').click().type('79304050');
  //   cy.get('.ml-3').click();
  // })

  it('Listar_Vagas', ()=>{
    logar();
    cy.get(':nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn').click();
    cy.get('.v-card__text > .row').contains("")
  })

  it('Deletar_Vagas_cancelar', ()=>{
    logar();
    cy.get(':nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn').click();
    cy.get(':nth-child(1) > .py-5 > .v-card__actions > .ml-1 > .v-btn__content').click();
    cy.get('.grey > .v-btn__content').click();
  })
  
  it('Deletar_Vagas_aceitar', ()=>{
    logar();
    cy.get(':nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn').click();
    cy.get(':nth-child(1) > .py-5 > .v-card__actions > .ml-1 > .v-btn__content').click();
    cy.get('.v-dialog > .v-card > .v-card__actions > .red > .v-btn__content').click();
  })

  it('Inativar', ()=>{
    logar();
    cy.get(':nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn > .v-btn__content').click();
    cy.get(':nth-child(1) > .py-5 > .v-card__actions > .mr-1').click();
  })

  it.only('Editar', ()=>{
    logar();
    cy.get(':nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn > .v-btn__content').click();
    cy.get('a > .mr-2').click();
  })

})





