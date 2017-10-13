import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite,  SQLiteObject  } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddemployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addemployee',
  templateUrl: 'addemployee.html',
})
export class AddemployeePage {

  data = {
    name :'',
    lname :'',
    salary :0,
    date :''
}


  constructor(public navCtrl: NavController, public navParams: NavParams,public sQLite:SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddemployeePage');
  }



  saveData(){
    this.sQLite.create({
      name: 'data.db',
      location: 'default'
    }).then((db:SQLiteObject)=>{
db.executeSql('INSERT INTO employees VALUES(NULL ,?,?,?,? )',[  //add VALUES
  this.data.name,
  this.data.lname,
  this.data.date,
  this.data.salary


]).then(res=>{
  console.log("Done Successfully insert ...");
  this.navCtrl.push(HomePage);  /// add home page
}).catch(e => console.log(e));


    })
  }













}
