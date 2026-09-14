---
schema: wang-person/v1
id: p_KJJrwKD4rAD5pxVK5Q5kna
status: active
merged_into: null
display_name: 王懋孝
cbdb_id: 337976
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NBjRzTe8KByiiELbWE9QwZ
        subject_person_id: p_KJJrwKD4rAD5pxVK5Q5kna
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋孝，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_c1xkHmSFJOtc3COadTlnn-
          claim_id: c_NBjRzTe8KByiiELbWE9QwZ
          source_id: s_NMDSjtgPQZ11TCckbnAgnf
          stance: supports
          locator: CBDB:337976
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NMDSjtgPQZ11TCckbnAgnf
            source_type: api_record
            title: 中国历代人物传记资料库：王懋孝（CBDB 337976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337976&o=json
            external_identifier: CBDB:337976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mWTKbvpGJ1YNnczjQ4oDCV
        subject_person_id: p_KJJrwKD4rAD5pxVK5Q5kna
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8Fj54W1TGhMdGb3VSgBByQ
          claim_id: c_mWTKbvpGJ1YNnczjQ4oDCV
          source_id: s_NMDSjtgPQZ11TCckbnAgnf
          stance: supports
          locator: CBDB:337976
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JaBtYG9nN1_h6Ybi4um0ON
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KJJrwKD4rAD5pxVK5Q5kna
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYyenmCExZtb5TQDxz8OBw
          claim_id: c_JaBtYG9nN1_h6Ybi4um0ON
          source_id: s_fSNgThC7qgI--Z6VbE951D
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋孝 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋孝 之父／母。
          source:
            id: s_fSNgThC7qgI--Z6VbE951D
            source_type: api_record
            title: 中国历代人物传记资料库：王懋孝（CBDB 337976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337976&o=json
            external_identifier: CBDB:337976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kGHRzXtUaYBnJ8wGBJV9RP
        status: active
        display_name: 王化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KX2xmEjknTGlUGn81QITbX
        subject_person_id: p_KJJrwKD4rAD5pxVK5Q5kna
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4NBVkva0nnOH1fFar4gCM
          claim_id: c_KX2xmEjknTGlUGn81QITbX
          source_id: s_fSNgThC7qgI--Z6VbE951D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fSNgThC7qgI--Z6VbE951D
            source_type: api_record
            title: 中国历代人物传记资料库：王懋孝（CBDB 337976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337976&o=json
            external_identifier: CBDB:337976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aYr3EPQVvfC6NBKDGNLUTL
        status: active
        display_name: 王懋德
        merged_into_person_id: null
---

# 王懋孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懋孝，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337976） | accepted |
| name.primary | 王懋孝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kGHRzXtUaYBnJ8wGBJV9RP | 王化 | accepted |
| other | p_aYr3EPQVvfC6NBKDGNLUTL | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋孝（CBDB 337976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337976&o=json)
