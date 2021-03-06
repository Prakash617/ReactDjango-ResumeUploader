
import { FormGroup, FormControlLabel, Checkbox, Button, TextField, MenuItem, styled } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from 'axios';



import React from 'react';
import { QueryClientProvider, QueryClient, useQuery, useQueryClient, useMutation } from 'react-query';
import './App.css';
import Table from './Components/Tables/Table';





function App() {


  const queryClient = useQueryClient()

  const { data } = useQuery('getdata', async () =>
    await axios.get("http://127.0.0.1:8000/api/"))

  // console.log(data)

 

  // const addData = (postdata:any)=>{
  //   return axios.post("http://127.0.0.1:8000/api/",postdata)
  // }

  const mutation = useMutation(data => {
    return axios.post('http://127.0.0.1:8000/api/', data)
  })


  const postData = (e:any)=>{

    e.preventDefault()
    console.log(`post ${e.data}`)

    mutation.mutate(e.data)

  }

  




  const state = [
    {
      value: 'Kathmandu',
      label: 'Kathmandu',
    },
    {
      value: 'hetauda',
      label: 'hetauda',
    },
    {
      value: 'lalitpur',
      label: 'lalitpur',
    },
    {
      value: 'Bhatapur',
      label: 'Bhatapur',
    },
  ];

  const [currency, setCurrency] = React.useState('Kathmandu');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [value, setValue] = React.useState<Date | null>(null);

  const Input = styled('input')({
    display: 'none',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`data:${event.target.value}`)
    setCurrency(event.target.value);
  };

  return (
    <>
      <div className="App">
        <div className='h-[6rem] flex items-center justify-center bg-green-500'>
          <h1 className="text-4xl text-red-500 font-bold ">Resume Uploader</h1>
        </div>
        <div className='w-5/6 mx-auto flex flex-col md:flex-row mt-8' >
          <div className='md:w-1/2 w-full'>
            <form action="/" method='post'onSubmit={postData} className='space-y-8'>

              <TextField className='w-full' id="outlined-basic" label="First Name" value={name} onChange={(e)=>{setName(e.target.value)}} variant="outlined" />
              <TextField className='w-full' id="outlined-basic" label="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' variant="outlined" />
              <TextField
                className='w-full'
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={password}
                onChange ={(e)=>{ setPassword(e.target.value)}}
              />
              <div>
                <div className='text-left'>
                  <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <DatePicker
                      label="Basic example"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);

                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
                <div className='mt-4'>

                  <TextField className='w-full'
                    id="standard-select-currency"
                    select
                    label="State"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your State"
                    variant="standard"
                  >
                    {state.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>




              <div>
                <p className='text-left'>Prefferd Job locations:</p>
                <div>
                  <FormGroup className='flex'>
                    <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Kathmandu" />
                    <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Dolakha" />
                    <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Hetauda" />

                  </FormGroup>
                </div>

                <div className='text-left flex flex-row mt-4 space-x-4'>
                  <div>
                    <label htmlFor="contained-button-file">
                      <Input accept="image/png, image/jpeg" id="contained-button-file" multiple type="file" />
                      <Button variant="contained" component="span">
                        Upload Image
                      </Button>
                    </label>
                  </div>
                  <div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input type="file" className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                      "/>
                    </label>
                  </div>


                </div>

                <div className='mt-6'>

                  <Button variant="contained" className='w-3/5'  type='submit'  color="success">
                    Submit
                  </Button>
                </div>


              </div>

            </form>



          </div >
          <div className='w-full'>
            <div className='md:w-1/2 w-full'>
              <Table data={data} />

            </div>
          </div >
        </div >
      </div >
    </>

  );
}

export default App;


