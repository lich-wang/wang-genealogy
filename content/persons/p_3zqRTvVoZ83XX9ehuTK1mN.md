---
schema: wang-person/v1
id: p_3zqRTvVoZ83XX9ehuTK1mN
status: active
merged_into: null
display_name: 王義
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gMDBAi92k77KRoQWUcZmee
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zQSq2m5dWH5P67SxeWwhD7
          claim_id: c_gMDBAi92k77KRoQWUcZmee
          source_id: s_Z94KJsSnydiTNsUSx3jM4Z
          stance: supports
          locator: CBDB:253904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253904）
          source: &a1
            id: s_Z94KJsSnydiTNsUSx3jM4Z
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 253904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253904&o=json
            external_identifier: CBDB:253904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G5fojjht8zxBbgg58VvFyQ
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，明人物。成化十四年進士，籍贯和順，曾任巡檢。（中国历代人物传记资料库 CBDB 253904）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QEHouDcaHSNobr0W4C9I0k
          claim_id: c_G5fojjht8zxBbgg58VvFyQ
          source_id: s_Z94KJsSnydiTNsUSx3jM4Z
          stance: supports
          locator: CBDB:253904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3UX0TgTh4cWiOWFsaBibaO
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jhuKt2zDV_NwtsCFjTd6PU
          claim_id: c_3UX0TgTh4cWiOWFsaBibaO
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二百三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_swTACms8KFk1ksLaDU531V
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67292&o=json
            external_identifier: CBDB:67292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2yQZFqgpXJgeoQtn7WfsC5
        status: active
        display_name: 王佐
        merged_into_person_id: null
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
        id: p_CDeHkFitHyn9G4YYa82Q3y
        status: active
        display_name: 王佩
        merged_into_person_id: null
    - claim:
        id: c_QUV-jy8IyqXR5y-V74gYYW
        subject_person_id: p_3zqRTvVoZ83XX9ehuTK1mN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N957SmPtDLFciomgY2RBic
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jopb4jM-m7G4vjEo1hIp-O
          claim_id: c_QUV-jy8IyqXR5y-V74gYYW
          source_id: s_AK5YPkcArh8fPPFsLIxNfv
          stance: supports
          locator: CBDB：兄弟 王佐（67292）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王敖 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王敖 之父／母。
          source:
            id: s_AK5YPkcArh8fPPFsLIxNfv
            source_type: api_record
            title: 中国历代人物传记资料库：王敖（CBDB 253907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253907&o=json
            external_identifier: CBDB:253907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N957SmPtDLFciomgY2RBic
        status: active
        display_name: 王敖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，明人物。成化十四年進士，籍贯和順，曾任巡檢。（中国历代人物传记资料库 CBDB 253904） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2yQZFqgpXJgeoQtn7WfsC5 | 王佐 | accepted |
| children | p_CDeHkFitHyn9G4YYa82Q3y | 王佩 | accepted |
| children | p_N957SmPtDLFciomgY2RBic | 王敖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敖（CBDB 253907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253907&o=json)
- [中国历代人物传记资料库：王佩（CBDB 253908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253908&o=json)
- [中国历代人物传记资料库：王義（CBDB 253904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253904&o=json)
- [中国历代人物传记资料库：王佐（CBDB 67292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67292&o=json)
