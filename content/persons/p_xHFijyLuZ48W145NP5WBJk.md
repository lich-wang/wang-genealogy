---
schema: wang-person/v1
id: p_xHFijyLuZ48W145NP5WBJk
status: active
merged_into: null
display_name: 王逢吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CCTrwWMusNZALSbwYzFsdU
        subject_person_id: p_xHFijyLuZ48W145NP5WBJk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qxf47cdsuK8YGkJ7zVsg72
          claim_id: c_CCTrwWMusNZALSbwYzFsdU
          source_id: s_QuDo1HMQzRQ1M5MMjDFa2G
          stance: supports
          locator: CBDB:101352
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101352）
          source: &a1
            id: s_QuDo1HMQzRQ1M5MMjDFa2G
            source_type: api_record
            title: 中国历代人物传记资料库：王逢吉（CBDB 101352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101352&o=json
            external_identifier: CBDB:101352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6yLTr1wZjxhN18oKEyeo5
        subject_person_id: p_xHFijyLuZ48W145NP5WBJk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFRj61hyaB7nh47EQezdAv
          claim_id: c_n6yLTr1wZjxhN18oKEyeo5
          source_id: s_QuDo1HMQzRQ1M5MMjDFa2G
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

# 王逢吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢吉 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢吉（CBDB 101352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101352&o=json)
