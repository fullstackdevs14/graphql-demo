import mongoose from 'mongoose';
import AuthorModel from './models/author';

const resolvers = {
  Query: {
    authors: (root, { age }) => {
      return AuthorModel.find({ age });
    },
    author: (root, {id}) => {
      return AuthorModel.findOne({ id });
    }
  },
  Mutation: {
    addAuthor: (root, {name, age, books}) => {
      const author = new AuthorModel({age, name, books});
      return author.save();
    },
    deleteAuthor: (root, { id }) => {
      return AuthorModel.findOneAndRemove({ id });
    },
    updateAuthor: (root, {id, name}) => {
      return AuthorModel.findOneAndUpdate({id}, {name});
    }
  }
}

export default resolvers;