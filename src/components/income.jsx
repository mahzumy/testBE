'use client'
import React from 'react'

async function getIncome() {
    const res = await fetch("http://localhost:3000/api/v1/income", {
        cache: "no-cache",
      });
    const data = await res.json();
    return data;
  }
  

export const Income = async () => {
    const { income } = await getIncome();
  return (
    <div className='w-[500px] justify-center items-center'>
    <div className='space-y-4 text-center p-4'>INCOME</div>
    <div className='flex items-center justify-center'>
      <table className='table-fixed'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {income.map(({id, title, category, amount}) => {
                return(
                    <tr key={id}>
                        <td>{title}</td>
                        <td>{category}</td>
                        <td>{amount}</td>
                    </tr>
                )
            })}
            
        </tbody>
    </table>  
    </div>
</div>
  )
}
