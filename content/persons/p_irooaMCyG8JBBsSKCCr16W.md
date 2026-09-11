---
schema: wang-person/v1
id: p_irooaMCyG8JBBsSKCCr16W
status: active
merged_into: null
display_name: 王一善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BiVWQv9sWdPmMjYjBunHAJ
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dnkudpqx8uXpHE1oC6UnyJ
          claim_id: c_BiVWQv9sWdPmMjYjBunHAJ
          source_id: s_dqCYFtVdCivkzFi6Cp9Q4y
          stance: supports
          locator: CBDB:308736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308736）
          source: &a1
            id: s_dqCYFtVdCivkzFi6Cp9Q4y
            source_type: api_record
            title: 中国历代人物传记资料库：王一善（CBDB 308736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308736&o=json
            external_identifier: CBDB:308736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jwL4EFmfJmBYyMxnJWqWwu
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
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
        - id: cs_XbuDcJP2RhcFyCcJNFXEnm
          claim_id: c_jwL4EFmfJmBYyMxnJWqWwu
          source_id: s_dqCYFtVdCivkzFi6Cp9Q4y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1aTTVPK28DOLBcQBKF7oPy
        subject_person_id: p_irooaMCyG8JBBsSKCCr16W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LPzYRgFrvHZtoR8m7zKq9v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jzmouYMQ6cEN712F_J5cfQ
          claim_id: c_1aTTVPK28DOLBcQBKF7oPy
          source_id: s_dqCYFtVdCivkzFi6Cp9Q4y
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LPzYRgFrvHZtoR8m7zKq9v
        status: active
        display_name: 王時槐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LPzYRgFrvHZtoR8m7zKq9v | 王時槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一善（CBDB 308736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308736&o=json)
