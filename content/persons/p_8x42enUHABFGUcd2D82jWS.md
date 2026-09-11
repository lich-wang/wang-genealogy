---
schema: wang-person/v1
id: p_8x42enUHABFGUcd2D82jWS
status: active
merged_into: null
display_name: 王釆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ukbd6jFbMx1xoXNFCSmZCk
        subject_person_id: p_8x42enUHABFGUcd2D82jWS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oAKHiutDt23gpW2YHkZzHM
          claim_id: c_Ukbd6jFbMx1xoXNFCSmZCk
          source_id: s_NFJTXwK4oAj24CzGQncE3Q
          stance: supports
          locator: CBDB:538653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538653）
          source: &a1
            id: s_NFJTXwK4oAj24CzGQncE3Q
            source_type: api_record
            title: 中国历代人物传记资料库：王釆（CBDB 538653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538653&o=json
            external_identifier: CBDB:538653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DHHe1b6KjThCky2fRW1tVs
        subject_person_id: p_8x42enUHABFGUcd2D82jWS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釆，宋人物。籍贯清江，入仕進士。（中国历代人物传记资料库 CBDB 538653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rp9vQm2NC8hPXuKgzyGS1w
          claim_id: c_DHHe1b6KjThCky2fRW1tVs
          source_id: s_NFJTXwK4oAj24CzGQncE3Q
          stance: supports
          locator: CBDB:538653
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

# 王釆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釆 | accepted |
| bio.summary | 王釆，宋人物。籍贯清江，入仕進士。（中国历代人物传记资料库 CBDB 538653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王釆（CBDB 538653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538653&o=json)
