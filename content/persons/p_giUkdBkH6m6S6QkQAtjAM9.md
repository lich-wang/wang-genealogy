---
schema: wang-person/v1
id: p_giUkdBkH6m6S6QkQAtjAM9
status: active
merged_into: null
display_name: 王汝甫
cbdb_id: 290266
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FhLRg3RSof84Wb3Kh4gtFD
        subject_person_id: p_giUkdBkH6m6S6QkQAtjAM9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝甫，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290266）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fPK5WRmGakX1BVxcLCWcxH
          claim_id: c_FhLRg3RSof84Wb3Kh4gtFD
          source_id: s_Q15mQK6VkN1vesUR7h5aFf
          stance: supports
          locator: CBDB:290266
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Q15mQK6VkN1vesUR7h5aFf
            source_type: api_record
            title: 中国历代人物传记资料库：王汝甫（CBDB 290266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290266&o=json
            external_identifier: CBDB:290266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J7EjWWVt4Joa32AVUVbdFd
        subject_person_id: p_giUkdBkH6m6S6QkQAtjAM9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N2bKTzF1xfqZnC75omXsWu
          claim_id: c_J7EjWWVt4Joa32AVUVbdFd
          source_id: s_Q15mQK6VkN1vesUR7h5aFf
          stance: supports
          locator: CBDB:290266
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dPsjcc_24iEZpVWOgTybwa
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_giUkdBkH6m6S6QkQAtjAM9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hC57z6EHd9PZzp5mr7Drxy
          claim_id: c_dPsjcc_24iEZpVWOgTybwa
          source_id: s_rcCNl-aUYvxDJi8hiaFfUl
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝甫 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝甫 之父／母。
          source:
            id: s_rcCNl-aUYvxDJi8hiaFfUl
            source_type: api_record
            title: 中国历代人物传记资料库：王汝甫（CBDB 290266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290266&o=json
            external_identifier: CBDB:290266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C5NJgthLEeWbSTDMxHE6iV
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HOeh1T8If3lsG3L9cPDjbv
        subject_person_id: p_Td2fuKuEoYV2zfraAXswcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_giUkdBkH6m6S6QkQAtjAM9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CNa_9xDWjXBez_-0OR8jUW
          claim_id: c_HOeh1T8If3lsG3L9cPDjbv
          source_id: s_rcCNl-aUYvxDJi8hiaFfUl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rcCNl-aUYvxDJi8hiaFfUl
            source_type: api_record
            title: 中国历代人物传记资料库：王汝甫（CBDB 290266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290266&o=json
            external_identifier: CBDB:290266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Td2fuKuEoYV2zfraAXswcd
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
---

# 王汝甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝甫，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290266） | accepted |
| name.primary | 王汝甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5NJgthLEeWbSTDMxHE6iV | 王寧 | accepted |
| other | p_Td2fuKuEoYV2zfraAXswcd | 王汝楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝甫（CBDB 290266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290266&o=json)
