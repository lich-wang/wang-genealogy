---
schema: wang-person/v1
id: p_qPpuHnGGzr4cBHBgFkmpu4
status: active
merged_into: null
display_name: 王蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jCMNQcN6aGV2CbL5yfr2W9
        subject_person_id: p_qPpuHnGGzr4cBHBgFkmpu4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MLtXNS418nTXbvd4zdn96a
          claim_id: c_jCMNQcN6aGV2CbL5yfr2W9
          source_id: s_15oiRJPmAQLMAjNmVzTCap
          stance: supports
          locator: CBDB:473221
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473221）
          source: &a1
            id: s_15oiRJPmAQLMAjNmVzTCap
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 473221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473221&o=json
            external_identifier: CBDB:473221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kt6TKVDNmTLN7NWESUYm8A
        subject_person_id: p_qPpuHnGGzr4cBHBgFkmpu4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473221）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UbftxnHorV2jJ7mZCPJd71
          claim_id: c_Kt6TKVDNmTLN7NWESUYm8A
          source_id: s_15oiRJPmAQLMAjNmVzTCap
          stance: supports
          locator: CBDB:473221
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

# 王蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭 | accepted |
| bio.summary | 王蘭，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473221） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 473221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473221&o=json)
