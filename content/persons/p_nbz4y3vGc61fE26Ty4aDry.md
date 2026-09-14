---
schema: wang-person/v1
id: p_nbz4y3vGc61fE26Ty4aDry
status: active
merged_into: null
display_name: 王銶
cbdb_id: 247605
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dHRoctg6ZEpWoy6CqCUtFc
        subject_person_id: p_nbz4y3vGc61fE26Ty4aDry
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銶，明人物。成化十一年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 247605）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FX9YnFUaoRSVz-sLBPppJ6
          claim_id: c_dHRoctg6ZEpWoy6CqCUtFc
          source_id: s_SE82a2TtXQCDZnQKTKrDwt
          stance: supports
          locator: CBDB:247605
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SE82a2TtXQCDZnQKTKrDwt
            source_type: api_record
            title: 中国历代人物传记资料库：王銶（CBDB 247605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247605&o=json
            external_identifier: CBDB:247605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FJpXHJ4bYj6LrU6AUuYtma
        subject_person_id: p_nbz4y3vGc61fE26Ty4aDry
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AAcUCDy33CXXJW7LjqX5et
          claim_id: c_FJpXHJ4bYj6LrU6AUuYtma
          source_id: s_SE82a2TtXQCDZnQKTKrDwt
          stance: supports
          locator: CBDB:247605
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e_cJxAbMUU5Gtlmnbghwa-
        subject_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_nbz4y3vGc61fE26Ty4aDry
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OdiezYql8gwF4GghLllSmg
          claim_id: c_e_cJxAbMUU5Gtlmnbghwa-
          source_id: s_-pFGbiQRozvJlsTBEIPgjG
          stance: supports
          locator: CBDB：兄弟 王鏊（34579）之父／母 王琬
          quotation: null
          interpretation_note: 由兄弟关系推断：王銶 与 王鏊 为同胞（CBDB 记「兄」），王鏊 之父／母即 王銶 之父／母。
          source:
            id: s_-pFGbiQRozvJlsTBEIPgjG
            source_type: api_record
            title: 中国历代人物传记资料库：王銶（CBDB 247605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247605&o=json
            external_identifier: CBDB:247605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JZgMSGQ5z3nPzBFS6irjA
        status: active
        display_name: 王琬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E8pxVgDCaTIFWfFk0F-M8_
        subject_person_id: p_Wp6B6oFJWureDLbUWC4XTo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nbz4y3vGc61fE26Ty4aDry
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__QM9gcbdlMnpkZYvpL6juy
          claim_id: c_E8pxVgDCaTIFWfFk0F-M8_
          source_id: s_-pFGbiQRozvJlsTBEIPgjG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34579 王鏊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-pFGbiQRozvJlsTBEIPgjG
            source_type: api_record
            title: 中国历代人物传记资料库：王銶（CBDB 247605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247605&o=json
            external_identifier: CBDB:247605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wp6B6oFJWureDLbUWC4XTo
        status: active
        display_name: 王鏊
        merged_into_person_id: null
---

# 王銶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王銶，明人物。成化十一年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 247605） | accepted |
| name.primary | 王銶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JZgMSGQ5z3nPzBFS6irjA | 王琬 | accepted |
| other | p_Wp6B6oFJWureDLbUWC4XTo | 王鏊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銶（CBDB 247605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247605&o=json)
