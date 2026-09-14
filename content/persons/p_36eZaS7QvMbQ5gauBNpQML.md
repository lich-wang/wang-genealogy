---
schema: wang-person/v1
id: p_36eZaS7QvMbQ5gauBNpQML
status: active
merged_into: null
display_name: 王統
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XK7idwvn9b9Ce93DruxSfp
        subject_person_id: p_36eZaS7QvMbQ5gauBNpQML
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aFT4osyJfyunFnWo3rL9yR
          claim_id: c_XK7idwvn9b9Ce93DruxSfp
          source_id: s_XMs9WZkRwCiNvz1KnDn9aK
          stance: supports
          locator: CBDB:288294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288294）
          source: &a1
            id: s_XMs9WZkRwCiNvz1KnDn9aK
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 288294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288294&o=json
            external_identifier: CBDB:288294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nS2DVJ2oCDkT3gadXb9VxM
        subject_person_id: p_36eZaS7QvMbQ5gauBNpQML
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統，明人物。嘉靖八年進士，籍贯石首。（中国历代人物传记资料库 CBDB 288294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6CNMvDo1ti_DIpMVF_dyCz
          claim_id: c_nS2DVJ2oCDkT3gadXb9VxM
          source_id: s_XMs9WZkRwCiNvz1KnDn9aK
          stance: supports
          locator: CBDB:288294
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WaCJBuYTcGHxzvtwF1rQ0a
        subject_person_id: p_CMffgJkEHdtf2Ua3rJuHZ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_36eZaS7QvMbQ5gauBNpQML
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eHYDx1CIVOwFPBsj0CeFPP
          claim_id: c_WaCJBuYTcGHxzvtwF1rQ0a
          source_id: s_BWfiBo5KNi0LY-UOcjhM4m
          stance: supports
          locator: CBDB：兄弟 王䋊（126694）之父／母 王璞
          quotation: null
          interpretation_note: 由兄弟关系推断：王統 与 王䋊 为同胞（CBDB 记「兄」），王䋊 之父／母即 王統 之父／母。
          source:
            id: s_BWfiBo5KNi0LY-UOcjhM4m
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 288294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288294&o=json
            external_identifier: CBDB:288294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CMffgJkEHdtf2Ua3rJuHZ9
        status: active
        display_name: 王璞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bZNzVtBn6P_0bm5XRtrCPT
        subject_person_id: p_36eZaS7QvMbQ5gauBNpQML
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sn9KZzCF4Seq4v2EsCEM8N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_INlCFzU75-IxdTpRTwqhuc
          claim_id: c_bZNzVtBn6P_0bm5XRtrCPT
          source_id: s_BWfiBo5KNi0LY-UOcjhM4m
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126694 王䋊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BWfiBo5KNi0LY-UOcjhM4m
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 288294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288294&o=json
            external_identifier: CBDB:288294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sn9KZzCF4Seq4v2EsCEM8N
        status: active
        display_name: 王䋊
        merged_into_person_id: null
---

# 王統

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統 | accepted |
| bio.summary | 王統，明人物。嘉靖八年進士，籍贯石首。（中国历代人物传记资料库 CBDB 288294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CMffgJkEHdtf2Ua3rJuHZ9 | 王璞 | accepted |
| other | p_sn9KZzCF4Seq4v2EsCEM8N | 王䋊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王統（CBDB 288294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288294&o=json)
