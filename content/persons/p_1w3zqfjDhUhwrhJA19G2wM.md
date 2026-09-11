---
schema: wang-person/v1
id: p_1w3zqfjDhUhwrhJA19G2wM
status: active
merged_into: null
display_name: 王汶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wj53XH6f4vFXRR4LmcjEhJ
        subject_person_id: p_1w3zqfjDhUhwrhJA19G2wM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q6gC3MwDQDyd6YuzEXp6cE
          claim_id: c_wj53XH6f4vFXRR4LmcjEhJ
          source_id: s_5qBZ5V29kpf6azrqogotNb
          stance: supports
          locator: CBDB:22044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22044）
          source: &a1
            id: s_5qBZ5V29kpf6azrqogotNb
            source_type: api_record
            title: 中国历代人物传记资料库：王汶（CBDB 22044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22044&o=json
            external_identifier: CBDB:22044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AG1E1uLDVQASsGTgE39DaE
        subject_person_id: p_1w3zqfjDhUhwrhJA19G2wM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汶，宋人物。籍贯汝陰。（中国历代人物传记资料库 CBDB 22044）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tNXiviY0kaBXqtd3LQs1j5
          claim_id: c_AG1E1uLDVQASsGTgE39DaE
          source_id: s_5qBZ5V29kpf6azrqogotNb
          stance: supports
          locator: CBDB:22044
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

# 王汶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汶 | accepted |
| bio.summary | 王汶，宋人物。籍贯汝陰。（中国历代人物传记资料库 CBDB 22044） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汶（CBDB 22044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22044&o=json)
