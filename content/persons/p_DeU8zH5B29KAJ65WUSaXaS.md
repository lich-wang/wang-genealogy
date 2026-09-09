---
schema: wang-person/v1
id: p_DeU8zH5B29KAJ65WUSaXaS
status: active
merged_into: null
display_name: 王緝植
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LSRktUBm3FT7jK1QDX92SJ
        subject_person_id: p_DeU8zH5B29KAJ65WUSaXaS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2L8pEY6P58j1iy68nnCEYS
          claim_id: c_LSRktUBm3FT7jK1QDX92SJ
          source_id: s_wX28TSBH5rambCW1nWBAHR
          stance: supports
          locator: CBDB:342385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342385）
          source: &a1
            id: s_wX28TSBH5rambCW1nWBAHR
            source_type: api_record
            title: 中国历代人物传记资料库：王緝植（CBDB 342385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342385&o=json
            external_identifier: CBDB:342385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nGAfSatJdKFL2fazxhf3ao
        subject_person_id: p_DeU8zH5B29KAJ65WUSaXaS
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
        - id: cs_xo2YMnds29kDtsnhWHMQem
          claim_id: c_nGAfSatJdKFL2fazxhf3ao
          source_id: s_wX28TSBH5rambCW1nWBAHR
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

# 王緝植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緝植 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緝植（CBDB 342385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342385&o=json)
