---
schema: wang-person/v1
id: p_HKDr4WqMxqe47AmDhxrfoZ
status: active
merged_into: null
display_name: 王汝揆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Agou5LS312c7F8jnjtwza6
        subject_person_id: p_HKDr4WqMxqe47AmDhxrfoZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝揆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VSv6Y6R6yuAMXrraTA8js6
          claim_id: c_Agou5LS312c7F8jnjtwza6
          source_id: s_1JfNxqNyAafd6MwUuB8mFR
          stance: supports
          locator: CBDB:290269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290269）
          source: &a1
            id: s_1JfNxqNyAafd6MwUuB8mFR
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 290269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json
            external_identifier: CBDB:290269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5KwAAbSP25SdXn4LMN8eqv
        subject_person_id: p_HKDr4WqMxqe47AmDhxrfoZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝揆，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290269）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hABH-z97rNxf2IetU9S3LZ
          claim_id: c_5KwAAbSP25SdXn4LMN8eqv
          source_id: s_1JfNxqNyAafd6MwUuB8mFR
          stance: supports
          locator: CBDB:290269
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KctSereS-wIryP20Ciq4qo
        subject_person_id: p_C5NJgthLEeWbSTDMxHE6iV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HKDr4WqMxqe47AmDhxrfoZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSFMIj62l19A6IhRBU5Pcc
          claim_id: c_KctSereS-wIryP20Ciq4qo
          source_id: s_Aq2lWW-28AWyUfOyBW6aur
          stance: supports
          locator: CBDB：兄弟 王汝楫（202580）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝揆 与 王汝楫 为同胞（CBDB 记「兄」），王汝楫 之父／母即 王汝揆 之父／母。
          source:
            id: s_Aq2lWW-28AWyUfOyBW6aur
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 290269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json
            external_identifier: CBDB:290269
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
        id: c_frZYqXh1kXkKOvtSfC3W4N
        subject_person_id: p_HKDr4WqMxqe47AmDhxrfoZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vUXM4RK7UMMnEs4KWTjc0G
          claim_id: c_frZYqXh1kXkKOvtSfC3W4N
          source_id: s_Aq2lWW-28AWyUfOyBW6aur
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202580 王汝楫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Aq2lWW-28AWyUfOyBW6aur
            source_type: api_record
            title: 中国历代人物传记资料库：王汝揆（CBDB 290269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json
            external_identifier: CBDB:290269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Td2fuKuEoYV2zfraAXswcd
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
---

# 王汝揆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝揆 | accepted |
| bio.summary | 王汝揆，明人物。嘉靖八年進士，籍贯德州。（中国历代人物传记资料库 CBDB 290269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5NJgthLEeWbSTDMxHE6iV | 王寧 | accepted |
| other | p_Td2fuKuEoYV2zfraAXswcd | 王汝楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝揆（CBDB 290269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290269&o=json)
