---
schema: wang-person/v1
id: p_mWjSAt3VM5xUk3y6Uo4ELr
status: active
merged_into: null
display_name: 王景純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_maJ3BNKbcYmym99j4GQTWc
        subject_person_id: p_mWjSAt3VM5xUk3y6Uo4ELr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qa2BX9RMAag1sARYZQGAcW
          claim_id: c_maJ3BNKbcYmym99j4GQTWc
          source_id: s_R2nMyzZQcscJceNsFBMBwb
          stance: supports
          locator: CBDB:526735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526735）
          source: &a1
            id: s_R2nMyzZQcscJceNsFBMBwb
            source_type: api_record
            title: 中国历代人物传记资料库：王景純（CBDB 526735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526735&o=json
            external_identifier: CBDB:526735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LV5ebfLa6H3RcSjpKLQ2jB
        subject_person_id: p_mWjSAt3VM5xUk3y6Uo4ELr
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
        - id: cs_WUKYHDKjbeA74HrmNEuA8K
          claim_id: c_LV5ebfLa6H3RcSjpKLQ2jB
          source_id: s_R2nMyzZQcscJceNsFBMBwb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3RM-fZbjtXo5ByT4beSdSh
        subject_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mWjSAt3VM5xUk3y6Uo4ELr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fo1emYOTAI6bnxq2cFs35P
          claim_id: c_3RM-fZbjtXo5ByT4beSdSh
          source_id: s_R2nMyzZQcscJceNsFBMBwb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12857：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y3Y6HkmzixiBERDAuwhHZ6
        status: active
        display_name: 王用汝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景純 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y3Y6HkmzixiBERDAuwhHZ6 | 王用汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景純（CBDB 526735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526735&o=json)
