---
schema: wang-person/v1
id: p_tkxnEVRAGY2FNrg3LkqDT4
status: active
merged_into: null
display_name: 王允善
cbdb_id: 342259
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mKJhGotqtkER6GWk7GA4LL
        subject_person_id: p_tkxnEVRAGY2FNrg3LkqDT4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允善，清人物。明清進士進士，籍贯濟寧直隸州，入仕進士。（中国历代人物传记资料库 CBDB 342259）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2id9ut7cOjDXXP4J2qKxp3
          claim_id: c_mKJhGotqtkER6GWk7GA4LL
          source_id: s_qs78A3dUrHcmpcBj1ZTEu6
          stance: supports
          locator: CBDB:342259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qs78A3dUrHcmpcBj1ZTEu6
            source_type: api_record
            title: 中国历代人物传记资料库：王允善（CBDB 342259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342259&o=json
            external_identifier: CBDB:342259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m175GaDbLuUQHUeJEyBcHL
        subject_person_id: p_tkxnEVRAGY2FNrg3LkqDT4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jshtZojTNHAbiMq7V4qti4
          claim_id: c_m175GaDbLuUQHUeJEyBcHL
          source_id: s_qs78A3dUrHcmpcBj1ZTEu6
          stance: supports
          locator: CBDB:342259
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4201-4300）｜历史性依据：CBDB 朝代 = 清
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

# 王允善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允善，清人物。明清進士進士，籍贯濟寧直隸州，入仕進士。（中国历代人物传记资料库 CBDB 342259） | accepted |
| name.primary | 王允善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允善（CBDB 342259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342259&o=json)
