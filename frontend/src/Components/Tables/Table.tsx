import React from 'react'

type Props = {}

const Table = (props: Props) => {
  return (
    <div>

<table className="table-auto">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>DOB</th>
      <th>State</th>
      <th>Gender</th>
      <th>Location</th>
      <th>Avatar</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones</td>
      <td>prakash@gmail.com</td>
      <td>1961</td>
      <td>ktm</td>
      <td>male</td>
      <td>kathmandu</td>
      <td>photo</td>
      <td className='flex justify-between'>
        <div className='text-green-500 text-2xl cursor-pointer'>E</div>
        <div className='text-red-500 text-2xl cursor-pointer'>D</div>
      </td>
    </tr>
    <tr>
      <td>The Sliding Mr. Bones</td>
      <td>prakash@gmail.com</td>
      <td>1961</td>
      <td>ktm</td>
      <td>male</td>
      <td>kathmandu</td>
      <td>photo</td>
      <td className='flex justify-between'>
        <div className='text-green-500 text-2xl cursor-pointer'>E</div>
        <div className='text-red-500 text-2xl cursor-pointer'>D</div>
      </td>
    </tr>
    <tr>
      <td>The Sliding Mr. Bones</td>
      <td>prakash@gmail.com</td>
      <td>1961</td>
      <td>ktm</td>
      <td>male</td>
      <td>kathmandu</td>
      <td>photo</td>
      <td className='flex justify-between'>
        <div className='text-green-500 text-2xl cursor-pointer'>E</div>
        <div className='text-red-500 text-2xl cursor-pointer'>D</div>
      </td>
    </tr>
   
  </tbody>
</table>
    </div>
  )
}

export default Table