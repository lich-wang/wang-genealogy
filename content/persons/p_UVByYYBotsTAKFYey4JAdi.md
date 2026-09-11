---
schema: wang-person/v1
id: p_UVByYYBotsTAKFYey4JAdi
status: active
merged_into: null
display_name: 王文雄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wiMstb8MVm7y41a6GLEBrS
        subject_person_id: p_UVByYYBotsTAKFYey4JAdi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A6SJo4A1QBejCeQvsZBU39
          claim_id: c_wiMstb8MVm7y41a6GLEBrS
          source_id: s_8MhQPKkH1nsL7Y6LLUvFmX
          stance: supports
          locator: CBDB:472569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472569）
          source: &a1
            id: s_8MhQPKkH1nsL7Y6LLUvFmX
            source_type: api_record
            title: 中国历代人物传记资料库：王文雄（CBDB 472569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472569&o=json
            external_identifier: CBDB:472569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hh3CLDfMKwjPnpvtQ9nTD3
        subject_person_id: p_UVByYYBotsTAKFYey4JAdi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文雄，清人物。曾任副將。（中国历代人物传记资料库 CBDB 472569）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DfYo-jITMfFYxaYcV1VApF
          claim_id: c_Hh3CLDfMKwjPnpvtQ9nTD3
          source_id: s_8MhQPKkH1nsL7Y6LLUvFmX
          stance: supports
          locator: CBDB:472569
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

# 王文雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文雄 | accepted |
| bio.summary | 王文雄，清人物。曾任副將。（中国历代人物传记资料库 CBDB 472569） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文雄（CBDB 472569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472569&o=json)
