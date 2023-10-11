import Image from 'next/image'
import { Income } from '@/components/income'
import { Expense } from '@/components/expense';

export default async function Page() {
  //const { income } = await getIncome();
  //const { expense } = await getExpense();
  return (
    //<div>data</div>
    <Income/>
    //<Expense/>
  )
}
