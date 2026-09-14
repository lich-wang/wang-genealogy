---
schema: wang-person/v1
id: p_eb1X6Pc72zAV4ipT7go8w4
status: active
merged_into: null
display_name: 王懷珍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pd5aU6BLgW373jMiEGK3mo
        subject_person_id: p_eb1X6Pc72zAV4ipT7go8w4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LH8Yef8wBi6pz4pUHz6Wem
          claim_id: c_Pd5aU6BLgW373jMiEGK3mo
          source_id: s_Yi7G7YGCW1ud2QvrLxJge5
          stance: supports
          locator: CBDB:256343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256343）
          source: &a1
            id: s_Yi7G7YGCW1ud2QvrLxJge5
            source_type: api_record
            title: 中国历代人物传记资料库：王懷珍（CBDB 256343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json
            external_identifier: CBDB:256343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4uK6zRpyd5dH3QwErAAKjN
        subject_person_id: p_eb1X6Pc72zAV4ipT7go8w4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷珍，明人物。成化十七年進士，籍贯陽曲。（中国历代人物传记资料库 CBDB 256343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VBkxJcbYZuuOeZDCSWmAyZ
          claim_id: c_4uK6zRpyd5dH3QwErAAKjN
          source_id: s_Yi7G7YGCW1ud2QvrLxJge5
          stance: supports
          locator: CBDB:256343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b9U0DGTyMTMsXQFIuUsFhK
        subject_person_id: p_nM4qfbcaYVkmZPA3x1iCHz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eb1X6Pc72zAV4ipT7go8w4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5pgwFvh71xxd7O7I3mHaiR
          claim_id: c_b9U0DGTyMTMsXQFIuUsFhK
          source_id: s_SXrXspL_42x-Q-YzHYAH7m
          stance: supports
          locator: CBDB：兄弟 王槐（200324）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王懷珍 与 王槐 为同胞（CBDB 记「弟」），王槐 之父／母即 王懷珍 之父／母。
          source:
            id: s_SXrXspL_42x-Q-YzHYAH7m
            source_type: api_record
            title: 中国历代人物传记资料库：王懷珍（CBDB 256343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json
            external_identifier: CBDB:256343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nM4qfbcaYVkmZPA3x1iCHz
        status: active
        display_name: 王英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RLdn8Gw8rOpieZjyPUxbLV
        subject_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eb1X6Pc72zAV4ipT7go8w4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0a-7E6XZxizIHaKnVxRfI3
          claim_id: c_RLdn8Gw8rOpieZjyPUxbLV
          source_id: s_SXrXspL_42x-Q-YzHYAH7m
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200324 王槐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SXrXspL_42x-Q-YzHYAH7m
            source_type: api_record
            title: 中国历代人物传记资料库：王懷珍（CBDB 256343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json
            external_identifier: CBDB:256343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4vr7bkbajYb5aZb5N7UFqC
        status: active
        display_name: 王槐
        merged_into_person_id: null
---

# 王懷珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷珍 | accepted |
| bio.summary | 王懷珍，明人物。成化十七年進士，籍贯陽曲。（中国历代人物传记资料库 CBDB 256343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nM4qfbcaYVkmZPA3x1iCHz | 王英 | accepted |
| other | p_4vr7bkbajYb5aZb5N7UFqC | 王槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷珍（CBDB 256343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json)
