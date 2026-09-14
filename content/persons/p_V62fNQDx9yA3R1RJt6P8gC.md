---
schema: wang-person/v1
id: p_V62fNQDx9yA3R1RJt6P8gC
status: active
merged_into: null
display_name: 王汝嘉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c4Pqsaarz4QfDPoakM9QVP
        subject_person_id: p_V62fNQDx9yA3R1RJt6P8gC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Cwxd8aik3LojqoL7oChDz
          claim_id: c_c4Pqsaarz4QfDPoakM9QVP
          source_id: s_AmWZKJhC6ipmC4NrfWofvh
          stance: supports
          locator: CBDB:314227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314227）
          source: &a1
            id: s_AmWZKJhC6ipmC4NrfWofvh
            source_type: api_record
            title: 中国历代人物传记资料库：王汝嘉（CBDB 314227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314227&o=json
            external_identifier: CBDB:314227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ANM12znj1UM8t6iWrU2Mcw
        subject_person_id: p_V62fNQDx9yA3R1RJt6P8gC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝嘉，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314227）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_13q4-DV_HoqcGkARuMQ-_l
          claim_id: c_ANM12znj1UM8t6iWrU2Mcw
          source_id: s_AmWZKJhC6ipmC4NrfWofvh
          stance: supports
          locator: CBDB:314227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1FQXN4j--Wwt6zh5J2Vgjz
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V62fNQDx9yA3R1RJt6P8gC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z92zNJHGXQ5yfE46S5d_05
          claim_id: c_1FQXN4j--Wwt6zh5J2Vgjz
          source_id: s_UB1jiP1durdCGn9cxbkEi5
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝嘉 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝嘉 之父／母。
          source:
            id: s_UB1jiP1durdCGn9cxbkEi5
            source_type: api_record
            title: 中国历代人物传记资料库：王汝嘉（CBDB 314227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314227&o=json
            external_identifier: CBDB:314227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jp7Who27nqLM3Z2dWPqF3U
        status: active
        display_name: 王銓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QqRb1V1AfxFSnZ-8I8AbIB
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V62fNQDx9yA3R1RJt6P8gC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8TEmny9VOn2WhN-o-c2dBp
          claim_id: c_QqRb1V1AfxFSnZ-8I8AbIB
          source_id: s_UB1jiP1durdCGn9cxbkEi5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UB1jiP1durdCGn9cxbkEi5
            source_type: api_record
            title: 中国历代人物传记资料库：王汝嘉（CBDB 314227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314227&o=json
            external_identifier: CBDB:314227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        status: active
        display_name: 王汝述
        merged_into_person_id: null
---

# 王汝嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝嘉 | accepted |
| bio.summary | 王汝嘉，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jp7Who27nqLM3Z2dWPqF3U | 王銓 | accepted |
| other | p_FJ5VCJ2dfQ9YvKZT3bmX4c | 王汝述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝嘉（CBDB 314227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314227&o=json)
