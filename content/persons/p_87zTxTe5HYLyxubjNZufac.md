---
schema: wang-person/v1
id: p_87zTxTe5HYLyxubjNZufac
status: active
merged_into: null
display_name: 王學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JHGBfNc6urvMBKr2Y4x1Xa
        subject_person_id: p_87zTxTe5HYLyxubjNZufac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6FeccA7252eMWqcNFU7FHk
          claim_id: c_JHGBfNc6urvMBKr2Y4x1Xa
          source_id: s_D3PtxNm1hfrv8KsrX8hKEF
          stance: supports
          locator: CBDB:217542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217542）
          source: &a1
            id: s_D3PtxNm1hfrv8KsrX8hKEF
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 217542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217542&o=json
            external_identifier: CBDB:217542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KbFvRJ91hAwbu1fS1hnWqn
        subject_person_id: p_87zTxTe5HYLyxubjNZufac
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217542）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_49KCGt4Ywbh3P5rLJG0_df
          claim_id: c_KbFvRJ91hAwbu1fS1hnWqn
          source_id: s_D3PtxNm1hfrv8KsrX8hKEF
          stance: supports
          locator: CBDB:217542
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v1CcWKGPuQ7vQjqYVnRMKY
        subject_person_id: p_HYAxuxv91NAAWnNdh2JAm1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_87zTxTe5HYLyxubjNZufac
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mqc9ubAZ2gqYa73hH1qO81
          claim_id: c_v1CcWKGPuQ7vQjqYVnRMKY
          source_id: s_e8aLWdtOiz2dqs_-bi_HeJ
          stance: supports
          locator: CBDB：兄弟 王元（206402）之父／母 王大訓
          quotation: null
          interpretation_note: 由兄弟关系推断：王學 与 王元 为同胞（CBDB 记「弟」），王元 之父／母即 王學 之父／母。
          source:
            id: s_e8aLWdtOiz2dqs_-bi_HeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 217542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217542&o=json
            external_identifier: CBDB:217542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HYAxuxv91NAAWnNdh2JAm1
        status: active
        display_name: 王大訓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Nrz95YYjHxVteCdNd_1v9k
        subject_person_id: p_87zTxTe5HYLyxubjNZufac
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wxJ8aogLoBExSp8myCzDUq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kqcanrsIyey-FsJlkzlh8t
          claim_id: c_Nrz95YYjHxVteCdNd_1v9k
          source_id: s_e8aLWdtOiz2dqs_-bi_HeJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206402 王元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e8aLWdtOiz2dqs_-bi_HeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 217542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217542&o=json
            external_identifier: CBDB:217542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wxJ8aogLoBExSp8myCzDUq
        status: active
        display_name: 王元
        merged_into_person_id: null
---

# 王學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學 | accepted |
| bio.summary | 王學，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217542） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HYAxuxv91NAAWnNdh2JAm1 | 王大訓 | accepted |
| other | p_wxJ8aogLoBExSp8myCzDUq | 王元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學（CBDB 217542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217542&o=json)
