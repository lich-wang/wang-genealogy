---
schema: wang-person/v1
id: p_tUQqDQbLQhXatGUfhDmG3w
status: active
merged_into: null
display_name: 王希聖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FpnLg1cQp646Fg7v2LYixg
        subject_person_id: p_tUQqDQbLQhXatGUfhDmG3w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希聖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E6h5MQFmcC6Yz8fjNM95no
          claim_id: c_FpnLg1cQp646Fg7v2LYixg
          source_id: s_x4LhQk1wxp7SQ4tqvZQYL3
          stance: supports
          locator: CBDB:510564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510564）
          source: &a1
            id: s_x4LhQk1wxp7SQ4tqvZQYL3
            source_type: api_record
            title: 中国历代人物传记资料库：王希聖（CBDB 510564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510564&o=json
            external_identifier: CBDB:510564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4LihJA3HitSE5SaAMEKL2i
        subject_person_id: p_tUQqDQbLQhXatGUfhDmG3w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希聖，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 510564）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_csMCzbQ52KMpeintZNSdCn
          claim_id: c_4LihJA3HitSE5SaAMEKL2i
          source_id: s_x4LhQk1wxp7SQ4tqvZQYL3
          stance: supports
          locator: CBDB:510564
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

# 王希聖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希聖 | accepted |
| bio.summary | 王希聖，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 510564） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希聖（CBDB 510564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510564&o=json)
