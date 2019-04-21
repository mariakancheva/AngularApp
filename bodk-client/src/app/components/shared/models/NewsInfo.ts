export interface NewsInfo{
    _id:string;
    title:string;
    description:string;
    date:Date;
    _acl:{creator:string}
}