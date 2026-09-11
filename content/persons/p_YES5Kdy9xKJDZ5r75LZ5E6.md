---
schema: wang-person/v1
id: p_YES5Kdy9xKJDZ5r75LZ5E6
status: active
merged_into: null
display_name: 王膺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qi4knbiwwNmjzpimGUHoFo
        subject_person_id: p_YES5Kdy9xKJDZ5r75LZ5E6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王膺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ji7Bhw5DrnzUce72ZV2Kt9
          claim_id: c_qi4knbiwwNmjzpimGUHoFo
          source_id: s_o9P98ZAunQNnv47yzU1StV
          stance: supports
          locator: CBDB:690484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690484）
          source: &a1
            id: s_o9P98ZAunQNnv47yzU1StV
            source_type: api_record
            title: 中国历代人物传记资料库：王膺（CBDB 690484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690484&o=json
            external_identifier: CBDB:690484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Bh5SXcC2Hs1SDbBFCai4b1
        subject_person_id: p_YES5Kdy9xKJDZ5r75LZ5E6
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
        - id: cs_QbrD1Qy5iUEGbVUjy9MH6p
          claim_id: c_Bh5SXcC2Hs1SDbBFCai4b1
          source_id: s_o9P98ZAunQNnv47yzU1StV
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
        id: c_FYbPaggAFQW41z2WQi22SZ
        subject_person_id: p_YES5Kdy9xKJDZ5r75LZ5E6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王膺（卒于1264年），元人物。籍贯上黨。（中国历代人物传记资料库 CBDB 690484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gGKvOxbFaOeqgs70d-NICh
          claim_id: c_FYbPaggAFQW41z2WQi22SZ
          source_id: s_o9P98ZAunQNnv47yzU1StV
          stance: supports
          locator: CBDB:690484
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

# 王膺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王膺 | accepted |
| death.date | 1264年 | accepted |
| bio.summary | 王膺（卒于1264年），元人物。籍贯上黨。（中国历代人物传记资料库 CBDB 690484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王膺（CBDB 690484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690484&o=json)
