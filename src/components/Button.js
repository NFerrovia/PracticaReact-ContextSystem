import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// dependiendo del idioma seleccionado los componentes muestran diferente información

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Aceptar';
  }

  renderButton(color) {
    return (
      // se utiliza template literals para interpolar una variable en el campo, para
      // definir el color del boton, usando la información del sistema del contexto.
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
