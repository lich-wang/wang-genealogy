---
schema: wang-person/v1
id: p_z3W5Kxe67VFh1mAWJB2FDG
status: active
merged_into: null
display_name: 王信
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FvjuGxmjuojzsYjHhrwAkw
        subject_person_id: p_z3W5Kxe67VFh1mAWJB2FDG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jNNWeGdnMm2MyEXhfWUtg3
          claim_id: c_FvjuGxmjuojzsYjHhrwAkw
          source_id: s_4hH6dMcvxtUfYDmURjvtx9
          stance: supports
          locator: CBDB:271806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271806）
          source: &a1
            id: s_4hH6dMcvxtUfYDmURjvtx9
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 271806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271806&o=json
            external_identifier: CBDB:271806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xav94wcf61xYueCxRrXjJY
        subject_person_id: p_z3W5Kxe67VFh1mAWJB2FDG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NMzNg-6AveYQ4cj0AnJ_uu
          claim_id: c_xav94wcf61xYueCxRrXjJY
          source_id: s_4hH6dMcvxtUfYDmURjvtx9
          stance: supports
          locator: CBDB:271806
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jWgdyzYMBKV7_YrIcCbpI8
        subject_person_id: p_LHuTnNyG1C6YMk7ahAUHo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z3W5Kxe67VFh1mAWJB2FDG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d0ce6CIUhdtRCjazjoeKgJ
          claim_id: c_jWgdyzYMBKV7_YrIcCbpI8
          source_id: s_YJ8fFHxKCt7lCiuRR6hF2u
          stance: supports
          locator: CBDB：兄弟 王昇（198437）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王信 与 王昇 为同胞（CBDB 记「弟」），王昇 之父／母即 王信 之父／母。
          source:
            id: s_YJ8fFHxKCt7lCiuRR6hF2u
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 271806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271806&o=json
            external_identifier: CBDB:271806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LHuTnNyG1C6YMk7ahAUHo3
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B8DbPymXckU_kbzN6Qh3zT
        subject_person_id: p_stHoVQftjNFmSu9T7T3WAa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z3W5Kxe67VFh1mAWJB2FDG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j85AjWMp7Sn00owLYTkz_P
          claim_id: c_B8DbPymXckU_kbzN6Qh3zT
          source_id: s_YJ8fFHxKCt7lCiuRR6hF2u
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198437 王昇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YJ8fFHxKCt7lCiuRR6hF2u
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 271806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271806&o=json
            external_identifier: CBDB:271806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_stHoVQftjNFmSu9T7T3WAa
        status: active
        display_name: 王昇
        merged_into_person_id: null
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LHuTnNyG1C6YMk7ahAUHo3 | 王俊 | accepted |
| other | p_stHoVQftjNFmSu9T7T3WAa | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 271806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271806&o=json)
