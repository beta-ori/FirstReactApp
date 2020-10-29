import React, {useState, useEffect} from 'react'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import axios from 'axios';


function Post(props) {

    let formData = new FormData();
    let flag = false;

    const [data, setData] = useState({
        title: '',
        category: 'sports',
        description: '',
        cust_url: '',
        target_url: '',
        date: '',
        img: '',
        flag: false,
    });


    useEffect( () => {
        if(data.flag){
            setData({...data, flag: false})
            axios.post('https://app.omihdlive24.com/create-post', data)
            .then(response => {
                console.log(response);
                //props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            })
        }
    }, [data.flag])


    const validate = () => {

        if(data.title == '' || data.description == '' || data.cust_url == '')
        {
            alert("Please give all the information.");
            return false;
        }

        if(data.date == '' || data.target_url == '' || !flag){
            alert("Please give all the information...");
            return false;
        }

        return true;
    }


    const handelData =(e) =>{
        e.preventDefault();
        // axios.post('http://app.omihdlive24.com/post', data)
        //     .then(response => {
        //         console.log(data);
        //         props.history.push('/');
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        //
        
        if(validate()){
            flag = false;
            axios.post('https://app.omihdlive24.com/upload', formData)
            .then((response) => {
                console.log(response.data);
                setData({...data, img: response.data, flag: true});
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    const onSelect = e => {
        formData.append('file', e.target.files[0]);
        flag = true;
    }

    return (
        <>
            <Container style={{marginTop: '80px', marginBottom: '80px'}}>
            
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type='text'
                        value={data.title}
                        onChange={ e => setData({...data, title: e.target.value})}
                        placeholder='Title'
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Category</Label>
                        <Input type="select"
                        value={data.category}
                        onChange={ e => setData({...data, category: e.target.value})}>
                            <option>sports</option>
                            <option>festival</option>
                            <option>soccer</option>
                            <option>nhl</option>
                            <option>nfl</option>
                            <option>tennis</option>
                            <option>ufc</option>
                            <option>events</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label>Description</Label>
                        <Input type='textarea' placeholder='Description'
                        value={data.description}
                        onChange={ e => setData({...data, description: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Custom URL</Label>
                        <Input type='text' placeholder='Custom URL'
                        value={data.cust_url}
                        onChange={ e => setData({...data, cust_url: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Date</Label>
                        <Input type='text' placeholder='yyyy-mm-dd hh:mm AM'
                        value={data.date}
                        onChange={ e => setData({...data, date: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Target URL</Label>
                        <Input type='text' placeholder='Target URL'
                        value={data.target_url}
                        onChange={ e => setData({...data, target_url: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type='file'
                        onChange={ e => onSelect(e)}/>
                    </FormGroup>

                </Form>
                <Button onClick={e => handelData(e) }>Submit</Button>
            </Container>
        </>
    )
}

export default Post
