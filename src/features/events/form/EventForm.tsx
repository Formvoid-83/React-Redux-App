import { ChangeEvent, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

type Props={
    setFormOpen: (value: boolean) => void;
}

export default function EventForm({setFormOpen}:Props) {
    const  initialValues = {
        title: '',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }
    const [values, setValues] = useState(initialValues);

    function onSubmit(){
        console.log(values);
    }
    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target;
        setValues({...values, [name] : value})

    }
  return (
    <Segment clearing>
        <Header content>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <input 
                    type="text" 
                    placeholder="Event Title"
                    value={values.title}
                    name= 'title'
                    onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" 
                    placeholder="Category"
                    value={values.category}
                    name= 'category'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Form.Field>
                    <input type="text" 
                    placeholder="Description"
                    value={values.description}
                    name= 'description'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Form.Field>
                    <input type="text"
                     placeholder="City"
                     value={values.city}
                    name= 'city'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Form.Field>
                    <input type="text"
                     placeholder="Venue"
                     value={values.venue}
                    name= 'venue'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Form.Field>
                    <input type="text"
                     placeholder="Date"
                     value={values.date}
                    name= 'date'
                    onChange={e => handleInputChange(e)}  />
                </Form.Field>
                <Button  floated="right" positive content='Submit'/>
                <Button onClick={()=>setFormOpen(false)} style={{marginRight: 'submit'}} floated="right" content='Cancel'/>

            </Form>
        </Header>
    </Segment>
  )
}