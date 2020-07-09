let {Repository} = require('./solution.js');
let expect = require('chai').expect;

describe('Tests', function () {
    let repo;
    let props = {
        name: 'string',
        age: 'number',
        birthday: 'object'
    };

    beforeEach(function () {
        repo = new Repository(props);
    });

    describe('Test the constructor', function () {
        it('Should have correct property', function () {

            expect(() => repo = new Repository(props), "Instance creation failed, make sure you have submitted a class").to.not.throw();
            expect(repo).to.have.ownPropertyDescriptor('props', 'Property name is wrong!');
        });
    });

    describe('Test functions', function () {

        it('Should return no records when no entities are added', function () {
            let expectedCount = 0;
            let actualCount = repo.count;

            expect(expectedCount).to.equal(actualCount, 'Incorrect count');
        });

        it('Should return correct count after adding an entity', function () {
            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.add(entity); // Returns 0
            repo.add(entity);

            let actualCount = repo.count;
            let expectedCount = 2;

            expect(expectedCount).to.be.equal(actualCount, 'Incorrect count');
        });

        it('Should return correct count after deleting an entity', function () {
            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repo.add(entity);
            repo.del(0);

            let actualCount = repo.count;
            let expectedCount = 0;

            expect(expectedCount).to.be.equal(actualCount, 'Incorrect count');
        });

        it('Should return correct entity using GetById', function () {
            let firstEntity = {
                name: 'Gesho',
                age: 28,
                birthday: new Date(92, 0, 7)
            };
            let secondEntity = {
                name: 'Someone',
                age: 30,
                birthday: new Date(90, 0, 7)
            };

            repo.add(firstEntity);
            repo.add(secondEntity);

            let returnedEntity = repo.getId(1);

            expect(secondEntity).to.be.equal(returnedEntity, 'Returned entity is not same as expected');
        });

        it('Should throw an error when trying to delete non-existing entity', function () {

            let id = 25;
            expect(() => repo.del(id)).to.throw();
        });

        it('Should return correct id when adding correct entity', function () {
            let expectedId = 0;
            let actualId = repo.add({
                name: 'Me',
                age: 29,
                birthday: new Date(1991, 5, 5)
            });

            expect(expectedId).to.equal(actualId, 'Incorrect id');
        });

        it('Should throw an error when trying to add entity with non-existing property ', function () {
            expect(() => repo.add({
                name: 'Jack',
                lastName: 'Jackson',
                age: 22,
                birthday: new Date(1992, 3, 7)
            })).to.throw();
        });

        it('Should throw an error when trying to add entity with missing property', function () {
            expect(() => repo.add({
                name: 'Jack',
                age: 22
            })).to.throw();
        });

        it('Should throw an error when trying to add entity with wrong type', function () {
            expect(() => repo.add({
                name: 'Someone',
                age: 'invalid age',
                birthday: new Date(1995, 5, 2)
            })).to.throw();
        });

        it('Should throw an error when trying to update non-existing entity', function () {
            expect(() => repo.update(5, {
                name: 'Jack',
                age: 22,
                birthday: new Date(1998, 1, 7)
            })).to.throw();
        });

        it('Should throw an error when trying to update entity with missing property', function () {
            repo.add({
                name: 'Jack',
                age: 22,
                birthday: new Date(1998, 1, 7)
            });

            expect(() => repo.update(0, {
                name: 'Jack',
                age: 22,
            })).to.throw();
        });

        it('Should throw an error when trying to update entity with wrong type property', function () {
            repo.add({
                name: 'Jack',
                age: 22,
                birthday: new Date(1998, 1, 7)
            });

            expect(() => repo.update(0, {
                name: 'Jack',
                age: 22,
                birthday: 35
            })).to.throw();
        });

        it('Should throw an error when trying to get non-existing entity by id', function () {
            expect(() => repo.getId(21)).to.throw();
        });

        it('Should return correct value of name property when existing entity getting by id', function () {

            repo.add({
                name: 'Somebody',
                age: 22,
                birthday: new Date(1997, 5, 7)
            });
            repo.add({
                name: 'Somebody else',
                age: 23,
                birthday: new Date(1996, 5, 7)
            });

            repo.del(1);

            let expectedName = 'Somebody';
            let actualName = repo.getId(0).name;

            expect(expectedName).to.equal(actualName, 'Incorrect value');
        });

    });

});
