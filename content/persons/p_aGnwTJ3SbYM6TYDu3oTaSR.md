---
schema: wang-person/v1
id: p_aGnwTJ3SbYM6TYDu3oTaSR
status: active
merged_into: null
display_name: 王濬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1zYJBk14ttoeW1169MkW3e
        subject_person_id: p_aGnwTJ3SbYM6TYDu3oTaSR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CozabyTK39bQSDduiXST26
          claim_id: c_1zYJBk14ttoeW1169MkW3e
          source_id: s_3JP3sa17nmRG4n2816fWt5
          stance: supports
          locator: CBDB:282001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282001）
          source: &a1
            id: s_3JP3sa17nmRG4n2816fWt5
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 282001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282001&o=json
            external_identifier: CBDB:282001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RkYX5h5L77XciMY551hrXH
        subject_person_id: p_aGnwTJ3SbYM6TYDu3oTaSR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BMwjg81XiVZL3F2kKHcgUH
          claim_id: c_RkYX5h5L77XciMY551hrXH
          source_id: s_3JP3sa17nmRG4n2816fWt5
          stance: supports
          locator: CBDB:282001
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bJXEpAPqpwEhoctH7qA1VT
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aGnwTJ3SbYM6TYDu3oTaSR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTFqxG_0TmvV0AeUH9q8Nb
          claim_id: c_bJXEpAPqpwEhoctH7qA1VT
          source_id: s_EJnaySB4My-cIn_RtWbPKq
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王濬 与 王泮 为同胞（CBDB 记「弟」），王泮 之父／母即 王濬 之父／母。
          source:
            id: s_EJnaySB4My-cIn_RtWbPKq
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 282001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282001&o=json
            external_identifier: CBDB:282001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jk84ENYUVyTz1ayR9hKQUA
        status: active
        display_name: 王鋀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JQ5H2CUmYwKB_paGdPtxo0
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aGnwTJ3SbYM6TYDu3oTaSR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P3_CE_bz1HDKYVd0laIRPr
          claim_id: c_JQ5H2CUmYwKB_paGdPtxo0
          source_id: s_EJnaySB4My-cIn_RtWbPKq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EJnaySB4My-cIn_RtWbPKq
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 282001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282001&o=json
            external_identifier: CBDB:282001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_STyrVbhawRK5QNwptzbque
        status: active
        display_name: 王泮
        merged_into_person_id: null
---

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬 | accepted |
| bio.summary | 王濬，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jk84ENYUVyTz1ayR9hKQUA | 王鋀 | accepted |
| other | p_STyrVbhawRK5QNwptzbque | 王泮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 282001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282001&o=json)
