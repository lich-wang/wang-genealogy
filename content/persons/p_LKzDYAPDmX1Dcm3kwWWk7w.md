---
schema: wang-person/v1
id: p_LKzDYAPDmX1Dcm3kwWWk7w
status: active
merged_into: null
display_name: 王九言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3bGb64eiAn71JHkFKVBgF6
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_515TdBgDC9FQ8qHnA23MVa
          claim_id: c_3bGb64eiAn71JHkFKVBgF6
          source_id: s_f79VU2Zmc9SybDfJBzaqYL
          stance: supports
          locator: CBDB:696905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696905）
          source: &a1
            id: s_f79VU2Zmc9SybDfJBzaqYL
            source_type: api_record
            title: 中国历代人物传记资料库：王九言（CBDB 696905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696905&o=json
            external_identifier: CBDB:696905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EqrUuHuttHpEne1K2MH3qW
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1021年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CGKgftaA7S6vvnY6EQVHk9
          claim_id: c_EqrUuHuttHpEne1K2MH3qW
          source_id: s_f79VU2Zmc9SybDfJBzaqYL
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
        id: c_GzCxoAdauzeTKkeFHMsNbN
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v4RcFjL6hmuWDjhQnphugN
          claim_id: c_GzCxoAdauzeTKkeFHMsNbN
          source_id: s_f79VU2Zmc9SybDfJBzaqYL
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

# 王九言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九言 | accepted |
| death.date | 1021年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九言（CBDB 696905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696905&o=json)
