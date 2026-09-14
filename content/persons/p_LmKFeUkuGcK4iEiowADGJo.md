---
schema: wang-person/v1
id: p_LmKFeUkuGcK4iEiowADGJo
status: active
merged_into: null
display_name: 王一中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JrqfWGfmZejCg2TTwxgeJL
        subject_person_id: p_LmKFeUkuGcK4iEiowADGJo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_62byggPzM76zZLZ2VJHn4D
          claim_id: c_JrqfWGfmZejCg2TTwxgeJL
          source_id: s_J47YRqA5dqCiTM5u8NTnmk
          stance: supports
          locator: CBDB:337564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337564）
          source: &a1
            id: s_J47YRqA5dqCiTM5u8NTnmk
            source_type: api_record
            title: 中国历代人物传记资料库：王一中（CBDB 337564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337564&o=json
            external_identifier: CBDB:337564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZY4rbiFeu6U78TGGN1Cy4K
        subject_person_id: p_LmKFeUkuGcK4iEiowADGJo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一中，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337564）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pser5Dq1W02_3tz_k6Pnyj
          claim_id: c_ZY4rbiFeu6U78TGGN1Cy4K
          source_id: s_J47YRqA5dqCiTM5u8NTnmk
          stance: supports
          locator: CBDB:337564
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qOEDnyPmhOXg8YVNyQbdze
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LmKFeUkuGcK4iEiowADGJo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OpCv3ZesrLZw8rWf2rKghB
          claim_id: c_qOEDnyPmhOXg8YVNyQbdze
          source_id: s_3dHkWE2nhvlnBSEsrkQN3h
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一中 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一中 之父／母。
          source:
            id: s_3dHkWE2nhvlnBSEsrkQN3h
            source_type: api_record
            title: 中国历代人物传记资料库：王一中（CBDB 337564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337564&o=json
            external_identifier: CBDB:337564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uWARgTHwHotCqXAXAieGV4
        status: active
        display_name: 王世芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UoiyzVOJo7HZitClq5DwN5
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LmKFeUkuGcK4iEiowADGJo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIDir-acSkvpXSvs2Amm9P
          claim_id: c_UoiyzVOJo7HZitClq5DwN5
          source_id: s_3dHkWE2nhvlnBSEsrkQN3h
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205728 王一誠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3dHkWE2nhvlnBSEsrkQN3h
            source_type: api_record
            title: 中国历代人物传记资料库：王一中（CBDB 337564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337564&o=json
            external_identifier: CBDB:337564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2CCGS25AmJvxKtCikhBKeQ
        status: active
        display_name: 王一誠
        merged_into_person_id: null
---

# 王一中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一中 | accepted |
| bio.summary | 王一中，明人物。隆慶二年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 337564） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uWARgTHwHotCqXAXAieGV4 | 王世芳 | accepted |
| other | p_2CCGS25AmJvxKtCikhBKeQ | 王一誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一中（CBDB 337564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337564&o=json)
