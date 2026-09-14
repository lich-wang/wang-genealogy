---
schema: wang-person/v1
id: p_mLduwh3PRLCgxrhBnwR2sb
status: active
merged_into: null
display_name: 王瑜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PHLVXS87E4BU4QVG93pEAu
        subject_person_id: p_mLduwh3PRLCgxrhBnwR2sb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_es3ARnMF8XkyuNkNQtL8gB
          claim_id: c_PHLVXS87E4BU4QVG93pEAu
          source_id: s_M6RUru4ZKe7QYMDceSiB4U
          stance: supports
          locator: CBDB:241144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241144）
          source: &a1
            id: s_M6RUru4ZKe7QYMDceSiB4U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 241144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json
            external_identifier: CBDB:241144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m371TnMxxGHCwyyrhAy1j2
        subject_person_id: p_mLduwh3PRLCgxrhBnwR2sb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NHjJ20M8KAzpSwF34hI0BB
          claim_id: c_m371TnMxxGHCwyyrhAy1j2
          source_id: s_M6RUru4ZKe7QYMDceSiB4U
          stance: supports
          locator: CBDB:241144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_if2AfVir-QS8bSYbuCgXlO
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLduwh3PRLCgxrhBnwR2sb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fV97zW3IG9G44C9OQmxu3a
          claim_id: c_if2AfVir-QS8bSYbuCgXlO
          source_id: s_j2aqBVao9rLAqJQ0WbYebp
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑜 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王瑜 之父／母。
          source:
            id: s_j2aqBVao9rLAqJQ0WbYebp
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 241144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json
            external_identifier: CBDB:241144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CsnxPJ1Pqskb685MNmLx9
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yg0jF-drqjYLa25ldCH0Ec
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mLduwh3PRLCgxrhBnwR2sb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oJANLGsAiq9PN7UTkfDyL1
          claim_id: c_yg0jF-drqjYLa25ldCH0Ec
          source_id: s_j2aqBVao9rLAqJQ0WbYebp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j2aqBVao9rLAqJQ0WbYebp
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 241144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json
            external_identifier: CBDB:241144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bF6WY3wgJWVigFgpBLaV3H
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | 王瑜，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5CsnxPJ1Pqskb685MNmLx9 | 王鎬 | accepted |
| other | p_bF6WY3wgJWVigFgpBLaV3H | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 241144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json)
