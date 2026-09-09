---
schema: wang-person/v1
id: p_aNU9vn5RLCXQjAt4sZb895
status: active
merged_into: null
display_name: 王有昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_293Y8tA3kF7CMmKJ7WW2Js
        subject_person_id: p_aNU9vn5RLCXQjAt4sZb895
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9uN8y73UfW5g2Cz4xZGPMQ
          claim_id: c_293Y8tA3kF7CMmKJ7WW2Js
          source_id: s_zofm75cv4CMDoBCJAENbic
          stance: supports
          locator: CBDB:638589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638589）
          source: &a1
            id: s_zofm75cv4CMDoBCJAENbic
            source_type: api_record
            title: 中国历代人物传记资料库：王有昌（CBDB 638589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638589&o=json
            external_identifier: CBDB:638589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_77NR7NNPrp6kfLYAAdxozU
        subject_person_id: p_aNU9vn5RLCXQjAt4sZb895
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
        - id: cs_6vC3MuKezrUKr5yRjzoVS4
          claim_id: c_77NR7NNPrp6kfLYAAdxozU
          source_id: s_zofm75cv4CMDoBCJAENbic
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

# 王有昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有昌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有昌（CBDB 638589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638589&o=json)
