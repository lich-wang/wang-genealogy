---
schema: wang-person/v1
id: p_nrdjDLNUCE5yUxvCwWPHXn
status: active
merged_into: null
display_name: 王楙官
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FjyLQEURguNRVa3zJhrZD7
        subject_person_id: p_nrdjDLNUCE5yUxvCwWPHXn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楙官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zs5qdLB7UU5P17XcGKJZye
          claim_id: c_FjyLQEURguNRVa3zJhrZD7
          source_id: s_txCN3CGFXA8wxq46HhCyuU
          stance: supports
          locator: CBDB:72106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72106）
          source: &a1
            id: s_txCN3CGFXA8wxq46HhCyuU
            source_type: api_record
            title: 中国历代人物传记资料库：王楙官（CBDB 72106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72106&o=json
            external_identifier: CBDB:72106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tpsczPLNKXJ165eQCJnRB9
        subject_person_id: p_nrdjDLNUCE5yUxvCwWPHXn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Q6wFUuAFD2UV9cJbt1LC1
          claim_id: c_tpsczPLNKXJ165eQCJnRB9
          source_id: s_txCN3CGFXA8wxq46HhCyuU
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
        id: c_yX3oYdAAdRRXU9mBDsfjMV
        subject_person_id: p_nrdjDLNUCE5yUxvCwWPHXn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zTo2uXEBE4eVthwCQmZpCc
          claim_id: c_yX3oYdAAdRRXU9mBDsfjMV
          source_id: s_txCN3CGFXA8wxq46HhCyuU
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
        id: c_r93AMLUej9yn9wggXWBpxY
        subject_person_id: p_nrdjDLNUCE5yUxvCwWPHXn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楙官（1847年—1917年），中華民國人物。籍贯揚州府。（中国历代人物传记资料库 CBDB 72106）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xR33ZHttyFv6WmyNK0ONU-
          claim_id: c_r93AMLUej9yn9wggXWBpxY
          source_id: s_txCN3CGFXA8wxq46HhCyuU
          stance: supports
          locator: CBDB:72106
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

# 王楙官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楙官 | accepted |
| birth.date | 1847年 | accepted |
| death.date | 1917年 | accepted |
| bio.summary | 王楙官（1847年—1917年），中華民國人物。籍贯揚州府。（中国历代人物传记资料库 CBDB 72106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楙官（CBDB 72106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72106&o=json)
