---
schema: wang-person/v1
id: p_NXDyNBG9epjxsLCfhff26j
status: active
merged_into: null
display_name: 王會中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b1MGwF27NeC3mhGHg2ijsm
        subject_person_id: p_NXDyNBG9epjxsLCfhff26j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Vqm248LDLNH5ypNgTAjpP
          claim_id: c_b1MGwF27NeC3mhGHg2ijsm
          source_id: s_oKjLfpYFQokjnsRhprEEJZ
          stance: supports
          locator: CBDB:638566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638566）
          source: &a1
            id: s_oKjLfpYFQokjnsRhprEEJZ
            source_type: api_record
            title: 中国历代人物传记资料库：王會中（CBDB 638566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638566&o=json
            external_identifier: CBDB:638566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vo3JJ8kQBtyRFzbcbpnKkh
        subject_person_id: p_NXDyNBG9epjxsLCfhff26j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會中，清人物。籍贯河南省，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638566）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kRidEIHXzSfSKwC6rtvMCs
          claim_id: c_Vo3JJ8kQBtyRFzbcbpnKkh
          source_id: s_oKjLfpYFQokjnsRhprEEJZ
          stance: supports
          locator: CBDB:638566
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

# 王會中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會中 | accepted |
| bio.summary | 王會中，清人物。籍贯河南省，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會中（CBDB 638566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638566&o=json)
