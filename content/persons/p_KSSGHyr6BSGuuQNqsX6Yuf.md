---
schema: wang-person/v1
id: p_KSSGHyr6BSGuuQNqsX6Yuf
status: active
merged_into: null
display_name: 王彬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ah9nSAaz7ZnAm6B6aDppRn
        subject_person_id: p_KSSGHyr6BSGuuQNqsX6Yuf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S61U5FqZ6zg3AbUQeUfzwQ
          claim_id: c_ah9nSAaz7ZnAm6B6aDppRn
          source_id: s_upcd6itugWEHEKThiEwWGk
          stance: supports
          locator: CBDB:458804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458804）
          source: &a1
            id: s_upcd6itugWEHEKThiEwWGk
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 458804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458804&o=json
            external_identifier: CBDB:458804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FQZf2oAq7HbqJ71zmtXLoC
        subject_person_id: p_KSSGHyr6BSGuuQNqsX6Yuf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬，清人物。入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 458804）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sdyedGCgZNJ4Ocg9HGU4Uq
          claim_id: c_FQZf2oAq7HbqJ71zmtXLoC
          source_id: s_upcd6itugWEHEKThiEwWGk
          stance: supports
          locator: CBDB:458804
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

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彬 | accepted |
| bio.summary | 王彬，清人物。入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 458804） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 458804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458804&o=json)
