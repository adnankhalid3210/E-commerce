import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  data = [
    {'title': 'tshirt', "Rs": "300rs", "image": "https://www.thewarehouse.pk/image/cache/catalog/TWH/apron/In%20food%20we%20trust%20printed%20apron-600x600.jpg" },
    {'title': 'shoes', "Rs": "200rs", "image": "https://www.thewarehouse.pk/image/cache/catalog/full%20backpacks%20pics/1485944918102-280x319.jpg" },
    {'title': 'hoddie', "Rs": "700rs", "image": "https://www.thewarehouse.pk/image/cache/catalog/kids%20hoodie/animals%20face%20pattern%20kids%20hoodie%20_1_-280x319.jpg" }
  ]
showItem;
productType;
  constructor(private active: ActivatedRoute) { }

  ngOnInit() {


this.active.paramMap
.subscribe(adnan => {
  this.productType = adnan.get('name')
})
  }

  pageHeading = "Ayaz"
  
}
