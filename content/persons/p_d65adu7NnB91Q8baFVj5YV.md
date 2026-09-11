---
schema: wang-person/v1
id: p_d65adu7NnB91Q8baFVj5YV
status: active
merged_into: null
display_name: 王固
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N34M2LMhXWdHBLiWRMHby1
        subject_person_id: p_d65adu7NnB91Q8baFVj5YV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4B7UAuJX58LFgF6KtMwVeL
          claim_id: c_N34M2LMhXWdHBLiWRMHby1
          source_id: s_WFMY6hR2h479d7cP54xe28
          stance: supports
          locator: CBDB:39439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39439）
          source: &a1
            id: s_WFMY6hR2h479d7cP54xe28
            source_type: api_record
            title: 中国历代人物传记资料库：王固（CBDB 39439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39439&o=json
            external_identifier: CBDB:39439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WoYvuhfDvqsj6qgCyuMJGC
        subject_person_id: p_d65adu7NnB91Q8baFVj5YV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 988年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6PL26VuPKQAxGMuQX1TGde
          claim_id: c_WoYvuhfDvqsj6qgCyuMJGC
          source_id: s_WFMY6hR2h479d7cP54xe28
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
        id: c_1qTgKSKQBMGC7nQnQ9YKG3
        subject_person_id: p_d65adu7NnB91Q8baFVj5YV
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
        - id: cs_17AKJJqPx5M798TA4X2Fmo
          claim_id: c_1qTgKSKQBMGC7nQnQ9YKG3
          source_id: s_WFMY6hR2h479d7cP54xe28
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
        id: c_svZqgDGuVG22Mb2U9Ly315
        subject_person_id: p_d65adu7NnB91Q8baFVj5YV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固（988年—1062年），宋人物。籍贯分寧，入仕進士，曾任司理參軍、尚書省刑部都官司郎中。（中国历代人物传记资料库 CBDB 39439）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jrC6mgPRHHMMJUM52_KlSl
          claim_id: c_svZqgDGuVG22Mb2U9Ly315
          source_id: s_WFMY6hR2h479d7cP54xe28
          stance: supports
          locator: CBDB:39439
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

# 王固

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王固 | accepted |
| birth.date | 988年 | accepted |
| death.date | 1062年 | accepted |
| bio.summary | 王固（988年—1062年），宋人物。籍贯分寧，入仕進士，曾任司理參軍、尚書省刑部都官司郎中。（中国历代人物传记资料库 CBDB 39439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王固（CBDB 39439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39439&o=json)
