---
schema: wang-person/v1
id: p_X5FDDg9ARLtM4JUe6XdFLs
status: active
merged_into: null
display_name: 王彩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N9aEJyVqbno9fZi182Tj4j
        subject_person_id: p_X5FDDg9ARLtM4JUe6XdFLs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sWD2Me2J79cfqL1zcBPSEx
          claim_id: c_N9aEJyVqbno9fZi182Tj4j
          source_id: s_mhjaNv8QNF3r7E3HNQ2FFm
          stance: supports
          locator: CBDB:505746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505746）
          source: &a1
            id: s_mhjaNv8QNF3r7E3HNQ2FFm
            source_type: api_record
            title: 中国历代人物传记资料库：王彩（CBDB 505746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505746&o=json
            external_identifier: CBDB:505746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VAva3LhorA6ek7R9F6CY6N
        subject_person_id: p_X5FDDg9ARLtM4JUe6XdFLs
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
        - id: cs_3k2ub5YDZ7qbbUMH9YrcLg
          claim_id: c_VAva3LhorA6ek7R9F6CY6N
          source_id: s_mhjaNv8QNF3r7E3HNQ2FFm
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

# 王彩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彩（CBDB 505746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505746&o=json)
