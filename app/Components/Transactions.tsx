import React from 'react'
import { Card } from "primereact/card";

const Transactions = () => {
  return (
    <div className="Transactions">
          <div className="card-sm-text mb-3 dark:text-gray-400">Recent Transactions</div>

          <div className="transaction-cards block md:flex gap-5">
            <Card
              className="mb-5 md:mb-0 flex dark:bg-gray-700!"
              pt={{
                body: { className: "bg-white rounded-3xl dark:bg-gray-700" },
                content: { className: "p-0! flex flex-col gap-3" },
              }}
            >            
              <div className='flex gap-3'>
                <i className="pi pi-bars text-xl" />
                <div>
                    <p className="card-sm-text dark:text-gray-400">State Bank of India</p>
                    <p className="card-text-bold dark:text-white">50000 Rs /-</p>
                </div>             
              </div>
            </Card>
    
            <Card
              className="flex dark:bg-gray-700!"
              pt={{
                body: { className: "bg-white rounded-3xl dark:bg-gray-700" },
                content: { className: "p-0! flex flex-col gap-3" },
              }}
            >
              <div className='flex gap-3'>
                <i className="pi pi-bars text-xl" />
                <div>
                    <p className="card-sm-text dark:text-gray-400">The Indian Bank</p>
                    <p className="card-text-bold dark:text-white">50000 Rs /-</p>
                </div>
              </div>              
            </Card>
          </div>
        </div>
  )
}

export default Transactions