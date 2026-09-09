---
schema: wang-person/v1
id: p_A9HBUiPheNuZXSzS6uKNGM
status: active
merged_into: null
display_name: 王重簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jBgnAnqeQzJXBgzSojTNbV
        subject_person_id: p_A9HBUiPheNuZXSzS6uKNGM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xqu71ChP292Kvj4WfAApxT
          claim_id: c_jBgnAnqeQzJXBgzSojTNbV
          source_id: s_TqJvxYK9r8o8ewpfaMB22K
          stance: supports
          locator: CBDB:185353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185353）
          source: &a1
            id: s_TqJvxYK9r8o8ewpfaMB22K
            source_type: api_record
            title: 中国历代人物传记资料库：王重簡（CBDB 185353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185353&o=json
            external_identifier: CBDB:185353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zSB85kXb35KoWpwQvxTVNA
        subject_person_id: p_A9HBUiPheNuZXSzS6uKNGM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 891年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gkXHkPnwT8ApjAWG7B4YPS
          claim_id: c_zSB85kXb35KoWpwQvxTVNA
          source_id: s_TqJvxYK9r8o8ewpfaMB22K
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
        id: c_Br4oxpE436gJbAvKge8hiu
        subject_person_id: p_A9HBUiPheNuZXSzS6uKNGM
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
        - id: cs_djA3M15bbm2EzWFDXcD34C
          claim_id: c_Br4oxpE436gJbAvKge8hiu
          source_id: s_TqJvxYK9r8o8ewpfaMB22K
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

# 王重簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重簡 | accepted |
| death.date | 891年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重簡（CBDB 185353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185353&o=json)
