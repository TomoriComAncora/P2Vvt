///<reference types="cypress"/>

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://172.19.16.237:8080/");
    // cy.get('.ma-2 > .v-btn__content').click()
    // cy.get('#input-35').type("empresa4@email.com");
    // cy.get('#input-40').type("empresa4@email.com");
    // cy.get('.ml-3').click();
  });

  // it('ContinuarCadastroEmpresa', ()=>{
  //   cy.get('#input-75').clear().type("");
  //   cy.get('[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .v-card > :nth-child(1) > .v-btn > .v-btn__content').click();
  //   cy.get('#input-90').click().type('67000000000');
  //   cy.get('.mb-12 > :nth-child(1) > .primary > .v-btn__content').click();
  //   cy.get('#input-118').click().type('79304050');
  //   cy.get('.ml-3').click();
  // })

  it.only("login_errado", () => {
    cy.get(".ma-2 > .v-btn__content").click();
    cy.get("[id^=input]")
      .eq(0)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).type("empresa4@email.com");
      });
    cy.get("[id^=input]")
      .eq(1)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).type("empresa5@email.com");
      });
    cy.get(".ml-3").click();
    cy.get(".v-card__text")
      .contains("Email ou senha incorretos.")
      .should("be.visible");
  });

  it.only("login", () => {
    cy.get(".ma-2 > .v-btn__content").click();
    cy.get("[id^=input]")
      .eq(0)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).type("empresa4@email.com");
      });
    cy.get("[id^=input]")
      .eq(1)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).type("empresa4@email.com");
      });
    cy.get(".ml-3").click();
  });

  it.only("cadastrar_vaga_primeira", () => {
    logar();
    cy.get("[id^=input]")
      .eq(0)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("VAGA DE ECONOMISTA");
      });
    cy.get("[id^=input]")
      .eq(1)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Saber MATEMÁTICA");
      });
    cy.get("[id^=input]")
      .eq(2)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Estágio");
      });
    cy.get("[id^=input]")
      .eq(3)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("3");
      });
    cy.get(".v-select__selections").click();
    cy.get(".v-menu__content").contains("Agronomia", { timeout: 9000 }).click();
    cy.get("[id^=input]")
      .eq(5)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("200");
      });
    cy.get(".v-card > :nth-child(1) > .v-btn").click();
    cy.get("[id^=input]")
      .eq(6)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`)
          .click()
          .type("8 horas de trabalho por dia 40 por semana");
      });
    cy.get("[id^=input]")
      .eq(7)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Folga 1 dia por dia");
      });
    cy.get("[id^=input]")
      .eq(8)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Ter ensino médio completo");
      });
    cy.get(".ml-3").click();
    cy.get(".col-sm-12")
      .contains("Vaga cadastrada com sucesso!")
      .should("be.visible");
  });

  const logar = () => {
    cy.get(".ma-2 > .v-btn__content").click();
    cy.get("[id^=input]")
      .eq(0)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).type("empresa4@email.com");
      });
    cy.get("[id^=input]")
      .eq(1)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).type("empresa4@email.com");
      });
    cy.get(".ml-3").click();
  };


  it.only("cadastrar_vaga_falha", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(".ml-3 > .v-btn__content").click();
    cy.get("[id^=input]")
      .eq(1)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("VAGA TESTE");
      });
    cy.get("[id^=input]")
      .eq(2)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("VAGA TESTE2");
      });
    cy.get("[id^=input]")
      .eq(3)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("VAGA TESTE3");
      });
    cy.get("[id^=input]")
      .eq(4)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("de");
      });
    cy.get(":nth-child(5) > .v-input > .v-input__control")
      .contains("Esse campo é obrigatório.")
      .should("be.visible");
    cy.get(".v-select__selections").click();
    cy.get(".v-menu__content")
      .contains("Desenvolvimento de software", { timeout: 9000 })
      .click();
    cy.get("[id^=input]")
      .eq(6)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("200");
      });
    cy.get(".v-card > :nth-child(1) > .v-btn").should("be.disabled");
  });
  it.only("cadastrar_vaga", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(".ml-3 > .v-btn__content").click();
    cy.get("[id^=input]")
      .eq(1)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("VAGA DE ARQUITETO");
      });
    cy.get("[id^=input]")
      .eq(2)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Saber cad e revit");
      });
    cy.get("[id^=input]")
      .eq(3)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Estágio");
      });
    cy.get("[id^=input]")
      .eq(4)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("20");
      });
    cy.get(".v-select__selections").click();
    cy.get(".v-menu__content")
      .contains("Arquitetura de Urbanismo", { timeout: 9000 })
      .click();
    cy.get("[id^=input]")
      .eq(6)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("200");
      });
    cy.get(".v-card > :nth-child(1) > .v-btn").click();
    cy.get("[id^=input]")
      .eq(7)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`)
          .click()
          .type("8 horas de trabalho por dia 40 por semana");
      });
    cy.get("[id^=input]")
      .eq(8)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Folga 1 dia por dia");
      });
    cy.get("[id^=input]")
      .eq(9)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Ter ensino médio completo");
      });
    cy.get(".ml-3").click();
    cy.get(".col-sm-12")
      .contains("Vaga cadastrada com sucesso!")
      .should("be.visible");
  });
  it.only("cadastrar_vaga", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(".ml-3 > .v-btn__content").click();
    cy.get("[id^=input]")
      .eq(1)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("VAGA DE ARQUITETO");
      });
    cy.get("[id^=input]")
      .eq(2)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Saber cad e revit");
      });
    cy.get("[id^=input]")
      .eq(3)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Estágio");
      });
    cy.get("[id^=input]")
      .eq(4)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("20");
      });
    cy.get(".v-select__selections").click();
    cy.get(".v-menu__content")
      .contains("Arquitetura de Urbanismo", { timeout: 9000 })
      .click();
    cy.get("[id^=input]")
      .eq(6)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("200");
      });
    cy.get(".v-card > :nth-child(1) > .v-btn").click();
    cy.get("[id^=input]")
      .eq(7)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`)
          .click()
          .type("8 horas de trabalho por dia 40 por semana");
      });
    cy.get("[id^=input]")
      .eq(8)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Folga 1 dia por dia");
      });
    cy.get("[id^=input]")
      .eq(9)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().type("Ter ensino médio completo");
      });
    cy.get(".ml-3").click();
    cy.get(".col-sm-12")
      .contains("Vaga cadastrada com sucesso!")
      .should("be.visible");
  });
  

  it.only("Listar_Vagas", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(':nth-child(1) > .py-5').should('exist');
  });

  it.only("listar_vaga_falha", ()=>{
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(':nth-child(1) > .py-5').should('not.exist');
  })

  it.only("Deletar_Vagas_cancelar", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(
      ":nth-child(1) > .py-5 > .v-card__actions > .ml-1 > .v-btn__content"
    ).click();
    cy.get(".grey > .v-btn__content").click();
  });

  it.only("Deletar_Vagas_aceitar", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(
      ":nth-child(1) > .py-5 > .v-card__actions > .ml-1 > .v-btn__content"
    ).click();
    cy.get(
      ".v-dialog > .v-card > .v-card__actions > .red > .v-btn__content"
    ).click();
  });

  it.only("Inativar", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn > .v-btn__content"
    ).click();
    cy.get(":nth-child(1) > .py-5 > .v-card__actions > .mr-1").click();
  });

  it.only("Editar_sucesso", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(":nth-child(1) > .py-5 > .v-card__actions > a > .mr-2").click();
    cy.get("[id^=input]")
      .eq(2)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("Saber cad, revit e lumion.");
      });
    cy.get(".v-card > :nth-child(1) > .v-btn").click();
    cy.get("[id^=input]")
      .eq(8)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("Folga 1 dia a cada 3 dias");
      });
    cy.get(".ml-3").click();
    cy.get(".container")
      .contains("Vaga atualizada com sucesso!")
      .should("be.visible");
  });

  it.only("editar_vaga_falha", () => {
    logar();
    cy.get(
      ":nth-child(1) > .mx-auto > .v-card__title > :nth-child(3) > .v-btn"
    ).click();
    cy.get(":nth-child(1) > .py-5 > .v-card__actions > a > .mr-2").click();
    cy.get("[id^=input]")
      .eq(2)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear();
      });
    cy.get(".v-messages__message")
      .contains("Esse campo é obrigatório.")
      .should("be.visible");
  });

  it.only("Editar_pessoa_juridica_erro", () => {
    logar();
    cy.get(".v-btn__content > .white--text").click();
    cy.get(".v-list").contains("Configurações").click();
    cy.get("[id^=input]")
      .eq(1)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear();
      });
      cy.get('.v-messages__message')
      .contains("Esse campo é obrigatório.")
      .should("be.visible");
    cy.get(".v-card__actions > .ml-1").should("be.disabled");
  });
  it.only("Editar_pessoa_juridica", () => {
    logar();
    cy.get(".v-btn__content > .white--text").click();
    cy.get(".v-list").contains("Configurações").click();
    cy.get("[id^=input]")
      .eq(2)
      .invoke("attr", "id")
      .then((id) => {
        cy.get(`#${id}`).click().clear().type("94591668000102");
      });
    cy.get(".v-card__actions > .ml-1").click();
    cy.get(".v-snack__content").should("be.visible");
  });
  it.only("Editar_perfil", () => {
    logar();

    cy.get(".v-btn__content > .white--text").click();
    cy.get(".v-list").contains("Meu Perfil").click();
    cy.get(".warning").click();
    cy.get('input[required][type="text"]')
      .first()
      .click()
      .clear()
      .type("Validar");
    cy.get(
      '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .v-card > :nth-child(1) > .v-btn'
    ).click();
    cy.get(".mb-12 > :nth-child(1) > .primary").click();
    cy.get(".ml-3").click();
    cy.url().should("eq", "http://172.19.16.237:8080/profile");
  });
});

// Editar perfil jurídico com sucesso
