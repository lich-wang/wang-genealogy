---
schema: wang-person/v1
id: p_M1irjzpf3MH4ibeAzYptF3
status: active
merged_into: null
display_name: 王可進
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BN2aBXH3jekYwDdpHdHBe8
        subject_person_id: p_M1irjzpf3MH4ibeAzYptF3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PedaneRdGNhG4EoESAvc8D
          claim_id: c_BN2aBXH3jekYwDdpHdHBe8
          source_id: s_JPQHsQSJxCaPdR8UXSu624
          stance: supports
          locator: CBDB:550693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550693）
          source: &a1
            id: s_JPQHsQSJxCaPdR8UXSu624
            source_type: api_record
            title: 中国历代人物传记资料库：王可進（CBDB 550693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550693&o=json
            external_identifier: CBDB:550693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F8hSCFBM5N5mjecuH3Dh6q
        subject_person_id: p_M1irjzpf3MH4ibeAzYptF3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可進，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 550693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lxqssKS_xHGmdcWDaFcKqj
          claim_id: c_F8hSCFBM5N5mjecuH3Dh6q
          source_id: s_JPQHsQSJxCaPdR8UXSu624
          stance: supports
          locator: CBDB:550693
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

# 王可進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可進 | accepted |
| bio.summary | 王可進，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 550693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可進（CBDB 550693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550693&o=json)
