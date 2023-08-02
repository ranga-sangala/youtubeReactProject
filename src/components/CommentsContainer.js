 import React from 'react'


const commentsData = [     
    {
        name:"Ranga",
        text:"Lorem ipsum dolor sit amet consectetut adip",
        replies:[
            
        ]
    },
    {
        name:"Ranga",
        text:"Lorem ipsum dolor sit amet consectetut adip",
        replies:[
            {
                name:"Ranga",
                text:"Lorem ipsum dolor sit amet consectetut adip",
                replies:[
                    {
                        name:"Ranga",
                        text:"Lorem ipsum dolor sit amet consectetut adip",
                        replies:[
                            {
                                name:"Ranga",
                                text:"Lorem ipsum dolor sit amet consectetut adip",
                                replies:[
                                    
                                ]
                            } 
                        ]
                    } 
                ]
            },
            {
                name:"Ranga",
                text:"Lorem ipsum dolor sit amet consectetut adip",
                replies:[
                    {
                        name:"Ranga",
                        text:"Lorem ipsum dolor sit amet consectetut adip",
                        replies:[
                            {
                                name:"Ranga",
                                text:"Lorem ipsum dolor sit amet consectetut adip",
                                replies:[
                                    
                                ]
                            }  
                        ]
                    } 
                ]
            }

        ]
    },
    {
        name:"Ranga",
        text:"Lorem ipsum dolor sit amet consectetut adip",
        replies:[
            {
                name:"Ranga",
                text:"Lorem ipsum dolor sit amet consectetut adip",
                replies:[
                    
                ]
            },
            {
                name:"Ranga",
                text:"Lorem ipsum dolor sit amet consectetut adip",
                replies:[
                    
                ]
            }
        ]
    },
    {
        name:"Ranga",
        text:"Lorem ipsum dolor sit amet consectetut adip",
        replies:[
            
        ]
    },
    {
        name:"Ranga",
        text:"Lorem ipsum dolor sit amet consectetut adip",
        replies:[
            
        ]
    }
]

const Comment = ({data}) => {      
      const{name,text} = data 
    return(
    <div className='flex my-3 p-2 bg-gray-50'>
        <img className='w-8 h-8' alt="user" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"/>
       <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
       </div>
    </div>

    )
}
const CommentsList = ({comments}) => {
    return comments.map((comment,index) => 
    <div>
    <Comment key={index} data={comment}/>
     <div className='pl-5 border border-left-black ml-5'>
            <CommentsList key={index} comments={comment.replies}/>
     </div>
    </div> 
    )
    
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-xl font-bold'>Comments:</h1>
     <CommentsList  comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
