---
schema: wang-person/v1
id: p_jaZWrMXs7odq4iD89tN98e
status: active
merged_into: null
display_name: 王輔周
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_23fcLyYA3442abB6ccCMEq
        subject_person_id: p_jaZWrMXs7odq4iD89tN98e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_36Fqm1KcCNDpg1oBmZJu3T
          claim_id: c_23fcLyYA3442abB6ccCMEq
          source_id: s_bRgx6F24sWycKcbWTuydpW
          stance: supports
          locator: CBDB:640371
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640371）
          source: &a1
            id: s_bRgx6F24sWycKcbWTuydpW
            source_type: api_record
            title: 中国历代人物传记资料库：王輔周（CBDB 640371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640371&o=json
            external_identifier: CBDB:640371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YZbrWQgBk6TV7GL4MHuKSG
        subject_person_id: p_jaZWrMXs7odq4iD89tN98e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔周，清人物。籍贯陽曲，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 640371）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qB2mkom8ljxIX_49WYqVya
          claim_id: c_YZbrWQgBk6TV7GL4MHuKSG
          source_id: s_bRgx6F24sWycKcbWTuydpW
          stance: supports
          locator: CBDB:640371
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

# 王輔周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔周 | accepted |
| bio.summary | 王輔周，清人物。籍贯陽曲，入仕監生，曾任司獄。（中国历代人物传记资料库 CBDB 640371） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔周（CBDB 640371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640371&o=json)
