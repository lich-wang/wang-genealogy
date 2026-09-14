---
schema: wang-person/v1
id: p_aZXBatcc6mdp3QRC5AaJD4
status: active
merged_into: null
display_name: 王光遠
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pjQMcLnCnwd32NBcV9gmqK
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ZHkUBNCbgWfEpNDCRvNVR
          claim_id: c_pjQMcLnCnwd32NBcV9gmqK
          source_id: s_Cw2NXiSd1Jch75ohxBsXNX
          stance: supports
          locator: CBDB:225797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225797）
          source: &a1
            id: s_Cw2NXiSd1Jch75ohxBsXNX
            source_type: api_record
            title: 中国历代人物传记资料库：王光遠（CBDB 225797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225797&o=json
            external_identifier: CBDB:225797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1WvzpjA9rB3ncts5QopE1A
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光遠，明人物。萬曆丙戌科進士進士，籍贯即墨，曾任教諭。（中国历代人物传记资料库 CBDB 225797）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2GZxKeVreB8BIJow_VPMla
          claim_id: c_1WvzpjA9rB3ncts5QopE1A
          source_id: s_Cw2NXiSd1Jch75ohxBsXNX
          stance: supports
          locator: CBDB:225797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZDXZ3w-NCt2EsTnBLbxGUY
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hWNF7HbB9E5if6kNK731ro
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ehjf68mueDGfSXrtAZslUb
          claim_id: c_ZDXZ3w-NCt2EsTnBLbxGUY
          source_id: s_Cw2NXiSd1Jch75ohxBsXNX
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hWNF7HbB9E5if6kNK731ro
        status: active
        display_name: 王祿兆
        merged_into_person_id: null
    - claim:
        id: c_OOT3H_n6XwSzrAsK4jgfgz
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BUudMPLirLsofmSHESv5xL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wje8Q3ek9iKaO9IWmkLhEz
          claim_id: c_OOT3H_n6XwSzrAsK4jgfgz
          source_id: s_24EH85N2yuKgQTPHRBLY6M
          stance: supports
          locator: CBDB：兄弟 王祿兆（206985）之父／母 王光遠
          quotation: null
          interpretation_note: 由兄弟关系推断：王祥兆 与 王祿兆 为同胞（CBDB 记「兄」），王祿兆 之父／母即 王祥兆 之父／母。
          source:
            id: s_24EH85N2yuKgQTPHRBLY6M
            source_type: api_record
            title: 中国历代人物传记资料库：王祥兆（CBDB 225805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225805&o=json
            external_identifier: CBDB:225805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BUudMPLirLsofmSHESv5xL
        status: active
        display_name: 王祥兆
        merged_into_person_id: null
    - claim:
        id: c_5NH36YkTZEiLhOoGPXzj_J
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QBQLEZ5UPwMpuCqz2RCFSi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjUDte3n2nRx8uqNCDXVUp
          claim_id: c_5NH36YkTZEiLhOoGPXzj_J
          source_id: s_vcUdobp2Hna8l6m6Cl5Ftg
          stance: supports
          locator: CBDB：兄弟 王祿兆（206985）之父／母 王光遠
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉兆 与 王祿兆 为同胞（CBDB 记「兄」），王祿兆 之父／母即 王嘉兆 之父／母。
          source:
            id: s_vcUdobp2Hna8l6m6Cl5Ftg
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉兆（CBDB 225806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225806&o=json
            external_identifier: CBDB:225806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QBQLEZ5UPwMpuCqz2RCFSi
        status: active
        display_name: 王嘉兆
        merged_into_person_id: null
    - claim:
        id: c__gW1OI8eXUL3yrq5QAo7pG
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jZCidZkym8zE2dU2j4CAQ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SegISLg0IbMg-VVntlprFL
          claim_id: c__gW1OI8eXUL3yrq5QAo7pG
          source_id: s_Eun4AtSxLDBv4Xvq9gc7u3
          stance: supports
          locator: CBDB：兄弟 王祿兆（206985）之父／母 王光遠
          quotation: null
          interpretation_note: 由兄弟关系推断：王禎兆 与 王祿兆 为同胞（CBDB 记「兄」），王祿兆 之父／母即 王禎兆 之父／母。
          source:
            id: s_Eun4AtSxLDBv4Xvq9gc7u3
            source_type: api_record
            title: 中国历代人物传记资料库：王禎兆（CBDB 225804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225804&o=json
            external_identifier: CBDB:225804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jZCidZkym8zE2dU2j4CAQ9
        status: active
        display_name: 王禎兆
        merged_into_person_id: null
    - claim:
        id: c_v2pmbG4MdnG1qco_sih1fz
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qhGKo5JpvhPU7DP594Wyp4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MTM3df9AF6yFpSGIN9IJQo
          claim_id: c_v2pmbG4MdnG1qco_sih1fz
          source_id: s_4VlXdGOD5TidutbSyTbrdQ
          stance: supports
          locator: CBDB：兄弟 王祿兆（206985）之父／母 王光遠
          quotation: null
          interpretation_note: 由兄弟关系推断：王吉兆 与 王祿兆 为同胞（CBDB 记「兄」），王祿兆 之父／母即 王吉兆 之父／母。
          source:
            id: s_4VlXdGOD5TidutbSyTbrdQ
            source_type: api_record
            title: 中国历代人物传记资料库：王吉兆（CBDB 225802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225802&o=json
            external_identifier: CBDB:225802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qhGKo5JpvhPU7DP594Wyp4
        status: active
        display_name: 王吉兆
        merged_into_person_id: null
    - claim:
        id: c_49pRYsYW0CUN4XsyyLnHC5
        subject_person_id: p_aZXBatcc6mdp3QRC5AaJD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tLsgshwRfAYuAQFMo1jmYR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3U4yH8ATm-QnZMJDYDbIzU
          claim_id: c_49pRYsYW0CUN4XsyyLnHC5
          source_id: s_bCl72twcPwm2x5ljGizuh5
          stance: supports
          locator: CBDB：兄弟 王祿兆（206985）之父／母 王光遠
          quotation: null
          interpretation_note: 由兄弟关系推断：王福兆 与 王祿兆 为同胞（CBDB 记「弟」），王祿兆 之父／母即 王福兆 之父／母。
          source:
            id: s_bCl72twcPwm2x5ljGizuh5
            source_type: api_record
            title: 中国历代人物传记资料库：王福兆（CBDB 225801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225801&o=json
            external_identifier: CBDB:225801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tLsgshwRfAYuAQFMo1jmYR
        status: active
        display_name: 王福兆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光遠 | accepted |
| bio.summary | 王光遠，明人物。萬曆丙戌科進士進士，籍贯即墨，曾任教諭。（中国历代人物传记资料库 CBDB 225797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hWNF7HbB9E5if6kNK731ro | 王祿兆 | accepted |
| children | p_BUudMPLirLsofmSHESv5xL | 王祥兆 | accepted |
| children | p_QBQLEZ5UPwMpuCqz2RCFSi | 王嘉兆 | accepted |
| children | p_jZCidZkym8zE2dU2j4CAQ9 | 王禎兆 | accepted |
| children | p_qhGKo5JpvhPU7DP594Wyp4 | 王吉兆 | accepted |
| children | p_tLsgshwRfAYuAQFMo1jmYR | 王福兆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福兆（CBDB 225801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225801&o=json)
- [中国历代人物传记资料库：王光遠（CBDB 225797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225797&o=json)
- [中国历代人物传记资料库：王吉兆（CBDB 225802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225802&o=json)
- [中国历代人物传记资料库：王嘉兆（CBDB 225806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225806&o=json)
- [中国历代人物传记资料库：王祥兆（CBDB 225805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225805&o=json)
- [中国历代人物传记资料库：王禎兆（CBDB 225804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225804&o=json)
