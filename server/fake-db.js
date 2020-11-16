const Product = require('./model/product')

class FakeDb{
  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'サンプル文章 サンプル文章 サンプル文章 サンプル文章 サンプル文章 サンプル文章 ',
        headingtext3: 'Duis mollis, etc non commondo lectus,,,,,'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'サンプル文章 サンプル文章 サンプル文章 サンプル文章 サンプル文章 サンプル文章 ',
        headingtext3: 'Duis mollis, etc non commondo lectus,,,,,'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'サンプル文章 サンプル文章 サンプル文章 サンプル文章 サンプル文章 サンプル文章 ',
        headingtext3: 'Duis mollis, etc non commondo lectus,,,,,'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 999,
        description: '',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'サンプル文章 サンプル文章 サンプル文章 サンプル文章 サンプル文章 サンプル文章 ',
        headingtext3: 'Duis mollis, etc non commondo lectus,,,,,'
      }
    ]
  }

  async initDb(){
    await this.cleanDb()
    this.pushProductToDb()
  }

  async cleanDb(){
    await Product.deleteMany({})
  }

  pushProductToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb(){
    this.pushProductToDb()
  }
}

module.exports = FakeDb
