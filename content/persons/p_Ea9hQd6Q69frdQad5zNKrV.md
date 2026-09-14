---
schema: wang-person/v1
id: p_Ea9hQd6Q69frdQad5zNKrV
status: active
merged_into: null
display_name: 王冕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GESuhwhZYNqQz8dbvJnvzc
        subject_person_id: p_Ea9hQd6Q69frdQad5zNKrV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V4YJHU4ZaMq14Q3AfEwChs
          claim_id: c_GESuhwhZYNqQz8dbvJnvzc
          source_id: s_fsMg6tm1t2Q8XQLhYX9VsE
          stance: supports
          locator: CBDB:257034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257034）
          source: &a1
            id: s_fsMg6tm1t2Q8XQLhYX9VsE
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 257034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257034&o=json
            external_identifier: CBDB:257034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MUY85xDDapNRSMwvs9aaCk
        subject_person_id: p_Ea9hQd6Q69frdQad5zNKrV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QOgGBmDS5nzHJDKoVPIZvi
          claim_id: c_MUY85xDDapNRSMwvs9aaCk
          source_id: s_fsMg6tm1t2Q8XQLhYX9VsE
          stance: supports
          locator: CBDB:257034
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_29QG2Q8pw0bqMrUa2Pqrzc
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ea9hQd6Q69frdQad5zNKrV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0MxYmHWJxdOYCtfUb7jPtj
          claim_id: c_29QG2Q8pw0bqMrUa2Pqrzc
          source_id: s_bWCrqxa_SxdJT3jXkdxMYU
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王冕 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王冕 之父／母。
          source:
            id: s_bWCrqxa_SxdJT3jXkdxMYU
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 257034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257034&o=json
            external_identifier: CBDB:257034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sQKFgBKrX6N7mKYfJwtry2
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_viiJHggr3DYX9xeZQ3ZtN1
        subject_person_id: p_Ea9hQd6Q69frdQad5zNKrV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J53hY3L1cqoWbbj5Zn-EvF
          claim_id: c_viiJHggr3DYX9xeZQ3ZtN1
          source_id: s_bWCrqxa_SxdJT3jXkdxMYU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bWCrqxa_SxdJT3jXkdxMYU
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 257034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257034&o=json
            external_identifier: CBDB:257034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y6fRdWmSHjB68krJYq7FPT
        status: active
        display_name: 王杲
        merged_into_person_id: null
---

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| bio.summary | 王冕，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sQKFgBKrX6N7mKYfJwtry2 | 王洪 | accepted |
| other | p_Y6fRdWmSHjB68krJYq7FPT | 王杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 257034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257034&o=json)
