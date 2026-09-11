---
schema: wang-person/v1
id: p_r21U7FTkw5BqSP93MxAFGA
status: active
merged_into: null
display_name: 王祖榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GWToMsNqEkmkrRwoFK8y6C
        subject_person_id: p_r21U7FTkw5BqSP93MxAFGA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uN3GeYdbGNWd7hZJy5iC4r
          claim_id: c_GWToMsNqEkmkrRwoFK8y6C
          source_id: s_fxZUkn5peNdurFDsVVcQGY
          stance: supports
          locator: CBDB:639572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639572）
          source: &a1
            id: s_fxZUkn5peNdurFDsVVcQGY
            source_type: api_record
            title: 中国历代人物传记资料库：王祖榮（CBDB 639572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639572&o=json
            external_identifier: CBDB:639572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ou3swz3rcb6zHK5n364xfJ
        subject_person_id: p_r21U7FTkw5BqSP93MxAFGA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖榮，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639572）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XeCe9-XX6H_8w7aHEx2RUR
          claim_id: c_ou3swz3rcb6zHK5n364xfJ
          source_id: s_fxZUkn5peNdurFDsVVcQGY
          stance: supports
          locator: CBDB:639572
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

# 王祖榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖榮 | accepted |
| bio.summary | 王祖榮，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639572） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖榮（CBDB 639572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639572&o=json)
