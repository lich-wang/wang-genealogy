---
schema: wang-person/v1
id: p_qpXowMgyHyNwAFFkG4Vfky
status: active
merged_into: null
display_name: 王璟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iBYxPVHfiFCVRwxqoiq3C3
        subject_person_id: p_qpXowMgyHyNwAFFkG4Vfky
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tm7x33REJtRdjrq9pj6ZFs
          claim_id: c_iBYxPVHfiFCVRwxqoiq3C3
          source_id: s_ksJLg6G3hn4yYEiD7b53cE
          stance: supports
          locator: CBDB:241143
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241143）
          source: &a1
            id: s_ksJLg6G3hn4yYEiD7b53cE
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 241143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241143&o=json
            external_identifier: CBDB:241143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3eqy2DXencd8VoXD8Mhgb4
        subject_person_id: p_qpXowMgyHyNwAFFkG4Vfky
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241143）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T8RyEQUjRU7Oqr2f9k_97N
          claim_id: c_3eqy2DXencd8VoXD8Mhgb4
          source_id: s_ksJLg6G3hn4yYEiD7b53cE
          stance: supports
          locator: CBDB:241143
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XNiv7jWmrPWOGiZMmDa1HH
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qpXowMgyHyNwAFFkG4Vfky
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XrHHpsopIzyxiN9m2ev8P3
          claim_id: c_XNiv7jWmrPWOGiZMmDa1HH
          source_id: s___JZAw4TrrYB5-hraLM2SN
          stance: supports
          locator: CBDB：兄弟 王璽（126869）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王璟 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璟 之父／母。
          source:
            id: s___JZAw4TrrYB5-hraLM2SN
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 241143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241143&o=json
            external_identifier: CBDB:241143
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
        id: c_wh1s7MmNSovQqvHJBzvlMp
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qpXowMgyHyNwAFFkG4Vfky
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qqH8BNJBMbCCgEUAMjojff
          claim_id: c_wh1s7MmNSovQqvHJBzvlMp
          source_id: s___JZAw4TrrYB5-hraLM2SN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s___JZAw4TrrYB5-hraLM2SN
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 241143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241143&o=json
            external_identifier: CBDB:241143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bF6WY3wgJWVigFgpBLaV3H
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| bio.summary | 王璟，明人物。正統十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 241143） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5CsnxPJ1Pqskb685MNmLx9 | 王鎬 | accepted |
| other | p_bF6WY3wgJWVigFgpBLaV3H | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 241143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241143&o=json)
