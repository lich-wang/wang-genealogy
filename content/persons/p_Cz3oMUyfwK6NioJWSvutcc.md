---
schema: wang-person/v1
id: p_Cz3oMUyfwK6NioJWSvutcc
status: active
merged_into: null
display_name: 王翠翹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MDGxL3wqTuvCBUJifzQMsx
        subject_person_id: p_Cz3oMUyfwK6NioJWSvutcc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翠翹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ruyNFN7R4sUjLnYG7ReaS3
          claim_id: c_MDGxL3wqTuvCBUJifzQMsx
          source_id: s_PR1Dz3tsarXmaAKuP4pHhG
          stance: supports
          locator: CBDB:566448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566448）
          source: &a1
            id: s_PR1Dz3tsarXmaAKuP4pHhG
            source_type: api_record
            title: 中国历代人物传记资料库：王翠翹（CBDB 566448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566448&o=json
            external_identifier: CBDB:566448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.588Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ww2YrjmQ75qFdHepGsy6ZH
        subject_person_id: p_Cz3oMUyfwK6NioJWSvutcc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翠翹，明人物。籍贯南京。（中国历代人物传记资料库 CBDB 566448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hoW4JmQ-3Y5LvOGh-4K1oL
          claim_id: c_ww2YrjmQ75qFdHepGsy6ZH
          source_id: s_PR1Dz3tsarXmaAKuP4pHhG
          stance: supports
          locator: CBDB:566448
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

# 王翠翹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翠翹 | accepted |
| bio.summary | 王翠翹，明人物。籍贯南京。（中国历代人物传记资料库 CBDB 566448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翠翹（CBDB 566448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566448&o=json)
