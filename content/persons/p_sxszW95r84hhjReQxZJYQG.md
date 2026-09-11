---
schema: wang-person/v1
id: p_sxszW95r84hhjReQxZJYQG
status: active
merged_into: null
display_name: 王師元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8243NTxzn3cvbCNrVaXAY2
        subject_person_id: p_sxszW95r84hhjReQxZJYQG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AY345RA2wBDi4Xrv9KteLV
          claim_id: c_8243NTxzn3cvbCNrVaXAY2
          source_id: s_LALErhPFcP3uMT9LqRhpUL
          stance: supports
          locator: CBDB:573296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573296）
          source: &a1
            id: s_LALErhPFcP3uMT9LqRhpUL
            source_type: api_record
            title: 中国历代人物传记资料库：王師元（CBDB 573296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573296&o=json
            external_identifier: CBDB:573296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YGgwXLXFJNHNVMZMSDKuqh
        subject_person_id: p_sxszW95r84hhjReQxZJYQG
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
        - id: cs_mf4h5jwa1sU8H6ZEXqMYQ5
          claim_id: c_YGgwXLXFJNHNVMZMSDKuqh
          source_id: s_LALErhPFcP3uMT9LqRhpUL
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
        id: c_Uh97auGmf4hvgBo_c8B8fz
        subject_person_id: p_sxszW95r84hhjReQxZJYQG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oBg2fph2HQeUi63Z2hsgrx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRe5jQnrseee8NtX1E2Coz
          claim_id: c_Uh97auGmf4hvgBo_c8B8fz
          source_id: s_LALErhPFcP3uMT9LqRhpUL
          stance: supports
          locator: 芒洛冢墓遺文四編，王魯翁墓志：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oBg2fph2HQeUi63Z2hsgrx
        status: active
        display_name: 王壽卿
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_Aaffwf44GqGBUWNEk92BY9
        status: active
        display_name: 祖氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王師元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師元 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oBg2fph2HQeUi63Z2hsgrx | 王壽卿 | accepted |
| spouses | p_Aaffwf44GqGBUWNEk92BY9 | 祖氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師元（CBDB 573296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573296&o=json)
- [中国历代人物传记资料库：祖氏(王壽卿母)（CBDB 573297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573297&o=json)
