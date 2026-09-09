---
schema: wang-person/v1
id: p_huLH1Mjy4LVyz1ZFp6RmdN
status: active
merged_into: null
display_name: 王嶔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_323AXVNcuusbNGPWkFmSvV
        subject_person_id: p_huLH1Mjy4LVyz1ZFp6RmdN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DCPSnRKdktfN8RVLXHAFTF
          claim_id: c_323AXVNcuusbNGPWkFmSvV
          source_id: s_9auCBN2zLVJTbhnK2K6M5W
          stance: supports
          locator: CBDB:637376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637376）
          source: &a1
            id: s_9auCBN2zLVJTbhnK2K6M5W
            source_type: api_record
            title: 中国历代人物传记资料库：王嶔（CBDB 637376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637376&o=json
            external_identifier: CBDB:637376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ewzmXPN5WMUpUE8ZJMZAwb
        subject_person_id: p_huLH1Mjy4LVyz1ZFp6RmdN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KxNH4JfgFXMrSemuXVeg2F
          claim_id: c_ewzmXPN5WMUpUE8ZJMZAwb
          source_id: s_9auCBN2zLVJTbhnK2K6M5W
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

# 王嶔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶔 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶔（CBDB 637376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637376&o=json)
