'use client'
import React from 'react'

async function getExpense() {
    const res = await fetch("http://localhost:3000/api/v1/expense", {
        cache: "no-cache",
      });
    const data = await res.json();
    return data;
  }
  

export const Expense = async () => {
    const { expense } = await getExpense();
  return (
    <div>
        <div className='space-y-4'>EXPENSE</div>
      <table className='table-auto'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {expense.map(({id, title, category, amount}) => {
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
  )
}
