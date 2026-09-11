---
schema: wang-person/v1
id: p_9Hhg8HbrKjQp1emdkMncub
status: active
merged_into: null
display_name: 王祖畬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M91pAG8LY4J2pF2eV2YrdH
        subject_person_id: p_9Hhg8HbrKjQp1emdkMncub
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖畬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mhr52dBfQF4gm4RKpiRqnR
          claim_id: c_M91pAG8LY4J2pF2eV2YrdH
          source_id: s_Uz9g6sUh5LCKqA41rKeHVo
          stance: supports
          locator: CBDB:71925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71925）
          source: &a1
            id: s_Uz9g6sUh5LCKqA41rKeHVo
            source_type: api_record
            title: 中国历代人物传记资料库：王祖畬（CBDB 71925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71925&o=json
            external_identifier: CBDB:71925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_edgK2LJMDN5ssUnyv63nHG
        subject_person_id: p_9Hhg8HbrKjQp1emdkMncub
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U4d74MhNKS7uw4rQMJ7o81
          claim_id: c_edgK2LJMDN5ssUnyv63nHG
          source_id: s_Uz9g6sUh5LCKqA41rKeHVo
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
        id: c_2CBAV7zKc6Lqt7wkDb91vu
        subject_person_id: p_9Hhg8HbrKjQp1emdkMncub
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1918年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RxmYo9UNWm1X11wiYzXSbm
          claim_id: c_2CBAV7zKc6Lqt7wkDb91vu
          source_id: s_Uz9g6sUh5LCKqA41rKeHVo
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
        id: c_tyjQGWPTr4PzgHVaDJfb3g
        subject_person_id: p_9Hhg8HbrKjQp1emdkMncub
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖畬（1842年—1918年），中華民國人物。籍贯鎮洋。（中国历代人物传记资料库 CBDB 71925）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dQ6G1pzyFuWI6wgeTSON9d
          claim_id: c_tyjQGWPTr4PzgHVaDJfb3g
          source_id: s_Uz9g6sUh5LCKqA41rKeHVo
          stance: supports
          locator: CBDB:71925
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

# 王祖畬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖畬 | accepted |
| birth.date | 1842年 | accepted |
| death.date | 1918年 | accepted |
| bio.summary | 王祖畬（1842年—1918年），中華民國人物。籍贯鎮洋。（中国历代人物传记资料库 CBDB 71925） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖畬（CBDB 71925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71925&o=json)
