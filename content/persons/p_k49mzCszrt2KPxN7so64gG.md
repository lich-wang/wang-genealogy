---
schema: wang-person/v1
id: p_k49mzCszrt2KPxN7so64gG
status: active
merged_into: null
display_name: 王德容
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6rT3oQ7h4hEFFfJx6EXXJ5
        subject_person_id: p_k49mzCszrt2KPxN7so64gG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德容
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7JFEYGoSrfqeuutknx7kDW
          claim_id: c_6rT3oQ7h4hEFFfJx6EXXJ5
          source_id: s_P5F44MkXYL3FuEC25JSoRJ
          stance: supports
          locator: CBDB:637678
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637678）
          source: &a1
            id: s_P5F44MkXYL3FuEC25JSoRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王德容（CBDB 637678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637678&o=json
            external_identifier: CBDB:637678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kfmpecRbMzXVa9rNkXx52r
        subject_person_id: p_k49mzCszrt2KPxN7so64gG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德容，清人物。籍贯紹興府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637678）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ncrMpveP5wCWOfaThXMdDw
          claim_id: c_kfmpecRbMzXVa9rNkXx52r
          source_id: s_P5F44MkXYL3FuEC25JSoRJ
          stance: supports
          locator: CBDB:637678
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

# 王德容

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德容 | accepted |
| bio.summary | 王德容，清人物。籍贯紹興府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637678） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德容（CBDB 637678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637678&o=json)
