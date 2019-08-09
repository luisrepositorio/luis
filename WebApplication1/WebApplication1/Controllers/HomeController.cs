using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;
using System.Runtime.Caching;
namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {

        ObjectCache cache = MemoryCache.Default;
        List<Customer> customers;
        public HomeController()
        {
            customers = cache["customers"] as List<Customer>;
            if (customers == null)
            {
                customers = new List<Customer>();
            }
        }
        public void SaveCache()
        {
            cache["customers"] = customers;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        //public ActionResult ViewCustome(string Name, string Telephone)
        //{
        //    Customer customer = new Customer();
        //    customer.Id = Guid.NewGuid().ToString();
        //    customer.Name = Name;
        //    customer.Telephone = Telephone;
        //    return View(customer);
        //}
        public ActionResult AddCustome()
        {
           
            return View();
        }
        [HttpPost]
        public ActionResult AddCustome(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return View(customer);
            }
            customer.Id = Guid.NewGuid().ToString();
            customers.Add(customer);
            SaveCache();
            return RedirectToAction("CustomerList");
        }
        public ActionResult ViewCustome(String id)
        {
            Customer customer = customers.FirstOrDefault(c => c.Id == id);
            if (customer == null)
            {
                return HttpNotFound();
            }
            else { return View(customer); }
            
        }
        public ActionResult EditCustome(String id)
        {
            Customer customer = customers.FirstOrDefault(c => c.Id == id);
            if (customer == null)
            {
                return HttpNotFound();
            }
            else { return View(customer); }

        }

        [HttpPost]
        public ActionResult EditCustome(Customer customer, String id)
        {
            var customerToEdit = customers.FirstOrDefault(c => c.Id == id);
            if (customer == null)
            {
                return HttpNotFound();
            }
            else
            {
                customerToEdit.Name = customer.Name;
                customerToEdit.Telephone = customer.Telephone;
                SaveCache();
                return RedirectToAction("CustomerList");
            }

        }
        public ActionResult DeleteCustomer(String Id)
        {
            Customer customer = customers.FirstOrDefault(c => c.Id == Id);
            if (customer == null)
            {
                return HttpNotFound();
            }
            else { return View(customer); }

        }

        [HttpPost]
        [ActionName("DeleteCustomer")]
        public ActionResult ConfirmDeleteCustome(String Id)
        {
            Customer customer = customers.FirstOrDefault(c => c.Id == Id);
            if (customer == null)
            {
                return HttpNotFound();
            }
            else
            {
                customers.Remove(customer);
                return RedirectToAction("CustomerList");
            }

        }
        public ActionResult CustomerList()
        {
            //List<Customer> customers = new List<Customer>();
            //customers.Add(new Customer { Name = "Luis Martines", Telephone = "829-878-2305" });
            //customers.Add(new Customer { Name = "Katherine Cruz", Telephone = "829-585-2305" });
            //customers.Add(new Customer { Name = "Vinicio", Telephone = "829-256-2305" });

            return View(customers);
        }
        public PartialViewResult Basket()
        {
            BasketViewModel model = new BasketViewModel();
            model.BasketCount = 5;
            model.BasketTotal = "$100";
            return PartialView(model);
        }
    }
}