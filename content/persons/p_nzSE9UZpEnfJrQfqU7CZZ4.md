---
schema: wang-person/v1
id: p_nzSE9UZpEnfJrQfqU7CZZ4
status: active
merged_into: null
display_name: 王守清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dn7Eh73u4sZPqCqhoDEQ11
        subject_person_id: p_nzSE9UZpEnfJrQfqU7CZZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sN8iNS56GwFdp78NN4piEQ
          claim_id: c_Dn7Eh73u4sZPqCqhoDEQ11
          source_id: s_r9rXQe9LiVndhSSQe2frVN
          stance: supports
          locator: CBDB:637069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637069）
          source: &a1
            id: s_r9rXQe9LiVndhSSQe2frVN
            source_type: api_record
            title: 中国历代人物传记资料库：王守清（CBDB 637069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637069&o=json
            external_identifier: CBDB:637069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NL7Q5BDdQZy12bLd1uLE5L
        subject_person_id: p_nzSE9UZpEnfJrQfqU7CZZ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守清，清人物。籍贯甘肅省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 637069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A_TCgAk01LN_PNt7N_PgeG
          claim_id: c_NL7Q5BDdQZy12bLd1uLE5L
          source_id: s_r9rXQe9LiVndhSSQe2frVN
          stance: supports
          locator: CBDB:637069
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

# 王守清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守清 | accepted |
| bio.summary | 王守清，清人物。籍贯甘肅省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 637069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守清（CBDB 637069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637069&o=json)
