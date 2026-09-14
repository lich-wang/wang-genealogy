---
schema: wang-person/v1
id: p_feVTPN7HCaS1BxqehN6dAD
status: active
merged_into: null
display_name: 王度
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LrM28Q1A5R5WuNLTU31fUs
        subject_person_id: p_feVTPN7HCaS1BxqehN6dAD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UKEKiNJhVKYnoWKBkJugmJ
          claim_id: c_LrM28Q1A5R5WuNLTU31fUs
          source_id: s_4BCKDC9vCQZBt84PMj5mSb
          stance: supports
          locator: CBDB:206012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206012）
          source: &a1
            id: s_4BCKDC9vCQZBt84PMj5mSb
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 206012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206012&o=json
            external_identifier: CBDB:206012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NPj9HqTuYJVviySPMBZP7A
        subject_person_id: p_feVTPN7HCaS1BxqehN6dAD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WuK655Mz3cY6MECGsEPZQt
          claim_id: c_NPj9HqTuYJVviySPMBZP7A
          source_id: s_4BCKDC9vCQZBt84PMj5mSb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n9xmWqwf9ooa251HAXwBtE
        subject_person_id: p_feVTPN7HCaS1BxqehN6dAD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度（生于1536年），明人物。明清進士進士，籍贯深澤，入仕進士。（中国历代人物传记资料库 CBDB 206012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uWLDtrLb_rHtJfaKuIUHYS
          claim_id: c_n9xmWqwf9ooa251HAXwBtE
          source_id: s_4BCKDC9vCQZBt84PMj5mSb
          stance: supports
          locator: CBDB:206012
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_esYuCObzkoLGQbY4pVD2UY
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_feVTPN7HCaS1BxqehN6dAD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUWdG6365fFceLqaCGEIL1
          claim_id: c_esYuCObzkoLGQbY4pVD2UY
          source_id: s_4BCKDC9vCQZBt84PMj5mSb
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gBwRWdErARQJVzB6EHJVfE
        status: active
        display_name: 王朝棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_oq5KsK3gUJcwSi6V8FWMtA
        subject_person_id: p_feVTPN7HCaS1BxqehN6dAD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1d3yFCQ4PyjGSXMCRimaCN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xMi4GRfAAiTPzRonui7yFJ
          claim_id: c_oq5KsK3gUJcwSi6V8FWMtA
          source_id: s_Vati1fdeBrTM_28hTbyScT
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vati1fdeBrTM_28hTbyScT
            source_type: api_record
            title: 中国历代人物传记资料库：呂氏(王度妻)（CBDB 212088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212088&o=json
            external_identifier: CBDB:212088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1d3yFCQ4PyjGSXMCRimaCN
        status: active
        display_name: 呂氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_AeuIScV2qRnsNO8ZV-K9hO
        subject_person_id: p_m1y9NSRQiMJ2Dd2MjWHRAW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_feVTPN7HCaS1BxqehN6dAD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pvr_KciF2ijENtcabGYI4q
          claim_id: c_AeuIScV2qRnsNO8ZV-K9hO
          source_id: s_4BCKDC9vCQZBt84PMj5mSb
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m1y9NSRQiMJ2Dd2MjWHRAW
        status: active
        display_name: 王獻
        merged_into_person_id: null
    - claim:
        id: c_f9aASNqnk7p19hT4WUC_iw
        subject_person_id: p_nNfNDpAPmaSEibBKUCYkZU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_feVTPN7HCaS1BxqehN6dAD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZMK_5ozwH30HGqzGJdLapa
          claim_id: c_f9aASNqnk7p19hT4WUC_iw
          source_id: s_4BCKDC9vCQZBt84PMj5mSb
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nNfNDpAPmaSEibBKUCYkZU
        status: active
        display_name: 王溥
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_yyUabHWBU-Yj1KS9jWb4tT
        subject_person_id: p_DCmdGAKqHdH9yKYnhjgZf5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_feVTPN7HCaS1BxqehN6dAD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVubPKJX4GArFV_dBdYaRD
          claim_id: c_yyUabHWBU-Yj1KS9jWb4tT
          source_id: s_ckg7uJEWE_5mM0Zcq7h1QV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206012 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ckg7uJEWE_5mM0Zcq7h1QV
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 212090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212090&o=json
            external_identifier: CBDB:212090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DCmdGAKqHdH9yKYnhjgZf5
        status: active
        display_name: 王廉
        merged_into_person_id: null
    - claim:
        id: c_YWoUTakfuctoR1294dDCzg
        subject_person_id: p_FwopUYPpXiD1ii9Zfys6n8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_feVTPN7HCaS1BxqehN6dAD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JOQh9CiXRvxZ-aSpd7osBP
          claim_id: c_YWoUTakfuctoR1294dDCzg
          source_id: s_9VXyz77IGEZMA4BYth4UXR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206012 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9VXyz77IGEZMA4BYth4UXR
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 212091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212091&o=json
            external_identifier: CBDB:212091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwopUYPpXiD1ii9Zfys6n8
        status: active
        display_name: 王庶
        merged_into_person_id: null
    - claim:
        id: c_sawLnxK9VgYpMxX9-VwMoS
        subject_person_id: p_feVTPN7HCaS1BxqehN6dAD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i5BneAts78P9AvsH5HQobr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kdcb4aHYxSFdnXfZZgixX
          claim_id: c_sawLnxK9VgYpMxX9-VwMoS
          source_id: s_JG5nN4DhEM0h0Uik4Swxrm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206012 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JG5nN4DhEM0h0Uik4Swxrm
            source_type: api_record
            title: 中国历代人物传记资料库：王府（CBDB 212089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json
            external_identifier: CBDB:212089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i5BneAts78P9AvsH5HQobr
        status: active
        display_name: 王府
        merged_into_person_id: null
---

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| birth.date | 1536年 | accepted |
| bio.summary | 王度（生于1536年），明人物。明清進士進士，籍贯深澤，入仕進士。（中国历代人物传记资料库 CBDB 206012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gBwRWdErARQJVzB6EHJVfE | 王朝棟 | accepted |
| spouses | p_1d3yFCQ4PyjGSXMCRimaCN | 呂氏 | accepted |
| ancestors | p_m1y9NSRQiMJ2Dd2MjWHRAW | 王獻 | accepted |
| ancestors | p_nNfNDpAPmaSEibBKUCYkZU | 王溥 | accepted |
| other | p_DCmdGAKqHdH9yKYnhjgZf5 | 王廉 | accepted |
| other | p_FwopUYPpXiD1ii9Zfys6n8 | 王庶 | accepted |
| other | p_i5BneAts78P9AvsH5HQobr | 王府 | accepted |

## 外部来源

- [中国历代人物传记资料库：呂氏(王度妻)（CBDB 212088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212088&o=json)
- [中国历代人物传记资料库：王度（CBDB 206012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206012&o=json)
- [中国历代人物传记资料库：王府（CBDB 212089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json)
- [中国历代人物传记资料库：王廉（CBDB 212090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212090&o=json)
- [中国历代人物传记资料库：王庶（CBDB 212091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212091&o=json)
