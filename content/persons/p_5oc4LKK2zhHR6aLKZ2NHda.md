---
schema: wang-person/v1
id: p_5oc4LKK2zhHR6aLKZ2NHda
status: active
merged_into: null
display_name: 王弁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zBV5Q1KnDWkzdvSqNbQKcy
        subject_person_id: p_5oc4LKK2zhHR6aLKZ2NHda
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rgZwZ4XePX3G1oCMHobmQK
          claim_id: c_zBV5Q1KnDWkzdvSqNbQKcy
          source_id: s_VbSvo5Fy8vbXqsyxoz1gPn
          stance: supports
          locator: CBDB:191417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191417）
          source: &a1
            id: s_VbSvo5Fy8vbXqsyxoz1gPn
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 191417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191417&o=json
            external_identifier: CBDB:191417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EYRbhHcV937iN1oJPdpkmr
        subject_person_id: p_5oc4LKK2zhHR6aLKZ2NHda
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 822年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dcrxTbbN1QBV2yBDsMCWbi
          claim_id: c_EYRbhHcV937iN1oJPdpkmr
          source_id: s_VbSvo5Fy8vbXqsyxoz1gPn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ft9rJ5GaNqsQ49WrMqVc48
        subject_person_id: p_5oc4LKK2zhHR6aLKZ2NHda
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
        - id: cs_MF6Q1ura24uD21CD1cncLZ
          claim_id: c_ft9rJ5GaNqsQ49WrMqVc48
          source_id: s_VbSvo5Fy8vbXqsyxoz1gPn
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

# 王弁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弁 | accepted |
| death.date | 822年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 191417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191417&o=json)
