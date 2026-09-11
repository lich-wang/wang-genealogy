---
schema: wang-person/v1
id: p_U2j92rK9ZZbG8db2sCM64p
status: active
merged_into: null
display_name: 王績康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vn769hUd4WQpFV6EKKUtaK
        subject_person_id: p_U2j92rK9ZZbG8db2sCM64p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_15vAa9rzB8sZq8rj9DyYNz
          claim_id: c_vn769hUd4WQpFV6EKKUtaK
          source_id: s_eM4NiAJ5J5wnjgNLPcmPa7
          stance: supports
          locator: CBDB:639854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639854）
          source: &a1
            id: s_eM4NiAJ5J5wnjgNLPcmPa7
            source_type: api_record
            title: 中国历代人物传记资料库：王績康（CBDB 639854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639854&o=json
            external_identifier: CBDB:639854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FqiR4yJPcgArC5s1Zms9aA
        subject_person_id: p_U2j92rK9ZZbG8db2sCM64p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績康，清人物。籍贯貞豐州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XCQbjm2axAmWmeMOISkW6O
          claim_id: c_FqiR4yJPcgArC5s1Zms9aA
          source_id: s_eM4NiAJ5J5wnjgNLPcmPa7
          stance: supports
          locator: CBDB:639854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王績康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績康 | accepted |
| bio.summary | 王績康，清人物。籍贯貞豐州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 639854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王績康（CBDB 639854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639854&o=json)
