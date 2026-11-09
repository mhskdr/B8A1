const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    multiplier = 2;
  }
  return value * multiplier;
};


type Input = string | number | boolean;
type Output = string | number;

const processValue = (value: Input): Output => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? "Active" : "Inactive";
  } else {
    throw new Error("Invalid type");
  }
};


type Coordinate = readonly [number, number, string];

const formatCoordinate = (coordinate: Coordinate): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  course: Course[],
  minStudents: number,
): Course[] => {
  return course.filter((obj) => {
    return obj.isPublished === true && obj.students >= minStudents;
  });
};