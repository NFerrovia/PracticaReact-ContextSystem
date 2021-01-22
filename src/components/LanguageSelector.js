import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  // a travez de este componente se inicializa el sistema de contexto y
  // el evento de click sobre las banderas que actualizará el lenguaje del formulario.

  render() {
    return (
      <div>
        Selecciona un idioma:
        <i
          className="flag es"
          onClick={() => this.context.onLanguageChange('español')}
        />
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('english')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
