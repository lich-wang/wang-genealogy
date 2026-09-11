---
schema: wang-person/v1
id: p_uzS8Qs61fTnKyLg4KHMnH4
status: active
merged_into: null
display_name: 詹氏
revision: 1
cbdb_id: 309424
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nhfuzQ-Y6pIuODBLBvIRUa
        subject_person_id: p_uzS8Qs61fTnKyLg4KHMnH4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 詹氏，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UFDZCe4K1fVV9dQd3O2K6J
          claim_id: c_nhfuzQ-Y6pIuODBLBvIRUa
          source_id: s_lumV2vGGlgj9xOIVGL8x6Y
          stance: supports
          locator: CBDB:309424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q5qKmd3D4hzCPwEMhj45lp
        subject_person_id: p_uzS8Qs61fTnKyLg4KHMnH4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 詹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ziUazglmrpTOtw5h84xU3i
          claim_id: c_q5qKmd3D4hzCPwEMhj45lp
          source_id: s_lumV2vGGlgj9xOIVGL8x6Y
          stance: supports
          locator: CBDB:309424
          quotation: null
          interpretation_note: CBDB 明确记录的王良貴配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source: *a1
      object_person:
        id: p_2i8i45vd3ioWAFSmwmfK42
        status: active
        display_name: 王良貴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 詹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 詹氏，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309424） | accepted |
| name.primary | 詹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2i8i45vd3ioWAFSmwmfK42 | 王良貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：詹氏(王良貴妻)（CBDB 309424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309424&o=json)
