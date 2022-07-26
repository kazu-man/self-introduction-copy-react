export type workDataList = 
{
    [name:string]:workDataType  
 };

export type workDataType = {
    workHistory:workHistory,
    workAbout:workAbout,
    workComponents:workComponents
}

export type workHistory = 
 {
    title:string,
    subtitle:string,
    text:string
}[]

export type workAbout =
{
    title:string,
    text:string,
    background?:string   
} 

export type workImage = {
    url:string[],
    background?:string
}
 
export type workComponents = (workAbout | workImage)[]


export const imageText: workDataList = {
    "Sample":{
        workHistory:[
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
        ],
        workAbout:{
            title:"Logo Design",
            text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`
        },
        workComponents:[
            {
                url:[
                    "https://picsum.photos/600/400?random=2",
                    "https://picsum.photos/600/400?random=3",
                ],
                background:"#e78c7e"
            },      
            {
                url:[
                    "https://picsum.photos/600/400?random=1"
                ],
                background:"#e78c7e"
            },      
            {
                url:[
                    "https://picsum.photos/600/200?random=4",
                    "https://picsum.photos/600/200?random=5",
                    "https://picsum.photos/600/200?random=6",
                ],
                background:"#e78c7e"
            },      
            {
                title:"Message",
                text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`,
                background:"#e78c7e"
            },
            {
                url:[
                    "https://picsum.photos/600/400?random=7",
                    "https://picsum.photos/600/400?random=8",
                ]
            },       
            {
                url:[
                    "https://picsum.photos/400/200?random=7",
                    "https://picsum.photos/400/200?random=8",
                    "https://picsum.photos/400/200?random=9",
                    "https://picsum.photos/400/200?random=1",
                    "https://picsum.photos/400/200?random=3",
                    "https://picsum.photos/400/200?random=5",
                    "https://picsum.photos/400/200?random=2",
                    "https://picsum.photos/400/200?random=11",

                ],
                background:"#e78c7e"
            },        

        ]

    },
    "Sample2":{
        workHistory:[
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
        ],
        workAbout:{
            title:"Logo Design",
            text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`
        },
        workComponents:[
            {
                url:[
                    "https://picsum.photos/600/400?random=1"
                ],
                background:"#e78c7e"
            },        
            {
                url:[
                    "https://picsum.photos/400/200?random=7",
                    "https://picsum.photos/400/200?random=8",
                    "https://picsum.photos/400/200?random=9",
                    "https://picsum.photos/400/200?random=1",
                    "https://picsum.photos/400/200?random=3",
                ],
                background:"#e78c7e"
            },        
            {
                title:"Message",
                text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`,
                background:"#e78c7e"
            },    

        ]

    },
    "Sample3":{
        workHistory:[
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
        ],
        workAbout:{
            title:"Logo Design",
            text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`
        },
        workComponents:[
            {
                url:[
                    "https://picsum.photos/600/400?random=1"
                ],
                background:"#e78c7e"
            },      
            {
                url:[
                    "https://picsum.photos/600/400?random=2",
                    "https://picsum.photos/600/400?random=3",
                ],
                background:"#e78c7e"
            },      
            {
                title:"Message",
                text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`,
                background:"#e78c7e"
            },
            {
                url:[
                    "https://picsum.photos/600/200?random=4",
                    "https://picsum.photos/600/200?random=5",
                    "https://picsum.photos/600/200?random=6",
                ],
                background:"#e78c7e"
            },      
            {
                title:"Message",
                text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`,
                background:"#e78c7e"
            },
            {
                title:"Message",
                text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`,
                background:"#e78c7e"
            },
   

        ]

    },
    "Sample4":{
        workHistory:[
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
        ],
        workAbout:{
            title:"Logo Design",
            text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`
        },
        workComponents:[
            {
                url:[
                    "https://picsum.photos/600/400?random=1"
                ],
                background:"#e78c7e"
            },        
            {
                url:[
                    "https://picsum.photos/400/200?random=7",
                    "https://picsum.photos/400/200?random=8",
                    "https://picsum.photos/400/200?random=9",
                    "https://picsum.photos/400/200?random=1",
                    "https://picsum.photos/400/200?random=3",
                ],
                background:"#e78c7e"
            },        

        ]

    },
    "Sample5":{
        workHistory:[
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
        ],
        workAbout:{
            title:"Logo Design",
            text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`
        },
        workComponents:[
            {
                url:[
                    "https://picsum.photos/600/400?random=1"
                ],
                background:"#e78c7e"
            },
            {
                title:"Message",
                text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`,
                background:"#e78c7e"
            },      
            {
                url:[
                    "https://picsum.photos/600/400?random=2",
                    "https://picsum.photos/600/400?random=3",
                ],
                background:"#e78c7e"
            },      
            {
                url:[
                    "https://picsum.photos/600/200?random=4",
                    "https://picsum.photos/600/200?random=5",
                    "https://picsum.photos/600/200?random=6",
                ],
                background:"#e78c7e"
            },      
            {
                url:[
                    "https://picsum.photos/600/400?random=7",
                    "https://picsum.photos/600/400?random=8",
                ]
            },       
            {
                url:[
                    "https://picsum.photos/400/200?random=7",
                    "https://picsum.photos/400/200?random=8",
                    "https://picsum.photos/400/200?random=9",
                    "https://picsum.photos/400/200?random=1",
                    "https://picsum.photos/400/200?random=3",
                ],
                background:"#e78c7e"
            },        

        ]

    },
    "Sample6":{
        workHistory:[
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },

        ],
        workAbout:{
            title:"Logo Design",
            text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`
        },
        workComponents:[
            {
                url:[
                    "https://picsum.photos/600/400?random=1"
                ],
                background:"#e78c7e"
            },      
            {
                url:[
                    "https://picsum.photos/600/400?random=2",
                    "https://picsum.photos/600/400?random=3",
                ],
                background:"#e78c7e"
            },          
            {
                title:"Message",
                text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`,
                background:"#e78c7e"
            },
     

        ]

    },
    "Sample7":{
        workHistory:[
            {
                title:"Role",
                subtitle:"Produce, Interaction Design",
                text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
            },
            {
                title:"Design",
                subtitle:"Astuki Inoue , Norio Ozaki",
                text:"私はプロデューサーを担当し、限られた社内のリソースを最大限に活用しながらデジタルコミュニケーションのゴール設定とデザインワイヤーフレームを作りました。"
            },
        ],
        workAbout:{
            title:"Logo Design",
            text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`
        },
        workComponents:[
            {
                url:[
                    "https://picsum.photos/600/400?random=1"
                ],
                background:"#e78c7e"
            },      
            {
                url:[
                    "https://picsum.photos/600/200?random=4",
                    "https://picsum.photos/600/200?random=5",
                    "https://picsum.photos/600/200?random=6",
                    "https://picsum.photos/600/400?random=2",
                    "https://picsum.photos/600/400?random=3",
                ],
                background:"#e78c7e"
            },      
            {
                title:"Message",
                text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`,
                background:"#e78c7e"
            },    

        ]

    },
 }


export const getWorkDataByName = (target:string) => {

    return imageText[target]
    
}