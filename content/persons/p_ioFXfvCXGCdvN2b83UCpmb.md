---
schema: wang-person/v1
id: p_ioFXfvCXGCdvN2b83UCpmb
status: active
merged_into: null
display_name: 王敏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pjf25p5fioJC3JMtZKGsZb
        subject_person_id: p_ioFXfvCXGCdvN2b83UCpmb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_99HBs28LB4mJLRv6M7JvZj
          claim_id: c_Pjf25p5fioJC3JMtZKGsZb
          source_id: s_peGD2jJEhaiuq6sMDF53z1
          stance: supports
          locator: CBDB:293451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293451）
          source: &a1
            id: s_peGD2jJEhaiuq6sMDF53z1
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 293451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293451&o=json
            external_identifier: CBDB:293451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hzSCWqLRCARjcm7FY8SKPL
        subject_person_id: p_ioFXfvCXGCdvN2b83UCpmb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏，明人物。天順元年進士，籍贯福清。（中国历代人物传记资料库 CBDB 293451）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GHQ5ePfVEfOnjbtM2ZLE94
          claim_id: c_hzSCWqLRCARjcm7FY8SKPL
          source_id: s_peGD2jJEhaiuq6sMDF53z1
          stance: supports
          locator: CBDB:293451
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z4-fYpzaGhymuqymUk-AmT
        subject_person_id: p_W9ZtR1XxvGkrodjCFZhZJj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ioFXfvCXGCdvN2b83UCpmb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3gXImx2-ZmjGk9yqb7b7g-
          claim_id: c_Z4-fYpzaGhymuqymUk-AmT
          source_id: s_0ZzVyX56w-pTZctYaNpmDq
          stance: supports
          locator: CBDB：兄弟 王克復（126540）之父／母 王朋
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王克復 为同胞（CBDB 记「弟」），王克復 之父／母即 王敏 之父／母。
          source:
            id: s_0ZzVyX56w-pTZctYaNpmDq
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 293451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293451&o=json
            external_identifier: CBDB:293451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W9ZtR1XxvGkrodjCFZhZJj
        status: active
        display_name: 王朋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ko1xyPf53nrB0D8fQJkZ8D
        subject_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ioFXfvCXGCdvN2b83UCpmb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q45YQVR_ymUDeMogTS9pM6
          claim_id: c_Ko1xyPf53nrB0D8fQJkZ8D
          source_id: s_0ZzVyX56w-pTZctYaNpmDq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126540 王克復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0ZzVyX56w-pTZctYaNpmDq
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 293451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293451&o=json
            external_identifier: CBDB:293451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AV2ZgKZQXWPMrvp5xNJqFj
        status: active
        display_name: 王克復
        merged_into_person_id: null
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | 王敏，明人物。天順元年進士，籍贯福清。（中国历代人物传记资料库 CBDB 293451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W9ZtR1XxvGkrodjCFZhZJj | 王朋 | accepted |
| other | p_AV2ZgKZQXWPMrvp5xNJqFj | 王克復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 293451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293451&o=json)
