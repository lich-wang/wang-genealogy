---
schema: wang-person/v1
id: p_DJTVFooANTx3YW8fuHEgUA
status: active
merged_into: null
display_name: 王汝霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8zzLUUZ6PBVrtHhvTBnPM3
        subject_person_id: p_DJTVFooANTx3YW8fuHEgUA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1NGkUhiETcxMKxeTw5QLc9
          claim_id: c_8zzLUUZ6PBVrtHhvTBnPM3
          source_id: s_ycQHib5tiDK9TwbbFjwECD
          stance: supports
          locator: CBDB:506079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506079）
          source: &a1
            id: s_ycQHib5tiDK9TwbbFjwECD
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 506079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506079&o=json
            external_identifier: CBDB:506079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CemrdDTXBatGMuvMqFxP6W
        subject_person_id: p_DJTVFooANTx3YW8fuHEgUA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖，明人物。入仕鄉貢舉人，曾任教諭、知州。（中国历代人物传记资料库 CBDB 506079）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q9efogHeqXPQeYOdhOodlX
          claim_id: c_CemrdDTXBatGMuvMqFxP6W
          source_id: s_ycQHib5tiDK9TwbbFjwECD
          stance: supports
          locator: CBDB:506079
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

# 王汝霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝霖 | accepted |
| bio.summary | 王汝霖，明人物。入仕鄉貢舉人，曾任教諭、知州。（中国历代人物传记资料库 CBDB 506079） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝霖（CBDB 506079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506079&o=json)
