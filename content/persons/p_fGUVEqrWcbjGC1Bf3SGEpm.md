---
schema: wang-person/v1
id: p_fGUVEqrWcbjGC1Bf3SGEpm
status: active
merged_into: null
display_name: 王弘度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z69sEyRQMFrnHAuLXhu1PE
        subject_person_id: p_fGUVEqrWcbjGC1Bf3SGEpm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_quHRjMH7def3js8LuhXY89
          claim_id: c_Z69sEyRQMFrnHAuLXhu1PE
          source_id: s_4E5boq2FnowHG5dsameJMP
          stance: supports
          locator: CBDB:175642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175642）
          source: &a1
            id: s_4E5boq2FnowHG5dsameJMP
            source_type: api_record
            title: 中国历代人物传记资料库：王弘度（CBDB 175642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175642&o=json
            external_identifier: CBDB:175642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_b5mJZkJm8nAmDwMovnFzdF
        subject_person_id: p_fGUVEqrWcbjGC1Bf3SGEpm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A1kiv1HjEfJJSzu75Fx5Bg
          claim_id: c_b5mJZkJm8nAmDwMovnFzdF
          source_id: s_4E5boq2FnowHG5dsameJMP
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
        id: c_A6eXDZoJ3Ws2Mk7H4QMnys
        subject_person_id: p_fGUVEqrWcbjGC1Bf3SGEpm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j9L8XzEuoAUzV6etZVUipQ
          claim_id: c_A6eXDZoJ3Ws2Mk7H4QMnys
          source_id: s_4E5boq2FnowHG5dsameJMP
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

# 王弘度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘度 | accepted |
| death.date | 595年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘度（CBDB 175642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175642&o=json)
