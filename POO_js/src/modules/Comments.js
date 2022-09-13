class Comments {
  constructor({
    content,
    studentName,
    estudentRole = 'Student'
  }) {
    this.content = content
    this.studentName = studentName
    this.estudentRole = estudentRole
    this.likes = 0
  }

  publicar() {
    console.log(`${this.studentName} (${this.studnetRole})`)
    console.log(`${this.likes} likes`)
    console.log(`${this.content}`)
  }
}

export {Comments}