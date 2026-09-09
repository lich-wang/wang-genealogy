---
schema: wang-person/v1
id: p_iCYfTV54LXMBvHqDHeB544
status: active
merged_into: null
display_name: 王文峻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PH83dmWtbqAyD2KQdSNVAR
        subject_person_id: p_iCYfTV54LXMBvHqDHeB544
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文峻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DyW9nZjWn1CkZ2UYnaCy6Q
          claim_id: c_PH83dmWtbqAyD2KQdSNVAR
          source_id: s_SvR7g2Nov9oLNdwPzAqy2n
          stance: supports
          locator: CBDB:638220
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638220）
          source: &a1
            id: s_SvR7g2Nov9oLNdwPzAqy2n
            source_type: api_record
            title: 中国历代人物传记资料库：王文峻（CBDB 638220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638220&o=json
            external_identifier: CBDB:638220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XXAjJWF8DEbGaUjmW79ijh
        subject_person_id: p_iCYfTV54LXMBvHqDHeB544
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
        - id: cs_A5ZMgmkLNxe1f3SdXNCab8
          claim_id: c_XXAjJWF8DEbGaUjmW79ijh
          source_id: s_SvR7g2Nov9oLNdwPzAqy2n
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

# 王文峻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文峻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文峻（CBDB 638220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638220&o=json)
