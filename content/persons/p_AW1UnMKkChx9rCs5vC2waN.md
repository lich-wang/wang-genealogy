---
schema: wang-person/v1
id: p_AW1UnMKkChx9rCs5vC2waN
status: active
merged_into: null
display_name: 王山
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L9nQzEaKRLWtZJvTzhVxvN
        subject_person_id: p_AW1UnMKkChx9rCs5vC2waN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ps72aymKTobYLuakzHDJES
          claim_id: c_L9nQzEaKRLWtZJvTzhVxvN
          source_id: s_KpQFVY49WMETLCJXp2JEBG
          stance: supports
          locator: CBDB:191689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191689）
          source: &a1
            id: s_KpQFVY49WMETLCJXp2JEBG
            source_type: api_record
            title: 中国历代人物传记资料库：王山（CBDB 191689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191689&o=json
            external_identifier: CBDB:191689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.373Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZJtAayjDEcuDdcHqH4Jgog
        subject_person_id: p_AW1UnMKkChx9rCs5vC2waN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J1Rb5r8e8VbPzX9STsWYDs
          claim_id: c_ZJtAayjDEcuDdcHqH4Jgog
          source_id: s_KpQFVY49WMETLCJXp2JEBG
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
        id: c_i6Dway8Mz2mcPMiXfU9pN1
        subject_person_id: p_AW1UnMKkChx9rCs5vC2waN
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
        - id: cs_izpezosqv6SS5iu4C2RDva
          claim_id: c_i6Dway8Mz2mcPMiXfU9pN1
          source_id: s_KpQFVY49WMETLCJXp2JEBG
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

# 王山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王山 | accepted |
| death.date | 859年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王山（CBDB 191689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191689&o=json)
