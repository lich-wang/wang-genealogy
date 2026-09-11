---
schema: wang-person/v1
id: p_acwBn4E2ueYuXmC3T9fy34
status: active
merged_into: null
display_name: 王士翹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6cDhbBrkEFDQCS2r1yv29E
        subject_person_id: p_acwBn4E2ueYuXmC3T9fy34
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士翹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Pz4SCheFFJqjVFNe6cvhr
          claim_id: c_6cDhbBrkEFDQCS2r1yv29E
          source_id: s_5kvfUU16b6b7vdckWofLHL
          stance: supports
          locator: CBDB:203106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203106）
          source: &a1
            id: s_5kvfUU16b6b7vdckWofLHL
            source_type: api_record
            title: 中国历代人物传记资料库：王士翹（CBDB 203106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203106&o=json
            external_identifier: CBDB:203106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TxH3DHodovuKfZAQ6Uvg5T
        subject_person_id: p_acwBn4E2ueYuXmC3T9fy34
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LoX7gPGDw1XYHHQk4LeVB9
          claim_id: c_TxH3DHodovuKfZAQ6Uvg5T
          source_id: s_5kvfUU16b6b7vdckWofLHL
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
        id: c_qS8RHJCRhnquG2MdMxwwGJ
        subject_person_id: p_acwBn4E2ueYuXmC3T9fy34
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
        - id: cs_YyGUE7N7xV2G6DUkrujQrh
          claim_id: c_qS8RHJCRhnquG2MdMxwwGJ
          source_id: s_5kvfUU16b6b7vdckWofLHL
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
        id: c_kY82c2dJdTZTDPJIIIpm4A
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_acwBn4E2ueYuXmC3T9fy34
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0-7nbIJ4PLZv-p8m_gQB4Q
          claim_id: c_kY82c2dJdTZTDPJIIIpm4A
          source_id: s_5kvfUU16b6b7vdckWofLHL
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EBfbydRv4JZEiVZULEada1
        status: active
        display_name: 王寬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_nQJq5MiSE3lss2tJZwCesx
        subject_person_id: p_acwBn4E2ueYuXmC3T9fy34
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3yGeDKUXUsQ9FwdhF1mY6J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Oi2BQYN9uEqrJYYKa2LfF
          claim_id: c_nQJq5MiSE3lss2tJZwCesx
          source_id: s_pGrVi-L_u6oav2A7eJPCxp
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pGrVi-L_u6oav2A7eJPCxp
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王士翹妻)（CBDB 299912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299912&o=json
            external_identifier: CBDB:299912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3yGeDKUXUsQ9FwdhF1mY6J
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_oDND4trIOX9L7BRj_oH5SG
        subject_person_id: p_26zY5WcDVZXyiR2tN43aiY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_acwBn4E2ueYuXmC3T9fy34
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IaeqE2HZgd0-8czO-R1H-c
          claim_id: c_oDND4trIOX9L7BRj_oH5SG
          source_id: s_5kvfUU16b6b7vdckWofLHL
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_26zY5WcDVZXyiR2tN43aiY
        status: active
        display_name: 王猷允
        merged_into_person_id: null
    - claim:
        id: c_xtN5rn9bzUKfcjvUhRhGCH
        subject_person_id: p_DV9hi6YABUhE77uo5QhrzJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_acwBn4E2ueYuXmC3T9fy34
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SPnE6Q6ym2rhGBIny6Ew9f
          claim_id: c_xtN5rn9bzUKfcjvUhRhGCH
          source_id: s_5kvfUU16b6b7vdckWofLHL
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DV9hi6YABUhE77uo5QhrzJ
        status: active
        display_name: 王槐兆
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王士翹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士翹 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EBfbydRv4JZEiVZULEada1 | 王寬 | accepted |
| spouses | p_3yGeDKUXUsQ9FwdhF1mY6J | 劉氏 | accepted |
| ancestors | p_26zY5WcDVZXyiR2tN43aiY | 王猷允 | accepted |
| ancestors | p_DV9hi6YABUhE77uo5QhrzJ | 王槐兆 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王士翹妻)（CBDB 299912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299912&o=json)
- [中国历代人物传记资料库：王士翹（CBDB 203106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203106&o=json)
