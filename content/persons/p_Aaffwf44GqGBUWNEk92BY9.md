---
schema: wang-person/v1
id: p_Aaffwf44GqGBUWNEk92BY9
status: active
merged_into: null
display_name: 祖氏
revision: 1
cbdb_id: 573297
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBepsBwxLfVLkIWE8AlBPt
        subject_person_id: p_Aaffwf44GqGBUWNEk92BY9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 祖氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xwN8QJCqVHNUtLlYi3kZh7
          claim_id: c_FBepsBwxLfVLkIWE8AlBPt
          source_id: s_MSUbMKw5XcYoZvwTnNFEi7
          stance: supports
          locator: CBDB:573297
          quotation: null
          interpretation_note: CBDB 明确记录的王師元配偶
          source: &a1
            id: s_MSUbMKw5XcYoZvwTnNFEi7
            source_type: api_record
            title: 中国历代人物传记资料库：祖氏(王壽卿母)（CBDB 573297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573297&o=json
            external_identifier: CBDB:573297
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
        id: c_bTwQqpwz4RaVitPbjiG9_u
        subject_person_id: p_sxszW95r84hhjReQxZJYQG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Aaffwf44GqGBUWNEk92BY9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZSDS3GJgi2R1FotbkvPdcP
          claim_id: c_bTwQqpwz4RaVitPbjiG9_u
          source_id: s_MSUbMKw5XcYoZvwTnNFEi7
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sxszW95r84hhjReQxZJYQG
        status: active
        display_name: 王師元
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 祖氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 祖氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sxszW95r84hhjReQxZJYQG | 王師元 | accepted |

## 外部来源

- [中国历代人物传记资料库：祖氏(王壽卿母)（CBDB 573297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573297&o=json)
