---
schema: wang-person/v1
id: p_beG4UL2sNCaYBiQMCZeWVC
status: active
merged_into: null
display_name: 王榮封
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4HBt6mHf3R48bRUYg5A4Bu
        subject_person_id: p_beG4UL2sNCaYBiQMCZeWVC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮封
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2x3828P1yKQj747FQrE9Hn
          claim_id: c_4HBt6mHf3R48bRUYg5A4Bu
          source_id: s_DboByiCEZo9nP76AGVp1Qk
          stance: supports
          locator: CBDB:638796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638796）
          source: &a1
            id: s_DboByiCEZo9nP76AGVp1Qk
            source_type: api_record
            title: 中国历代人物传记资料库：王榮封（CBDB 638796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638796&o=json
            external_identifier: CBDB:638796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wGgkBdF2MWvyztjDFjh4Wg
        subject_person_id: p_beG4UL2sNCaYBiQMCZeWVC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮封，清人物。籍贯武定直隸州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zyNBol_fNy1HnvwpTjUSsT
          claim_id: c_wGgkBdF2MWvyztjDFjh4Wg
          source_id: s_DboByiCEZo9nP76AGVp1Qk
          stance: supports
          locator: CBDB:638796
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

# 王榮封

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮封 | accepted |
| bio.summary | 王榮封，清人物。籍贯武定直隸州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮封（CBDB 638796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638796&o=json)
