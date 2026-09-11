---
schema: wang-person/v1
id: p_6PoBPF6MrPLne3tSbU17Pk
status: active
merged_into: null
display_name: 王龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QeYo8oN2E62iiV5mXEVizE
        subject_person_id: p_6PoBPF6MrPLne3tSbU17Pk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZM7anWm3Y5X7aNyc1rZGD
          claim_id: c_QeYo8oN2E62iiV5mXEVizE
          source_id: s_7Wjxq25vTvHiKZC5mzGdj5
          stance: supports
          locator: CBDB:483348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483348）
          source: &a1
            id: s_7Wjxq25vTvHiKZC5mzGdj5
            source_type: api_record
            title: 中国历代人物传记资料库：王龍（CBDB 483348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483348&o=json
            external_identifier: CBDB:483348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fJgLiqMERY9vVCF2bn5Tx2
        subject_person_id: p_6PoBPF6MrPLne3tSbU17Pk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍，明人物。曾任正千戶。（中国历代人物传记资料库 CBDB 483348）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HIE5bz4eoVVO3WBzEX5GPt
          claim_id: c_fJgLiqMERY9vVCF2bn5Tx2
          source_id: s_7Wjxq25vTvHiKZC5mzGdj5
          stance: supports
          locator: CBDB:483348
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

# 王龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍 | accepted |
| bio.summary | 王龍，明人物。曾任正千戶。（中国历代人物传记资料库 CBDB 483348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龍（CBDB 483348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483348&o=json)
