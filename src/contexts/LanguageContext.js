import React from 'react';

const Context = React.createContext('español');

export class LanguageStore extends React.Component {
  // Inicialización del State como español.

  state = { language: 'español' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider // se utiliza el sistema de contexto para enviar la información a un pariente
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
