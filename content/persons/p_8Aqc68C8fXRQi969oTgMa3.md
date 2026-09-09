---
schema: wang-person/v1
id: p_8Aqc68C8fXRQi969oTgMa3
status: active
merged_into: null
display_name: 王旻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_13ASFCpJ6reJ7FqFhQdFec
        subject_person_id: p_8Aqc68C8fXRQi969oTgMa3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_51C1DfCDEaDp4vvAwrqALA
          claim_id: c_13ASFCpJ6reJ7FqFhQdFec
          source_id: s_DXg8oyZdP5SXnRvZ3N2vD9
          stance: supports
          locator: CBDB:190514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190514）
          source: &a1
            id: s_DXg8oyZdP5SXnRvZ3N2vD9
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 190514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190514&o=json
            external_identifier: CBDB:190514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_z3Cwhw6EzN1sBACLJs1275
        subject_person_id: p_8Aqc68C8fXRQi969oTgMa3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 758年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KeByrfAwojBd9QGE1K6a8V
          claim_id: c_z3Cwhw6EzN1sBACLJs1275
          source_id: s_DXg8oyZdP5SXnRvZ3N2vD9
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
        id: c_WMD5ZGkDxs22R8htVmgXqR
        subject_person_id: p_8Aqc68C8fXRQi969oTgMa3
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
        - id: cs_RgY8Vi5GjnzrdJYYyPGPQh
          claim_id: c_WMD5ZGkDxs22R8htVmgXqR
          source_id: s_DXg8oyZdP5SXnRvZ3N2vD9
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

# 王旻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旻 | accepted |
| death.date | 758年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王旻（CBDB 190514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190514&o=json)
