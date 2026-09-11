---
schema: wang-person/v1
id: p_nnRdDGgvFQwf9mFFjYb3Qs
status: active
merged_into: null
display_name: 王廷輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d7SkZuCNW4N3hdCiN7yQyr
        subject_person_id: p_nnRdDGgvFQwf9mFFjYb3Qs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FXz46XQ7US75ziWpetuoDX
          claim_id: c_d7SkZuCNW4N3hdCiN7yQyr
          source_id: s_dUK3BT3A5f6v9obuMH3BmA
          stance: supports
          locator: CBDB:696481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696481）
          source: &a1
            id: s_dUK3BT3A5f6v9obuMH3BmA
            source_type: api_record
            title: 中国历代人物传记资料库：王廷輔（CBDB 696481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696481&o=json
            external_identifier: CBDB:696481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r7xZ9owVC1Bj7Gj4s4F78i
        subject_person_id: p_nnRdDGgvFQwf9mFFjYb3Qs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王廷輔，明人物。籍贯黃縣，入仕貢生: 歲貢、常貢、挨貢，曾任紀善、縣丞。（中国历代人物传记资料库 CBDB 696481）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__4WEx6Uw7vCqJn0jhrHJtX
          claim_id: c_r7xZ9owVC1Bj7Gj4s4F78i
          source_id: s_dUK3BT3A5f6v9obuMH3BmA
          stance: supports
          locator: CBDB:696481
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

# 王廷輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷輔 | accepted |
| bio.summary | 王廷輔，明人物。籍贯黃縣，入仕貢生: 歲貢、常貢、挨貢，曾任紀善、縣丞。（中国历代人物传记资料库 CBDB 696481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷輔（CBDB 696481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696481&o=json)
