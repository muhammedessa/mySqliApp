import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite,  SQLiteObject  } from '@ionic-native/sqlite';

import { AddemployeePage } from '../addemployee/addemployee';
import { EditemployeePage } from '../editemployee/editemployee';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

data:any=[] ;



  constructor(public navCtrl: NavController,public sQLite:SQLite) {

  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getData();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }





  ionViewDidLoad(){
    this.getData();
  }


  getData(){
    this.sQLite.create({
      name: 'data.db',
      location: 'default'
    }).then((db:SQLiteObject)=>{  // add S to EXISTS
db.executeSql('CREATE TABLE IF NOT EXISTS employees(id INTEGER PRIMARY KEY , name TEXT , lname TEXT , date TEXT , salary INT)',{}).then(res=>{
  console.log("Done Successfully table ...");
}).catch(e => console.log(e));

db.executeSql('SELECT * FROM employees ORDER BY id DESC',{}).then(res=>{
  console.log("Done Successfully select ...");
  this.data = [];
  for (var i = 0; i < res.rows.length; i++) {
    this.data.push({
      id:res.rows.item(i).id,
      name:res.rows.item(i).name,
      lname:res.rows.item(i).lname,
      date:res.rows.item(i).date,
      salary:res.rows.item(i).salary
    })

  }
}).catch(e => console.log(e));
    })
  }



addEmployee(){
  this.navCtrl.push(AddemployeePage);
}

refresh(){
  this.getData();
}


editEmployee( id, name, lname,date, salary ){
  this.navCtrl.push(EditemployeePage,{
    id:id,
    name:name,
    lname:lname,
    date:date,
    salary:salary
  });
}


deleteEmployee(id){

  this.sQLite.create({
    name: 'data.db',
    location: 'default'
  })
    .then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM employees WHERE id=?', [id]) // remove TABLE
        .then(() => {
          console.log('DELETE Executed SQL');
          this.getData();
      }).catch(e => console.log(e));
 }).catch(e => console.log(e));

}





}
