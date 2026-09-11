---
schema: wang-person/v1
id: p_z98489AWk5odc7a6QQ4EJH
status: active
merged_into: null
display_name: 王德溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jzt9to4L1Km24qTRdKPkcQ
        subject_person_id: p_z98489AWk5odc7a6QQ4EJH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oUL5KTBn7gxctgL471rcPK
          claim_id: c_jzt9to4L1Km24qTRdKPkcQ
          source_id: s_oLaHvxbzfmu494sGb4vzgg
          stance: supports
          locator: CBDB:703951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703951）
          source: &a1
            id: s_oLaHvxbzfmu494sGb4vzgg
            source_type: api_record
            title: 中国历代人物传记资料库：王德溥（CBDB 703951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703951&o=json
            external_identifier: CBDB:703951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M818EDH2YMxkuXY4HnXKxN
        subject_person_id: p_z98489AWk5odc7a6QQ4EJH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德溥，清人物。籍贯上虞，身份为良吏;循吏，曾任知縣。（中国历代人物传记资料库 CBDB 703951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y1bN7I2c_OQe3lfWByoezX
          claim_id: c_M818EDH2YMxkuXY4HnXKxN
          source_id: s_oLaHvxbzfmu494sGb4vzgg
          stance: supports
          locator: CBDB:703951
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

# 王德溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德溥 | accepted |
| bio.summary | 王德溥，清人物。籍贯上虞，身份为良吏;循吏，曾任知縣。（中国历代人物传记资料库 CBDB 703951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德溥（CBDB 703951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703951&o=json)
