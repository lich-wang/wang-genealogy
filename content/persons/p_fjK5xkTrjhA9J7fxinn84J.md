---
schema: wang-person/v1
id: p_fjK5xkTrjhA9J7fxinn84J
status: active
merged_into: null
display_name: 王思武
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_82xdaXFtPkhvX3f7EfqBeC
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3E3jKH3p1k4mw8awV5ySfa
          claim_id: c_82xdaXFtPkhvX3f7EfqBeC
          source_id: s_AdRUVTjS2EN7ctZGmapXud
          stance: supports
          locator: CBDB:255187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255187）
          source: &a1
            id: s_AdRUVTjS2EN7ctZGmapXud
            source_type: api_record
            title: 中国历代人物传记资料库：王思武（CBDB 255187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255187&o=json
            external_identifier: CBDB:255187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RayAedYTyG3KdJAQMHxuLq
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思武，明人物。成化十七年進士，籍贯遂昌。（中国历代人物传记资料库 CBDB 255187）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EccrfMLUIQUYG01XJi69_b
          claim_id: c_RayAedYTyG3KdJAQMHxuLq
          source_id: s_AdRUVTjS2EN7ctZGmapXud
          stance: supports
          locator: CBDB:255187
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kkRaXDcfCVLtMeegbgHIez
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wWApByJ4C128PwLJ8AeXkW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAHiblJ6euVNr-iTWrC76m
          claim_id: c_kkRaXDcfCVLtMeegbgHIez
          source_id: s_AdRUVTjS2EN7ctZGmapXud
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wWApByJ4C128PwLJ8AeXkW
        status: active
        display_name: 王玘
        merged_into_person_id: null
    - claim:
        id: c_lg0FCn6teIKY5ZjJhSpaat
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3kEwPpA9xg8Pbg6a5R2KWj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7rj61eZc3pbh8xRHxJARp
          claim_id: c_lg0FCn6teIKY5ZjJhSpaat
          source_id: s_mN_SOToVH9t4SbRJt_F1Bq
          stance: supports
          locator: CBDB：兄弟 王玘（200231）之父／母 王思武
          quotation: null
          interpretation_note: 由兄弟关系推断：王爵 与 王玘 为同胞（CBDB 记「弟」），王玘 之父／母即 王爵 之父／母。
          source:
            id: s_mN_SOToVH9t4SbRJt_F1Bq
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 255193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255193&o=json
            external_identifier: CBDB:255193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3kEwPpA9xg8Pbg6a5R2KWj
        status: active
        display_name: 王爵
        merged_into_person_id: null
    - claim:
        id: c_af5WGM8oFxYrkwimMV7t3S
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U8AjFQt88s8AU7AYuUhZ1K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mkwm3eLOfEWtsCsXxKb6we
          claim_id: c_af5WGM8oFxYrkwimMV7t3S
          source_id: s_azGqpb9ik505BmOy1QdO7K
          stance: supports
          locator: CBDB：兄弟 王玘（200231）之父／母 王思武
          quotation: null
          interpretation_note: 由兄弟关系推断：王恪 与 王玘 为同胞（CBDB 记「弟」），王玘 之父／母即 王恪 之父／母。
          source:
            id: s_azGqpb9ik505BmOy1QdO7K
            source_type: api_record
            title: 中国历代人物传记资料库：王恪（CBDB 255196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255196&o=json
            external_identifier: CBDB:255196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U8AjFQt88s8AU7AYuUhZ1K
        status: active
        display_name: 王恪
        merged_into_person_id: null
    - claim:
        id: c_Tgv5WBeZUZPYz32A3vMKAQ
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kv8PFnExaktv99QEowPtqH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5_1_aYKpBQFrm1lgHoD4NZ
          claim_id: c_Tgv5WBeZUZPYz32A3vMKAQ
          source_id: s_pXdBMiYcV89XJEtDyRor-0
          stance: supports
          locator: CBDB：兄弟 王玘（200231）之父／母 王思武
          quotation: null
          interpretation_note: 由兄弟关系推断：王演 与 王玘 为同胞（CBDB 记「弟」），王玘 之父／母即 王演 之父／母。
          source:
            id: s_pXdBMiYcV89XJEtDyRor-0
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 255195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255195&o=json
            external_identifier: CBDB:255195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kv8PFnExaktv99QEowPtqH
        status: active
        display_name: 王演
        merged_into_person_id: null
    - claim:
        id: c_bfwSGFalv7VrNerDxi4aHX
        subject_person_id: p_fjK5xkTrjhA9J7fxinn84J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_prqcffTh7T73KXcvoyHt8o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s7yJOqd467DF0Dyxg3WPmA
          claim_id: c_bfwSGFalv7VrNerDxi4aHX
          source_id: s_D3nh7oIIiLf5a0Qj6ZsixO
          stance: supports
          locator: CBDB：兄弟 王玘（200231）之父／母 王思武
          quotation: null
          interpretation_note: 由兄弟关系推断：王允 与 王玘 为同胞（CBDB 记「弟」），王玘 之父／母即 王允 之父／母。
          source:
            id: s_D3nh7oIIiLf5a0Qj6ZsixO
            source_type: api_record
            title: 中国历代人物传记资料库：王允（CBDB 255194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255194&o=json
            external_identifier: CBDB:255194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_prqcffTh7T73KXcvoyHt8o
        status: active
        display_name: 王允
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思武 | accepted |
| bio.summary | 王思武，明人物。成化十七年進士，籍贯遂昌。（中国历代人物传记资料库 CBDB 255187） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wWApByJ4C128PwLJ8AeXkW | 王玘 | accepted |
| children | p_3kEwPpA9xg8Pbg6a5R2KWj | 王爵 | accepted |
| children | p_U8AjFQt88s8AU7AYuUhZ1K | 王恪 | accepted |
| children | p_kv8PFnExaktv99QEowPtqH | 王演 | accepted |
| children | p_prqcffTh7T73KXcvoyHt8o | 王允 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爵（CBDB 255193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255193&o=json)
- [中国历代人物传记资料库：王恪（CBDB 255196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255196&o=json)
- [中国历代人物传记资料库：王思武（CBDB 255187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255187&o=json)
- [中国历代人物传记资料库：王演（CBDB 255195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255195&o=json)
- [中国历代人物传记资料库：王允（CBDB 255194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255194&o=json)
