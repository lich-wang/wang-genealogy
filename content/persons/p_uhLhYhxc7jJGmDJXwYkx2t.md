---
schema: wang-person/v1
id: p_uhLhYhxc7jJGmDJXwYkx2t
status: active
merged_into: null
display_name: 王宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dBasS4gGP15Csfy1Cwfgm1
        subject_person_id: p_uhLhYhxc7jJGmDJXwYkx2t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GPfVbcJEu9dvxK5a5b6sKQ
          claim_id: c_dBasS4gGP15Csfy1Cwfgm1
          source_id: s_UAqBEdBXrrsB1i3s5h4fbz
          stance: supports
          locator: CBDB:473496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473496）
          source: &a1
            id: s_UAqBEdBXrrsB1i3s5h4fbz
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 473496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473496&o=json
            external_identifier: CBDB:473496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cBnBY6HjwTWtQYpSY8R9CL
        subject_person_id: p_uhLhYhxc7jJGmDJXwYkx2t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 473496）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wz6OiXHf5OpTE_BfYaUCh3
          claim_id: c_cBnBY6HjwTWtQYpSY8R9CL
          source_id: s_UAqBEdBXrrsB1i3s5h4fbz
          stance: supports
          locator: CBDB:473496
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

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | 王宗，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 473496） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 473496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473496&o=json)
