---
schema: wang-person/v1
id: p_hXTBtyEFDadQJQRU9k9VYQ
status: active
merged_into: null
display_name: 王誾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C5XquUYa7iotNawuQk3NtU
        subject_person_id: p_hXTBtyEFDadQJQRU9k9VYQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ySEx6jzX9zFuFzSJkJft4v
          claim_id: c_C5XquUYa7iotNawuQk3NtU
          source_id: s_NFAqFYc83EC7zhcdC6irTi
          stance: supports
          locator: CBDB:640275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640275）
          source: &a1
            id: s_NFAqFYc83EC7zhcdC6irTi
            source_type: api_record
            title: 中国历代人物传记资料库：王誾（CBDB 640275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640275&o=json
            external_identifier: CBDB:640275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pD9xHUk2r5bh2Sqg4ChHDj
        subject_person_id: p_hXTBtyEFDadQJQRU9k9VYQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誾，清人物。籍贯榆次，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 640275）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JgyKGjV9GTOabXnH2LHWEE
          claim_id: c_pD9xHUk2r5bh2Sqg4ChHDj
          source_id: s_NFAqFYc83EC7zhcdC6irTi
          stance: supports
          locator: CBDB:640275
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

# 王誾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誾 | accepted |
| bio.summary | 王誾，清人物。籍贯榆次，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 640275） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誾（CBDB 640275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640275&o=json)
