---
schema: wang-person/v1
id: p_Je4x57rVDV7S3qH9q3KtyG
status: active
merged_into: null
display_name: 王若宜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pNxETbcBfGmB7iEP4L6Y76
        subject_person_id: p_Je4x57rVDV7S3qH9q3KtyG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p1TddKMH9TmU5joViqCy8a
          claim_id: c_pNxETbcBfGmB7iEP4L6Y76
          source_id: s_xAfWxRCUj5rTpi2Q2AUAvK
          stance: supports
          locator: CBDB:640068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640068）
          source: &a1
            id: s_xAfWxRCUj5rTpi2Q2AUAvK
            source_type: api_record
            title: 中国历代人物传记资料库：王若宜（CBDB 640068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640068&o=json
            external_identifier: CBDB:640068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GNCgHz3VKULRgLAeEyJ6L2
        subject_person_id: p_Je4x57rVDV7S3qH9q3KtyG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若宜，清人物。籍贯溧陽，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 640068）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m0kt7NbmlvLg594-l7luDY
          claim_id: c_GNCgHz3VKULRgLAeEyJ6L2
          source_id: s_xAfWxRCUj5rTpi2Q2AUAvK
          stance: supports
          locator: CBDB:640068
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

# 王若宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若宜 | accepted |
| bio.summary | 王若宜，清人物。籍贯溧陽，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 640068） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若宜（CBDB 640068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640068&o=json)
