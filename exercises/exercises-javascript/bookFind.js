const booksByCategory = [
  {
    category: 'Pshychology',
    books: [
      {
        title: "The Seminar, Book I. Freud's Papers on Technique",
        author: 'Jacques Lacan'
      },
      {
        title: 'The Interpretation of Dreams',
        author: 'Sigmund Freud'
      },
      {
        title: 'The Psychology of Intelligence',
        author: 'Jean Piaget'
      }
    ]
  },
  {
    category: 'Discrete Mathematics',
    books: [
      {
        title: 'Discrete Mathematics',
        author: 'Norman L. Biggs'
      },
      {
        title: 'Discrete Mathematics With Applications',
        author: 'Susanna S. Epp'
      },
      {
        title: 'The Art of Computer Programming',
        author: 'Donald E. Knuth'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

console.log('Total of categories:', totalCategories)
for (let category of booksByCategory) {
  console.log('Total of books by category: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log('Total of authors:', authors.length)
}

countAuthors()

function booksOfAuthor(author) {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }

    console.log(`Boooks of ${author}: ${books.join(', ')}`)
  }
}

booksOfAuthor('Sigmund Freud')
