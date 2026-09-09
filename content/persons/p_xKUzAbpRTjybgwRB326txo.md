---
schema: wang-person/v1
id: p_xKUzAbpRTjybgwRB326txo
status: active
merged_into: null
display_name: 王純臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BHZmGSL45xjoRtbLrDtJfr
        subject_person_id: p_xKUzAbpRTjybgwRB326txo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uLhgGNiNaVLqf1oXCx7zGt
          claim_id: c_BHZmGSL45xjoRtbLrDtJfr
          source_id: s_HwCFuna5SsDwxW7tCy1qaB
          stance: supports
          locator: CBDB:685203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685203）
          source: &a1
            id: s_HwCFuna5SsDwxW7tCy1qaB
            source_type: api_record
            title: 中国历代人物传记资料库：王純臣（CBDB 685203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685203&o=json
            external_identifier: CBDB:685203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pxg6Z4gCHwBpwjuD3CQ6ms
        subject_person_id: p_xKUzAbpRTjybgwRB326txo
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
        - id: cs_5GGMjtA1v7x1PwqjB7qDda
          claim_id: c_pxg6Z4gCHwBpwjuD3CQ6ms
          source_id: s_HwCFuna5SsDwxW7tCy1qaB
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

# 王純臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純臣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王純臣（CBDB 685203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685203&o=json)
