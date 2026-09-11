---
schema: wang-person/v1
id: p_2i8i45vd3ioWAFSmwmfK42
status: active
merged_into: null
display_name: 王良貴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zoiuBtMUVveSk9Gq4aeEBS
        subject_person_id: p_2i8i45vd3ioWAFSmwmfK42
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_13M7Ldpv85cNZzz91f9jN1
          claim_id: c_zoiuBtMUVveSk9Gq4aeEBS
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: CBDB:126530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126530）
          source: &a1
            id: s_b4gLzeKTw3AayU519ocN97
            source_type: api_record
            title: 中国历代人物传记资料库：王良貴（CBDB 126530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json
            external_identifier: CBDB:126530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gepRZC2sWawTgy5ui8ifan
        subject_person_id: p_2i8i45vd3ioWAFSmwmfK42
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
        - id: cs_QJT9Ki5kRXYhqdYyvNhhaA
          claim_id: c_gepRZC2sWawTgy5ui8ifan
          source_id: s_b4gLzeKTw3AayU519ocN97
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
        id: c_xFrbIMppadLb9W1QN1jQAG
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2i8i45vd3ioWAFSmwmfK42
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66ObeX6P8aSA9QKUjCZjvx
          claim_id: c_xFrbIMppadLb9W1QN1jQAG
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BzRS9JFfmbPcLsHDaoLQcY
        status: active
        display_name: 王玶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Ppxd6mcAR6QJ4jb_cPSOO6
        subject_person_id: p_2i8i45vd3ioWAFSmwmfK42
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uzS8Qs61fTnKyLg4KHMnH4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ZmwKvuKCALkS0Cp625MPJ
          claim_id: c_Ppxd6mcAR6QJ4jb_cPSOO6
          source_id: s_lumV2vGGlgj9xOIVGL8x6Y
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_lumV2vGGlgj9xOIVGL8x6Y
            source_type: api_record
            title: 中国历代人物传记资料库：詹氏(王良貴妻)（CBDB 309424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309424&o=json
            external_identifier: CBDB:309424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uzS8Qs61fTnKyLg4KHMnH4
        status: active
        display_name: 詹氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_rPUu69n3icr_B2EeEyVISk
        subject_person_id: p_wq2X9HF97v3Sq9oQugGNTU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2i8i45vd3ioWAFSmwmfK42
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HwH7N_MWJMmaaDWo88apU-
          claim_id: c_rPUu69n3icr_B2EeEyVISk
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wq2X9HF97v3Sq9oQugGNTU
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_DAZFi0BJuFIlK7cfuhabax
        subject_person_id: p_GQnF3t1PZTFeofTgRtLqq6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2i8i45vd3ioWAFSmwmfK42
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s99orYb84HCjvAJtHPM07m
          claim_id: c_DAZFi0BJuFIlK7cfuhabax
          source_id: s_b4gLzeKTw3AayU519ocN97
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GQnF3t1PZTFeofTgRtLqq6
        status: active
        display_name: 王錦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王良貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良貴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BzRS9JFfmbPcLsHDaoLQcY | 王玶 | accepted |
| spouses | p_uzS8Qs61fTnKyLg4KHMnH4 | 詹氏 | accepted |
| ancestors | p_wq2X9HF97v3Sq9oQugGNTU | 王憲 | accepted |
| ancestors | p_GQnF3t1PZTFeofTgRtLqq6 | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良貴（CBDB 126530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126530&o=json)
- [中国历代人物传记资料库：詹氏(王良貴妻)（CBDB 309424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309424&o=json)
