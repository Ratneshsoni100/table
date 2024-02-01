import moment from "moment"

export const coloumf = [
    {
        accessorkey: 'id',
        header: 'ID'
    },
    {
        accessorKey: 'first_name',
        header: 'First-Name'
    },
    {
        accessorKey: 'last_name',
        header: 'Last-Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    }, 
    {
        accessorKey: 'gender',
        header: 'Gender'
    },
    {
        accessorKey: 'dob',
        header: 'Date-Of-Birth',
        cell:({getValue})=>moment(new Date(getValue())).format('DD-MM-YYYY')
    }
]