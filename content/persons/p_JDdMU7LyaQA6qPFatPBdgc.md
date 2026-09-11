---
schema: wang-person/v1
id: p_JDdMU7LyaQA6qPFatPBdgc
status: active
merged_into: null
display_name: 王漢章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fAxeEwLjhA7bj4ALAu4yiv
        subject_person_id: p_JDdMU7LyaQA6qPFatPBdgc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eT5Liyf4aPn75BgZEhUyKP
          claim_id: c_fAxeEwLjhA7bj4ALAu4yiv
          source_id: s_LA8JyVxvVgZEypMPJCQ4yc
          stance: supports
          locator: CBDB:101400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101400）
          source: &a1
            id: s_LA8JyVxvVgZEypMPJCQ4yc
            source_type: api_record
            title: 中国历代人物传记资料库：王漢章（CBDB 101400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101400&o=json
            external_identifier: CBDB:101400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pR7MZmHijk28eVFhaF5Q9X
        subject_person_id: p_JDdMU7LyaQA6qPFatPBdgc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢章，元人物。籍贯會稽，身份为不求仕。（中国历代人物传记资料库 CBDB 101400）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DEjJ2hmw2IVmC4Af01qR_Y
          claim_id: c_pR7MZmHijk28eVFhaF5Q9X
          source_id: s_LA8JyVxvVgZEypMPJCQ4yc
          stance: supports
          locator: CBDB:101400
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

# 王漢章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢章 | accepted |
| bio.summary | 王漢章，元人物。籍贯會稽，身份为不求仕。（中国历代人物传记资料库 CBDB 101400） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漢章（CBDB 101400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101400&o=json)
