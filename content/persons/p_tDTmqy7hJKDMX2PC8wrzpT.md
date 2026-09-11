---
schema: wang-person/v1
id: p_tDTmqy7hJKDMX2PC8wrzpT
status: active
merged_into: null
display_name: 王之賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TSeXjxpc11stpRdJcxk8g6
        subject_person_id: p_tDTmqy7hJKDMX2PC8wrzpT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BBdtjVQqrtRQsi7YAT1B6J
          claim_id: c_TSeXjxpc11stpRdJcxk8g6
          source_id: s_6CgHAtK61xCmg2Q93xaFMw
          stance: supports
          locator: CBDB:500787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500787）
          source: &a1
            id: s_6CgHAtK61xCmg2Q93xaFMw
            source_type: api_record
            title: 中国历代人物传记资料库：王之賢（CBDB 500787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500787&o=json
            external_identifier: CBDB:500787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3zYYkmZ4gH6mj9ckw9vc9Y
        subject_person_id: p_tDTmqy7hJKDMX2PC8wrzpT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賢，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 500787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-d3GVoRUjhfl2p_sS_R0TZ
          claim_id: c_3zYYkmZ4gH6mj9ckw9vc9Y
          source_id: s_6CgHAtK61xCmg2Q93xaFMw
          stance: supports
          locator: CBDB:500787
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王之賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之賢 | accepted |
| bio.summary | 王之賢，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 500787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之賢（CBDB 500787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500787&o=json)
