import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodDataType } from '../food-data-type';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  public items: FoodDataType[] = []
  public food: any = {}
  public id!: number
  // For Favorite Icon Color Change 
  public favClass = {}



  constructor(private fs: FoodService, 
              private route: ActivatedRoute, 
              private cs: CartService,
              private router: Router) {}


  ngOnInit(): void {
    // We are assigning params id value to local variable id
    this.route.params.subscribe(params => this.id = params['id'])
    
    // Food Service
    this.fs.getAll().subscribe(data => {
      this.items = data.filter((item) => item.id == this.id)      
    })

  }

  onFavClick(){
    this.items.filter(item => {
      if(item.favorite == false) {
        item.favorite = true
        this.favClass = {
          'favorite': false,
          'favRed': true
        }
        let audio = new Audio()
        audio.src = '/assets/Sounds/mixkit-soap-bubble-sound-2925.wav'
        audio.load()
        audio.play()
      } else {
        item.favorite = false
        this.favClass = {
          'favorite': true,
          'favRed': false
        }
      }
    })
  }

  addToCart() {
    // Cart Service
    this.items.filter(item => this.food = item)
    this.cs.addToCart(this.food)

    
    this.router.navigateByUrl('/cart-page')
  }
}
