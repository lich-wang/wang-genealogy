---
schema: wang-person/v1
id: p_H8LLTT8M4rj5Dc9dixC7ZU
status: active
merged_into: null
display_name: 王世冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5vns7kFrH3CMCKcAwAhV8P
        subject_person_id: p_H8LLTT8M4rj5Dc9dixC7ZU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xeeapZJzeP48d6aEQ2pfFN
          claim_id: c_5vns7kFrH3CMCKcAwAhV8P
          source_id: s_h5CRoL3vB761HQ6Li8yN76
          stance: supports
          locator: CBDB:635665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635665）
          source: &a1
            id: s_h5CRoL3vB761HQ6Li8yN76
            source_type: api_record
            title: 中国历代人物传记资料库：王世冕（CBDB 635665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635665&o=json
            external_identifier: CBDB:635665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iJcmNBtTMUyAZagEDdPQ43
        subject_person_id: p_H8LLTT8M4rj5Dc9dixC7ZU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世冕，清人物。籍贯吳縣，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s-uFzmEswKUO37jS1GnxhE
          claim_id: c_iJcmNBtTMUyAZagEDdPQ43
          source_id: s_h5CRoL3vB761HQ6Li8yN76
          stance: supports
          locator: CBDB:635665
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

# 王世冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世冕 | accepted |
| bio.summary | 王世冕，清人物。籍贯吳縣，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世冕（CBDB 635665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635665&o=json)
