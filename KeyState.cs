using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Forms;

namespace Bird_Brain
{
    public class KeyState
    {
        [DllImport("user32.dll")]
        public static extern short GetAsyncKeyState(Keys key);

        public int GetKeyState(Keys key)
        {
            return GetAsyncKeyState(key);
        }
    }
}
