---
schema: wang-person/v1
id: p_7XCnr6rXUJXf8LH5kLp9z6
status: active
merged_into: null
display_name: 王山寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nnpYLv4ocJskUAvw1H3JLc
        subject_person_id: p_7XCnr6rXUJXf8LH5kLp9z6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D6h8sQeZDZaL8qiTkM51qx
          claim_id: c_nnpYLv4ocJskUAvw1H3JLc
          source_id: s_gCpjGWLVMHJQEBuAz56CWA
          stance: supports
          locator: CBDB:637332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637332）
          source: &a1
            id: s_gCpjGWLVMHJQEBuAz56CWA
            source_type: api_record
            title: 中国历代人物传记资料库：王山寬（CBDB 637332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637332&o=json
            external_identifier: CBDB:637332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8pDxf7LpQ3Uy5gt57EsbR4
        subject_person_id: p_7XCnr6rXUJXf8LH5kLp9z6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王山寬，清人物。籍贯順天府，入仕科舉制舉: 武舉科，曾任巡捕北營參將、巡捕北營遊擊。（中国历代人物传记资料库 CBDB 637332）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-LO1aVPmckPT5_NaHE6XvU
          claim_id: c_8pDxf7LpQ3Uy5gt57EsbR4
          source_id: s_gCpjGWLVMHJQEBuAz56CWA
          stance: supports
          locator: CBDB:637332
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

# 王山寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王山寬 | accepted |
| bio.summary | 王山寬，清人物。籍贯順天府，入仕科舉制舉: 武舉科，曾任巡捕北營參將、巡捕北營遊擊。（中国历代人物传记资料库 CBDB 637332） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王山寬（CBDB 637332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637332&o=json)
