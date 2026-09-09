---
schema: wang-person/v1
id: p_6r5VwfkrP2qbqzP6hHoNQi
status: active
merged_into: null
display_name: 王弁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3XuFDXP5Y2aBmnBnCjJnHH
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qyC9u1BCGA9o3ayiZWEonv
          claim_id: c_3XuFDXP5Y2aBmnBnCjJnHH
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
          stance: supports
          locator: CBDB:699373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699373）
          source: &a1
            id: s_ebyTGK7ELo3HAFB92wqGA3
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 699373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699373&o=json
            external_identifier: CBDB:699373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NX3SKkGobqttNNRjRJEYEQ
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 999年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E68uTa4u6GVVzPjC5NdEmV
          claim_id: c_NX3SKkGobqttNNRjRJEYEQ
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
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
        id: c_SK9HJRmGRiXJe36ApcUt4t
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1062年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wpjttDo7kFSN9PXCuEt9YV
          claim_id: c_SK9HJRmGRiXJe36ApcUt4t
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
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
        id: c_Y3gQPwMGNRMqvp9FUjQzF1
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
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
        - id: cs_VvCCGPm58PJF9uXXedRBJL
          claim_id: c_Y3gQPwMGNRMqvp9FUjQzF1
          source_id: s_ebyTGK7ELo3HAFB92wqGA3
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

# 王弁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弁 | accepted |
| birth.date | 999年 | accepted |
| death.date | 1062年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 699373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699373&o=json)
