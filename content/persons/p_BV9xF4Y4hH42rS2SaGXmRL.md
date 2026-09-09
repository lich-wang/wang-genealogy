---
schema: wang-person/v1
id: p_BV9xF4Y4hH42rS2SaGXmRL
status: active
merged_into: null
display_name: 王宗本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFsSzZGjRAb3D6LayCN4AU
        subject_person_id: p_BV9xF4Y4hH42rS2SaGXmRL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bBV7Pcd1AaKVzeR9dSTuF8
          claim_id: c_JFsSzZGjRAb3D6LayCN4AU
          source_id: s_kSo429PRRxtA8h3kWbAM2u
          stance: supports
          locator: CBDB:383310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383310）
          source: &a1
            id: s_kSo429PRRxtA8h3kWbAM2u
            source_type: api_record
            title: 中国历代人物传记资料库：王宗本（CBDB 383310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383310&o=json
            external_identifier: CBDB:383310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_prnfjAvSDzVNR2q4GZMEC8
        subject_person_id: p_BV9xF4Y4hH42rS2SaGXmRL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qL6XU4pnzAyBMReMYGpBvr
          claim_id: c_prnfjAvSDzVNR2q4GZMEC8
          source_id: s_kSo429PRRxtA8h3kWbAM2u
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王宗本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗本 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗本（CBDB 383310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383310&o=json)
