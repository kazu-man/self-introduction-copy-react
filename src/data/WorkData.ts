export type workDataList = 
{
    [name:string]:workDataType  
 };

export type workDataType = {
    workHistory:workHistory,
    workAbout:workAbout,
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
    text:string   
}
 

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
        }
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
        ],
        workAbout:{
            title:"Message",
            text:`ブランドロゴは、日本の伝統製材技法である「契り」をモチーフにしました。\n契りは、木工家具などで木材の割れの防止のために用いられ、木々同士を繋ぎ合せる役割を担います。様々な変化により社会の不安や亀裂が広がることのないよう、繋ぎ合わせる存在になりたいという想いを込めています。`
        }
    },
 }


export const getWorkDataByName = (target:string) => {

    return imageText[target]
    
}