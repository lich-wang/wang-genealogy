---
schema: wang-person/v1
id: p_Fu7UhGhVjW4BG2qVBbqf4o
status: active
merged_into: null
display_name: 王景源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yZ21YLC3tDC7mv5jiwChBm
        subject_person_id: p_Fu7UhGhVjW4BG2qVBbqf4o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z2ip2pWQ9NabVQ5M6pR4jA
          claim_id: c_yZ21YLC3tDC7mv5jiwChBm
          source_id: s_7o8ZRSn5vLAfH4A5o2VA54
          stance: supports
          locator: CBDB:638492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638492）
          source: &a1
            id: s_7o8ZRSn5vLAfH4A5o2VA54
            source_type: api_record
            title: 中国历代人物传记资料库：王景源（CBDB 638492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638492&o=json
            external_identifier: CBDB:638492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VHZfonzWt9wGMWyHntQHcR
        subject_person_id: p_Fu7UhGhVjW4BG2qVBbqf4o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景源，清人物。籍贯河間，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638492）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f_QbQLQINsWfgymSmHT8PN
          claim_id: c_VHZfonzWt9wGMWyHntQHcR
          source_id: s_7o8ZRSn5vLAfH4A5o2VA54
          stance: supports
          locator: CBDB:638492
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

# 王景源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景源 | accepted |
| bio.summary | 王景源，清人物。籍贯河間，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638492） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景源（CBDB 638492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638492&o=json)
