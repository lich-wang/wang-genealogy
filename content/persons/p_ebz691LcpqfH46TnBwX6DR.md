---
schema: wang-person/v1
id: p_ebz691LcpqfH46TnBwX6DR
status: active
merged_into: null
display_name: 王景顏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yvgwp8c2Th7F7hmjH9nrWE
        subject_person_id: p_ebz691LcpqfH46TnBwX6DR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_utmDMdAhHyyrXjaExGfTME
          claim_id: c_yvgwp8c2Th7F7hmjH9nrWE
          source_id: s_SpVExVpiYPrXfEiKSZHafS
          stance: supports
          locator: CBDB:101364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101364）
          source: &a1
            id: s_SpVExVpiYPrXfEiKSZHafS
            source_type: api_record
            title: 中国历代人物传记资料库：王景顏（CBDB 101364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101364&o=json
            external_identifier: CBDB:101364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WeUK7rKf2L6FR6pD2QyobJ
        subject_person_id: p_ebz691LcpqfH46TnBwX6DR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景顏，元人物。曾任州判官。（中国历代人物传记资料库 CBDB 101364）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RjB_8elZWTspr6RN7F5osB
          claim_id: c_WeUK7rKf2L6FR6pD2QyobJ
          source_id: s_SpVExVpiYPrXfEiKSZHafS
          stance: supports
          locator: CBDB:101364
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

# 王景顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景顏 | accepted |
| bio.summary | 王景顏，元人物。曾任州判官。（中国历代人物传记资料库 CBDB 101364） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景顏（CBDB 101364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101364&o=json)
