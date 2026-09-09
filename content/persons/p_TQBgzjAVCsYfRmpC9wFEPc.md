---
schema: wang-person/v1
id: p_TQBgzjAVCsYfRmpC9wFEPc
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SM6Hnyy6Sz13ww3izaCwJb
        subject_person_id: p_TQBgzjAVCsYfRmpC9wFEPc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_efpibazx1L8VnDaxG691XJ
          claim_id: c_SM6Hnyy6Sz13ww3izaCwJb
          source_id: s_EG9rwQqSqjG6UNKVy1Vyv3
          stance: supports
          locator: CBDB:452182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452182）
          source: &a1
            id: s_EG9rwQqSqjG6UNKVy1Vyv3
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 452182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452182&o=json
            external_identifier: CBDB:452182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_26zQ6yzxC92RYqMAef3Y9C
        subject_person_id: p_TQBgzjAVCsYfRmpC9wFEPc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xBU1NbyU1WTdXLbChG1k3Z
          claim_id: c_26zQ6yzxC92RYqMAef3Y9C
          source_id: s_EG9rwQqSqjG6UNKVy1Vyv3
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

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 452182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452182&o=json)
