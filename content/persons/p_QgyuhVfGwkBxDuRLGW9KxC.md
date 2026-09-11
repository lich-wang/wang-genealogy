---
schema: wang-person/v1
id: p_QgyuhVfGwkBxDuRLGW9KxC
status: active
merged_into: null
display_name: 王登三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PSxv5kC7GDdPSzCmVaeYSG
        subject_person_id: p_QgyuhVfGwkBxDuRLGW9KxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JCWHUf4EV244y1iyBi4MaU
          claim_id: c_PSxv5kC7GDdPSzCmVaeYSG
          source_id: s_mRDW7Ax8RCfSBJNquTAS6G
          stance: supports
          locator: CBDB:492095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492095）
          source: &a1
            id: s_mRDW7Ax8RCfSBJNquTAS6G
            source_type: api_record
            title: 中国历代人物传记资料库：王登三（CBDB 492095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492095&o=json
            external_identifier: CBDB:492095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TPW8BkHdUx9MSJxnMruQex
        subject_person_id: p_QgyuhVfGwkBxDuRLGW9KxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登三，清人物。入仕考上會試/貢士，曾任訓導。（中国历代人物传记资料库 CBDB 492095）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r_HrhM1nw2FSLjxlFp95_L
          claim_id: c_TPW8BkHdUx9MSJxnMruQex
          source_id: s_mRDW7Ax8RCfSBJNquTAS6G
          stance: supports
          locator: CBDB:492095
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

# 王登三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登三 | accepted |
| bio.summary | 王登三，清人物。入仕考上會試/貢士，曾任訓導。（中国历代人物传记资料库 CBDB 492095） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登三（CBDB 492095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492095&o=json)
