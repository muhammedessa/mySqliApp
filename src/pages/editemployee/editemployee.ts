import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite,  SQLiteObject  } from '@ionic-native/sqlite';

/**
 * Generated class for the EditemployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editemployee',
  templateUrl: 'editemployee.html',
})
export class EditemployeePage {

  data = {
    id:0,
    name :'',
    lname :'',
    salary :0,
    date :''
}



  constructor(public navCtrl: NavController, public navParams: NavParams,public sQLite:SQLite) {

    this.data.id =  navParams.get('id') ;  //remove this
    this.data.name =  navParams.get('name') ;
    this.data.lname =  navParams.get('lname') ;
    this.data.salary =  parseInt(navParams.get('salary')) ;
    this.data.date =  navParams.get('date') ;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditemployeePage');
  }




update(){
  this.sQLite.create({
    name: 'data.db',
    location: 'default'
  }).then((db:SQLiteObject)=>{
    db.executeSql('UPDATE employees set name=?,lname=?,date=?,salary=? WHERE id=?',[  //remove )
      this.data.name,
      this.data.lname,
      this.data.date,
      this.data.salary ,
      this.data.id
    ]).then(res=>{
      console.log("Update Done Successfully   ...");
      this.navCtrl.pop();
      }).catch(e => console.log(e));
    })  // added ) to close then

}


}
