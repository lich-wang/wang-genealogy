---
schema: wang-person/v1
id: p_kU9xiF3FLfa3NcMG3eBsMD
status: active
merged_into: null
display_name: 王愷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vq4NDve1g6b8VVgCbHaXPA
        subject_person_id: p_kU9xiF3FLfa3NcMG3eBsMD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5aZ8yHVMEZ4x2wNSzimAHK
          claim_id: c_Vq4NDve1g6b8VVgCbHaXPA
          source_id: s_ApcdPLydim1L1e6LNqGMD2
          stance: supports
          locator: CBDB:303471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303471）
          source: &a1
            id: s_ApcdPLydim1L1e6LNqGMD2
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 303471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303471&o=json
            external_identifier: CBDB:303471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M7F7bnUgHjssnKUHVAYwnp
        subject_person_id: p_kU9xiF3FLfa3NcMG3eBsMD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K72hHdyEQpAm2x4QwELb8M
          claim_id: c_M7F7bnUgHjssnKUHVAYwnp
          source_id: s_ApcdPLydim1L1e6LNqGMD2
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

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 303471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303471&o=json)
