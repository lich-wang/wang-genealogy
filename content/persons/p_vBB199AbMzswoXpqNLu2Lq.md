---
schema: wang-person/v1
id: p_vBB199AbMzswoXpqNLu2Lq
status: active
merged_into: null
display_name: 王雅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFdLz7Fk4pX7gfc1YcLhWH
        subject_person_id: p_vBB199AbMzswoXpqNLu2Lq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZciM2eYBDboR3ijaYDAMQM
          claim_id: c_JFdLz7Fk4pX7gfc1YcLhWH
          source_id: s_JiHkp9V26E7Pd8h4hY5smv
          stance: supports
          locator: CBDB:142589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142589）
          source: &a1
            id: s_JiHkp9V26E7Pd8h4hY5smv
            source_type: api_record
            title: 中国历代人物传记资料库：王雅（CBDB 142589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142589&o=json
            external_identifier: CBDB:142589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xukvK6e7yG6Ji7kQzJ6129
        subject_person_id: p_vBB199AbMzswoXpqNLu2Lq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 566年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2TYkARCVw4JsRxB1M8mvcU
          claim_id: c_xukvK6e7yG6Ji7kQzJ6129
          source_id: s_JiHkp9V26E7Pd8h4hY5smv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_xzSDFjrJso8CAzDJ5CN5k3
        subject_person_id: p_vBB199AbMzswoXpqNLu2Lq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 668年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkUrurxnK2DzJub1mNrn6J
          claim_id: c_xzSDFjrJso8CAzDJ5CN5k3
          source_id: s_JiHkp9V26E7Pd8h4hY5smv
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
        id: c_hU4LYrK5YWi3EHQY9Ty3wK
        subject_person_id: p_vBB199AbMzswoXpqNLu2Lq
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
        - id: cs_TiqX2443LfPtAP4ZE4cgrF
          claim_id: c_hU4LYrK5YWi3EHQY9Ty3wK
          source_id: s_JiHkp9V26E7Pd8h4hY5smv
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

# 王雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雅 | accepted |
| birth.date | 566年 | accepted |
| death.date | 668年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雅（CBDB 142589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142589&o=json)
