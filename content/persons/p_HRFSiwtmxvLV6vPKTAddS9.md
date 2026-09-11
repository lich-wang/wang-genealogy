---
schema: wang-person/v1
id: p_HRFSiwtmxvLV6vPKTAddS9
status: active
merged_into: null
display_name: 王雍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3rgWNLDHt7q4atYLFvQRyq
        subject_person_id: p_HRFSiwtmxvLV6vPKTAddS9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7GSEsVF4MmmxQ59M6DiH62
          claim_id: c_3rgWNLDHt7q4atYLFvQRyq
          source_id: s_DEqQ5ZNoAnDmA6XpnqC9MZ
          stance: supports
          locator: CBDB:341646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341646）
          source: &a1
            id: s_DEqQ5ZNoAnDmA6XpnqC9MZ
            source_type: api_record
            title: 中国历代人物传记资料库：王雍（CBDB 341646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341646&o=json
            external_identifier: CBDB:341646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hR7dKgjNAe8j7ovWCRnEwL
        subject_person_id: p_HRFSiwtmxvLV6vPKTAddS9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍，清人物。明清進士進士，籍贯富平，入仕進士。（中国历代人物传记资料库 CBDB 341646）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LbYin5Hl0yMMOAiEZXIt_M
          claim_id: c_hR7dKgjNAe8j7ovWCRnEwL
          source_id: s_DEqQ5ZNoAnDmA6XpnqC9MZ
          stance: supports
          locator: CBDB:341646
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

# 王雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雍 | accepted |
| bio.summary | 王雍，清人物。明清進士進士，籍贯富平，入仕進士。（中国历代人物传记资料库 CBDB 341646） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雍（CBDB 341646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341646&o=json)
