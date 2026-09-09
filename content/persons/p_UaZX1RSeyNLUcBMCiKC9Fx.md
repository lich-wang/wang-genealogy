---
schema: wang-person/v1
id: p_UaZX1RSeyNLUcBMCiKC9Fx
status: active
merged_into: null
display_name: 王殿陞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qmGQPFCPvdz54qFrBkqdoJ
        subject_person_id: p_UaZX1RSeyNLUcBMCiKC9Fx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PjVKvFZnyp74FNpwU8BH8Y
          claim_id: c_qmGQPFCPvdz54qFrBkqdoJ
          source_id: s_yz6nuVDTimTJsiH9bVoHaD
          stance: supports
          locator: CBDB:638940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638940）
          source: &a1
            id: s_yz6nuVDTimTJsiH9bVoHaD
            source_type: api_record
            title: 中国历代人物传记资料库：王殿陞（CBDB 638940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638940&o=json
            external_identifier: CBDB:638940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GULxQAyC7rAgerCTduWQch
        subject_person_id: p_UaZX1RSeyNLUcBMCiKC9Fx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BprxNJiCV3pfjepi8YFZS
          claim_id: c_GULxQAyC7rAgerCTduWQch
          source_id: s_yz6nuVDTimTJsiH9bVoHaD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王殿陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殿陞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殿陞（CBDB 638940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638940&o=json)
