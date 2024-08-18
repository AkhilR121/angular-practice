import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { FoodDataType } from '../food-data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public errMsg:string = ''
  public items:FoodDataType[] = []
  // public tag:string = ''
  public tagItems: any = []
  public searchItem:any = ''

  // To display the "Items not Found"
  public object:any = {
    "text-danger": true
  }

  constructor(private foodService: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foodService.getAll().subscribe(dataItems => {
          this.items = dataItems.filter(item => item.itemName.toLowerCase().includes(params['searchItem'].toLowerCase()))

          // Not Available Message when we searh for 
          if (this.items.length == 0) {
            this.errMsg = `Sorry, ${params['searchItem']} item is Not Available`

            // After 6 seconds "Item not available" disappear
            setTimeout(() => {
              this.object = {
                "displayNone": true
              }
            }, 6000);
          }
        })
      } else if(params['tag']) {          
        this.foodService.getAll().subscribe(data => {
          if (params['tag'] == 'All') {
            console.log("If Tag Items",data)
            this.items = data
          } else {
            data.filter(item => {
              item.tags?.forEach(tag => {
                if(tag.toLowerCase() == params['tag'].toLowerCase()){
                  this.items.push(item)
                }
              })
            })
          }
        })
      }
       else {
          this.foodService.getAll().subscribe(data => { this.items = data })
      }
    })


  }


}
