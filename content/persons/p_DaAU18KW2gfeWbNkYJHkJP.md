---
schema: wang-person/v1
id: p_DaAU18KW2gfeWbNkYJHkJP
status: active
merged_into: null
display_name: 王克閭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qzs1i9Hf67Y2JPcT3Yux3E
        subject_person_id: p_DaAU18KW2gfeWbNkYJHkJP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克閭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_22psLw4WtVrpA8btPt7upT
          claim_id: c_Qzs1i9Hf67Y2JPcT3Yux3E
          source_id: s_TSCJ32cqVj8JzX2gSB5AAz
          stance: supports
          locator: CBDB:636309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636309）
          source: &a1
            id: s_TSCJ32cqVj8JzX2gSB5AAz
            source_type: api_record
            title: 中国历代人物传记资料库：王克閭（CBDB 636309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636309&o=json
            external_identifier: CBDB:636309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3AaarWNriJoG2dAvVo5WXN
        subject_person_id: p_DaAU18KW2gfeWbNkYJHkJP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克閭，清人物。籍贯河南省，曾任訓導。（中国历代人物传记资料库 CBDB 636309）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kT27mirDbEyp8-FcYMsngi
          claim_id: c_3AaarWNriJoG2dAvVo5WXN
          source_id: s_TSCJ32cqVj8JzX2gSB5AAz
          stance: supports
          locator: CBDB:636309
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克閭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克閭 | accepted |
| bio.summary | 王克閭，清人物。籍贯河南省，曾任訓導。（中国历代人物传记资料库 CBDB 636309） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克閭（CBDB 636309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636309&o=json)
