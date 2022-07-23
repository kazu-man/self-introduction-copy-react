export type imageTextType = 
{
     [name: string]:  {
        title:string,
        subtitle:string,
        text:string
    }[]
 };

 

export const imageText: imageTextType = {
    "Sample":[
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
    "Sample2":[
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
    "Sample3":[
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
    "Sample4":[
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
    ],
    "Sample5":[
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
    "Sample6":[
        {
            title:"Role",
            subtitle:"Produce, Interaction Design",
            text:"シャンプーのBOTANIST、ヘアアイロンのSALONIAの会社、I-neのコーポレートサイトを設計しました。"
        },
    ]}



export const getTextByName = (target:string) => {

    return imageText[target]
    
}