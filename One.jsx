import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import React, { useState } from 'react'
import { coloumf } from './Coloum'
import tabledata from './Table.json'

function One() {
    let [filterdata, setfilterdata] = useState('')
    let [sortdata, setsortdata] = useState([])
    const tableinstance = useReactTable({
        columns: coloumf,
        data: tabledata,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            globalFilter: filterdata,
            sorting: sortdata
        },
        onGlobalFilterChange: setfilterdata,
        onSortingChange: setsortdata

    })
    console.log(tableinstance.getHeaderGroups());
    return (
        <div>

            <input type="text"
                placeholder='search'
                className='form-control'
                value={filterdata}
                onChange={(e) => setfilterdata(e.target.value)} />
            <table className="table">
                <thead>
                    {
                        tableinstance.getHeaderGroups().map(e1 => {
                            return (
                                <tr key={e1.id}>
                                    {
                                        e1.headers.map(ele2 => {
                                            return (
                                                <th key={ele2.id}
                                                    colSpan={ele2.colSpan}
                                                    onClick={ele2.column.getToggleSortingHandler()}>
                                                    {
                                                        flexRender(
                                                            ele2.column.columnDef.header,
                                                            ele2.getContext()
                                                        )
                                                    }
                                                    {
                                                        { asc: '⬆️', desc: '⬇️' }[ele2.column.getIsSorted() ?? null]

                                                    }

                                                </th>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </thead>
                <tbody>
                    {
                        tableinstance.getRowModel().rows.map(e1 => {
                            return <tr key={e1.id} >
                                {
                                    e1.getVisibleCells().map(ele2 => {
                                        return <td key={ele2.id}>
                                            {
                                                flexRender(
                                                    ele2.column.columnDef.cell,
                                                    ele2.getContext()
                                                )
                                            }

                                        </td>


                                    })
                                }
                            </tr>

                        })
                    }
                </tbody>
            </table>
            <button className='btn btn-warning mx-1'
                onClick={() => tableinstance.setPageIndex(0)}>
                First page</button>
            <button className='btn btn-warning mx-1'
                onClick={() => tableinstance.previousPage()}
            >
                Previous page</button>
            <button
                className='btn btn-warning mx-3'
                onClick={() => tableinstance.nextPage()}
                disabled={!tableinstance.getCanNextPage()}
            >
                Next page
            </button>
            <button className='btn btn-warning mx-2'
                onClick={() => tableinstance.setPageIndex(tableinstance.getPageCount() - 1)}
            >
                last page</button>
        </div>
    )
}

export default One
