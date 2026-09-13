---
schema: wang-person/v1
id: p_UyJLRZpx82C1wxcr6EdBou
status: active
merged_into: null
display_name: 王文靜
cbdb_id: 101106
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QLMDYpBDL6uATeBVEasEgn
        subject_person_id: p_UyJLRZpx82C1wxcr6EdBou
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文靜，元人物。籍贯宜興州，身份为隱居不仕、拒絕出仕。（中国历代人物传记资料库 CBDB 101106）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G2oH4w9GwXfXWNMSnVevFJ
          claim_id: c_QLMDYpBDL6uATeBVEasEgn
          source_id: s_WBMChsPMd4Lq24CRggdxWW
          stance: supports
          locator: CBDB:101106
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WBMChsPMd4Lq24CRggdxWW
            source_type: api_record
            title: 中国历代人物传记资料库：王文靜（CBDB 101106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101106&o=json
            external_identifier: CBDB:101106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qBEdwVBeJBnygndpQ4kB1F
        subject_person_id: p_UyJLRZpx82C1wxcr6EdBou
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文靜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9MBfMH5yJ67MBA6ghGgLPP
          claim_id: c_qBEdwVBeJBnygndpQ4kB1F
          source_id: s_WBMChsPMd4Lq24CRggdxWW
          stance: supports
          locator: CBDB:101106
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王文靜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文靜，元人物。籍贯宜興州，身份为隱居不仕、拒絕出仕。（中国历代人物传记资料库 CBDB 101106） | accepted |
| name.primary | 王文靜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文靜（CBDB 101106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101106&o=json)
