---
schema: wang-person/v1
id: p_9CPJqJASNU3VCofqABhgMD
status: active
merged_into: null
display_name: 王知微
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zPUK4y7as4QP293KN1a5Qa
        subject_person_id: p_9CPJqJASNU3VCofqABhgMD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9qELiDzCeNWNBbk7GezWdT
          claim_id: c_zPUK4y7as4QP293KN1a5Qa
          source_id: s_dfGS7xoM7NfnHZkS57A7cT
          stance: supports
          locator: CBDB:545019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545019）
          source: &a1
            id: s_dfGS7xoM7NfnHZkS57A7cT
            source_type: api_record
            title: 中国历代人物传记资料库：王知微（CBDB 545019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545019&o=json
            external_identifier: CBDB:545019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V9Fp7rCDh5k3zhGU2dj8vG
        subject_person_id: p_9CPJqJASNU3VCofqABhgMD
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
        - id: cs_nnDYeraYeYq2gnfmS9CDZD
          claim_id: c_V9Fp7rCDh5k3zhGU2dj8vG
          source_id: s_dfGS7xoM7NfnHZkS57A7cT
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

# 王知微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知微 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王知微（CBDB 545019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545019&o=json)
