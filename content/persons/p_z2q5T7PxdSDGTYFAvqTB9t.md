---
schema: wang-person/v1
id: p_z2q5T7PxdSDGTYFAvqTB9t
status: active
merged_into: null
display_name: 王思
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qa1zL3ThzEwtgvcYSU2V6F
        subject_person_id: p_z2q5T7PxdSDGTYFAvqTB9t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FCxwbHvLAR49K9h396VgwC
          claim_id: c_qa1zL3ThzEwtgvcYSU2V6F
          source_id: s_6ya7D9vRH6LcvjzEtK9GAe
          stance: supports
          locator: CBDB:156619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156619）
          source: &a1
            id: s_6ya7D9vRH6LcvjzEtK9GAe
            source_type: api_record
            title: 中国历代人物传记资料库：王思（CBDB 156619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156619&o=json
            external_identifier: CBDB:156619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j5KxWGRQDEhyqunumBsLNA
        subject_person_id: p_z2q5T7PxdSDGTYFAvqTB9t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思，唐人物。籍贯幽都，曾任縣尉。（中国历代人物传记资料库 CBDB 156619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6P8CCPoKzs-MwA3bDsgNJU
          claim_id: c_j5KxWGRQDEhyqunumBsLNA
          source_id: s_6ya7D9vRH6LcvjzEtK9GAe
          stance: supports
          locator: CBDB:156619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jaK0DyBX706eZ8OPe7tAmu
        subject_person_id: p_z2q5T7PxdSDGTYFAvqTB9t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eRGyGdFvPg7HFBQPrRQewg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7L2dylTZCIqW9Kc8d2v52I
          claim_id: c_jaK0DyBX706eZ8OPe7tAmu
          source_id: s_YENVnLt7xAPoTrPBjdBq4u
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YENVnLt7xAPoTrPBjdBq4u
            source_type: api_record
            title: 中国历代人物传记资料库：王翫（CBDB 190025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190025&o=json
            external_identifier: CBDB:190025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eRGyGdFvPg7HFBQPrRQewg
        status: active
        display_name: 王翫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_OU3rD-lUqJWR2Ybg9IhUPL
        subject_person_id: p_z2q5T7PxdSDGTYFAvqTB9t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RYAhUs1ATN2FqSqLmBj15y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nVx2QcGftCkymyBU3UKc5x
          claim_id: c_OU3rD-lUqJWR2Ybg9IhUPL
          source_id: s_6ya7D9vRH6LcvjzEtK9GAe
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 60：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RYAhUs1ATN2FqSqLmBj15y
        status: active
        display_name: 王叔原
        merged_into_person_id: null
  other: []
---

# 王思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思 | accepted |
| bio.summary | 王思，唐人物。籍贯幽都，曾任縣尉。（中国历代人物传记资料库 CBDB 156619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eRGyGdFvPg7HFBQPrRQewg | 王翫 | accepted |
| descendants | p_RYAhUs1ATN2FqSqLmBj15y | 王叔原 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思（CBDB 156619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156619&o=json)
- [中国历代人物传记资料库：王翫（CBDB 190025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190025&o=json)
