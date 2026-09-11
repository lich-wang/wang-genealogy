---
schema: wang-person/v1
id: p_mLWscEVcD7NvdSdVvBL1cf
status: active
merged_into: null
display_name: 王回
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SFMLkbP2mkDBnoiiCgFkn6
        subject_person_id: p_mLWscEVcD7NvdSdVvBL1cf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aG9qEwf5mAYhBgaFrfGZNi
          claim_id: c_SFMLkbP2mkDBnoiiCgFkn6
          source_id: s_AdojrQBrLAVS1Y15PqcFu4
          stance: supports
          locator: CBDB:497009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497009）
          source: &a1
            id: s_AdojrQBrLAVS1Y15PqcFu4
            source_type: api_record
            title: 中国历代人物传记资料库：王回（CBDB 497009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497009&o=json
            external_identifier: CBDB:497009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vMYcUWvhRYnnwT5CEkmN8A
        subject_person_id: p_mLWscEVcD7NvdSdVvBL1cf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 497009）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U7h44noSxkQ0-_3H-sqVag
          claim_id: c_vMYcUWvhRYnnwT5CEkmN8A
          source_id: s_AdojrQBrLAVS1Y15PqcFu4
          stance: supports
          locator: CBDB:497009
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

# 王回

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王回 | accepted |
| bio.summary | 王回，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 497009） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王回（CBDB 497009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497009&o=json)
