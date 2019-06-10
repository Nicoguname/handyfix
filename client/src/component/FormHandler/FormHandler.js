import React, { Component } from "react";
import Artisan from '../Artisan/Artisan.js';
import Form1 from '../Form/Form1';
import Form2 from '../Form/Form2';

export class FormHandler extends Component {
  render() {
    return (
        <div>
      <Artisan />
      <Form1 />
      <Form2 />
      </div>
    );
  }
}

export default FormHandler;



