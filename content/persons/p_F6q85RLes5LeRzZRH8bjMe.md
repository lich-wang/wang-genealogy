---
schema: wang-person/v1
id: p_F6q85RLes5LeRzZRH8bjMe
status: active
merged_into: null
display_name: 王象之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zp7fRnL151C6C1PSXyQVtD
        subject_person_id: p_F6q85RLes5LeRzZRH8bjMe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jtZLN3wMiNss37m1den7fq
          claim_id: c_Zp7fRnL151C6C1PSXyQVtD
          source_id: s_L7ru1Bag3Y6w7p5xbVdPdu
          stance: supports
          locator: CBDB:10689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10689）
          source: &a1
            id: s_L7ru1Bag3Y6w7p5xbVdPdu
            source_type: api_record
            title: 中国历代人物传记资料库：王象之（CBDB 10689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10689&o=json
            external_identifier: CBDB:10689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_18x79VkuZhc1EPs8t1wvnm
        subject_person_id: p_F6q85RLes5LeRzZRH8bjMe
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
        - id: cs_HKmWs2r3wobiYfxzRP5vQT
          claim_id: c_18x79VkuZhc1EPs8t1wvnm
          source_id: s_L7ru1Bag3Y6w7p5xbVdPdu
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

# 王象之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象之（CBDB 10689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10689&o=json)
