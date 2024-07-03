import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


function InputSizesExample() {
  return (
    <>
      <Form.Control size="lg" className='formulaire' type="text" placeholder="Nom(s)" />
      <br />
      <Form.Control size="lg" className='formulaire' type="text" placeholder="Prénom(s)" />
      <br />
      <Form.Control size="lg" className='formulaire' type="text" placeholder="Adresse mail" />
      <br />

    <Form.Select aria-label="Default select example">
      <option>Choix de formation</option>
      <option value="Developpeur Web/Web Mobile">Developpeur Web/Web Mobile</option>
      <option value="Référent Digital">Référent Digital</option>
      <option value="Autre">Autre</option>
    </Form.Select>

    <Button className='bouton' type="submit">Submit form</Button>

     
    </>
  );
}

export default InputSizesExample;