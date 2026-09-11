---
schema: wang-person/v1
id: p_9cPpJFUi1d46tFMj2MGDrb
status: active
merged_into: null
display_name: 王煒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_daPoAiiC29vr2sZCWZoAK7
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6uJDyow6KiygQktQFCqVi6
          claim_id: c_daPoAiiC29vr2sZCWZoAK7
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: CBDB:202099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202099）
          source: &a1
            id: s_oYEu5Xwri3kM83JFCb6pJB
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 202099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json
            external_identifier: CBDB:202099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_q1SngmUKKxDt64KLPJvQSB
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xA8qnSNR1pfes4KF2v1sua
          claim_id: c_q1SngmUKKxDt64KLPJvQSB
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
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
        id: c_qRnHvtqSy4k3r2MzTZSVCu
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
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
        - id: cs_JZ8ddmPG6WYesNwqW2D467
          claim_id: c_qRnHvtqSy4k3r2MzTZSVCu
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
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
        id: c_XhOeqjQW2bzOq594kVS_Tz
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ss9c8qPRalXsgtJPahtOpu
          claim_id: c_XhOeqjQW2bzOq594kVS_Tz
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y9Be6wCSGkH3WJd1jLBiqu
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Dg283v2Ykgs9PfcC3DSGqc
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_unYC3P7nT51T1KiAcUhLhX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZljg3-zNCKTriQ0itTEtn
          claim_id: c_Dg283v2Ykgs9PfcC3DSGqc
          source_id: s_PHnKhCDGDHFNbkV-pb3Gef
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PHnKhCDGDHFNbkV-pb3Gef
            source_type: api_record
            title: 中国历代人物传记资料库：侯氏(王煒妻)（CBDB 283523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283523&o=json
            external_identifier: CBDB:283523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_unYC3P7nT51T1KiAcUhLhX
        status: active
        display_name: 侯氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_PZNxxUcKHheELIJm0u8jze
        subject_person_id: p_iXNKM9kyH3K89hV4G8Ptqa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9X8MFEsDPy-XyYprd8TT6
          claim_id: c_PZNxxUcKHheELIJm0u8jze
          source_id: s_oYEu5Xwri3kM83JFCb6pJB
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iXNKM9kyH3K89hV4G8Ptqa
        status: active
        display_name: 王彥翔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煒 | accepted |
| birth.date | 1493年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y9Be6wCSGkH3WJd1jLBiqu | 王相 | accepted |
| spouses | p_unYC3P7nT51T1KiAcUhLhX | 侯氏 | accepted |
| ancestors | p_iXNKM9kyH3K89hV4G8Ptqa | 王彥翔 | accepted |

## 外部来源

- [中国历代人物传记资料库：侯氏(王煒妻)（CBDB 283523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283523&o=json)
- [中国历代人物传记资料库：王煒（CBDB 202099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202099&o=json)
