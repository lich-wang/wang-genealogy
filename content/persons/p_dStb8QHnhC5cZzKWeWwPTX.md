---
schema: wang-person/v1
id: p_dStb8QHnhC5cZzKWeWwPTX
status: active
merged_into: null
display_name: 王繼聖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gr7S7UauCL1FMLwuuC44Se
        subject_person_id: p_dStb8QHnhC5cZzKWeWwPTX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼聖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CH3RdbUfpXipW1szzDr8XU
          claim_id: c_gr7S7UauCL1FMLwuuC44Se
          source_id: s_BVCBL74DSSoNJYESnobgPN
          stance: supports
          locator: CBDB:639879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639879）
          source: &a1
            id: s_BVCBL74DSSoNJYESnobgPN
            source_type: api_record
            title: 中国历代人物传记资料库：王繼聖（CBDB 639879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639879&o=json
            external_identifier: CBDB:639879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_31516NeCP2GLZPHsyHHry7
        subject_person_id: p_dStb8QHnhC5cZzKWeWwPTX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3EB417GkC6h2KPkV3s4wtA
          claim_id: c_31516NeCP2GLZPHsyHHry7
          source_id: s_BVCBL74DSSoNJYESnobgPN
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

# 王繼聖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼聖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼聖（CBDB 639879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639879&o=json)
