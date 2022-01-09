const content ={
    inputs:[
        {
            type:"text",
            name:"name",
            label:"Name",
            placeholder:"Enter name",
            validation:{
                required:true,
                minLength:5,
                maxLength:10
            }
        },
        {
            type:"select",
            name:"country",
            label:"Country",
            placeholder:"Select country",
            options:[
                {
                    value:"india",
                    label:"India"
                },
                {
                    value:"usa",
                    label:"USA"
                },
            ]
        },
        // {
        //     type:"email",
        //     name:"email",
        //     label:"Email",
        //     placeholder:"Enter email",
        //     validation:{
        //         required:true,
        //         minLength:5,
        //         maxLength:10
        //     }
        // },
       
        // {
        //     type:"text",
        //     name:"phone",
        //     label:"Phone",
        //     placeholder:"Enter phone",
        //     validation:{
        //         required:true,
        //         minLength:5,
        //         maxLength:10
        //     }
        // },
        {
            type:"password",
            name:"password",
            label:"Password",
            placeholder:"Enter password",
            validation:{
                required:true,
                minLength:5,
                maxLength:15
            }
        },
        {
            type:"password",
            name:"confirmPassword",
            label:"confirm Password",
            placeholder:"ReEnter password",
            validation:{
                required:true,
                minLength:5,
                maxLength:10
            }
        },
    ]
}

export default content;