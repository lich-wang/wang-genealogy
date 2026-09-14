---
schema: wang-person/v1
id: p_CDeHkFitHyn9G4YYa82Q3y
status: active
merged_into: null
display_name: 王佩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yxXRa1zusEpyU2LCJBhzgn
        subject_person_id: p_CDeHkFitHyn9G4YYa82Q3y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nz8soKzsBfx1cNP38epkDd
          claim_id: c_yxXRa1zusEpyU2LCJBhzgn
          source_id: s_AbVaG85Bh6tLCeUqdPYsCv
          stance: supports
          locator: CBDB:253908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253908）
          source: &a1
            id: s_AbVaG85Bh6tLCeUqdPYsCv
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 253908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253908&o=json
            external_identifier: CBDB:253908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LNt3L2LL5EkFBcEAB7dPfv
        subject_person_id: p_CDeHkFitHyn9G4YYa82Q3y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩，明人物。成化十四年進士，籍贯和順。（中国历代人物传记资料库 CBDB 253908）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z0NxEAU2Ui_b7gJmzsmJW8
          claim_id: c_LNt3L2LL5EkFBcEAB7dPfv
          source_id: s_AbVaG85Bh6tLCeUqdPYsCv
          stance: supports
          locator: CBDB:253908
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6qLRgO5ZNmNTGTXDrGKAbm
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CDeHkFitHyn9G4YYa82Q3y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZbekTRCwrVbUn1wRWz91Kl
          claim_id: c_6qLRgO5ZNmNTGTXDrGKAbm
          source_id: s_IGoIXYsI96u2--igKF1O7p
          stance: supports
          locator: CBDB：兄弟 王佐（67292）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王佩 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王佩 之父／母。
          source:
            id: s_IGoIXYsI96u2--igKF1O7p
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 253908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253908&o=json
            external_identifier: CBDB:253908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3zqRTvVoZ83XX9ehuTK1mN
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wJ0Wm6pIpEU5b3GSeJyTLT
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CDeHkFitHyn9G4YYa82Q3y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R63E6LWaR9CAu84ZUUL-D-
          claim_id: c_wJ0Wm6pIpEU5b3GSeJyTLT
          source_id: s_IGoIXYsI96u2--igKF1O7p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67292 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IGoIXYsI96u2--igKF1O7p
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 253908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253908&o=json
            external_identifier: CBDB:253908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2yQZFqgpXJgeoQtn7WfsC5
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| bio.summary | 王佩，明人物。成化十四年進士，籍贯和順。（中国历代人物传记资料库 CBDB 253908） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3zqRTvVoZ83XX9ehuTK1mN | 王義 | accepted |
| other | p_2yQZFqgpXJgeoQtn7WfsC5 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佩（CBDB 253908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253908&o=json)
