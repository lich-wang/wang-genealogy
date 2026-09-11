---
schema: wang-person/v1
id: p_EnVmssp3v9CzdsuTdGFoSF
status: active
merged_into: null
display_name: 王垌夫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Uddc61jvHagjEbe3R63FCR
        subject_person_id: p_EnVmssp3v9CzdsuTdGFoSF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垌夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8QWTHMkogCbJUaC2d4x6LG
          claim_id: c_Uddc61jvHagjEbe3R63FCR
          source_id: s_Y23N41as2jNj17LmYtEH8m
          stance: supports
          locator: CBDB:534893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534893）
          source: &a1
            id: s_Y23N41as2jNj17LmYtEH8m
            source_type: api_record
            title: 中国历代人物传记资料库：王垌夫（CBDB 534893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534893&o=json
            external_identifier: CBDB:534893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gi3QDYxjN7V4jA9qayWKY9
        subject_person_id: p_EnVmssp3v9CzdsuTdGFoSF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垌夫，宋人物。籍贯漢州，入仕進士。（中国历代人物传记资料库 CBDB 534893）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7SK7jlbQlKR4dkrgLAUHoV
          claim_id: c_gi3QDYxjN7V4jA9qayWKY9
          source_id: s_Y23N41as2jNj17LmYtEH8m
          stance: supports
          locator: CBDB:534893
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

# 王垌夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垌夫 | accepted |
| bio.summary | 王垌夫，宋人物。籍贯漢州，入仕進士。（中国历代人物传记资料库 CBDB 534893） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垌夫（CBDB 534893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534893&o=json)
