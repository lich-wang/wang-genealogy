---
schema: wang-person/v1
id: p_txggP7FprGr8HGS1JSwJKD
status: active
merged_into: null
display_name: 王玉恆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CuZ7XFKUdTZAMKk2WyFm1x
        subject_person_id: p_txggP7FprGr8HGS1JSwJKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BH4n4acCW8Duw29PmpYU3F
          claim_id: c_CuZ7XFKUdTZAMKk2WyFm1x
          source_id: s_5GbKQn13Vz2HYt5MoGXtCN
          stance: supports
          locator: CBDB:639373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639373）
          source: &a1
            id: s_5GbKQn13Vz2HYt5MoGXtCN
            source_type: api_record
            title: 中国历代人物传记资料库：王玉恆（CBDB 639373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639373&o=json
            external_identifier: CBDB:639373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X78iET4ggfVs55sb55Zm5S
        subject_person_id: p_txggP7FprGr8HGS1JSwJKD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉恆，清人物。籍贯重慶府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 639373）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e_J_4wyXOfveo32DyvljbW
          claim_id: c_X78iET4ggfVs55sb55Zm5S
          source_id: s_5GbKQn13Vz2HYt5MoGXtCN
          stance: supports
          locator: CBDB:639373
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

# 王玉恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉恆 | accepted |
| bio.summary | 王玉恆，清人物。籍贯重慶府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 639373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉恆（CBDB 639373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639373&o=json)
