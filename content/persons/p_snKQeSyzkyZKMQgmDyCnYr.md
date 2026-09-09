---
schema: wang-person/v1
id: p_snKQeSyzkyZKMQgmDyCnYr
status: active
merged_into: null
display_name: 王堅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RjbG4qHVdYPhWgYc8guRc8
        subject_person_id: p_snKQeSyzkyZKMQgmDyCnYr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPzfnoFzYBiH41UpWXG9iP
          claim_id: c_RjbG4qHVdYPhWgYc8guRc8
          source_id: s_GBD3bVGqD5fXxuJmgkVHXd
          stance: supports
          locator: CBDB:37951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37951）
          source: &a1
            id: s_GBD3bVGqD5fXxuJmgkVHXd
            source_type: api_record
            title: 中国历代人物传记资料库：王堅（CBDB 37951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37951&o=json
            external_identifier: CBDB:37951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NCTGhEYpbzt2kbTfVshXiy
        subject_person_id: p_snKQeSyzkyZKMQgmDyCnYr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1264年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uiWa8Ubg1ZHBN2B1qJFtUi
          claim_id: c_NCTGhEYpbzt2kbTfVshXiy
          source_id: s_GBD3bVGqD5fXxuJmgkVHXd
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
        id: c_ssxiwyHmCwK1g3NtgWtddD
        subject_person_id: p_snKQeSyzkyZKMQgmDyCnYr
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
        - id: cs_E4M5nQECNBwav6qVGRmREW
          claim_id: c_ssxiwyHmCwK1g3NtgWtddD
          source_id: s_GBD3bVGqD5fXxuJmgkVHXd
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

# 王堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堅 | accepted |
| death.date | 1264年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堅（CBDB 37951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37951&o=json)
