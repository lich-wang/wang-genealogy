---
schema: wang-person/v1
id: p_pXgJTHeMwK5XZyuVjyKWfY
status: active
merged_into: null
display_name: 王汝直
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TVJ47CUQFzn1BybSVhTKFg
        subject_person_id: p_pXgJTHeMwK5XZyuVjyKWfY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oESHRQ6oGXGTCzrzVQfaSR
          claim_id: c_TVJ47CUQFzn1BybSVhTKFg
          source_id: s_rsUxRyaD9UgGkrcXxzjF5s
          stance: supports
          locator: CBDB:314238
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314238）
          source: &a1
            id: s_rsUxRyaD9UgGkrcXxzjF5s
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 314238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314238&o=json
            external_identifier: CBDB:314238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yWK7fGjtPx5P85BBWz6JPi
        subject_person_id: p_pXgJTHeMwK5XZyuVjyKWfY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝直，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314238）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rMaaN4x21B-vx5qeJ6fHAW
          claim_id: c_yWK7fGjtPx5P85BBWz6JPi
          source_id: s_rsUxRyaD9UgGkrcXxzjF5s
          stance: supports
          locator: CBDB:314238
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pFW6bg_UJu_jrblEM85E5N
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pXgJTHeMwK5XZyuVjyKWfY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PR1y2V7W7h9CDar6UfYwpz
          claim_id: c_pFW6bg_UJu_jrblEM85E5N
          source_id: s_x4NNm0cYb2HD7_HZIe9ldE
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝直 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝直 之父／母。
          source:
            id: s_x4NNm0cYb2HD7_HZIe9ldE
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 314238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314238&o=json
            external_identifier: CBDB:314238
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
        id: c_f54O_t7hBe76ZrI_PUR9XH
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pXgJTHeMwK5XZyuVjyKWfY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rru-_ZrRlKgnPyaIjuiEam
          claim_id: c_f54O_t7hBe76ZrI_PUR9XH
          source_id: s_x4NNm0cYb2HD7_HZIe9ldE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x4NNm0cYb2HD7_HZIe9ldE
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 314238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314238&o=json
            external_identifier: CBDB:314238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        status: active
        display_name: 王汝述
        merged_into_person_id: null
---

# 王汝直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝直 | accepted |
| bio.summary | 王汝直，明人物。嘉靖二十九年進士，籍贯金華。（中国历代人物传记资料库 CBDB 314238） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jp7Who27nqLM3Z2dWPqF3U | 王銓 | accepted |
| other | p_FJ5VCJ2dfQ9YvKZT3bmX4c | 王汝述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝直（CBDB 314238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314238&o=json)
