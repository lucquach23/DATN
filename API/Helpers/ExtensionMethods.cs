using API.Models;
using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Helpers
{
    public static class ExtensionMethods
    {
        public static IEnumerable<Account> WithoutPasswords(this IEnumerable<Account> users) 
        {
            if (users == null) return null;

            return users.Select(x => x.WithoutPassword());
        }

        public static Account WithoutPassword(this Account user) 
        {
            if (user == null) return null;

            user.Password = null;
            return user;
        }
    }
}