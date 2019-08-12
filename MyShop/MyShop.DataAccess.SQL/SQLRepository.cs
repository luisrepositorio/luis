using MyShop.Core.Contracts;
using MyShop.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyShop.DataAccess.SQL
{
    public class SQLRepository<T> : IRepository<T> where T : BaseEntity
    {
        IQueryable<T> IRepository<T>.Collection()
        {
            throw new NotImplementedException();
        }

        void IRepository<T>.Commit()
        {
            throw new NotImplementedException();
        }

        void IRepository<T>.Delete(string Id)
        {
            throw new NotImplementedException();
        }

        T IRepository<T>.Find(string Id)
        {
            throw new NotImplementedException();
        }

        void IRepository<T>.Insert(T t)
        {
            throw new NotImplementedException();
        }

        void IRepository<T>.Update(T t)
        {
            throw new NotImplementedException();
        }
    }
}
