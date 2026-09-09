---
schema: wang-person/v1
id: p_Jag2m2Y8Aiw9vk8e8GxUWB
status: active
merged_into: null
display_name: 王烜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rmoKTAPvP2RF78WV8kkh6B
        subject_person_id: p_Jag2m2Y8Aiw9vk8e8GxUWB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MWiFWEPtQ4EZ7XvGpAwn6R
          claim_id: c_rmoKTAPvP2RF78WV8kkh6B
          source_id: s_2TkSB7YRZd3A1Cb9geVgCJ
          stance: supports
          locator: CBDB:26618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26618）
          source: &a1
            id: s_2TkSB7YRZd3A1Cb9geVgCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 26618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26618&o=json
            external_identifier: CBDB:26618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JbUw8ocdwe7CRd1iYiwDXr
        subject_person_id: p_Jag2m2Y8Aiw9vk8e8GxUWB
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
        - id: cs_hXLG7u4xQbLjv1G2nEwnyC
          claim_id: c_JbUw8ocdwe7CRd1iYiwDXr
          source_id: s_2TkSB7YRZd3A1Cb9geVgCJ
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

# 王烜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烜（CBDB 26618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26618&o=json)
