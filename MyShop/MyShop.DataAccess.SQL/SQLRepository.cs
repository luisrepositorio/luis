using MyShop.Core.Contracts;
using MyShop.Core.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyShop.DataAccess.SQL
{
    public class SQLRepository<T> : IRepository<T> where T : BaseEntity
    {
        internal DataContext Context;
        internal DbSet<T> dbSet;
        //cmentario
        public SQLRepository(DataContext context)
        {
            Context = context;
            dbSet = Context.Set<T>();
        }
        IQueryable<T> IRepository<T>.Collection()
        {
            return dbSet;
        }

        void IRepository<T>.Commit()
        {
            Context.SaveChanges();
        }

        void IRepository<T>.Delete(string Id)
        {
            var t = dbSet.Find(Id);
            if (Context.Entry(t).State == EntityState.Detached)
                dbSet.Attach(t);
            dbSet.Remove(t);
        }

        T IRepository<T>.Find(string Id)
        {
            return dbSet.Find(Id);
        }

        void IRepository<T>.Insert(T t)
        {
            dbSet.Add(t);
        }

        void IRepository<T>.Update(T t)
        {
            dbSet.Attach(t);
            Context.Entry(t).State = EntityState.Modified;
        }
    }
}
