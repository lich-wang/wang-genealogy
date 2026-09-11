---
schema: wang-person/v1
id: p_Vxd9enJWo4CN3U2e6GZjK4
status: active
merged_into: null
display_name: 王之驥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dQ4gLsNboFq4uQYi7ruRWM
        subject_person_id: p_Vxd9enJWo4CN3U2e6GZjK4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AVNKAj3bv86pFKYkLRfCQ9
          claim_id: c_dQ4gLsNboFq4uQYi7ruRWM
          source_id: s_ASPj62pf3kQXf4RW1Afson
          stance: supports
          locator: CBDB:342570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342570）
          source: &a1
            id: s_ASPj62pf3kQXf4RW1Afson
            source_type: api_record
            title: 中国历代人物传记资料库：王之驥（CBDB 342570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342570&o=json
            external_identifier: CBDB:342570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_69YCvLkVQgmxiHvLHuPBcN
        subject_person_id: p_Vxd9enJWo4CN3U2e6GZjK4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之驥，清人物。明清進士進士，籍贯龍南，入仕進士。（中国历代人物传记资料库 CBDB 342570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3GhPRRL4ktyL0zeGyntqsq
          claim_id: c_69YCvLkVQgmxiHvLHuPBcN
          source_id: s_ASPj62pf3kQXf4RW1Afson
          stance: supports
          locator: CBDB:342570
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

# 王之驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之驥 | accepted |
| bio.summary | 王之驥，清人物。明清進士進士，籍贯龍南，入仕進士。（中国历代人物传记资料库 CBDB 342570） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之驥（CBDB 342570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342570&o=json)
