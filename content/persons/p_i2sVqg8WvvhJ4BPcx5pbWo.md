---
schema: wang-person/v1
id: p_i2sVqg8WvvhJ4BPcx5pbWo
status: active
merged_into: null
display_name: 王應鍾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xoFEBqcUyPb9EqRYyU6mup
        subject_person_id: p_i2sVqg8WvvhJ4BPcx5pbWo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b6quvrxhi3S1RFyCapLcMY
          claim_id: c_xoFEBqcUyPb9EqRYyU6mup
          source_id: s_mqeSLaWEhTiA5BbisYdCSP
          stance: supports
          locator: CBDB:498891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498891）
          source: &a1
            id: s_mqeSLaWEhTiA5BbisYdCSP
            source_type: api_record
            title: 中国历代人物传记资料库：王應鍾（CBDB 498891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498891&o=json
            external_identifier: CBDB:498891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QZQr8b66DzoFDCaZYPkVx9
        subject_person_id: p_i2sVqg8WvvhJ4BPcx5pbWo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dr6k3b4Dnc2tehXRMEuMZK
          claim_id: c_QZQr8b66DzoFDCaZYPkVx9
          source_id: s_mqeSLaWEhTiA5BbisYdCSP
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

# 王應鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鍾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應鍾（CBDB 498891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498891&o=json)
