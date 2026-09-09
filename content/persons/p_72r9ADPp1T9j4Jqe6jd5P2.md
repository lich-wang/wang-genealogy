---
schema: wang-person/v1
id: p_72r9ADPp1T9j4Jqe6jd5P2
status: active
merged_into: null
display_name: 王永佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QwmvH2WGFWt9ayVQw69Tkg
        subject_person_id: p_72r9ADPp1T9j4Jqe6jd5P2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Y7L19KRjaFebCZQuuA7Do
          claim_id: c_QwmvH2WGFWt9ayVQw69Tkg
          source_id: s_HnXPXUP8GAX4ZZo1DaGsNQ
          stance: supports
          locator: CBDB:638970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638970）
          source: &a1
            id: s_HnXPXUP8GAX4ZZo1DaGsNQ
            source_type: api_record
            title: 中国历代人物传记资料库：王永佐（CBDB 638970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638970&o=json
            external_identifier: CBDB:638970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BEjgd9foP2Gk57gugMau1Q
        subject_person_id: p_72r9ADPp1T9j4Jqe6jd5P2
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
        - id: cs_mpCzg3a6WzrNP2Qv6RHUn2
          claim_id: c_BEjgd9foP2Gk57gugMau1Q
          source_id: s_HnXPXUP8GAX4ZZo1DaGsNQ
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

# 王永佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永佐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永佐（CBDB 638970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638970&o=json)
