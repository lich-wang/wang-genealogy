---
schema: wang-person/v1
id: p_QEEDRgkTG1gPE2Q7oYF5FU
status: active
merged_into: null
display_name: 王雲鵬
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u7ktXHQ1GSzjffFP1NsaDA
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mLHX9kALJfbk4BEpt6J3iR
          claim_id: c_u7ktXHQ1GSzjffFP1NsaDA
          source_id: s_B5drTmiLVVUMoY2XeN9Xc1
          stance: supports
          locator: CBDB:213741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213741）
          source: &a1
            id: s_B5drTmiLVVUMoY2XeN9Xc1
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鵬（CBDB 213741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213741&o=json
            external_identifier: CBDB:213741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2bdVrntgk9bs29ANpA8bDf
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鵬，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213741）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5WHhO8iWEh1lBGEFHS27GM
          claim_id: c_2bdVrntgk9bs29ANpA8bDf
          source_id: s_B5drTmiLVVUMoY2XeN9Xc1
          stance: supports
          locator: CBDB:213741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WVm7ls5Bgx43VKe1jDdEAW
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvy0c4_N3D_ySzxCsk6NAG
          claim_id: c_WVm7ls5Bgx43VKe1jDdEAW
          source_id: s_B5drTmiLVVUMoY2XeN9Xc1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vzt49mQ7898sBQeKmR1Czu
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_MEknGWmaGtp59DlNOSx7Pa
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1rFSs1MDWjoDEsWahgAEiH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFbCKAsp6nJM-0AnM955CC
          claim_id: c_MEknGWmaGtp59DlNOSx7Pa
          source_id: s_2kaSR4u1KbVaQbgqKlCiO3
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王价 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王价 之父／母。
          source:
            id: s_2kaSR4u1KbVaQbgqKlCiO3
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 213745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213745&o=json
            external_identifier: CBDB:213745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1rFSs1MDWjoDEsWahgAEiH
        status: active
        display_name: 王价
        merged_into_person_id: null
    - claim:
        id: c_ImuaKd09bL0kusN6YVMSI4
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DEKU8PUczGT5KTc7N61XeP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoZarI-B3K9NV9GxqHceI5
          claim_id: c_ImuaKd09bL0kusN6YVMSI4
          source_id: s_4Uw84ZOtZBMZ7NA0bSSOgj
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王仕 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王仕 之父／母。
          source:
            id: s_4Uw84ZOtZBMZ7NA0bSSOgj
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 213748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213748&o=json
            external_identifier: CBDB:213748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DEKU8PUczGT5KTc7N61XeP
        status: active
        display_name: 王仕
        merged_into_person_id: null
    - claim:
        id: c_fXH7JPddsdRPKb5DRoxJ4E
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DtFsSKP86GUtExRKKocfLK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y8RJgxVkigEEDoPnvoifQH
          claim_id: c_fXH7JPddsdRPKb5DRoxJ4E
          source_id: s_OuKsIokBcNQQn7Gm4Bxl1i
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王伋 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王伋 之父／母。
          source:
            id: s_OuKsIokBcNQQn7Gm4Bxl1i
            source_type: api_record
            title: 中国历代人物传记资料库：王伋（CBDB 213752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213752&o=json
            external_identifier: CBDB:213752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DtFsSKP86GUtExRKKocfLK
        status: active
        display_name: 王伋
        merged_into_person_id: null
    - claim:
        id: c_3lT33qkIXZwGAMf7JJBMFy
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TrBNVDkCMthFCN2v3HWAK3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_To-KAlTQ6Tctc_SKyaSxlF
          claim_id: c_3lT33qkIXZwGAMf7JJBMFy
          source_id: s_1FCnxxNMxCp4a_PRwy3bW6
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王僎 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王僎 之父／母。
          source:
            id: s_1FCnxxNMxCp4a_PRwy3bW6
            source_type: api_record
            title: 中国历代人物传记资料库：王僎（CBDB 213749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213749&o=json
            external_identifier: CBDB:213749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TrBNVDkCMthFCN2v3HWAK3
        status: active
        display_name: 王僎
        merged_into_person_id: null
    - claim:
        id: c_28eMVecFBrHIf7yapbPfjB
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bNDLTW3gYoA1JcLjYeRCQ2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WKdqj9ECNpD3MZI5jTkdjy
          claim_id: c_28eMVecFBrHIf7yapbPfjB
          source_id: s_9aduS-i8F_noIPh89wYGZS
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王佑 与 王儒 为同胞（CBDB 记「弟」），王儒 之父／母即 王佑 之父／母。
          source:
            id: s_9aduS-i8F_noIPh89wYGZS
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 213744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213744&o=json
            external_identifier: CBDB:213744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bNDLTW3gYoA1JcLjYeRCQ2
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_ePU0ipYESvB4gp7f5RelDV
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dAteZp3MJh6FpVJDLdownb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZepI0yAO43Pq3lU9Cx6YUI
          claim_id: c_ePU0ipYESvB4gp7f5RelDV
          source_id: s_fKE74QtHFNj74PrjCJr_9a
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王佳 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王佳 之父／母。
          source:
            id: s_fKE74QtHFNj74PrjCJr_9a
            source_type: api_record
            title: 中国历代人物传记资料库：王佳（CBDB 213751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213751&o=json
            external_identifier: CBDB:213751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dAteZp3MJh6FpVJDLdownb
        status: active
        display_name: 王佳
        merged_into_person_id: null
    - claim:
        id: c_fmoV4EqBeyGAsmTAr6caOa
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mZ3QvU1uozUuNDFD3Fs4K3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Cr6vmbnIutxC1sY8EBk-S
          claim_id: c_fmoV4EqBeyGAsmTAr6caOa
          source_id: s__D8c8SSI9qbfVogZpdIta7
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王偉 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王偉 之父／母。
          source:
            id: s__D8c8SSI9qbfVogZpdIta7
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 213746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213746&o=json
            external_identifier: CBDB:213746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mZ3QvU1uozUuNDFD3Fs4K3
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c_1bUK4Yq-W-ZSwMBAp53dpI
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ruAtE2o3DH5LKHmspo6Cfm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O8tBn3GrBskwwQq5XisDf-
          claim_id: c_1bUK4Yq-W-ZSwMBAp53dpI
          source_id: s_aLQkgYPgqviBApl4EhH8RC
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王侃 之父／母。
          source:
            id: s_aLQkgYPgqviBApl4EhH8RC
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 213750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213750&o=json
            external_identifier: CBDB:213750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ruAtE2o3DH5LKHmspo6Cfm
        status: active
        display_name: 王侃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雲鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲鵬 | accepted |
| bio.summary | 王雲鵬，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vzt49mQ7898sBQeKmR1Czu | 王儒 | accepted |
| children | p_1rFSs1MDWjoDEsWahgAEiH | 王价 | accepted |
| children | p_DEKU8PUczGT5KTc7N61XeP | 王仕 | accepted |
| children | p_DtFsSKP86GUtExRKKocfLK | 王伋 | accepted |
| children | p_TrBNVDkCMthFCN2v3HWAK3 | 王僎 | accepted |
| children | p_bNDLTW3gYoA1JcLjYeRCQ2 | 王佑 | accepted |
| children | p_dAteZp3MJh6FpVJDLdownb | 王佳 | accepted |
| children | p_mZ3QvU1uozUuNDFD3Fs4K3 | 王偉 | accepted |
| children | p_ruAtE2o3DH5LKHmspo6Cfm | 王侃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伋（CBDB 213752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213752&o=json)
- [中国历代人物传记资料库：王佳（CBDB 213751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213751&o=json)
- [中国历代人物传记资料库：王价（CBDB 213745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213745&o=json)
- [中国历代人物传记资料库：王侃（CBDB 213750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213750&o=json)
- [中国历代人物传记资料库：王仕（CBDB 213748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213748&o=json)
- [中国历代人物传记资料库：王偉（CBDB 213746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213746&o=json)
- [中国历代人物传记资料库：王佑（CBDB 213744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213744&o=json)
- [中国历代人物传记资料库：王雲鵬（CBDB 213741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213741&o=json)
- [中国历代人物传记资料库：王僎（CBDB 213749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213749&o=json)
