---
schema: wang-person/v1
id: p_nk9HMkgY4xke8h5CW5tUKy
status: active
merged_into: null
display_name: 王汝倬
cbdb_id: 314236
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ArfG5jbt48rmcDLZr7woFy
        subject_person_id: p_nk9HMkgY4xke8h5CW5tUKy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝倬，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314236）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iHBpEp3xP7i6UlzQ-uXZ_y
          claim_id: c_ArfG5jbt48rmcDLZr7woFy
          source_id: s_2UCzZPQ515XM99pFHxLFi4
          stance: supports
          locator: CBDB:314236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2UCzZPQ515XM99pFHxLFi4
            source_type: api_record
            title: 中国历代人物传记资料库：王汝倬（CBDB 314236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314236&o=json
            external_identifier: CBDB:314236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bcYCFg92zZmBV7zmqHEyif
        subject_person_id: p_nk9HMkgY4xke8h5CW5tUKy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝倬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UtJR1Aeu9NJniqKFeppVCv
          claim_id: c_bcYCFg92zZmBV7zmqHEyif
          source_id: s_2UCzZPQ515XM99pFHxLFi4
          stance: supports
          locator: CBDB:314236
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S2DLtDQq2sPJWXbqUgj7-q
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nk9HMkgY4xke8h5CW5tUKy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HYtCLm34mBbq-YSSK5mZ8f
          claim_id: c_S2DLtDQq2sPJWXbqUgj7-q
          source_id: s_yDV44TBYtjMKNkem_1djEK
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝倬 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝倬 之父／母。
          source:
            id: s_yDV44TBYtjMKNkem_1djEK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝倬（CBDB 314236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314236&o=json
            external_identifier: CBDB:314236
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
        id: c_KUK4TGnB7kovECa81YwJYK
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nk9HMkgY4xke8h5CW5tUKy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KktCdVUReq7CWo62pnSY-V
          claim_id: c_KUK4TGnB7kovECa81YwJYK
          source_id: s_yDV44TBYtjMKNkem_1djEK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yDV44TBYtjMKNkem_1djEK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝倬（CBDB 314236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314236&o=json
            external_identifier: CBDB:314236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        status: active
        display_name: 王汝述
        merged_into_person_id: null
---

# 王汝倬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝倬，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314236） | accepted |
| name.primary | 王汝倬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jp7Who27nqLM3Z2dWPqF3U | 王銓 | accepted |
| other | p_FJ5VCJ2dfQ9YvKZT3bmX4c | 王汝述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝倬（CBDB 314236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314236&o=json)
