---
schema: wang-person/v1
id: p_UoTiATN5Jspgmjts5DMRq9
status: active
merged_into: null
display_name: 左氏
revision: 1
cbdb_id: 558327
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_0ZP-_sXCZEtuxvQ73utfUu
        subject_person_id: p_UoTiATN5Jspgmjts5DMRq9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 左氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F8tUPxfuq2EL2XFTuiqxJe
          claim_id: c_0ZP-_sXCZEtuxvQ73utfUu
          source_id: s_X1r7tjqrDgnljoNHLIkVxk
          stance: supports
          locator: CBDB:558327
          quotation: null
          interpretation_note: CBDB 明确记录的王路配偶
          source: &a1
            id: s_X1r7tjqrDgnljoNHLIkVxk
            source_type: api_record
            title: 中国历代人物传记资料库：左氏(王路妻)（CBDB 558327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558327&o=json
            external_identifier: CBDB:558327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Ws_yny1ObW-fhKk4C5lh0i
        subject_person_id: p_JVX3N2NMUD29if1DKDiCKX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UoTiATN5Jspgmjts5DMRq9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7c3WnGbn_1hPwknHma-1F4
          claim_id: c_Ws_yny1ObW-fhKk4C5lh0i
          source_id: s_X1r7tjqrDgnljoNHLIkVxk
          stance: supports
          locator: 南陽府志，lgid=878829：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JVX3N2NMUD29if1DKDiCKX
        status: active
        display_name: 王路
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 左氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 左氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JVX3N2NMUD29if1DKDiCKX | 王路 | accepted |

## 外部来源

- [中国历代人物传记资料库：左氏(王路妻)（CBDB 558327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558327&o=json)
