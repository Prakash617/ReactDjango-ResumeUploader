import React from 'react'

type Props = {
  data: any
}

const Table = (props: Props) => {
  const { data } = props
  console.log(`this is data : ${data}`)
  return (
    <div>

      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>State</th>
           
            <th>Location</th>
            <th>Avatar</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.data.map((data: any) => {
              return (

                <tr key={data.name}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.DOB}</td>
                  <td>{data.state}</td>
                  <td>{data.job_location}</td>
                  <td><img src={`${data.img}`} className='rounded-full h-8 w-8' alt="" /></td>
                 
                  <td className='flex justify-between'>
                    <div className='text-green-500 text-2xl cursor-pointer'>E</div>
                    <div className='text-red-500 text-2xl cursor-pointer'>D</div>
                  </td>
                </tr>
              )
            })
          }
          
          {/* <tr>
            <td>The Sliding Mr. Bones</td>
            <td>prakash@gmail.com</td>
            <td>1961</td>
            <td>ktm</td>
           
            <td>kathmandu</td>
            <td>photo</td>
            <td className='flex justify-between'>
              <div className='text-green-500 text-2xl cursor-pointer'>E</div>
              <div className='text-red-500 text-2xl cursor-pointer'>D</div>
            </td>
          </tr> */}
        

        </tbody>
      </table>
    </div>
  )
}

export default Table