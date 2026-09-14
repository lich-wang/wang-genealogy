---
schema: wang-person/v1
id: p_JW17QbGcGSWGHY8puPMAQY
status: active
merged_into: null
display_name: 王惟幾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XNVZ7GsMsG8o12zTAP9Gkb
        subject_person_id: p_JW17QbGcGSWGHY8puPMAQY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟幾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AQ4sj9x8rQA3oGVYGm4Brv
          claim_id: c_XNVZ7GsMsG8o12zTAP9Gkb
          source_id: s_ot2TLkoQVW4WwCHJCCdENG
          stance: supports
          locator: CBDB:317777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317777）
          source: &a1
            id: s_ot2TLkoQVW4WwCHJCCdENG
            source_type: api_record
            title: 中国历代人物传记资料库：王惟幾（CBDB 317777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317777&o=json
            external_identifier: CBDB:317777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nJ7DKkMS4EDndK1FqMoSor
        subject_person_id: p_JW17QbGcGSWGHY8puPMAQY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟幾，明人物。嘉靖三十二年進士，籍贯興平。（中国历代人物传记资料库 CBDB 317777）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ql4BBTi3S-uJOoKehkUOP3
          claim_id: c_nJ7DKkMS4EDndK1FqMoSor
          source_id: s_ot2TLkoQVW4WwCHJCCdENG
          stance: supports
          locator: CBDB:317777
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9EG2aPmT-6Pd1kvrc48X-s
        subject_person_id: p_adU4MrMDVi49ue2hfZefvu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JW17QbGcGSWGHY8puPMAQY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ywi7vzn1lZTbVH_x053yn-
          claim_id: c_9EG2aPmT-6Pd1kvrc48X-s
          source_id: s__bUz1kazvKIi1rmCPYQZCX
          stance: supports
          locator: CBDB：兄弟 王惟寧（204346）之父／母 王官
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟幾 与 王惟寧 为同胞（CBDB 记「兄」），王惟寧 之父／母即 王惟幾 之父／母。
          source:
            id: s__bUz1kazvKIi1rmCPYQZCX
            source_type: api_record
            title: 中国历代人物传记资料库：王惟幾（CBDB 317777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317777&o=json
            external_identifier: CBDB:317777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_adU4MrMDVi49ue2hfZefvu
        status: active
        display_name: 王官
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cn4LHCIdvs2ZViNkYgN6tV
        subject_person_id: p_JW17QbGcGSWGHY8puPMAQY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dw1HkJvxeQbGLvtDiNGqfE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QtBZGUMP8GA69_YabtVJOM
          claim_id: c_cn4LHCIdvs2ZViNkYgN6tV
          source_id: s__bUz1kazvKIi1rmCPYQZCX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204346 王惟寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__bUz1kazvKIi1rmCPYQZCX
            source_type: api_record
            title: 中国历代人物传记资料库：王惟幾（CBDB 317777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317777&o=json
            external_identifier: CBDB:317777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dw1HkJvxeQbGLvtDiNGqfE
        status: active
        display_name: 王惟寧
        merged_into_person_id: null
---

# 王惟幾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟幾 | accepted |
| bio.summary | 王惟幾，明人物。嘉靖三十二年進士，籍贯興平。（中国历代人物传记资料库 CBDB 317777） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_adU4MrMDVi49ue2hfZefvu | 王官 | accepted |
| other | p_dw1HkJvxeQbGLvtDiNGqfE | 王惟寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟幾（CBDB 317777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317777&o=json)
