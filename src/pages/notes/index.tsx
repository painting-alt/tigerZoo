import React, { memo } from 'react'

import MainList from '@/components/main-list'
export default memo(function Notes(){  
    return (
        <div>
        {
            [1,2,3,4,5,6,7,8,9,10].map((item) => {
               return <MainList key={item}/>
            })
        }
    </div>
    )
})

