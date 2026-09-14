---
schema: wang-person/v1
id: p_U8AjFQt88s8AU7AYuUhZ1K
status: active
merged_into: null
display_name: 王恪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UQKUWfGviN5E9UHEjFA2NF
        subject_person_id: p_U8AjFQt88s8AU7AYuUhZ1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i65JEbwA2GSdTCt6E495NW
          claim_id: c_UQKUWfGviN5E9UHEjFA2NF
          source_id: s_oz4JJw2Cj22L24uApEoV8q
          stance: supports
          locator: CBDB:255196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255196）
          source: &a1
            id: s_oz4JJw2Cj22L24uApEoV8q
            source_type: api_record
            title: 中国历代人物传记资料库：王恪（CBDB 255196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255196&o=json
            external_identifier: CBDB:255196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QviuZ1mGdAXPWjRdnBa98u
        subject_person_id: p_U8AjFQt88s8AU7AYuUhZ1K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪，明人物。成化十七年進士，籍贯遂昌。（中国历代人物传记资料库 CBDB 255196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_njaAgapiIIB6j5gW32bkmP
          claim_id: c_QviuZ1mGdAXPWjRdnBa98u
          source_id: s_oz4JJw2Cj22L24uApEoV8q
          stance: supports
          locator: CBDB:255196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_fjK5xkTrjhA9J7fxinn84J
        status: active
        display_name: 王思武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5zDrAl4DyMGwEZFSYbONu2
        subject_person_id: p_U8AjFQt88s8AU7AYuUhZ1K
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wWApByJ4C128PwLJ8AeXkW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TmQV9Wytsey0sXi5GdAoX3
          claim_id: c_5zDrAl4DyMGwEZFSYbONu2
          source_id: s_azGqpb9ik505BmOy1QdO7K
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200231 王玘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_wWApByJ4C128PwLJ8AeXkW
        status: active
        display_name: 王玘
        merged_into_person_id: null
---

# 王恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恪 | accepted |
| bio.summary | 王恪，明人物。成化十七年進士，籍贯遂昌。（中国历代人物传记资料库 CBDB 255196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fjK5xkTrjhA9J7fxinn84J | 王思武 | accepted |
| other | p_wWApByJ4C128PwLJ8AeXkW | 王玘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恪（CBDB 255196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255196&o=json)
