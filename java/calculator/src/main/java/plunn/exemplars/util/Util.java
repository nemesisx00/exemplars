package plunn.exemplars.util;

public class Util
{
	public static final String NewLine = "\r\n";
	public static final String Tab = "\t";
	
	private static final String PropertyOsName = "os.name";
	private static final String Windows = "Windows";
	
	private static String OsName = null;
	
	public static String getOsName()
	{
		if(OsName == null)
			OsName = System.getProperty(PropertyOsName);
		
		return OsName;
	}
	
	public static boolean isWindows()
	{
		return getOsName().startsWith(Windows);
	}
}
