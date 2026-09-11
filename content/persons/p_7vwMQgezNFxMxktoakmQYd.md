---
schema: wang-person/v1
id: p_7vwMQgezNFxMxktoakmQYd
status: active
merged_into: null
display_name: 王國安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ecoR2FceHzoBUwJX8QJ38L
        subject_person_id: p_7vwMQgezNFxMxktoakmQYd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dsDcMgEkUJG6dR2Rag2hWi
          claim_id: c_ecoR2FceHzoBUwJX8QJ38L
          source_id: s_GWdZjcCCZ7uRfpDyAqHzmk
          stance: supports
          locator: CBDB:497945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497945）
          source: &a1
            id: s_GWdZjcCCZ7uRfpDyAqHzmk
            source_type: api_record
            title: 中国历代人物传记资料库：王國安（CBDB 497945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497945&o=json
            external_identifier: CBDB:497945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1zev1brThMEx2c8pULDfF
        subject_person_id: p_7vwMQgezNFxMxktoakmQYd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國安，清人物。入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 497945）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2SdELTnZBe_66hpuXWA5xN
          claim_id: c_q1zev1brThMEx2c8pULDfF
          source_id: s_GWdZjcCCZ7uRfpDyAqHzmk
          stance: supports
          locator: CBDB:497945
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

# 王國安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國安 | accepted |
| bio.summary | 王國安，清人物。入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 497945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國安（CBDB 497945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497945&o=json)
