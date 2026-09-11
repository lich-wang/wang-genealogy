---
schema: wang-person/v1
id: p_9QYXhWcbNqP9LqwsnDuLjg
status: active
merged_into: null
display_name: 王勉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NFDo2oE4ccyZYx4H9rGDe1
        subject_person_id: p_9QYXhWcbNqP9LqwsnDuLjg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5E68XH95ctFKZiaMJ1JQV5
          claim_id: c_NFDo2oE4ccyZYx4H9rGDe1
          source_id: s_9SdrFzL1r3UJsRim7JJaWt
          stance: supports
          locator: CBDB:477391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477391）
          source: &a1
            id: s_9SdrFzL1r3UJsRim7JJaWt
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 477391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477391&o=json
            external_identifier: CBDB:477391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dyqiDeHxJaX3q6yyZ2dmbk
        subject_person_id: p_9QYXhWcbNqP9LqwsnDuLjg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 477391）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J7JaMWcrMJyRpOIWYg__h4
          claim_id: c_dyqiDeHxJaX3q6yyZ2dmbk
          source_id: s_9SdrFzL1r3UJsRim7JJaWt
          stance: supports
          locator: CBDB:477391
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

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| bio.summary | 王勉，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 477391） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勉（CBDB 477391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477391&o=json)
