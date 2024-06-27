export default class HolbertonCourse {
  constructor(name, length, students) {
    if ((typeof (name) === 'string') && (typeof (length) === 'number') && Array.isArray(students) && students.every((item) => typeof item === 'string')) {
      this._name = name;
      this._length = length;
      this._students = students;
    } else {
      throw new TypeError();
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this.students;
  }

  set name(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError();
    }
  }

  set length(length) {
    if (typeof (length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError();
    }
  }

  set students(students) {
    if (Array.isArray(students) && this.students.every((item) => typeof (item) === 'string')) {
      this._students = students;
    } else {
      throw new TypeError();
    }
  }
}
