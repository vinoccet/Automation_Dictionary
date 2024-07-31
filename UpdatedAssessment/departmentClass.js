"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var questions_1 = require("./questions");
var Department = /** @class */ (function () {
    function Department() {
    }
    Department.prototype.getDepartmentNameById = function (deptId) {
        return questions_1.department.filter(function (dept) { return dept.id === deptId; }).map(function (dep) { return dep.name; })[0];
    };
    return Department;
}());
exports.Department = Department;
