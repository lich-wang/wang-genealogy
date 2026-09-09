---
schema: wang-person/v1
id: p_G8FzjF6tJM8ZRaUrwGexrL
status: active
merged_into: null
display_name: 王京詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a3vpPfBfDg2rqr4261p5Qe
        subject_person_id: p_G8FzjF6tJM8ZRaUrwGexrL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D5H89iHFAFKdtQ8QxYftqF
          claim_id: c_a3vpPfBfDg2rqr4261p5Qe
          source_id: s_BjyapQ2VvjahD6fFZHY842
          stance: supports
          locator: CBDB:635861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635861）
          source: &a1
            id: s_BjyapQ2VvjahD6fFZHY842
            source_type: api_record
            title: 中国历代人物传记资料库：王京詔（CBDB 635861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635861&o=json
            external_identifier: CBDB:635861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rMog6wfFzfrfTJPFE9BXE8
        subject_person_id: p_G8FzjF6tJM8ZRaUrwGexrL
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
        - id: cs_zhAeuKWX4AHuj6Uw4GFxbu
          claim_id: c_rMog6wfFzfrfTJPFE9BXE8
          source_id: s_BjyapQ2VvjahD6fFZHY842
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

# 王京詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京詔 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王京詔（CBDB 635861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635861&o=json)
