---
schema: wang-person/v1
id: p_4xmoP9U8F5tVkCokjKmQDQ
status: active
merged_into: null
display_name: 王肅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vnE55y8vLE43Bi2H9Cc1H9
        subject_person_id: p_4xmoP9U8F5tVkCokjKmQDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FeFMpQe58b9RC6ysFvwFsN
          claim_id: c_vnE55y8vLE43Bi2H9Cc1H9
          source_id: s_ts7Nk1D7Y1M4zmPbinEJ8T
          stance: supports
          locator: CBDB:459873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459873）
          source: &a1
            id: s_ts7Nk1D7Y1M4zmPbinEJ8T
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 459873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459873&o=json
            external_identifier: CBDB:459873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q79cuzju4p7DKZdUjLHFZx
        subject_person_id: p_4xmoP9U8F5tVkCokjKmQDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅，清人物。入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 459873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KtWZWe2t-QANZHqPJpfbJT
          claim_id: c_q79cuzju4p7DKZdUjLHFZx
          source_id: s_ts7Nk1D7Y1M4zmPbinEJ8T
          stance: supports
          locator: CBDB:459873
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

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| bio.summary | 王肅，清人物。入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 459873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肅（CBDB 459873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459873&o=json)
