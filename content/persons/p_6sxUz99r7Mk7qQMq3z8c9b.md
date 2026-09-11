---
schema: wang-person/v1
id: p_6sxUz99r7Mk7qQMq3z8c9b
status: active
merged_into: null
display_name: 王主豪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rWp438mpGXWFbwxcn46JLE
        subject_person_id: p_6sxUz99r7Mk7qQMq3z8c9b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王主豪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_298385Q6WUQFFGvgQjfZgb
          claim_id: c_rWp438mpGXWFbwxcn46JLE
          source_id: s_5oW41J7gsVJ9ypuTXAdhCH
          stance: supports
          locator: CBDB:635758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635758）
          source: &a1
            id: s_5oW41J7gsVJ9ypuTXAdhCH
            source_type: api_record
            title: 中国历代人物传记资料库：王主豪（CBDB 635758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635758&o=json
            external_identifier: CBDB:635758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SQWj9WtsS6NNtTWwhFYHa3
        subject_person_id: p_6sxUz99r7Mk7qQMq3z8c9b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王主豪，清人物。籍贯曹州府，曾任訓導。（中国历代人物传记资料库 CBDB 635758）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CG__XCH7ltsWHc1nGwSosK
          claim_id: c_SQWj9WtsS6NNtTWwhFYHa3
          source_id: s_5oW41J7gsVJ9ypuTXAdhCH
          stance: supports
          locator: CBDB:635758
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

# 王主豪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王主豪 | accepted |
| bio.summary | 王主豪，清人物。籍贯曹州府，曾任訓導。（中国历代人物传记资料库 CBDB 635758） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王主豪（CBDB 635758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635758&o=json)
