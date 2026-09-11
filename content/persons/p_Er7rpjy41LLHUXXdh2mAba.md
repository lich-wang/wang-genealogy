---
schema: wang-person/v1
id: p_Er7rpjy41LLHUXXdh2mAba
status: active
merged_into: null
display_name: 王得貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gdDgMmpC2ef5pLQ3NhPF7S
        subject_person_id: p_Er7rpjy41LLHUXXdh2mAba
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7QSJRzf5MvEpDc39CjZjfp
          claim_id: c_gdDgMmpC2ef5pLQ3NhPF7S
          source_id: s_oNwPzhDnVh9RDRrQegwaat
          stance: supports
          locator: CBDB:637650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637650）
          source: &a1
            id: s_oNwPzhDnVh9RDRrQegwaat
            source_type: api_record
            title: 中国历代人物传记资料库：王得貴（CBDB 637650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637650&o=json
            external_identifier: CBDB:637650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MPV7FXPH5RDCLYUQypwKFD
        subject_person_id: p_Er7rpjy41LLHUXXdh2mAba
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得貴，清人物。籍贯貴州省，入仕軍功補授(軍功)，曾任參將。（中国历代人物传记资料库 CBDB 637650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B6B59Vl6kbo3xTeSxTHg7A
          claim_id: c_MPV7FXPH5RDCLYUQypwKFD
          source_id: s_oNwPzhDnVh9RDRrQegwaat
          stance: supports
          locator: CBDB:637650
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

# 王得貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得貴 | accepted |
| bio.summary | 王得貴，清人物。籍贯貴州省，入仕軍功補授(軍功)，曾任參將。（中国历代人物传记资料库 CBDB 637650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得貴（CBDB 637650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637650&o=json)
