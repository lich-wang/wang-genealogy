---
schema: wang-person/v1
id: p_GCgR42SmAZsDj49L3Ea6KF
status: active
merged_into: null
display_name: 魏氏
revision: 1
cbdb_id: 154991
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQHpbh_YlaYWkhUraQCkFi
        subject_person_id: p_GCgR42SmAZsDj49L3Ea6KF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 魏氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFP6JpKn_aeQQlpMgyDwTA
          claim_id: c_EQHpbh_YlaYWkhUraQCkFi
          source_id: s_Dfx5Vu30ZVTiV-kS6yuS24
          stance: supports
          locator: CBDB:154991
          quotation: null
          interpretation_note: CBDB 明确记录的王景秀配偶
          source: &a1
            id: s_Dfx5Vu30ZVTiV-kS6yuS24
            source_type: api_record
            title: 中国历代人物传记资料库：魏氏(王景秀妻)（CBDB 154991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154991&o=json
            external_identifier: CBDB:154991
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
        id: c_MKYWbMgbYJt2BS92OdiEXW
        subject_person_id: p_Ns13EDRf3NQqio4T1cuSE8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GCgR42SmAZsDj49L3Ea6KF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hlxrvQAorLm6QPvRrrxelR
          claim_id: c_MKYWbMgbYJt2BS92OdiEXW
          source_id: s_Dfx5Vu30ZVTiV-kS6yuS24
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 48：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ns13EDRf3NQqio4T1cuSE8
        status: active
        display_name: 王景秀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 魏氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 魏氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Ns13EDRf3NQqio4T1cuSE8 | 王景秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：魏氏(王景秀妻)（CBDB 154991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154991&o=json)
