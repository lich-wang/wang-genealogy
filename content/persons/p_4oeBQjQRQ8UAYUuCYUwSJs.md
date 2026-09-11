---
schema: wang-person/v1
id: p_4oeBQjQRQ8UAYUuCYUwSJs
status: active
merged_into: null
display_name: 王余淮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WHDEWVyCU9GExk38nmmmPa
        subject_person_id: p_4oeBQjQRQ8UAYUuCYUwSJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王余淮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kNr6R4tn4H99TH9eyHKrDL
          claim_id: c_WHDEWVyCU9GExk38nmmmPa
          source_id: s_HQfzNdo7zgF5qPPY4uKDVf
          stance: supports
          locator: CBDB:635994
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635994）
          source: &a1
            id: s_HQfzNdo7zgF5qPPY4uKDVf
            source_type: api_record
            title: 中国历代人物传记资料库：王余淮（CBDB 635994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635994&o=json
            external_identifier: CBDB:635994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Shs4KdagzsU9buJdqfGF18
        subject_person_id: p_4oeBQjQRQ8UAYUuCYUwSJs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王余淮，清人物。籍贯富順，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 635994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5bQfgisImuzGPi1EAeB5yO
          claim_id: c_Shs4KdagzsU9buJdqfGF18
          source_id: s_HQfzNdo7zgF5qPPY4uKDVf
          stance: supports
          locator: CBDB:635994
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

# 王余淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王余淮 | accepted |
| bio.summary | 王余淮，清人物。籍贯富順，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 635994） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王余淮（CBDB 635994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635994&o=json)
