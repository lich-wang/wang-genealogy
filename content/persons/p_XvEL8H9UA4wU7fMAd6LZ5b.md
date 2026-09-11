---
schema: wang-person/v1
id: p_XvEL8H9UA4wU7fMAd6LZ5b
status: active
merged_into: null
display_name: 王居擏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_skp7FTQQnz2Wmns9VKEkEa
        subject_person_id: p_XvEL8H9UA4wU7fMAd6LZ5b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居擏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wd9736HkHdioi7WNxt7X6A
          claim_id: c_skp7FTQQnz2Wmns9VKEkEa
          source_id: s_QsMsx7vUm1uVLCx9QpgfPv
          stance: supports
          locator: CBDB:637305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637305）
          source: &a1
            id: s_QsMsx7vUm1uVLCx9QpgfPv
            source_type: api_record
            title: 中国历代人物传记资料库：王居擏（CBDB 637305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637305&o=json
            external_identifier: CBDB:637305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_42pKhXQ7sg5Qms4WFeWbek
        subject_person_id: p_XvEL8H9UA4wU7fMAd6LZ5b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居擏，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637305）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5d9ceOW8JKfQUa6KTIkubs
          claim_id: c_42pKhXQ7sg5Qms4WFeWbek
          source_id: s_QsMsx7vUm1uVLCx9QpgfPv
          stance: supports
          locator: CBDB:637305
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

# 王居擏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居擏 | accepted |
| bio.summary | 王居擏，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637305） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居擏（CBDB 637305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637305&o=json)
