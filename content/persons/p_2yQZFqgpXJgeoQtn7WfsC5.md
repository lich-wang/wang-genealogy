---
schema: wang-person/v1
id: p_2yQZFqgpXJgeoQtn7WfsC5
status: active
merged_into: null
display_name: 王佐
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yx9HHhsdSX9fACD6dcA7Sw
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xdfpTAdVvKuMq8yA7YrFvb
          claim_id: c_Yx9HHhsdSX9fACD6dcA7Sw
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: CBDB:67292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67292）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YQqSy99cwQt9JV4xVGPHrc
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1440年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iFVE7edukuQ2yJuC8Wypx
          claim_id: c_YQqSy99cwQt9JV4xVGPHrc
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XbngULMB8mJMHxaceHphoR
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1512年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTjq9fuJyQTGokZiGYpLPi
          claim_id: c_XbngULMB8mJMHxaceHphoR
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QnLmuDVAnz7C86aefkxeTq
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐（1440年—1512年），明人物。明清進士進士，籍贯和順，入仕進士，曾任府丞、光祿寺卿、戶部尚書。（中国历代人物传记资料库 CBDB 67292）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j8PKxKaTVqcRiyTMEl9-rq
          claim_id: c_QnLmuDVAnz7C86aefkxeTq
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: CBDB:67292
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_3zqRTvVoZ83XX9ehuTK1mN
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jctCOn87jvPbxqe5d6QJeX
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HPgC7g61tDn1j9zWwukpAY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGKOy_PvfHTzJPGaB1No63
          claim_id: c_jctCOn87jvPbxqe5d6QJeX
          source_id: s_-PHRpKCpiqMQP_kBCfHcRJ
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二百三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-PHRpKCpiqMQP_kBCfHcRJ
            source_type: api_record
            title: 中国历代人物传记资料库：馬氏(王佐妻)（CBDB 253906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253906&o=json
            external_identifier: CBDB:253906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HPgC7g61tDn1j9zWwukpAY
        status: active
        display_name: 馬氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_4Fiz2Dn6okbWQMudAwOHOX
        subject_person_id: p_j6yJYYD4unD9Q4McpR5Pv8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WNdZ3XvbsvDb2F5hw-vJ5u
          claim_id: c_4Fiz2Dn6okbWQMudAwOHOX
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二百三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j6yJYYD4unD9Q4McpR5Pv8
        status: active
        display_name: 王貴
        merged_into_person_id: null
    - claim:
        id: c_0Wb2NQr7gxEcwpjMDLzoJN
        subject_person_id: p_qTbXB97SFc7HLafkZNoqLg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZHbzmru5ME2qchkPPEpE1
          claim_id: c_0Wb2NQr7gxEcwpjMDLzoJN
          source_id: s_swTACms8KFk1ksLaDU531V
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二百三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qTbXB97SFc7HLafkZNoqLg
        status: active
        display_name: 王珍
        merged_into_person_id: null
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
        id: p_CDeHkFitHyn9G4YYa82Q3y
        status: active
        display_name: 王佩
        merged_into_person_id: null
    - claim:
        id: c_Ghcqk057-QJCZ5e_cs9f20
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N957SmPtDLFciomgY2RBic
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dd9PAWENUe5TFXTesOiHqs
          claim_id: c_Ghcqk057-QJCZ5e_cs9f20
          source_id: s_AK5YPkcArh8fPPFsLIxNfv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67292 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1440年 | accepted |
| death.date | 1512年 | accepted |
| bio.summary | 王佐（1440年—1512年），明人物。明清進士進士，籍贯和順，入仕進士，曾任府丞、光祿寺卿、戶部尚書。（中国历代人物传记资料库 CBDB 67292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3zqRTvVoZ83XX9ehuTK1mN | 王義 | accepted |
| spouses | p_HPgC7g61tDn1j9zWwukpAY | 馬氏 | accepted |
| ancestors | p_j6yJYYD4unD9Q4McpR5Pv8 | 王貴 | accepted |
| ancestors | p_qTbXB97SFc7HLafkZNoqLg | 王珍 | accepted |
| other | p_CDeHkFitHyn9G4YYa82Q3y | 王佩 | accepted |
| other | p_N957SmPtDLFciomgY2RBic | 王敖 | accepted |

## 外部来源

- [中国历代人物传记资料库：馬氏(王佐妻)（CBDB 253906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253906&o=json)
- [中国历代人物传记资料库：王敖（CBDB 253907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253907&o=json)
- [中国历代人物传记资料库：王佩（CBDB 253908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253908&o=json)
- [中国历代人物传记资料库：王佐（CBDB 67292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67292&o=json)
