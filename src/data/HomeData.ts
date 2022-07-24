export type imageType = {
    id:number,
    title:string,
    image:string,
    subTitle:string
  }
  
  export const homeData = [
    {
      leftPic:{
        id:1,
        title:"Sample",
        image:"https://picsum.photos/600/400?random=1",
        subTitle:"Corperate Site"
      },
      rightPic:{
        id:2,
        title:"Sample2",
        image:"https://picsum.photos/600/400?random=2",
        subTitle:"brand"
      },
    },
    {
      leftPic:{
        id:3,
        title:"Sample3",
        image:"https://picsum.photos/600/400?random=3",
        subTitle:"brand"
      },
      rightPic:{
        id:4,
        title:"Sample4",
        image:"https://picsum.photos/600/400?random=4",
        subTitle:"brand"
      },
    },
    {
      leftPic:{
        id:5,
        title:"Sample5",
        image:"https://picsum.photos/600/400?random=5",
        subTitle:"brand"
      },
      rightPic:{
        id:6,
        title:"Sample6",
        image:"https://picsum.photos/600/400?random=6",
        subTitle:"brand"
      },
    },
    {
      leftPic:{
        id:7,
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

export const getAllList = ():imageType[] => {

    let result:imageType[] = [];

    homeData.forEach((el) => {

        result.push(el.leftPic);

        if(el.rightPic){
            result.push(el.rightPic);
        }
    })
    return result;

}

export const getObjById = (id:number) :imageType | undefined => {
    const data = getAllList();

    return data
    .find((el) => el.id === id);

}

export const getObjByName = (target:string) :imageType | undefined => {
    const data = getAllList();

    return data
    .find((el) => el.title === target);

}