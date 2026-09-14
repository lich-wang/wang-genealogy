---
schema: wang-person/v1
id: p_6ty1kreQG6ZpsK6jqSaE8y
status: active
merged_into: null
display_name: 王淑喬
cbdb_id: 331191
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p5Mbxiv5y721LZ4PqC9eet
        subject_person_id: p_6ty1kreQG6ZpsK6jqSaE8y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑喬，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331191）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_E8bNfB3fc6RixsDI-5m6BP
          claim_id: c_p5Mbxiv5y721LZ4PqC9eet
          source_id: s_izyae5E9aNhvwHDxzdAMjv
          stance: supports
          locator: CBDB:331191
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_izyae5E9aNhvwHDxzdAMjv
            source_type: api_record
            title: 中国历代人物传记资料库：王淑喬（CBDB 331191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331191&o=json
            external_identifier: CBDB:331191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JgnE1QGB746WfJD5zN1UEP
        subject_person_id: p_6ty1kreQG6ZpsK6jqSaE8y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑喬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ty2UvEZLWHhQY3JDvtAND6
          claim_id: c_JgnE1QGB746WfJD5zN1UEP
          source_id: s_izyae5E9aNhvwHDxzdAMjv
          stance: supports
          locator: CBDB:331191
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gre8ZQjAWaCP9qMyNudPKZ
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ty1kreQG6ZpsK6jqSaE8y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IS4MDrcFWg_jic4nuXDp5o
          claim_id: c_gre8ZQjAWaCP9qMyNudPKZ
          source_id: s_5WTSeoO6Pkslgjy3OQpETo
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑喬 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑喬 之父／母。
          source:
            id: s_5WTSeoO6Pkslgjy3OQpETo
            source_type: api_record
            title: 中国历代人物传记资料库：王淑喬（CBDB 331191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331191&o=json
            external_identifier: CBDB:331191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EAZM89Bzp2rJpVY7G33zZx
        subject_person_id: p_6ty1kreQG6ZpsK6jqSaE8y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Mty9BM_35LKnWT6FuUt07
          claim_id: c_EAZM89Bzp2rJpVY7G33zZx
          source_id: s_5WTSeoO6Pkslgjy3OQpETo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5WTSeoO6Pkslgjy3OQpETo
            source_type: api_record
            title: 中国历代人物传记资料库：王淑喬（CBDB 331191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331191&o=json
            external_identifier: CBDB:331191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
---

# 王淑喬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑喬，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331191） | accepted |
| name.primary | 王淑喬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| other | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑喬（CBDB 331191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331191&o=json)
