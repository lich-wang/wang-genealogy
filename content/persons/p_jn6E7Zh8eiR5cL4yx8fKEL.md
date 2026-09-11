---
schema: wang-person/v1
id: p_jn6E7Zh8eiR5cL4yx8fKEL
status: active
merged_into: null
display_name: 王箎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T9TdZSsTooobB1R6cgD3m2
        subject_person_id: p_jn6E7Zh8eiR5cL4yx8fKEL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Chb9s5K7zopDDaQCwcF679
          claim_id: c_T9TdZSsTooobB1R6cgD3m2
          source_id: s_SC7HJG4Ybuj4mi6JZ8F8L4
          stance: supports
          locator: CBDB:485078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485078）
          source: &a1
            id: s_SC7HJG4Ybuj4mi6JZ8F8L4
            source_type: api_record
            title: 中国历代人物传记资料库：王箎（CBDB 485078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485078&o=json
            external_identifier: CBDB:485078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SRFBZgMhA9YSUDwRgAAfBA
        subject_person_id: p_jn6E7Zh8eiR5cL4yx8fKEL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王箎，明人物。入仕世襲(替)，曾任副千戶。（中国历代人物传记资料库 CBDB 485078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oMtxgrRZHjGTRPE2n7E5hH
          claim_id: c_SRFBZgMhA9YSUDwRgAAfBA
          source_id: s_SC7HJG4Ybuj4mi6JZ8F8L4
          stance: supports
          locator: CBDB:485078
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

# 王箎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王箎 | accepted |
| bio.summary | 王箎，明人物。入仕世襲(替)，曾任副千戶。（中国历代人物传记资料库 CBDB 485078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王箎（CBDB 485078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485078&o=json)
