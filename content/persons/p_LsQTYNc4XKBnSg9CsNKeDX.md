---
schema: wang-person/v1
id: p_LsQTYNc4XKBnSg9CsNKeDX
status: active
merged_into: null
display_name: 王悛
cbdb_id: 236426
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T2RBa6NB4EJNQA9aBYNpoR
        subject_person_id: p_LsQTYNc4XKBnSg9CsNKeDX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悛，明人物。籍贯益都，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 236426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XSzaaP9VMSeQkRpj4lV15F
          claim_id: c_T2RBa6NB4EJNQA9aBYNpoR
          source_id: s_L6FLo8eQE357e7UG4GmJeo
          stance: supports
          locator: CBDB:236426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L6FLo8eQE357e7UG4GmJeo
            source_type: api_record
            title: 中国历代人物传记资料库：王悛（CBDB 236426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236426&o=json
            external_identifier: CBDB:236426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YZDxES9i8256diZ8t7QLsq
        subject_person_id: p_LsQTYNc4XKBnSg9CsNKeDX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HAMz5Q3GzmxS3tDBrU9BxB
          claim_id: c_YZDxES9i8256diZ8t7QLsq
          source_id: s_L6FLo8eQE357e7UG4GmJeo
          stance: supports
          locator: CBDB:236426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2Uz7qGL5HxQ0fVZszG1J7-
        subject_person_id: p_8wBKhGEndLXas4ENZDEWFf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LsQTYNc4XKBnSg9CsNKeDX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9lU_Bk1BSxd078oN5omlGL
          claim_id: c_2Uz7qGL5HxQ0fVZszG1J7-
          source_id: s__5rzzWxVuOxEPtcBKmY5BX
          stance: supports
          locator: CBDB：兄弟 王瀠（207813）之父／母 王好敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王悛 与 王瀠 为同胞（CBDB 记「弟」），王瀠 之父／母即 王悛 之父／母。
          source:
            id: s__5rzzWxVuOxEPtcBKmY5BX
            source_type: api_record
            title: 中国历代人物传记资料库：王悛（CBDB 236426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236426&o=json
            external_identifier: CBDB:236426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8wBKhGEndLXas4ENZDEWFf
        status: active
        display_name: 王好敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bfIsBl4NbydAwpAdDTk_xU
        subject_person_id: p_LsQTYNc4XKBnSg9CsNKeDX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fRd4kHJooaS9AErLa6rFp5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_19dILUztIbv_IA8vhcjTC6
          claim_id: c_bfIsBl4NbydAwpAdDTk_xU
          source_id: s__5rzzWxVuOxEPtcBKmY5BX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207813 王瀠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__5rzzWxVuOxEPtcBKmY5BX
            source_type: api_record
            title: 中国历代人物传记资料库：王悛（CBDB 236426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236426&o=json
            external_identifier: CBDB:236426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fRd4kHJooaS9AErLa6rFp5
        status: active
        display_name: 王瀠
        merged_into_person_id: null
---

# 王悛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王悛，明人物。籍贯益都，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 236426） | accepted |
| name.primary | 王悛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8wBKhGEndLXas4ENZDEWFf | 王好敬 | accepted |
| other | p_fRd4kHJooaS9AErLa6rFp5 | 王瀠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王悛（CBDB 236426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236426&o=json)
