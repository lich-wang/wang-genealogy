---
schema: wang-person/v1
id: p_2x1kEfTy9Rrf9vMAC4nm4e
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 36923
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dqoqpWmZg4-y7rnsjrbv2D
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13YmR30_EWwSIGaM3RVRfK
          claim_id: c_dqoqpWmZg4-y7rnsjrbv2D
          source_id: s_6Q8GQFF56bS9Qa_TDRMPLz
          stance: supports
          locator: CBDB:36923
          quotation: null
          interpretation_note: CBDB 明确记录的王之道配偶
          source: &a1
            id: s_6Q8GQFF56bS9Qa_TDRMPLz
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王之道妻)（CBDB 36923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36923&o=json
            external_identifier: CBDB:36923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EIza0Oo6BlY9LGANfvUSwv
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qrUeQ_F23he-aUnG2p_qcO
          claim_id: c_EIza0Oo6BlY9LGANfvUSwv
          source_id: s_6Q8GQFF56bS9Qa_TDRMPLz
          stance: supports
          locator: CBDB 双向互证（妻子 孫氏(王之道妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王之道妻)（CBDB 36923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36923&o=json)
