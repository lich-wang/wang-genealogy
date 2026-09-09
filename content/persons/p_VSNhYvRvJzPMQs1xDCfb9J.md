---
schema: wang-person/v1
id: p_VSNhYvRvJzPMQs1xDCfb9J
status: active
merged_into: null
display_name: 王詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uPkL1zKNzbdcB5rb3KyjFj
        subject_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vviC7VLm3RqwCfvZASvrKh
          claim_id: c_uPkL1zKNzbdcB5rb3KyjFj
          source_id: s_YLjDA4XHDh552kQMQyULHd
          stance: supports
          locator: CBDB:198502
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198502）
          source: &a1
            id: s_YLjDA4XHDh552kQMQyULHd
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 198502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198502&o=json
            external_identifier: CBDB:198502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3J92wJR6Y45uJ3zDmHEqQz
        subject_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1425年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zd5wd6yFHkNLde6ZqUxknm
          claim_id: c_3J92wJR6Y45uJ3zDmHEqQz
          source_id: s_YLjDA4XHDh552kQMQyULHd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fo9TjivMv92fp45jLbsHeh
        subject_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
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
        - id: cs_i4gi6r2TVWBGdhnE9A2G17
          claim_id: c_Fo9TjivMv92fp45jLbsHeh
          source_id: s_YLjDA4XHDh552kQMQyULHd
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

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| birth.date | 1425年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 198502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198502&o=json)
