import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { BirthdaysMonth } from "../models/BirthdayMonths";
//import { User } from "../models/User";
import { sortBy } from "@microsoft/sp-lodash-subset";

export class SharePointService {
  private readonly _spfi: SPFI;

  constructor(spfi: SPFI) {
    this._spfi = spfi;
  }

  public async GetBirthdays(): Promise<Array<BirthdaysMonth>> {
    // eslint-disable-next-line
    const items: Array<any> = await this._spfi.web.lists
      .getByTitle("Birthdays")
      .items.expand("Employee")
      .select("ID,Month,Date,Employee/Title,Employee/UserName")();

    return this.ProcessData(items);
  }

  // private GenerateMonths(): Array<BirthdaysInMonth> {
  //   const months: Array<BirthdaysInMonth> = [];
  //   for (let i = 0; i < 12; i++) {
  //     const today = new Date();
  //     today.setMonth(today.getMonth() + i);
  //     months.push({
  //       title: today.toLocaleString("en-AU", { month: "long" }),
  //       users: [],
  //       date:today.getDate(),
  //     });
  //    //for current month
   

  //   }
   
  //   return months;
  // }
//for current Month
  private GenerateCurrentMonths(): Array<BirthdaysMonth> {
    const months: Array<BirthdaysMonth> = [];
   
     //for current month
     const today = new Date();
     today.setMonth(today.getMonth());
     const todayDate=today.getDate();
     console.log(todayDate);
     months.push({
       title: today.toLocaleString("en-AU", { month: "long" }),
       users: [],
        date:today.getDate(),

    });
   
    return months;
  }


  private GetMonthIndex(month: string): number {
    switch (month) {
      case "January":
        return 0;
      case "February":
        return 1;
      case "March":
        return 2;
      case "April":
        return 3;
      case "May":
        return 4;
      case "June":
        return 5;
      case "July":
        return 6;
      case "August":
        return 7;
      case "September":
        return 8;
      case "October":
        return 9;
      case "November":
        return 10;
      case "December":
        return 11;
    }
  }
// eslint-disable-next-line
  private ProcessData(items: any): Array<BirthdaysMonth> {
    const months = this.GenerateCurrentMonths();
    console.log(months);

    for (let i = 0; i < months.length; i++) {
      
      // const month = months[i];
   
      months[i].users = sortBy(
        items   // eslint-disable-next-line
          .filter((item:any) => item.Date === months[i].date)
          .map(
// eslint-disable-next-line
            (item: any):any => ({

              id: item.ID,
              name: item.Employee.Title,
              email: item.Employee.UserName,
              date: item.BirthdayDate,
              month: item.Month,
              monthIndex: this.GetMonthIndex(item.Month)
              
            })
          ),
        "Date"
      );
    }
    console.log(months,'hello');
    return months;
  }
}
