---
schema: wang-person/v1
id: p_YG4MKKPN2AWy5EDWBq5etr
status: active
merged_into: null
display_name: 王學易
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ncYLdAvXajBdRELECL8gp1
        subject_person_id: p_YG4MKKPN2AWy5EDWBq5etr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7jEGosovqvyE5yC8FKnTaU
          claim_id: c_ncYLdAvXajBdRELECL8gp1
          source_id: s_NmGtfPGapGDBTzyHEu9Tf1
          stance: supports
          locator: CBDB:637036
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637036）
          source: &a1
            id: s_NmGtfPGapGDBTzyHEu9Tf1
            source_type: api_record
            title: 中国历代人物传记资料库：王學易（CBDB 637036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637036&o=json
            external_identifier: CBDB:637036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hE1AHzsLThFmAXsD9ChtYR
        subject_person_id: p_YG4MKKPN2AWy5EDWBq5etr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學易，清人物。籍贯揚州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637036）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k-wyGl28NYkPOF-M8ejhqH
          claim_id: c_hE1AHzsLThFmAXsD9ChtYR
          source_id: s_NmGtfPGapGDBTzyHEu9Tf1
          stance: supports
          locator: CBDB:637036
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

# 王學易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學易 | accepted |
| bio.summary | 王學易，清人物。籍贯揚州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637036） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學易（CBDB 637036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637036&o=json)
