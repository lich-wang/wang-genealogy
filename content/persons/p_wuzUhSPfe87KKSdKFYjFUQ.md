---
schema: wang-person/v1
id: p_wuzUhSPfe87KKSdKFYjFUQ
status: active
merged_into: null
display_name: 王通
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kd3Bm4XmHUcRMEKmqMAGAp
        subject_person_id: p_wuzUhSPfe87KKSdKFYjFUQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u72WXy2DHLn7mjTHdTy2i2
          claim_id: c_Kd3Bm4XmHUcRMEKmqMAGAp
          source_id: s_4k4oBvw4x2Q9QfvFwybx8c
          stance: supports
          locator: CBDB:138818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138818）
          source: &a1
            id: s_4k4oBvw4x2Q9QfvFwybx8c
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 138818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138818&o=json
            external_identifier: CBDB:138818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RdgGtqLjPzPBqacXPMkvpP
        subject_person_id: p_wuzUhSPfe87KKSdKFYjFUQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 573年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYmzLM216btcnPcgP7gi13
          claim_id: c_RdgGtqLjPzPBqacXPMkvpP
          source_id: s_4k4oBvw4x2Q9QfvFwybx8c
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
        id: c_CEJNFgDwF1677eDhSKgsRJ
        subject_person_id: p_wuzUhSPfe87KKSdKFYjFUQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 614年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pH8sS5p8YJUbPqYeVf9Daw
          claim_id: c_CEJNFgDwF1677eDhSKgsRJ
          source_id: s_4k4oBvw4x2Q9QfvFwybx8c
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
        id: c_bReXPuTmHEcwzgvcuNB3V2
        subject_person_id: p_wuzUhSPfe87KKSdKFYjFUQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为隋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6dMYCx37mqhzmTbwoSWiFK
          claim_id: c_bReXPuTmHEcwzgvcuNB3V2
          source_id: s_4k4oBvw4x2Q9QfvFwybx8c
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
        id: c_SSPiLeKZl9cpvTo-1pwNzQ
        subject_person_id: p_wuzUhSPfe87KKSdKFYjFUQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MF2GxdYHLyw3qSgLPNcCmu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_67gykjK3k8ue0ZICB2Rrhx
          claim_id: c_SSPiLeKZl9cpvTo-1pwNzQ
          source_id: s_ies6pYcn5DxoHZyCwoKxST
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 103：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ies6pYcn5DxoHZyCwoKxST
            source_type: api_record
            title: 中国历代人物传记资料库：王君德（CBDB 146693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146693&o=json
            external_identifier: CBDB:146693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MF2GxdYHLyw3qSgLPNcCmu
        status: active
        display_name: 王君德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BjrKKLhkTCtUZS4NOexB0M
        subject_person_id: p_wuzUhSPfe87KKSdKFYjFUQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MsDyTP1S6D1UQXnBkedUZb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NoIwTzHVReDsfSA0RbSeJY
          claim_id: c_BjrKKLhkTCtUZS4NOexB0M
          source_id: s_CgxwsgeRN6LP0D33vRbYl3
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 103：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CgxwsgeRN6LP0D33vRbYl3
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王通妻)（CBDB 146692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146692&o=json
            external_identifier: CBDB:146692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MsDyTP1S6D1UQXnBkedUZb
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| birth.date | 573年 | accepted |
| death.date | 614年 | accepted |
| bio.summary | CBDB 记载为隋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MF2GxdYHLyw3qSgLPNcCmu | 王君德 | accepted |
| spouses | p_MsDyTP1S6D1UQXnBkedUZb | 趙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君德（CBDB 146693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146693&o=json)
- [中国历代人物传记资料库：王通（CBDB 138818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138818&o=json)
- [中国历代人物传记资料库：趙氏(王通妻)（CBDB 146692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146692&o=json)
