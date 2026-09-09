---
schema: wang-person/v1
id: p_oCasV61or1PP2X4aeTPyPB
status: active
merged_into: null
display_name: 王鑛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ng3UtGfHf89AryS17ybs29
        subject_person_id: p_oCasV61or1PP2X4aeTPyPB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pkyh3qAeehQxQNgWeyJ3Tz
          claim_id: c_Ng3UtGfHf89AryS17ybs29
          source_id: s_CzGABXyWVgJia7PFEXBCiP
          stance: supports
          locator: CBDB:219872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219872）
          source: &a1
            id: s_CzGABXyWVgJia7PFEXBCiP
            source_type: api_record
            title: 中国历代人物传记资料库：王鑛（CBDB 219872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219872&o=json
            external_identifier: CBDB:219872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ZrcLGp8eTHHSDb5PSFtZM
        subject_person_id: p_oCasV61or1PP2X4aeTPyPB
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
        - id: cs_sdCaDWfHRuXzCg2Mmj15c6
          claim_id: c_8ZrcLGp8eTHHSDb5PSFtZM
          source_id: s_CzGABXyWVgJia7PFEXBCiP
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

# 王鑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑛（CBDB 219872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219872&o=json)
