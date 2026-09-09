---
schema: wang-person/v1
id: p_QS7wbgd2NLMxyM2mtcpAPF
status: active
merged_into: null
display_name: 王復原
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KnCNVUcP5XcGxa6nyTQRWP
        subject_person_id: p_QS7wbgd2NLMxyM2mtcpAPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6UGPRwK1L6z56Ac4vLibcm
          claim_id: c_KnCNVUcP5XcGxa6nyTQRWP
          source_id: s_T3khQn2EJ1vUC3DpH2pLKm
          stance: supports
          locator: CBDB:126729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126729）
          source: &a1
            id: s_T3khQn2EJ1vUC3DpH2pLKm
            source_type: api_record
            title: 中国历代人物传记资料库：王復原（CBDB 126729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126729&o=json
            external_identifier: CBDB:126729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RDVx8oBLZdB4noCkA47jJJ
        subject_person_id: p_QS7wbgd2NLMxyM2mtcpAPF
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
        - id: cs_AQNTWENTARQk44W4r7qgtb
          claim_id: c_RDVx8oBLZdB4noCkA47jJJ
          source_id: s_T3khQn2EJ1vUC3DpH2pLKm
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

# 王復原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復原 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復原（CBDB 126729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126729&o=json)
