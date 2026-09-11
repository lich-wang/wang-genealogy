---
schema: wang-person/v1
id: p_b2PRCnVEBsHtgqHZaJPLzQ
status: active
merged_into: null
display_name: 王相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eTpiM2kwtY5ru6xahuoDh8
        subject_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nCTdgoFdjbbr3Sei9wE8vA
          claim_id: c_eTpiM2kwtY5ru6xahuoDh8
          source_id: s_6F2kLme4CvTS2KW9MauC32
          stance: supports
          locator: CBDB:68074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68074）
          source: &a1
            id: s_6F2kLme4CvTS2KW9MauC32
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 68074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68074&o=json
            external_identifier: CBDB:68074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bd5r8N25ZtJUoTaJPJaMqA
        subject_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
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
        - id: cs_xh7mvfMR88zUCM8K1hkD3y
          claim_id: c_bd5r8N25ZtJUoTaJPJaMqA
          source_id: s_6F2kLme4CvTS2KW9MauC32
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
        id: c_EkeAfaqm08jKAfPExDIk22
        subject_person_id: p_3vRsxiKfaTFa2ztS9aVsqB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lO2-u5QkMpufmeSlNAbpiB
          claim_id: c_EkeAfaqm08jKAfPExDIk22
          source_id: s_6F2kLme4CvTS2KW9MauC32
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3vRsxiKfaTFa2ztS9aVsqB
        status: active
        display_name: 王惟新
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_p7-5xlRUjPEmuEFBXpIkNS
        subject_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fCsjZnWzfUjLom7GNyXTsQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fuuoDvYRr43Bcqi9mTzSWD
          claim_id: c_p7-5xlRUjPEmuEFBXpIkNS
          source_id: s_YQJk-Imzltb0ydI6NGlwUH
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YQJk-Imzltb0ydI6NGlwUH
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王相妻)（CBDB 238409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238409&o=json
            external_identifier: CBDB:238409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fCsjZnWzfUjLom7GNyXTsQ
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_RkVo8G_rj6E__3YHn9Y6ya
        subject_person_id: p_NGifpb6gL7oqdH75gy61NE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2_2t4FHs4yUzxzrvuiUos7
          claim_id: c_RkVo8G_rj6E__3YHn9Y6ya
          source_id: s_6F2kLme4CvTS2KW9MauC32
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NGifpb6gL7oqdH75gy61NE
        status: active
        display_name: 王世傑
        merged_into_person_id: null
    - claim:
        id: c_6VpaO88PT4Yzjde4TIdyDf
        subject_person_id: p_qHWEFvat5qe8sNPkZm2a3f
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JVgCrdCKo0GYS9LszfsFqs
          claim_id: c_6VpaO88PT4Yzjde4TIdyDf
          source_id: s_6F2kLme4CvTS2KW9MauC32
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第九十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qHWEFvat5qe8sNPkZm2a3f
        status: active
        display_name: 王永迪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3vRsxiKfaTFa2ztS9aVsqB | 王惟新 | accepted |
| spouses | p_fCsjZnWzfUjLom7GNyXTsQ | 陳氏 | accepted |
| ancestors | p_NGifpb6gL7oqdH75gy61NE | 王世傑 | accepted |
| ancestors | p_qHWEFvat5qe8sNPkZm2a3f | 王永迪 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王相妻)（CBDB 238409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238409&o=json)
- [中国历代人物传记资料库：王相（CBDB 68074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68074&o=json)
