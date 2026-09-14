---
schema: wang-person/v1
id: p_CMffgJkEHdtf2Ua3rJuHZ9
status: active
merged_into: null
display_name: 王璞
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fBMFn7dyRFZDRhzsXbWy7o
        subject_person_id: p_CMffgJkEHdtf2Ua3rJuHZ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JrZaR4Bzf3rVMFxFMyKzvL
          claim_id: c_fBMFn7dyRFZDRhzsXbWy7o
          source_id: s_GLVxJsh9n7QFUSeAED2nsn
          stance: supports
          locator: CBDB:288290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288290）
          source: &a1
            id: s_GLVxJsh9n7QFUSeAED2nsn
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 288290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288290&o=json
            external_identifier: CBDB:288290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dRvVDsqk9tE1SRMGJkYSVB
        subject_person_id: p_CMffgJkEHdtf2Ua3rJuHZ9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璞，明人物。嘉靖八年進士，籍贯石首。（中国历代人物传记资料库 CBDB 288290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wXWzSDTfVN64lXXEKAA3eH
          claim_id: c_dRvVDsqk9tE1SRMGJkYSVB
          source_id: s_GLVxJsh9n7QFUSeAED2nsn
          stance: supports
          locator: CBDB:288290
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NxjNx1wP-uHFyrqmx7aV0X
        subject_person_id: p_CMffgJkEHdtf2Ua3rJuHZ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sn9KZzCF4Seq4v2EsCEM8N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vld8dPTpSUKIQ7cqIhOrRt
          claim_id: c_NxjNx1wP-uHFyrqmx7aV0X
          source_id: s_GLVxJsh9n7QFUSeAED2nsn
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sn9KZzCF4Seq4v2EsCEM8N
        status: active
        display_name: 王䋊
        merged_into_person_id: null
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
        id: p_36eZaS7QvMbQ5gauBNpQML
        status: active
        display_name: 王統
        merged_into_person_id: null
    - claim:
        id: c_x4gfvGkelQK8CLwL9GMJ6Z
        subject_person_id: p_CMffgJkEHdtf2Ua3rJuHZ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XrEdbQ2bpeMAqGHZHwfqTJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8tTnJLl4AbddpfTGRfD8MF
          claim_id: c_x4gfvGkelQK8CLwL9GMJ6Z
          source_id: s_HSDY-2UDeAQgJ4hvMYHYT8
          stance: supports
          locator: CBDB：兄弟 王䋊（126694）之父／母 王璞
          quotation: null
          interpretation_note: 由兄弟关系推断：王繩 与 王䋊 为同胞（CBDB 记「弟」），王䋊 之父／母即 王繩 之父／母。
          source:
            id: s_HSDY-2UDeAQgJ4hvMYHYT8
            source_type: api_record
            title: 中国历代人物传记资料库：王繩（CBDB 288293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288293&o=json
            external_identifier: CBDB:288293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XrEdbQ2bpeMAqGHZHwfqTJ
        status: active
        display_name: 王繩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璞 | accepted |
| bio.summary | 王璞，明人物。嘉靖八年進士，籍贯石首。（中国历代人物传记资料库 CBDB 288290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sn9KZzCF4Seq4v2EsCEM8N | 王䋊 | accepted |
| children | p_36eZaS7QvMbQ5gauBNpQML | 王統 | accepted |
| children | p_XrEdbQ2bpeMAqGHZHwfqTJ | 王繩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璞（CBDB 288290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288290&o=json)
- [中国历代人物传记资料库：王繩（CBDB 288293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288293&o=json)
- [中国历代人物传记资料库：王統（CBDB 288294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288294&o=json)
