---
schema: wang-person/v1
id: p_gFD38TcLYY9Xf6WG4cce5D
status: active
merged_into: null
display_name: 王良驥
cbdb_id: 210733
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dL251sqbKvJ6d336ozXBgG
        subject_person_id: p_gFD38TcLYY9Xf6WG4cce5D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良驥，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210733）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__Zy6yZg0MbTjjiVeH8beR5
          claim_id: c_dL251sqbKvJ6d336ozXBgG
          source_id: s_82nvWMT8j54Vfdi2zJW19x
          stance: supports
          locator: CBDB:210733
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_82nvWMT8j54Vfdi2zJW19x
            source_type: api_record
            title: 中国历代人物传记资料库：王良驥（CBDB 210733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210733&o=json
            external_identifier: CBDB:210733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gt9ZjaQjFwgho7qLfNZm1t
        subject_person_id: p_gFD38TcLYY9Xf6WG4cce5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aoE9cWwcCoERyXt9hDGVQL
          claim_id: c_gt9ZjaQjFwgho7qLfNZm1t
          source_id: s_82nvWMT8j54Vfdi2zJW19x
          stance: supports
          locator: CBDB:210733
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tQfxMc2nV3WfJlOQYp2GvZ
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gFD38TcLYY9Xf6WG4cce5D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bzQJhsEvO_Jscs63r6ELuF
          claim_id: c_tQfxMc2nV3WfJlOQYp2GvZ
          source_id: s_kLd3dQ9Q3J4vhoGXuuOKk-
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良驥 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王良驥 之父／母。
          source:
            id: s_kLd3dQ9Q3J4vhoGXuuOKk-
            source_type: api_record
            title: 中国历代人物传记资料库：王良驥（CBDB 210733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210733&o=json
            external_identifier: CBDB:210733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ui5SxJURRoAPDp7OOFx-co
        subject_person_id: p_gFD38TcLYY9Xf6WG4cce5D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YcEbADO1X2RdwYE2UneqlW
          claim_id: c_Ui5SxJURRoAPDp7OOFx-co
          source_id: s_kLd3dQ9Q3J4vhoGXuuOKk-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kLd3dQ9Q3J4vhoGXuuOKk-
            source_type: api_record
            title: 中国历代人物传记资料库：王良驥（CBDB 210733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210733&o=json
            external_identifier: CBDB:210733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
---

# 王良驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良驥，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210733） | accepted |
| name.primary | 王良驥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| other | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良驥（CBDB 210733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210733&o=json)
