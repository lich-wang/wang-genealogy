---
schema: wang-person/v1
id: p_gYH3kHwQzEkZsr5ZA1f5qQ
status: active
merged_into: null
display_name: 王天舜
cbdb_id: 324345
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yh6cpg5MVJw327jnbiBAq1
        subject_person_id: p_gYH3kHwQzEkZsr5ZA1f5qQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天舜，明人物。嘉靖三十八年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 324345）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7boN9ZE4qxv5MB1eRMUVUZ
          claim_id: c_yh6cpg5MVJw327jnbiBAq1
          source_id: s_LaES7KZ5w3p93dLojJ9GAE
          stance: supports
          locator: CBDB:324345
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LaES7KZ5w3p93dLojJ9GAE
            source_type: api_record
            title: 中国历代人物传记资料库：王天舜（CBDB 324345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324345&o=json
            external_identifier: CBDB:324345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QkjvjhMuKKvVEQwJnjjjLk
        subject_person_id: p_gYH3kHwQzEkZsr5ZA1f5qQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5ZVExb3nmN7GBgPhW9yUtU
          claim_id: c_QkjvjhMuKKvVEQwJnjjjLk
          source_id: s_LaES7KZ5w3p93dLojJ9GAE
          stance: supports
          locator: CBDB:324345
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oXroi0IAuwBw94CKbCB383
        subject_person_id: p_BZ632SwpqzGW4p9bQ7s6FS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gYH3kHwQzEkZsr5ZA1f5qQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OPhVaSY_ExTJheKTAXQnsP
          claim_id: c_oXroi0IAuwBw94CKbCB383
          source_id: s__ynHeNBiv4PPTUUDiXF3xW
          stance: supports
          locator: CBDB：兄弟 王天爵（126474）之父／母 王廷政
          quotation: null
          interpretation_note: 由兄弟关系推断：王天舜 与 王天爵 为同胞（CBDB 记「兄」），王天爵 之父／母即 王天舜 之父／母。
          source:
            id: s__ynHeNBiv4PPTUUDiXF3xW
            source_type: api_record
            title: 中国历代人物传记资料库：王天舜（CBDB 324345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324345&o=json
            external_identifier: CBDB:324345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BZ632SwpqzGW4p9bQ7s6FS
        status: active
        display_name: 王廷政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SSbTlaMlC5o3o0PGog2qU2
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gYH3kHwQzEkZsr5ZA1f5qQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C6-IgfiKfd_Pp5fI-YUcLt
          claim_id: c_SSbTlaMlC5o3o0PGog2qU2
          source_id: s__ynHeNBiv4PPTUUDiXF3xW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126474 王天爵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__ynHeNBiv4PPTUUDiXF3xW
            source_type: api_record
            title: 中国历代人物传记资料库：王天舜（CBDB 324345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324345&o=json
            external_identifier: CBDB:324345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SVNZL8P3EB13LuNV5sxppY
        status: active
        display_name: 王天爵
        merged_into_person_id: null
---

# 王天舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王天舜，明人物。嘉靖三十八年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 324345） | accepted |
| name.primary | 王天舜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BZ632SwpqzGW4p9bQ7s6FS | 王廷政 | accepted |
| other | p_SVNZL8P3EB13LuNV5sxppY | 王天爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天舜（CBDB 324345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324345&o=json)
