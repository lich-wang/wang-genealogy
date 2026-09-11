---
schema: wang-person/v1
id: p_Cp6cJh6EdSMksifC5Ga7rL
status: active
merged_into: null
display_name: 王春芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eyi2Ec7BML9AAf5SRLHU1M
        subject_person_id: p_Cp6cJh6EdSMksifC5Ga7rL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvE15gNrBptoYvSUR3kKDr
          claim_id: c_Eyi2Ec7BML9AAf5SRLHU1M
          source_id: s_J8Y88uSyhs8otim3McewPC
          stance: supports
          locator: CBDB:638424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638424）
          source: &a1
            id: s_J8Y88uSyhs8otim3McewPC
            source_type: api_record
            title: 中国历代人物传记资料库：王春芳（CBDB 638424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638424&o=json
            external_identifier: CBDB:638424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vixbQkcoApQob9eAeuumo2
        subject_person_id: p_Cp6cJh6EdSMksifC5Ga7rL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春芳，清人物。籍贯大名，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638424）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_04_N5sgd8HJZHfHsjWt9zG
          claim_id: c_vixbQkcoApQob9eAeuumo2
          source_id: s_J8Y88uSyhs8otim3McewPC
          stance: supports
          locator: CBDB:638424
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

# 王春芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春芳 | accepted |
| bio.summary | 王春芳，清人物。籍贯大名，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春芳（CBDB 638424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638424&o=json)
