---
schema: wang-person/v1
id: p_8cD2Bh6MMjAC6he6kSHK5A
status: active
merged_into: null
display_name: 王均保
cbdb_id: 414140
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_521v8TvW4que5uwLdzAHQ6
        subject_person_id: p_8cD2Bh6MMjAC6he6kSHK5A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均保，明人物。曾任知府。（中国历代人物传记资料库 CBDB 414140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_83rq2diwfsQiCJMcGvkhKY
          claim_id: c_521v8TvW4que5uwLdzAHQ6
          source_id: s_6r7Eu2Tx5ddhxDQWCCRZHP
          stance: supports
          locator: CBDB:414140
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6r7Eu2Tx5ddhxDQWCCRZHP
            source_type: api_record
            title: 中国历代人物传记资料库：王均保（CBDB 414140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414140&o=json
            external_identifier: CBDB:414140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:28.654Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nh4zqnLbEJVLJK9wVgJ15Q
        subject_person_id: p_8cD2Bh6MMjAC6he6kSHK5A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4rzXVUihP18bSP8ActBQzM
          claim_id: c_Nh4zqnLbEJVLJK9wVgJ15Q
          source_id: s_6r7Eu2Tx5ddhxDQWCCRZHP
          stance: supports
          locator: CBDB:414140
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5201-5300）｜历史性依据：CBDB 朝代 = 明
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

# 王均保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王均保，明人物。曾任知府。（中国历代人物传记资料库 CBDB 414140） | accepted |
| name.primary | 王均保 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王均保（CBDB 414140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414140&o=json)
