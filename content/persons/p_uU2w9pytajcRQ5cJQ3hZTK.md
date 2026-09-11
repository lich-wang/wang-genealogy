---
schema: wang-person/v1
id: p_uU2w9pytajcRQ5cJQ3hZTK
status: active
merged_into: null
display_name: 王玼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k1cYxwaisAYp58JvSHeYvG
        subject_person_id: p_uU2w9pytajcRQ5cJQ3hZTK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6a3ABCD2arMLZnzC2JWXVv
          claim_id: c_k1cYxwaisAYp58JvSHeYvG
          source_id: s_b2M4jzvTLZQ8PHGLTnwWRG
          stance: supports
          locator: CBDB:143054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143054）
          source: &a1
            id: s_b2M4jzvTLZQ8PHGLTnwWRG
            source_type: api_record
            title: 中国历代人物传记资料库：王玼（CBDB 143054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143054&o=json
            external_identifier: CBDB:143054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gri1zjQxkYPSGi3uFLR1xT
        subject_person_id: p_uU2w9pytajcRQ5cJQ3hZTK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 689年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_54aFZk4zCwxm6kYxjCd9LV
          claim_id: c_gri1zjQxkYPSGi3uFLR1xT
          source_id: s_b2M4jzvTLZQ8PHGLTnwWRG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qEw2rJzW2YxNw1LAKzY2m3
        subject_person_id: p_uU2w9pytajcRQ5cJQ3hZTK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 755年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sHbT6VWcEQqBNW4B21RPKa
          claim_id: c_qEw2rJzW2YxNw1LAKzY2m3
          source_id: s_b2M4jzvTLZQ8PHGLTnwWRG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ANy9Wv6DMSArHoMSsYvMD5
        subject_person_id: p_uU2w9pytajcRQ5cJQ3hZTK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玼（689年—755年），史料所见人物。本项目依据《中国历代人物传记资料库：王玼（CBDB 143054）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OUZIl-zvZW-6MfGSVFhRti
          claim_id: c_ANy9Wv6DMSArHoMSsYvMD5
          source_id: s_b2M4jzvTLZQ8PHGLTnwWRG
          stance: supports
          locator: CBDB:143054
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王玼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玼 | accepted |
| birth.date | 689年 | accepted |
| death.date | 755年 | accepted |
| bio.summary | 王玼（689年—755年），史料所见人物。本项目依据《中国历代人物传记资料库：王玼（CBDB 143054）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玼（CBDB 143054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143054&o=json)
