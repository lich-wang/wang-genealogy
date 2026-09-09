---
schema: wang-person/v1
id: p_3Q83mdKixGkP2Dc7o6vvzG
status: active
merged_into: null
display_name: 王敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5f61ZyjZBPD7Ayb5Cje52a
        subject_person_id: p_3Q83mdKixGkP2Dc7o6vvzG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z8wB4SkbsA4NV9GNwtAPEq
          claim_id: c_5f61ZyjZBPD7Ayb5Cje52a
          source_id: s_mh9CebsVU2JsR8mQrc8Es5
          stance: supports
          locator: CBDB:453974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453974）
          source: &a1
            id: s_mh9CebsVU2JsR8mQrc8Es5
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 453974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453974&o=json
            external_identifier: CBDB:453974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nFq3m4UkuQF1Vtm5ff13bH
        subject_person_id: p_3Q83mdKixGkP2Dc7o6vvzG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wFM71NAVnyUFEwmzJ95U6w
          claim_id: c_nFq3m4UkuQF1Vtm5ff13bH
          source_id: s_mh9CebsVU2JsR8mQrc8Es5
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

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 453974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453974&o=json)
