---
schema: wang-person/v1
id: p_asUa71ZMBMEaaffPVDnbLN
status: active
merged_into: null
display_name: 王擇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DeasBWe3ZyB5XtUNGUpGXK
        subject_person_id: p_asUa71ZMBMEaaffPVDnbLN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dBz1BQkkXwWM4gYQC5H4p2
          claim_id: c_DeasBWe3ZyB5XtUNGUpGXK
          source_id: s_WbXEZxEVD1N6YgAsoKGRAD
          stance: supports
          locator: CBDB:234430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（234430）
          source: &a1
            id: s_WbXEZxEVD1N6YgAsoKGRAD
            source_type: api_record
            title: 中国历代人物传记资料库：王擇（CBDB 234430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234430&o=json
            external_identifier: CBDB:234430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uM1BYjxq2V321wpqoXdNuW
        subject_person_id: p_asUa71ZMBMEaaffPVDnbLN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擇，明人物。籍贯汶上。（中国历代人物传记资料库 CBDB 234430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qTYT0yQcZlab9NJSoyOs0j
          claim_id: c_uM1BYjxq2V321wpqoXdNuW
          source_id: s_WbXEZxEVD1N6YgAsoKGRAD
          stance: supports
          locator: CBDB:234430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4blJpC0Tm9x9ee-l1-P5fg
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_asUa71ZMBMEaaffPVDnbLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DurPxdLhaRZL8pMoSlbCyW
          claim_id: c_4blJpC0Tm9x9ee-l1-P5fg
          source_id: s_NoOB645o0_2lDnYBq2aSMC
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王擇 与 王命新 为同胞（CBDB 记「弟」），王命新 之父／母即 王擇 之父／母。
          source:
            id: s_NoOB645o0_2lDnYBq2aSMC
            source_type: api_record
            title: 中国历代人物传记资料库：王擇（CBDB 234430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234430&o=json
            external_identifier: CBDB:234430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RBDo1mCVNx525KP3Mg5Mqx
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AfUAGw-FklrIQRbU7H1BYK
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_asUa71ZMBMEaaffPVDnbLN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JDjUREztfn0yg6qCWfjcB-
          claim_id: c_AfUAGw-FklrIQRbU7H1BYK
          source_id: s_NoOB645o0_2lDnYBq2aSMC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207714 王命新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NoOB645o0_2lDnYBq2aSMC
            source_type: api_record
            title: 中国历代人物传记资料库：王擇（CBDB 234430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234430&o=json
            external_identifier: CBDB:234430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KesiNQLM6qJRi25qiHTy12
        status: active
        display_name: 王命新
        merged_into_person_id: null
---

# 王擇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王擇 | accepted |
| bio.summary | 王擇，明人物。籍贯汶上。（中国历代人物传记资料库 CBDB 234430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RBDo1mCVNx525KP3Mg5Mqx | 王鉞 | accepted |
| other | p_KesiNQLM6qJRi25qiHTy12 | 王命新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王擇（CBDB 234430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234430&o=json)
