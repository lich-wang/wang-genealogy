---
schema: wang-person/v1
id: p_t8Hz75GnbY9LiU2vGYPV9U
status: active
merged_into: null
display_name: 王士璠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q3PFocetuAxBTd8N2JhU7k
        subject_person_id: p_t8Hz75GnbY9LiU2vGYPV9U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HGMgC4xV7sb5xZxBQGWJUz
          claim_id: c_Q3PFocetuAxBTd8N2JhU7k
          source_id: s_TVQDxe98wY8Ws5iZ1hw15S
          stance: supports
          locator: CBDB:683339
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683339）
          source: &a1
            id: s_TVQDxe98wY8Ws5iZ1hw15S
            source_type: api_record
            title: 中国历代人物传记资料库：王士璠（CBDB 683339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683339&o=json
            external_identifier: CBDB:683339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cKNuxAk4XtXGftg7z5MHsz
        subject_person_id: p_t8Hz75GnbY9LiU2vGYPV9U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士璠，清人物。籍贯歙縣，身份为為善鄉里。（中国历代人物传记资料库 CBDB 683339）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_03Ygm0gB0PqR1vrdET2UWp
          claim_id: c_cKNuxAk4XtXGftg7z5MHsz
          source_id: s_TVQDxe98wY8Ws5iZ1hw15S
          stance: supports
          locator: CBDB:683339
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

# 王士璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士璠 | accepted |
| bio.summary | 王士璠，清人物。籍贯歙縣，身份为為善鄉里。（中国历代人物传记资料库 CBDB 683339） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士璠（CBDB 683339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683339&o=json)
