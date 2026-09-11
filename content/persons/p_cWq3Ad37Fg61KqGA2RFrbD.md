---
schema: wang-person/v1
id: p_cWq3Ad37Fg61KqGA2RFrbD
status: active
merged_into: null
display_name: 王景
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mX83qr2eX9aJRLsLHth4yS
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oSz7LfLiYiF2aN7yVeM7tq
          claim_id: c_mX83qr2eX9aJRLsLHth4yS
          source_id: s_JEmLoa6B34TExkPDzfUvvx
          stance: supports
          locator: CBDB:38454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38454）
          source: &a1
            id: s_JEmLoa6B34TExkPDzfUvvx
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 38454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38454&o=json
            external_identifier: CBDB:38454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T2HJ1yKqD9uncQv5AJUHCB
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 889年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CcVBoPfnWL6CavjLAahNKm
          claim_id: c_T2HJ1yKqD9uncQv5AJUHCB
          source_id: s_JEmLoa6B34TExkPDzfUvvx
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
        id: c_SsCfw4GB8Vt57Qomoe1b9K
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 963年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hP7rpF8ZPsLtbPPXM1pfTV
          claim_id: c_SsCfw4GB8Vt57Qomoe1b9K
          source_id: s_JEmLoa6B34TExkPDzfUvvx
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
        id: c_7DVAohBmKji8zz4HL3JAG3
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景（889年—963年），五代人物。籍贯掖縣，身份为精於騎射、熟諳兵法韜略、軍事家，曾任節度使、秘書省監、侍中。（中国历代人物传记资料库 CBDB 38454）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ic9vI0JaYSJUMVgDuSuT0
          claim_id: c_7DVAohBmKji8zz4HL3JAG3
          source_id: s_JEmLoa6B34TExkPDzfUvvx
          stance: supports
          locator: CBDB:38454
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8g1xPJuu7YsaRYH7bWhPqE
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJtHe962iSXPDuXk8JWW7s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B0llbUMcBJlW1EhZqqUK18
          claim_id: c_8g1xPJuu7YsaRYH7bWhPqE
          source_id: s_JEmLoa6B34TExkPDzfUvvx
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1641：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eJtHe962iSXPDuXk8JWW7s
        status: active
        display_name: 王廷訓
        merged_into_person_id: null
    - claim:
        id: c_-0HptMWf75tzmEv2MjaUrO
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JcjBFNQo2NU4UvF1qMREi6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aiutGoVDPLCThIshaakOkO
          claim_id: c_-0HptMWf75tzmEv2MjaUrO
          source_id: s_JEmLoa6B34TExkPDzfUvvx
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1642：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JcjBFNQo2NU4UvF1qMREi6
        status: active
        display_name: 王廷義
        merged_into_person_id: null
    - claim:
        id: c_pT85DGc1D22xDFeNlvd_f-
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZViznSSCMeDEzahje8JWhN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKOlRuNsRGUIMCYWwmElzJ
          claim_id: c_pT85DGc1D22xDFeNlvd_f-
          source_id: s_JEmLoa6B34TExkPDzfUvvx
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZViznSSCMeDEzahje8JWhN
        status: active
        display_name: 王廷睿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_schgSLttMbpJ7ZMydB0kSH
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eFrwg4je75eM6GSEL76k3C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSOd4b5jHqBvK7OxI5qQ0a
          claim_id: c_schgSLttMbpJ7ZMydB0kSH
          source_id: s_At_0zfDd1zBIy4bzEME23t
          stance: supports
          locator: 宋史：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_At_0zfDd1zBIy4bzEME23t
            source_type: api_record
            title: 中国历代人物传记资料库：侯氏(王景妻)（CBDB 119468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119468&o=json
            external_identifier: CBDB:119468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eFrwg4je75eM6GSEL76k3C
        status: active
        display_name: 侯氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| birth.date | 889年 | accepted |
| death.date | 963年 | accepted |
| bio.summary | 王景（889年—963年），五代人物。籍贯掖縣，身份为精於騎射、熟諳兵法韜略、軍事家，曾任節度使、秘書省監、侍中。（中国历代人物传记资料库 CBDB 38454） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eJtHe962iSXPDuXk8JWW7s | 王廷訓 | accepted |
| children | p_JcjBFNQo2NU4UvF1qMREi6 | 王廷義 | accepted |
| children | p_ZViznSSCMeDEzahje8JWhN | 王廷睿 | accepted |
| spouses | p_eFrwg4je75eM6GSEL76k3C | 侯氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：侯氏(王景妻)（CBDB 119468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119468&o=json)
- [中国历代人物传记资料库：王景（CBDB 38454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38454&o=json)
