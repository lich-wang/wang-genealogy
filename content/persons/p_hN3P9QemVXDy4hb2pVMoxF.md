---
schema: wang-person/v1
id: p_hN3P9QemVXDy4hb2pVMoxF
status: active
merged_into: null
display_name: 王棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RF5AQiqAyuR5U4UGrrwUKV
        subject_person_id: p_hN3P9QemVXDy4hb2pVMoxF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A8egXZo965RYha6FaUiB1r
          claim_id: c_RF5AQiqAyuR5U4UGrrwUKV
          source_id: s_8cB9BvD6tEDRKo21y5aQh4
          stance: supports
          locator: CBDB:71126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71126）
          source: &a1
            id: s_8cB9BvD6tEDRKo21y5aQh4
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 71126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71126&o=json
            external_identifier: CBDB:71126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kzJ55kQGnKv8DZei7q7ErQ
        subject_person_id: p_hN3P9QemVXDy4hb2pVMoxF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1880年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fDJDXKhL85dBzSYwvYujDG
          claim_id: c_kzJ55kQGnKv8DZei7q7ErQ
          source_id: s_8cB9BvD6tEDRKo21y5aQh4
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
        id: c_9mdRRWv16FoaYQZRExqXzk
        subject_person_id: p_hN3P9QemVXDy4hb2pVMoxF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1932年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Net5Nvcb74C3sdoPPXpuCZ
          claim_id: c_9mdRRWv16FoaYQZRExqXzk
          source_id: s_8cB9BvD6tEDRKo21y5aQh4
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
        id: c_RKm8ZUJ65j2A1pBsVWeeXE
        subject_person_id: p_hN3P9QemVXDy4hb2pVMoxF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟（1880年—1932年），中華民國人物。籍贯陝州直隸州。（中国历代人物传记资料库 CBDB 71126）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dSj6IUSAaxNv1JE4WQFCi0
          claim_id: c_RKm8ZUJ65j2A1pBsVWeeXE
          source_id: s_8cB9BvD6tEDRKo21y5aQh4
          stance: supports
          locator: CBDB:71126
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

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| birth.date | 1880年 | accepted |
| death.date | 1932年 | accepted |
| bio.summary | 王棟（1880年—1932年），中華民國人物。籍贯陝州直隸州。（中国历代人物传记资料库 CBDB 71126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 71126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71126&o=json)
