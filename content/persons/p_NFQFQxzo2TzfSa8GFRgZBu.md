---
schema: wang-person/v1
id: p_NFQFQxzo2TzfSa8GFRgZBu
status: active
merged_into: null
display_name: 王晏平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_toK75X2b4iGxJJugxQVirF
        subject_person_id: p_NFQFQxzo2TzfSa8GFRgZBu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XSKu5DWSdmnTG7SLXuvfrn
          claim_id: c_toK75X2b4iGxJJugxQVirF
          source_id: s_QAkFsA6T3CMGyKCZronZDy
          stance: supports
          locator: CBDB:184940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（184940）
          source: &a1
            id: s_QAkFsA6T3CMGyKCZronZDy
            source_type: api_record
            title: 中国历代人物传记资料库：王晏平（CBDB 184940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184940&o=json
            external_identifier: CBDB:184940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_x4jG5gSM1kqgB5sphrBqZ1
        subject_person_id: p_NFQFQxzo2TzfSa8GFRgZBu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 854年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fyx63ovFcacfYxH1UBZo14
          claim_id: c_x4jG5gSM1kqgB5sphrBqZ1
          source_id: s_QAkFsA6T3CMGyKCZronZDy
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
        id: c_mts9xhD3wJP5zM7y6se3f6
        subject_person_id: p_NFQFQxzo2TzfSa8GFRgZBu
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
        - id: cs_NgJ334YqiqPwjpy66hVA1g
          claim_id: c_mts9xhD3wJP5zM7y6se3f6
          source_id: s_QAkFsA6T3CMGyKCZronZDy
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

# 王晏平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏平 | accepted |
| death.date | 854年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晏平（CBDB 184940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184940&o=json)
