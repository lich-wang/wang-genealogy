---
schema: wang-person/v1
id: p_3h5g9NkXDMotNKCta4dEHB
status: active
merged_into: null
display_name: 王秉彝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cg7FZHQtAADFaKwHFuvStS
        subject_person_id: p_3h5g9NkXDMotNKCta4dEHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7nBLFCEQEkMsqSc8ginNGv
          claim_id: c_cg7FZHQtAADFaKwHFuvStS
          source_id: s_EEE5e95wfR1tnUXaLTJN3U
          stance: supports
          locator: CBDB:126588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126588）
          source: &a1
            id: s_EEE5e95wfR1tnUXaLTJN3U
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 126588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126588&o=json
            external_identifier: CBDB:126588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_utbejzdhLbaxoeCAxJXfj2
        subject_person_id: p_3h5g9NkXDMotNKCta4dEHB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCqYs4FhcsYnDSEVFCRD5o
          claim_id: c_utbejzdhLbaxoeCAxJXfj2
          source_id: s_EEE5e95wfR1tnUXaLTJN3U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zcnupXnZpF3XDSY3zdFhFe
        subject_person_id: p_KwDq9LQwPdZFWKPBa6KCCm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3h5g9NkXDMotNKCta4dEHB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8-H5cr82Zb1TnQaKcLg0q
          claim_id: c_zcnupXnZpF3XDSY3zdFhFe
          source_id: s_EEE5e95wfR1tnUXaLTJN3U
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百五十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KwDq9LQwPdZFWKPBa6KCCm
        status: active
        display_name: 王暹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Nala4sU28JG2TyIorgdeSa
        subject_person_id: p_3h5g9NkXDMotNKCta4dEHB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ARWLBiAH83mGQZaM2NfyK3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GILCkDnHeZOoc7HNBEpF9v
          claim_id: c_Nala4sU28JG2TyIorgdeSa
          source_id: s_NCj9eiGNLrXYdYa_aHwspq
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百五十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NCj9eiGNLrXYdYa_aHwspq
            source_type: api_record
            title: 中国历代人物传记资料库：杜氏(王秉彝妻)（CBDB 305739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305739&o=json
            external_identifier: CBDB:305739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ARWLBiAH83mGQZaM2NfyK3
        status: active
        display_name: 杜氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_RdMrJoKt89cNVK0Gdi27mG
        subject_person_id: p_yYTE6LySnMjNoTFuLoRZx7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3h5g9NkXDMotNKCta4dEHB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HSfFsRY1KM3wUtbZxoJsTZ
          claim_id: c_RdMrJoKt89cNVK0Gdi27mG
          source_id: s_EEE5e95wfR1tnUXaLTJN3U
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百五十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yYTE6LySnMjNoTFuLoRZx7
        status: active
        display_name: 王道隆
        merged_into_person_id: null
    - claim:
        id: c_Ov5uXVBjtH1D7gUvIjtkQD
        subject_person_id: p_3r21ZhGz6JR2kZoJtUp6Dd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3h5g9NkXDMotNKCta4dEHB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fRJbWgxqFlR115M4OLL0fF
          claim_id: c_Ov5uXVBjtH1D7gUvIjtkQD
          source_id: s_EEE5e95wfR1tnUXaLTJN3U
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百五十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3r21ZhGz6JR2kZoJtUp6Dd
        status: active
        display_name: 王從義
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王秉彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉彝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KwDq9LQwPdZFWKPBa6KCCm | 王暹 | accepted |
| spouses | p_ARWLBiAH83mGQZaM2NfyK3 | 杜氏 | accepted |
| ancestors | p_yYTE6LySnMjNoTFuLoRZx7 | 王道隆 | accepted |
| ancestors | p_3r21ZhGz6JR2kZoJtUp6Dd | 王從義 | accepted |

## 外部来源

- [中国历代人物传记资料库：杜氏(王秉彝妻)（CBDB 305739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305739&o=json)
- [中国历代人物传记资料库：王秉彝（CBDB 126588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126588&o=json)
