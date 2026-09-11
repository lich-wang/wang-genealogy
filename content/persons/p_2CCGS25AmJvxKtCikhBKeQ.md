---
schema: wang-person/v1
id: p_2CCGS25AmJvxKtCikhBKeQ
status: active
merged_into: null
display_name: 王一誠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aK6mmradLNfMjviQFEBxR4
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G1Ja1SDvoC68kVP6AdfLub
          claim_id: c_aK6mmradLNfMjviQFEBxR4
          source_id: s_3huwJDws72HMTYCFK3FEtU
          stance: supports
          locator: CBDB:205728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205728）
          source: &a1
            id: s_3huwJDws72HMTYCFK3FEtU
            source_type: api_record
            title: 中国历代人物传记资料库：王一誠（CBDB 205728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205728&o=json
            external_identifier: CBDB:205728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vVN3bNwNBYAAHAyHzuPme7
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96KY5jWcnV33GbRbMHqHNM
          claim_id: c_vVN3bNwNBYAAHAyHzuPme7
          source_id: s_3huwJDws72HMTYCFK3FEtU
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
        id: c_2eGW4PNz8gAYuP2PNG9Gde
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
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
        - id: cs_Lb5J3KJm4EJmh1JxvxCc4y
          claim_id: c_2eGW4PNz8gAYuP2PNG9Gde
          source_id: s_3huwJDws72HMTYCFK3FEtU
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
        id: c_tYVldj5CN8a6NJq0grvyel
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-PeOvEniz9I1kRrDrARp_2
          claim_id: c_tYVldj5CN8a6NJq0grvyel
          source_id: s_3huwJDws72HMTYCFK3FEtU
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第三百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uWARgTHwHotCqXAXAieGV4
        status: active
        display_name: 王世芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0AmRX49CKNS8rD0vj2oIyM
        subject_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KBcUENrrN219vK1fyr1CLs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_amvnN1SV1uoOv5AiHggfVw
          claim_id: c_0AmRX49CKNS8rD0vj2oIyM
          source_id: s_D8nibGKQUTeOEa3QHLvNDM
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第三百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D8nibGKQUTeOEa3QHLvNDM
            source_type: api_record
            title: 中国历代人物传记资料库：魏氏(王一誠妻)（CBDB 337558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337558&o=json
            external_identifier: CBDB:337558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KBcUENrrN219vK1fyr1CLs
        status: active
        display_name: 魏氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_WeWUyhKNUo3E_SB-WSp-gn
        subject_person_id: p_bcADb17e2zmWN3twBo66DQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CfpkZJFFElQl50RI-2bUDh
          claim_id: c_WeWUyhKNUo3E_SB-WSp-gn
          source_id: s_3huwJDws72HMTYCFK3FEtU
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第三百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bcADb17e2zmWN3twBo66DQ
        status: active
        display_name: 王僑
        merged_into_person_id: null
    - claim:
        id: c_UMTZp28TcQU1Xsm-OTciLS
        subject_person_id: p_xqoFC3Q7Vuco8Lnr3uUPM3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Az2FMUmbcDon8gtk2fmE7
          claim_id: c_UMTZp28TcQU1Xsm-OTciLS
          source_id: s_3huwJDws72HMTYCFK3FEtU
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第三百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xqoFC3Q7Vuco8Lnr3uUPM3
        status: active
        display_name: 王悌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一誠 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uWARgTHwHotCqXAXAieGV4 | 王世芳 | accepted |
| spouses | p_KBcUENrrN219vK1fyr1CLs | 魏氏 | accepted |
| ancestors | p_bcADb17e2zmWN3twBo66DQ | 王僑 | accepted |
| ancestors | p_xqoFC3Q7Vuco8Lnr3uUPM3 | 王悌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一誠（CBDB 205728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205728&o=json)
- [中国历代人物传记资料库：魏氏(王一誠妻)（CBDB 337558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337558&o=json)
