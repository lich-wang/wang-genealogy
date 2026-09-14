---
schema: wang-person/v1
id: p_BRk8GRJ9ALS1shYv5ub2na
status: active
merged_into: null
display_name: 王汝光
cbdb_id: 314230
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uEjndNjR1xVM7hfqeGx8eJ
        subject_person_id: p_BRk8GRJ9ALS1shYv5ub2na
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝光，明人物。嘉靖二十九年進士，籍贯金華，入仕監生。（中国历代人物传记资料库 CBDB 314230）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tLGCd7ilyqEwoKbBzGF78i
          claim_id: c_uEjndNjR1xVM7hfqeGx8eJ
          source_id: s_8yozzKbbtyrY9LZUeQQZJo
          stance: supports
          locator: CBDB:314230
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8yozzKbbtyrY9LZUeQQZJo
            source_type: api_record
            title: 中国历代人物传记资料库：王汝光（CBDB 314230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314230&o=json
            external_identifier: CBDB:314230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NWGyokyhXFzpW18adCt7HQ
        subject_person_id: p_BRk8GRJ9ALS1shYv5ub2na
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hKKRf8By3wxDenBGkgdH8Z
          claim_id: c_NWGyokyhXFzpW18adCt7HQ
          source_id: s_8yozzKbbtyrY9LZUeQQZJo
          stance: supports
          locator: CBDB:314230
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zxfxE7U5v3H9Sm2B3IEuA3
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BRk8GRJ9ALS1shYv5ub2na
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McQGiIkth0AMjIAMW8pGj9
          claim_id: c_zxfxE7U5v3H9Sm2B3IEuA3
          source_id: s_5FnxBodn9_iXWOQsLMUZvz
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝光 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝光 之父／母。
          source:
            id: s_5FnxBodn9_iXWOQsLMUZvz
            source_type: api_record
            title: 中国历代人物传记资料库：王汝光（CBDB 314230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314230&o=json
            external_identifier: CBDB:314230
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
        id: c_NKOQOhe9Wl3SU-hoEZRaQV
        subject_person_id: p_BRk8GRJ9ALS1shYv5ub2na
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1FpyKimpxuD7C18BuDYljb
          claim_id: c_NKOQOhe9Wl3SU-hoEZRaQV
          source_id: s_5FnxBodn9_iXWOQsLMUZvz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5FnxBodn9_iXWOQsLMUZvz
            source_type: api_record
            title: 中国历代人物传记资料库：王汝光（CBDB 314230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314230&o=json
            external_identifier: CBDB:314230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        status: active
        display_name: 王汝述
        merged_into_person_id: null
---

# 王汝光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝光，明人物。嘉靖二十九年進士，籍贯金華，入仕監生。（中国历代人物传记资料库 CBDB 314230） | accepted |
| name.primary | 王汝光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jp7Who27nqLM3Z2dWPqF3U | 王銓 | accepted |
| other | p_FJ5VCJ2dfQ9YvKZT3bmX4c | 王汝述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝光（CBDB 314230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314230&o=json)
