---
schema: wang-person/v1
id: p_6KNnNg4vhF43M5vZfnup5e
status: active
merged_into: null
display_name: 王涣之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHF5Nmbk8aFv8Zfa1Rp2j1
        subject_person_id: p_6KNnNg4vhF43M5vZfnup5e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涣之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HChGyMhJEf8PxBm7NUN6cM
          claim_id: c_GHF5Nmbk8aFv8Zfa1Rp2j1
          source_id: s_hNdT8jAnptCJN8gWhve8Gq
          stance: supports
          locator: CBDB:532422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532422）
          source: &a1
            id: s_hNdT8jAnptCJN8gWhve8Gq
            source_type: api_record
            title: 中国历代人物传记资料库：王涣之（CBDB 532422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532422&o=json
            external_identifier: CBDB:532422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8o1dDfnaPdFVf7tCAsQMwr
        subject_person_id: p_6KNnNg4vhF43M5vZfnup5e
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
        - id: cs_Nn7ATwZYnf6Qxf1s2W6UL1
          claim_id: c_8o1dDfnaPdFVf7tCAsQMwr
          source_id: s_hNdT8jAnptCJN8gWhve8Gq
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

# 王涣之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王涣之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王涣之（CBDB 532422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532422&o=json)
