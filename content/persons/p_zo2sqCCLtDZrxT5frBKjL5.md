---
schema: wang-person/v1
id: p_zo2sqCCLtDZrxT5frBKjL5
status: active
merged_into: null
display_name: 王椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VhXj7eMxa6Fm6qfEKk12xZ
        subject_person_id: p_zo2sqCCLtDZrxT5frBKjL5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4r2pervKRg9a1WVJMAb23N
          claim_id: c_VhXj7eMxa6Fm6qfEKk12xZ
          source_id: s_rvGw6hsgDkKcnaBFAvs4Vw
          stance: supports
          locator: CBDB:688512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688512）
          source: &a1
            id: s_rvGw6hsgDkKcnaBFAvs4Vw
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 688512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688512&o=json
            external_identifier: CBDB:688512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HyoL1LsYD1CALqiRxvWkLu
        subject_person_id: p_zo2sqCCLtDZrxT5frBKjL5
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
        - id: cs_mg7UGXvVLgEcEyL73bq4gt
          claim_id: c_HyoL1LsYD1CALqiRxvWkLu
          source_id: s_rvGw6hsgDkKcnaBFAvs4Vw
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

# 王椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王椿 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 688512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688512&o=json)
