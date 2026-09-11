---
schema: wang-person/v1
id: p_WxUEQGX7JSRxtx6fWXm1iC
status: merged
merged_into: p_Nm2iJSX6JvN22S8n42tuCU
display_name: 王直方
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oDJWzBcQEjLHmoYvio6ZHz
        subject_person_id: p_WxUEQGX7JSRxtx6fWXm1iC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aXN4rJMouaBMLpYq2fXpmA
          claim_id: c_oDJWzBcQEjLHmoYvio6ZHz
          source_id: s_TpxPQmggpFAHznkcWoHTMe
          stance: supports
          locator: CBDB:13798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13798）
          source: &a1
            id: s_TpxPQmggpFAHznkcWoHTMe
            source_type: api_record
            title: 中国历代人物传记资料库：王直方（CBDB 13798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13798&o=json
            external_identifier: CBDB:13798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cUWVm2yuVGAGzM9VAS4ceD
        subject_person_id: p_WxUEQGX7JSRxtx6fWXm1iC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1069年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yNFzqxj4teZtY2Ey582ZDn
          claim_id: c_cUWVm2yuVGAGzM9VAS4ceD
          source_id: s_TpxPQmggpFAHznkcWoHTMe
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
        id: c_9oQixXcSP9fj4csoFG8Vzs
        subject_person_id: p_WxUEQGX7JSRxtx6fWXm1iC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1109年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uEu1L1KMDCxVWF2tpUJ5C6
          claim_id: c_9oQixXcSP9fj4csoFG8Vzs
          source_id: s_TpxPQmggpFAHznkcWoHTMe
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
        id: c_s9MMv1sPJ9TBGrL4JU6Z3P
        subject_person_id: p_WxUEQGX7JSRxtx6fWXm1iC
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
        - id: cs_uHorj8TDyC3QkeQHzFoJfb
          claim_id: c_s9MMv1sPJ9TBGrL4JU6Z3P
          source_id: s_TpxPQmggpFAHznkcWoHTMe
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

# 王直方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王直方 | accepted |
| birth.date | 1069年 | accepted |
| death.date | 1109年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王直方（CBDB 13798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13798&o=json)
