---
schema: wang-person/v1
id: p_a2MgxrEcSzhbMSTAx75fb8
status: active
merged_into: null
display_name: 王鉉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FPcq5WiEjiChtMu78DD2Wc
        subject_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AfH79Ju1jBoHeA18ZQGq7F
          claim_id: c_FPcq5WiEjiChtMu78DD2Wc
          source_id: s_7jwQZDGBhmgWHqs6bzeeYj
          stance: supports
          locator: CBDB:126766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126766）
          source: &a1
            id: s_7jwQZDGBhmgWHqs6bzeeYj
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 126766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126766&o=json
            external_identifier: CBDB:126766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_giW6YfAA4rvdzVK6FTuCxY
        subject_person_id: p_a2MgxrEcSzhbMSTAx75fb8
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
        - id: cs_oDoSNL6LQwsiKfHoXJBaE6
          claim_id: c_giW6YfAA4rvdzVK6FTuCxY
          source_id: s_7jwQZDGBhmgWHqs6bzeeYj
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
        id: c_dwACFuc_k0qqoi19XiteGC
        subject_person_id: p_24PyNib2E1k3cWE7XUriAS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PEtrzDbUevLIO5OK9Cm8Cw
          claim_id: c_dwACFuc_k0qqoi19XiteGC
          source_id: s_7jwQZDGBhmgWHqs6bzeeYj
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_24PyNib2E1k3cWE7XUriAS
        status: active
        display_name: 王處安
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zwa5jElKnAfV0ilkxSYhTa
        subject_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_G8NXeGARDdckpF6V4YVK8D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DueAZpffmiF_bEhzxhvx5F
          claim_id: c_zwa5jElKnAfV0ilkxSYhTa
          source_id: s__13fiHaGO3aR6IzZ_Lt8B3
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s__13fiHaGO3aR6IzZ_Lt8B3
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王鉉妻)（CBDB 239473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239473&o=json
            external_identifier: CBDB:239473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G8NXeGARDdckpF6V4YVK8D
        status: active
        display_name: 何氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_AUnQ0uPqzvs6pwyi7YdXOZ
        subject_person_id: p_ASiHcqUfwmvxD62UQRVghp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_moun9_DIKe6GvFOSgTgXhX
          claim_id: c_AUnQ0uPqzvs6pwyi7YdXOZ
          source_id: s_7jwQZDGBhmgWHqs6bzeeYj
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ASiHcqUfwmvxD62UQRVghp
        status: active
        display_name: 王通甫
        merged_into_person_id: null
    - claim:
        id: c_kNOWUdYVwp9uJRk0wR4XUj
        subject_person_id: p_Dt651oiMocivbJt6r7DvrX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qc7okRXID0TZj_GVIP2kO3
          claim_id: c_kNOWUdYVwp9uJRk0wR4XUj
          source_id: s_7jwQZDGBhmgWHqs6bzeeYj
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Dt651oiMocivbJt6r7DvrX
        status: active
        display_name: 王茂
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_24PyNib2E1k3cWE7XUriAS | 王處安 | accepted |
| spouses | p_G8NXeGARDdckpF6V4YVK8D | 何氏 | accepted |
| ancestors | p_ASiHcqUfwmvxD62UQRVghp | 王通甫 | accepted |
| ancestors | p_Dt651oiMocivbJt6r7DvrX | 王茂 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王鉉妻)（CBDB 239473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239473&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 126766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126766&o=json)
