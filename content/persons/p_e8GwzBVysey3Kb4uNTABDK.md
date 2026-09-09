---
schema: wang-person/v1
id: p_e8GwzBVysey3Kb4uNTABDK
status: active
merged_into: null
display_name: 王敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XNppWVM6Eiic1HrBstXfex
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zS55UE6D24KmehxNcP7h2N
          claim_id: c_XNppWVM6Eiic1HrBstXfex
          source_id: s_HwM5bMkoywC5wSHBTt5VnK
          stance: supports
          locator: CBDB:296945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296945）
          source: &a1
            id: s_HwM5bMkoywC5wSHBTt5VnK
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 296945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296945&o=json
            external_identifier: CBDB:296945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qJ7qfzQL7rBBap2A22eiuU
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
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
        - id: cs_S5PAcCy4emDSnUUUc3s6i7
          claim_id: c_qJ7qfzQL7rBBap2A22eiuU
          source_id: s_HwM5bMkoywC5wSHBTt5VnK
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

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 296945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296945&o=json)
