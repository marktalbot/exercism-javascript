class School {

    constructor() {
        this.schoolRoster = {};
    }

    add(name, grade) {
        if (!Array.isArray(this.schoolRoster[grade])) {
            this.schoolRoster[grade] = [];
        }
        this.schoolRoster[grade].push(name);
        this.sortRoster(grade);
    }

    sortRoster(grade) {
        this.schoolRoster[grade].sort((a, b) => a > b);
    }

    roster() {
        return this.schoolRoster;
    }

    grade(grade) {
        if (!this.schoolRoster[grade]) {
            return [];
        }
        return this.schoolRoster[grade].sort((a, b) => a > b);
    }
}

module.exports = School;