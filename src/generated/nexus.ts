/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Course: prisma.Course;
  Mutation: {};
  Player: prisma.Player;
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  Course: { // field return type
    courseCode: string; // String!
    createdAt: any; // DateTime!
    defaultCredits: string; // String!
    description: string; // String!
    id: string; // String!
    name: string; // String!
    termsOffered: string; // String!
    updatedAt: any; // DateTime!
  }
  Mutation: { // field return type
    createPlayer: NexusGenRootTypes['Player']; // Player!
    updatePlayer: NexusGenRootTypes['Player']; // Player!
  }
  Player: { // field return type
    createdAt: any; // DateTime!
    currentTeam: string; // String!
    dob: string; // String!
    id: string; // String!
    jerseyNumber: string; // String!
    name: string; // String!
    nationality: string; // String!
    position: string; // String!
    updatedAt: any; // DateTime!
  }
  Query: { // field return type
    Player: NexusGenRootTypes['Player'] | null; // Player
    Players: NexusGenRootTypes['Player'][]; // [Player!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPlayer: { // args
      currentTeam?: string | null; // String
      dob?: string | null; // String
      jerseyNumber?: string | null; // String
      name: string; // String!
      nationality?: string | null; // String
      position: string; // String!
    }
    updatePlayer: { // args
      currentTeam?: string | null; // String
      id?: string | null; // ID
      jerseyNumber?: string | null; // String
      name?: string | null; // String
      position?: string | null; // String
    }
  }
  Query: {
    Player: { // args
      id?: string | null; // ID
    }
    Players: { // args
      searchString?: string | null; // String
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Course" | "Mutation" | "Player" | "Query";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}