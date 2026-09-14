---
schema: wang-person/v1
id: p_fgKEAL4T4peBK14wBF85E5
status: active
merged_into: null
display_name: 王燕緒
cbdb_id: 136115
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RJjGzvnKhHPC6AuD1Ydy2Z
        subject_person_id: p_fgKEAL4T4peBK14wBF85E5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕緒，清人物。明清進士進士，籍贯福山，入仕進士，曾任編修、翰林院編修、同考官。（中国历代人物传记资料库 CBDB 136115）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qh8Sy_VroajaAMiLknkp_1
          claim_id: c_RJjGzvnKhHPC6AuD1Ydy2Z
          source_id: s_JJbajkrwcNR7kSgCkS4N8t
          stance: supports
          locator: CBDB:136115
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JJbajkrwcNR7kSgCkS4N8t
            source_type: api_record
            title: 中国历代人物传记资料库：王燕緒（CBDB 136115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136115&o=json
            external_identifier: CBDB:136115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ExBEQS4jfxJjT7iQt1obRY
        subject_person_id: p_fgKEAL4T4peBK14wBF85E5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燕緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yb4FTSVKPC6M145XWw9KSA
          claim_id: c_ExBEQS4jfxJjT7iQt1obRY
          source_id: s_JJbajkrwcNR7kSgCkS4N8t
          stance: supports
          locator: CBDB:136115
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7St-65LUJk_RNVpv_YkI6J
        subject_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fgKEAL4T4peBK14wBF85E5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ybt1bT3X3LxJYt040P3zuc
          claim_id: c_7St-65LUJk_RNVpv_YkI6J
          source_id: s_gg33oh_OzHrNDAQhm7DBM_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69340 王啟緒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gg33oh_OzHrNDAQhm7DBM_
            source_type: api_record
            title: 中国历代人物传记资料库：王燕緒（CBDB 136115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136115&o=json
            external_identifier: CBDB:136115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QaX91zDL1ybGQV5xhYa8gJ
        status: active
        display_name: 王啟緒
        merged_into_person_id: null
---

# 王燕緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王燕緒，清人物。明清進士進士，籍贯福山，入仕進士，曾任編修、翰林院編修、同考官。（中国历代人物传记资料库 CBDB 136115） | accepted |
| name.primary | 王燕緒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_QaX91zDL1ybGQV5xhYa8gJ | 王啟緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燕緒（CBDB 136115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136115&o=json)
