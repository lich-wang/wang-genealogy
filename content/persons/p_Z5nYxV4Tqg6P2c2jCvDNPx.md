---
schema: wang-person/v1
id: p_Z5nYxV4Tqg6P2c2jCvDNPx
status: active
merged_into: null
display_name: 王惠
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g39MFLmHd6EP3gfhsEgFoz
        subject_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n2DFTDEepzMU3EVjameb1R
          claim_id: c_g39MFLmHd6EP3gfhsEgFoz
          source_id: s_WQDCsfu859LGuhYditnp8F
          stance: supports
          locator: CBDB:200679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200679）
          source: &a1
            id: s_WQDCsfu859LGuhYditnp8F
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 200679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200679&o=json
            external_identifier: CBDB:200679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZtaKXSJKE5zuBUDRpdqzmb
        subject_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXwnvwMdYQ13Neogzjb8Gc
          claim_id: c_ZtaKXSJKE5zuBUDRpdqzmb
          source_id: s_WQDCsfu859LGuhYditnp8F
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
        id: c_ttrHtApmBE6wnj1eKSNJ7b
        subject_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠（生于1464年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 200679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__yi49t290RgbJH4cTPJ9-y
          claim_id: c_ttrHtApmBE6wnj1eKSNJ7b
          source_id: s_WQDCsfu859LGuhYditnp8F
          stance: supports
          locator: CBDB:200679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VkL_kdzIfQ3P3W_rcM8QC4
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1bLsqqsW0CFbrfWPQxfK3
          claim_id: c_VkL_kdzIfQ3P3W_rcM8QC4
          source_id: s_nwQ37XeqP8XiBynqejnHsn
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nwQ37XeqP8XiBynqejnHsn
            source_type: api_record
            title: 中国历代人物传记资料库：王東溪（CBDB 261338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json
            external_identifier: CBDB:261338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xJckw5M7s3953PwfjKtPgj
        status: active
        display_name: 王東溪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_H-iOgisw44eeLMzkE2L3Hf
        subject_person_id: p_smxXzZUQV98RoMAng6P1kS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-A5dJJz8sV2VL48XndXYO
          claim_id: c_H-iOgisw44eeLMzkE2L3Hf
          source_id: s_Xc3wWPGCrELpdBJEKtyL1m
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Xc3wWPGCrELpdBJEKtyL1m
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 261337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261337&o=json
            external_identifier: CBDB:261337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_smxXzZUQV98RoMAng6P1kS
        status: active
        display_name: 王璡
        merged_into_person_id: null
    - claim:
        id: c_gQaLurmY_UxIvyPNvYhrCR
        subject_person_id: p_vueLBrU1RnBx1aZUzw5XWG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfOAf3teWXzvUSw6w_rwhu
          claim_id: c_gQaLurmY_UxIvyPNvYhrCR
          source_id: s_mxLnv6QWPebEbZYfUNZtmx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mxLnv6QWPebEbZYfUNZtmx
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 261335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261335&o=json
            external_identifier: CBDB:261335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vueLBrU1RnBx1aZUzw5XWG
        status: active
        display_name: 王頤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| birth.date | 1464年 | accepted |
| bio.summary | 王惠（生于1464年），明人物。明清進士進士，籍贯慈溪，入仕進士。（中国历代人物传记资料库 CBDB 200679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJckw5M7s3953PwfjKtPgj | 王東溪 | accepted |
| ancestors | p_smxXzZUQV98RoMAng6P1kS | 王璡 | accepted |
| ancestors | p_vueLBrU1RnBx1aZUzw5XWG | 王頤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東溪（CBDB 261338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261338&o=json)
- [中国历代人物传记资料库：王惠（CBDB 200679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200679&o=json)
- [中国历代人物传记资料库：王璡（CBDB 261337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261337&o=json)
- [中国历代人物传记资料库：王頤（CBDB 261335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261335&o=json)
