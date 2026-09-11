---
schema: wang-person/v1
id: p_XEyFkEBCqtqmqBdSRYKcJ7
status: active
merged_into: null
display_name: 王守勝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dijH4yF2x39PZs13aTWP6G
        subject_person_id: p_XEyFkEBCqtqmqBdSRYKcJ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cHH75NFdMQkV9TuFBf1fPj
          claim_id: c_dijH4yF2x39PZs13aTWP6G
          source_id: s_i9hT8CoSSJr4N8zAV5BgL9
          stance: supports
          locator: CBDB:472817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472817）
          source: &a1
            id: s_i9hT8CoSSJr4N8zAV5BgL9
            source_type: api_record
            title: 中国历代人物传记资料库：王守勝（CBDB 472817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472817&o=json
            external_identifier: CBDB:472817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J7pSbKg951sxCcPn3ffEMw
        subject_person_id: p_XEyFkEBCqtqmqBdSRYKcJ7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守勝，明人物。籍贯德興，入仕鄉貢舉人，曾任教授、教諭、府學教授。（中国历代人物传记资料库 CBDB 472817）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eJpMEmfWGgF4qTRBw-D7nr
          claim_id: c_J7pSbKg951sxCcPn3ffEMw
          source_id: s_i9hT8CoSSJr4N8zAV5BgL9
          stance: supports
          locator: CBDB:472817
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

# 王守勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守勝 | accepted |
| bio.summary | 王守勝，明人物。籍贯德興，入仕鄉貢舉人，曾任教授、教諭、府學教授。（中国历代人物传记资料库 CBDB 472817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守勝（CBDB 472817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472817&o=json)
