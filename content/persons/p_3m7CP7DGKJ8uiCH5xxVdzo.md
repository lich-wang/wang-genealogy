---
schema: wang-person/v1
id: p_3m7CP7DGKJ8uiCH5xxVdzo
status: active
merged_into: null
display_name: 王極
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NNBqahgBW9y63DhpiW83dW
        subject_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qDNwg1qzf7iZ98VjLaC54P
          claim_id: c_NNBqahgBW9y63DhpiW83dW
          source_id: s_bZsmvVZ8aVw1owZkSWkXLZ
          stance: supports
          locator: CBDB:203985
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203985）
          source: &a1
            id: s_bZsmvVZ8aVw1owZkSWkXLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 203985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203985&o=json
            external_identifier: CBDB:203985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HhU47AfB8kq4TWJzySQKyE
        subject_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S3EZMDRDbazBD51LsSjM8s
          claim_id: c_HhU47AfB8kq4TWJzySQKyE
          source_id: s_bZsmvVZ8aVw1owZkSWkXLZ
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
        id: c_o18VTJ97beqQ8ED8A6ghZr
        subject_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
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
        - id: cs_qPhXUfhkjdkyoZ3EuZT16z
          claim_id: c_o18VTJ97beqQ8ED8A6ghZr
          source_id: s_bZsmvVZ8aVw1owZkSWkXLZ
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

# 王極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王極 | accepted |
| birth.date | 1516年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王極（CBDB 203985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203985&o=json)
