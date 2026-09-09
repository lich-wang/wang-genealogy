---
schema: wang-person/v1
id: p_DPm6Ve4vJDpinaKhhNYG9R
status: active
merged_into: null
display_name: 王少華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_13Jk3cu3ipXTLvpP6AJLxo
        subject_person_id: p_DPm6Ve4vJDpinaKhhNYG9R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9v6Jga88E34CWEC4njCNkp
          claim_id: c_13Jk3cu3ipXTLvpP6AJLxo
          source_id: s_f2Z26d45CBd7daqKaVvXXB
          stance: supports
          locator: CBDB:155636
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155636）
          source: &a1
            id: s_f2Z26d45CBd7daqKaVvXXB
            source_type: api_record
            title: 中国历代人物传记资料库：王少華（CBDB 155636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155636&o=json
            external_identifier: CBDB:155636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HhZNUjAwVgr6bDBeBydUsu
        subject_person_id: p_DPm6Ve4vJDpinaKhhNYG9R
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
        - id: cs_TfELsR5F3ybuX5STA3K9Uj
          claim_id: c_HhZNUjAwVgr6bDBeBydUsu
          source_id: s_f2Z26d45CBd7daqKaVvXXB
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

# 王少華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王少華 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王少華（CBDB 155636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155636&o=json)
