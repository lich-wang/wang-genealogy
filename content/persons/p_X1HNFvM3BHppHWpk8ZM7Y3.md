---
schema: wang-person/v1
id: p_X1HNFvM3BHppHWpk8ZM7Y3
status: active
merged_into: null
display_name: 王弘耀
cbdb_id: 241178
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jchDYFw3fkQrTuFw74PSEZ
        subject_person_id: p_X1HNFvM3BHppHWpk8ZM7Y3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘耀，明人物。正統十三年進士，籍贯南靖。（中国历代人物传记资料库 CBDB 241178）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IJRF9dFjGu2YfyswDVU-0C
          claim_id: c_jchDYFw3fkQrTuFw74PSEZ
          source_id: s_nqBMUz2ymtNsN7SkGuc3XR
          stance: supports
          locator: CBDB:241178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nqBMUz2ymtNsN7SkGuc3XR
            source_type: api_record
            title: 中国历代人物传记资料库：王弘耀（CBDB 241178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241178&o=json
            external_identifier: CBDB:241178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sBCWWGVvBkNuJKzGu9oEsR
        subject_person_id: p_X1HNFvM3BHppHWpk8ZM7Y3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W925RqHzFyjBu1Ee6P3wpJ
          claim_id: c_sBCWWGVvBkNuJKzGu9oEsR
          source_id: s_nqBMUz2ymtNsN7SkGuc3XR
          stance: supports
          locator: CBDB:241178
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ptcCumbeusYOvMOboznSaW
        subject_person_id: p_6Tbz6rZoK81ZB5BwdE41k7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X1HNFvM3BHppHWpk8ZM7Y3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QfE0l5VVU4rge6ThLbgst-
          claim_id: c_ptcCumbeusYOvMOboznSaW
          source_id: s_a2mGq3EqOLR3Lz8UfkKlaT
          stance: supports
          locator: CBDB：兄弟 王玭（208155）之父／母 王興弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘耀 与 王玭 为同胞（CBDB 记「弟」），王玭 之父／母即 王弘耀 之父／母。
          source:
            id: s_a2mGq3EqOLR3Lz8UfkKlaT
            source_type: api_record
            title: 中国历代人物传记资料库：王弘耀（CBDB 241178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241178&o=json
            external_identifier: CBDB:241178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6Tbz6rZoK81ZB5BwdE41k7
        status: active
        display_name: 王興弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MMo2qdD9DuFG-NcEs1tLrJ
        subject_person_id: p_GZ9FC3xVw4crRVvp7UDQTX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_X1HNFvM3BHppHWpk8ZM7Y3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbWRGbYaBZ0lvFK2gQdoKz
          claim_id: c_MMo2qdD9DuFG-NcEs1tLrJ
          source_id: s_a2mGq3EqOLR3Lz8UfkKlaT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208155 王玭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a2mGq3EqOLR3Lz8UfkKlaT
            source_type: api_record
            title: 中国历代人物传记资料库：王弘耀（CBDB 241178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241178&o=json
            external_identifier: CBDB:241178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GZ9FC3xVw4crRVvp7UDQTX
        status: active
        display_name: 王玭
        merged_into_person_id: null
---

# 王弘耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘耀，明人物。正統十三年進士，籍贯南靖。（中国历代人物传记资料库 CBDB 241178） | accepted |
| name.primary | 王弘耀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Tbz6rZoK81ZB5BwdE41k7 | 王興弼 | accepted |
| other | p_GZ9FC3xVw4crRVvp7UDQTX | 王玭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘耀（CBDB 241178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241178&o=json)
