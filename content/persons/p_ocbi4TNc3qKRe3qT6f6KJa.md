---
schema: wang-person/v1
id: p_ocbi4TNc3qKRe3qT6f6KJa
status: active
merged_into: null
display_name: 王傚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d9FXJo2G2wj733M28MB2cC
        subject_person_id: p_ocbi4TNc3qKRe3qT6f6KJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7fKKBnpKWzfgc7PmbryYxW
          claim_id: c_d9FXJo2G2wj733M28MB2cC
          source_id: s_C6Mx27Pq8es43K6sivrsMz
          stance: supports
          locator: CBDB:229900
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229900）
          source: &a1
            id: s_C6Mx27Pq8es43K6sivrsMz
            source_type: api_record
            title: 中国历代人物传记资料库：王傚（CBDB 229900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229900&o=json
            external_identifier: CBDB:229900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NzWZJ5qmsykEUk3uhB1P8J
        subject_person_id: p_ocbi4TNc3qKRe3qT6f6KJa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傚，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229900）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gaZvvLzwEgf9xixqjhcd-8
          claim_id: c_NzWZJ5qmsykEUk3uhB1P8J
          source_id: s_C6Mx27Pq8es43K6sivrsMz
          stance: supports
          locator: CBDB:229900
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

# 王傚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傚 | accepted |
| bio.summary | 王傚，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229900） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傚（CBDB 229900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229900&o=json)
