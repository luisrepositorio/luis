﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Caching;
using MyShop.Core.Models;
namespace MyShop.DataAccess.InMemory
{
  public  class InMemoryRepository<T> where T : BaseEntity
    {
        ObjectCache cache = MemoryCache.Default;
        List<T> items;
        string ClassName;
        public InMemoryRepository()
        {
            ClassName = typeof(T).Name;
            items = cache[ClassName] as List<T>;
            if (items == null)
            {
                items = new List<T>();
            }
        }
        public void Commit()
        {
            cache[ClassName] = items;
        }
        public void Insert(T t)
        {
            items.Add(t);
        }

        public void Update(T t)
        {
            T tUpdate = items.Find(i => i.Id == t.Id);
            if (tUpdate != null)
            {
                tUpdate = t;
            }
            else
            {
                throw new Exception(ClassName +" no encontrado");
            }

        }
        public T Find(string Id)
        {
            T t = items.Find(i => i.Id == Id);
            if (t != null)
            {
                return t;
            }
            else
            {
                throw new Exception(ClassName + " no encontrado");
            }
        }
        public IQueryable<T>Collection()
        {
            return items.AsQueryable();
        }
        public void Delete(string Id)
        {
            T tDelete = items.Find(i => i.Id == Id);
            if (tDelete != null)
            {
                items.Remove(tDelete);
            }
            else
            {
                throw new Exception(ClassName + " no encontrado");
            }
        }
    }
}
