---
schema: wang-person/v1
id: p_WbJ6j4zGGAHSjY4ZqR7wfa
status: active
merged_into: null
display_name: 王公正
cbdb_id: 279057
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W6y3jGzvJSjhpd3QtSyfzL
        subject_person_id: p_WbJ6j4zGGAHSjY4ZqR7wfa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公正，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 279057）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gswFCTkfuuA6_9wHd0rRfk
          claim_id: c_W6y3jGzvJSjhpd3QtSyfzL
          source_id: s_YjAQREc1S3tEBhLuU8yoo2
          stance: supports
          locator: CBDB:279057
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YjAQREc1S3tEBhLuU8yoo2
            source_type: api_record
            title: 中国历代人物传记资料库：王公正（CBDB 279057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279057&o=json
            external_identifier: CBDB:279057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tuhBMBPxTM4vb1fUQQZDbp
        subject_person_id: p_WbJ6j4zGGAHSjY4ZqR7wfa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_i1Zrn6ATndwPZHGAGTPKd8
          claim_id: c_tuhBMBPxTM4vb1fUQQZDbp
          source_id: s_YjAQREc1S3tEBhLuU8yoo2
          stance: supports
          locator: CBDB:279057
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EOyAiFYbPxqTvD1IvB8cds
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WbJ6j4zGGAHSjY4ZqR7wfa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NT5-WuAtZMdekDY07obRCs
          claim_id: c_EOyAiFYbPxqTvD1IvB8cds
          source_id: s_s-bP7wwFnATtms_OiFF5Uz
          stance: supports
          locator: CBDB：兄弟 王寧（201843）之父／母 王紹紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王公正 与 王寧 为同胞（CBDB 记「弟」），王寧 之父／母即 王公正 之父／母。
          source:
            id: s_s-bP7wwFnATtms_OiFF5Uz
            source_type: api_record
            title: 中国历代人物传记资料库：王公正（CBDB 279057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279057&o=json
            external_identifier: CBDB:279057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xFFdPdJwKEcff8qRsr4b53
        status: active
        display_name: 王紹紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Rjgr9un7tpCc7darNomLtl
        subject_person_id: p_WbJ6j4zGGAHSjY4ZqR7wfa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YUDyaZtILCb1O8ESJ9lGKn
          claim_id: c_Rjgr9un7tpCc7darNomLtl
          source_id: s_s-bP7wwFnATtms_OiFF5Uz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201843 王寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s-bP7wwFnATtms_OiFF5Uz
            source_type: api_record
            title: 中国历代人物传记资料库：王公正（CBDB 279057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279057&o=json
            external_identifier: CBDB:279057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
        merged_into_person_id: null
---

# 王公正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公正，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 279057） | accepted |
| name.primary | 王公正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xFFdPdJwKEcff8qRsr4b53 | 王紹紀 | accepted |
| other | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公正（CBDB 279057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279057&o=json)
