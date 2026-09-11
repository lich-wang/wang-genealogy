---
schema: wang-person/v1
id: p_wPp6NJ4bkXEtrDboGZMxwd
status: active
merged_into: null
display_name: 王顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6rS69Q838LoYAZE3h8MTw8
        subject_person_id: p_wPp6NJ4bkXEtrDboGZMxwd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pqdhDaL5jwwqsFeTrHMHig
          claim_id: c_6rS69Q838LoYAZE3h8MTw8
          source_id: s_DavfBMQrkogCDFg1zGNkYY
          stance: supports
          locator: CBDB:560902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560902）
          source: &a1
            id: s_DavfBMQrkogCDFg1zGNkYY
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 560902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560902&o=json
            external_identifier: CBDB:560902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5RUDLQ7oLHjnfX8Xkw313a
        subject_person_id: p_wPp6NJ4bkXEtrDboGZMxwd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯，明人物。身份为畫家。（中国历代人物传记资料库 CBDB 560902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A4XjpM0rUf27VqcQ4Ovd-3
          claim_id: c_5RUDLQ7oLHjnfX8Xkw313a
          source_id: s_DavfBMQrkogCDFg1zGNkYY
          stance: supports
          locator: CBDB:560902
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

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| bio.summary | 王顯，明人物。身份为畫家。（中国历代人物传记资料库 CBDB 560902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯（CBDB 560902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560902&o=json)
