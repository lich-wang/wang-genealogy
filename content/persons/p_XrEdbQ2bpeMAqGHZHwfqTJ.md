---
schema: wang-person/v1
id: p_XrEdbQ2bpeMAqGHZHwfqTJ
status: active
merged_into: null
display_name: 王繩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c6Cm4i7BmNBbHcHjzyKmMU
        subject_person_id: p_XrEdbQ2bpeMAqGHZHwfqTJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4cFn6LZHBjtUQEPna2QtRq
          claim_id: c_c6Cm4i7BmNBbHcHjzyKmMU
          source_id: s_id4CfDVHgcBdQ7tMFcBcNM
          stance: supports
          locator: CBDB:288293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288293）
          source: &a1
            id: s_id4CfDVHgcBdQ7tMFcBcNM
            source_type: api_record
            title: 中国历代人物传记资料库：王繩（CBDB 288293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288293&o=json
            external_identifier: CBDB:288293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PhEwRe4ozr29TFxbGjaNQD
        subject_person_id: p_XrEdbQ2bpeMAqGHZHwfqTJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繩，明人物。嘉靖八年進士，籍贯石首。（中国历代人物传记资料库 CBDB 288293）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n6hg_ViAltiDQiYsjg7Uk6
          claim_id: c_PhEwRe4ozr29TFxbGjaNQD
          source_id: s_id4CfDVHgcBdQ7tMFcBcNM
          stance: supports
          locator: CBDB:288293
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: c_EVUgHt_GlHcBnK14u7uqdU
        subject_person_id: p_XrEdbQ2bpeMAqGHZHwfqTJ
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
        - id: cs_1Kb9CAAfJTg9TdkC1vIC3S
          claim_id: c_EVUgHt_GlHcBnK14u7uqdU
          source_id: s_HSDY-2UDeAQgJ4hvMYHYT8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126694 王䋊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_sn9KZzCF4Seq4v2EsCEM8N
        status: active
        display_name: 王䋊
        merged_into_person_id: null
---

# 王繩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繩 | accepted |
| bio.summary | 王繩，明人物。嘉靖八年進士，籍贯石首。（中国历代人物传记资料库 CBDB 288293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CMffgJkEHdtf2Ua3rJuHZ9 | 王璞 | accepted |
| other | p_sn9KZzCF4Seq4v2EsCEM8N | 王䋊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繩（CBDB 288293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288293&o=json)
