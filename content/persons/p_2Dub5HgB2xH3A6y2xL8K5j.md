---
schema: wang-person/v1
id: p_2Dub5HgB2xH3A6y2xL8K5j
status: active
merged_into: null
display_name: 王彝勲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mS4CrAUVU5EV5VHZ5Vz3kX
        subject_person_id: p_2Dub5HgB2xH3A6y2xL8K5j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝勲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oH7NHcGB5pD7iJHSda7dqc
          claim_id: c_mS4CrAUVU5EV5VHZ5Vz3kX
          source_id: s_PkfBsYCkDDhf3be6daYYDH
          stance: supports
          locator: CBDB:637621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637621）
          source: &a1
            id: s_PkfBsYCkDDhf3be6daYYDH
            source_type: api_record
            title: 中国历代人物传记资料库：王彝勲（CBDB 637621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637621&o=json
            external_identifier: CBDB:637621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TNGYiVHDhNTBDfQYLXGB3W
        subject_person_id: p_2Dub5HgB2xH3A6y2xL8K5j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝勲，清人物。籍贯江寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rtX0q42UZefipMTH0A_hNX
          claim_id: c_TNGYiVHDhNTBDfQYLXGB3W
          source_id: s_PkfBsYCkDDhf3be6daYYDH
          stance: supports
          locator: CBDB:637621
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

# 王彝勲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝勲 | accepted |
| bio.summary | 王彝勲，清人物。籍贯江寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637621） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彝勲（CBDB 637621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637621&o=json)
