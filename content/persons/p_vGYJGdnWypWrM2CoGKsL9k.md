---
schema: wang-person/v1
id: p_vGYJGdnWypWrM2CoGKsL9k
status: active
merged_into: null
display_name: 王雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WafJf6bUP2GAejdJXakzRm
        subject_person_id: p_vGYJGdnWypWrM2CoGKsL9k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gQW86QdMnGdbhqkK3LtBbe
          claim_id: c_WafJf6bUP2GAejdJXakzRm
          source_id: s_jEmfBPXJpYdQisKQXyGEWp
          stance: supports
          locator: CBDB:38363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38363）
          source: &a1
            id: s_jEmfBPXJpYdQisKQXyGEWp
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 38363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38363&o=json
            external_identifier: CBDB:38363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_x2XbA5Hfsy4K5cGSAQTDzR
        subject_person_id: p_vGYJGdnWypWrM2CoGKsL9k
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1245年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KvHDFrwkWfk4Bjk2U48wZj
          claim_id: c_x2XbA5Hfsy4K5cGSAQTDzR
          source_id: s_jEmfBPXJpYdQisKQXyGEWp
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
        id: c_LnfHP2FWiKXMQeR1u9kEzX
        subject_person_id: p_vGYJGdnWypWrM2CoGKsL9k
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
        - id: cs_eAQr99p23koLzrDf1iXTx7
          claim_id: c_LnfHP2FWiKXMQeR1u9kEzX
          source_id: s_jEmfBPXJpYdQisKQXyGEWp
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

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| death.date | 1245年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 38363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38363&o=json)
