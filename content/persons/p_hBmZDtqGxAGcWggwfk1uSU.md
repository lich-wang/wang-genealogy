---
schema: wang-person/v1
id: p_hBmZDtqGxAGcWggwfk1uSU
status: active
merged_into: null
display_name: 王鈞萬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1dTQ95RszaBeAm7b1gACfY
        subject_person_id: p_hBmZDtqGxAGcWggwfk1uSU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞萬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dgGf2hj6HbMEA17PjjogYp
          claim_id: c_1dTQ95RszaBeAm7b1gACfY
          source_id: s_2YQFu8yncvoN82NZKXQ6fV
          stance: supports
          locator: CBDB:573770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573770）
          source: &a1
            id: s_2YQFu8yncvoN82NZKXQ6fV
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞萬（CBDB 573770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573770&o=json
            external_identifier: CBDB:573770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G2rJYxq7izuNstL9hD5S7g
        subject_person_id: p_hBmZDtqGxAGcWggwfk1uSU
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
        - id: cs_1yUyhQrJd8PvkED7nJ5vfa
          claim_id: c_G2rJYxq7izuNstL9hD5S7g
          source_id: s_2YQFu8yncvoN82NZKXQ6fV
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

# 王鈞萬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞萬 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞萬（CBDB 573770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573770&o=json)
