export type imageType = {
    title:string,
    image:string,
    subTitle:string
  }
  
  export const homeData = [
    {
      leftPic:{
        title:"Sample",
        image:"https://picsum.photos/600/400?random=1",
        subTitle:"Corperate Site"
      },
      rightPic:{
        title:"Sample2",
        image:"https://picsum.photos/600/400?random=2",
        subTitle:"brand"
      },
    },
    {
      leftPic:{
        title:"Sample3",
        image:"https://picsum.photos/600/400?random=3",
        subTitle:"brand"
      },
      rightPic:{
        title:"Sample4",
        image:"https://picsum.photos/600/400?random=4",
        subTitle:"brand"
      },
    },
    {
      leftPic:{
        title:"Sample5",
        image:"https://picsum.photos/600/400?random=5",
        subTitle:"brand"
      },
      rightPic:{
        title:"Sample6",
        image:"https://picsum.photos/600/400?random=6",
        subTitle:"brand"
      },
    },
    {
      leftPic:{
        title:"Sample7",
        image:"https://picsum.photos/600/400?random=7",
        subTitle:"brand"
      },
    //   rightPic:{
    //     title:"Sample8",
    //     image:"https://picsum.photos/600/400?random=8",
    //     subTitle:"brand"
    //   },
    },
  ]

export const getObjByName = (target:string) => {

    let result:imageType = {
        title:"",
        image:"",
        subTitle:""
    };

    homeData.forEach((el) => {

        if(el.leftPic.title === target){
            result = el.leftPic;
        }

        if(el.rightPic && el.rightPic.title === target){
            result = el.rightPic;
        }
    })
    return result;
}

export const getAllList = () => {

    let result:imageType[] = [];

    homeData.forEach((el) => {

        result.push(el.leftPic);

        if(el.rightPic){
            result.push(el.rightPic);
        }
    })
    return result;

}