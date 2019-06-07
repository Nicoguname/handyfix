import React, { Component } from "react";
import Artisan from '../Artisan/Artisan.js';
import Form1 from '../Form/Form1';

export class FormHandler extends Component {
  render() {
    return (
        <div>
      <Artisan />
      <Form1 />
      </div>
    );
  }
}

export default FormHandler;



