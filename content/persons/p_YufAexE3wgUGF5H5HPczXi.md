---
schema: wang-person/v1
id: p_YufAexE3wgUGF5H5HPczXi
status: active
merged_into: null
display_name: 王兆琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8MGHL8AU1nAzivBuUHcvgd
        subject_person_id: p_YufAexE3wgUGF5H5HPczXi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4vH4RJMozYYcAzRhaSSn2z
          claim_id: c_8MGHL8AU1nAzivBuUHcvgd
          source_id: s_e9LP2aemyfE5ixD46Sg4Tr
          stance: supports
          locator: CBDB:636212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636212）
          source: &a1
            id: s_e9LP2aemyfE5ixD46Sg4Tr
            source_type: api_record
            title: 中国历代人物传记资料库：王兆琦（CBDB 636212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636212&o=json
            external_identifier: CBDB:636212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b1BoijW6Pj51E5mVmUaELK
        subject_person_id: p_YufAexE3wgUGF5H5HPczXi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆琦，清人物。籍贯登州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 636212）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V7aF9ZkawLBT95UPiGp_-O
          claim_id: c_b1BoijW6Pj51E5mVmUaELK
          source_id: s_e9LP2aemyfE5ixD46Sg4Tr
          stance: supports
          locator: CBDB:636212
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

# 王兆琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆琦 | accepted |
| bio.summary | 王兆琦，清人物。籍贯登州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 636212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆琦（CBDB 636212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636212&o=json)
