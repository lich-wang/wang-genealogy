---
schema: wang-person/v1
id: p_VVcj7dvvnrXKLMnUjUkCs5
status: active
merged_into: null
display_name: 王慱古
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5v4fHKtuF4uYgBQrCd8dqU
        subject_person_id: p_VVcj7dvvnrXKLMnUjUkCs5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慱古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F47GMQNqGjV55RokZwj6WK
          claim_id: c_5v4fHKtuF4uYgBQrCd8dqU
          source_id: s_HtsCssB6pJu6Q7Cr6zGo3D
          stance: supports
          locator: CBDB:191812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191812）
          source: &a1
            id: s_HtsCssB6pJu6Q7Cr6zGo3D
            source_type: api_record
            title: 中国历代人物传记资料库：王慱古（CBDB 191812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191812&o=json
            external_identifier: CBDB:191812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MCjsnLGYpAtS85HAiUAeap
        subject_person_id: p_VVcj7dvvnrXKLMnUjUkCs5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ack8kcue6zxHp2MUbi1sMH
          claim_id: c_MCjsnLGYpAtS85HAiUAeap
          source_id: s_HtsCssB6pJu6Q7Cr6zGo3D
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
        id: c_2JonWx7VhzNYytEZBhj17G
        subject_person_id: p_VVcj7dvvnrXKLMnUjUkCs5
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
        - id: cs_zjzLM9qPzUTA8UsoDMECbA
          claim_id: c_2JonWx7VhzNYytEZBhj17G
          source_id: s_HtsCssB6pJu6Q7Cr6zGo3D
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

# 王慱古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慱古 | accepted |
| death.date | 878年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慱古（CBDB 191812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191812&o=json)
