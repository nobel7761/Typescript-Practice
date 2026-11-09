const multiplyValue = (value: number, multiplier?: number): number => {
  return multiplier !== undefined ? value * multiplier : value * 2;
};

const processInput = (value: string | number | boolean): string | number => {
  return typeof value === "string"
    ? value.trim().toLowerCase()
    : typeof value === "number"
      ? value * 10
      : typeof value === "boolean"
        ? value
          ? "Active"
          : "Inactive"
        : "Invalid input";
};

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce<T[]>(
    (combined: T[], current: T[]): T[] => [...combined, ...current],
    [],
  );
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item: T): T[K] => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise(
    (
      resolve: (value: string) => void,
      reject: (reason: Error) => void,
    ): void => {
      if (age >= 18) {
        setTimeout((): void => resolve("Access Granted"), 1000);
      } else {
        reject(new Error("Access Denied: Must be 18 or older"));
      }
    },
  );
};
