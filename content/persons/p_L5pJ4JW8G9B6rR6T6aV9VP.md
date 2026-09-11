---
schema: wang-person/v1
id: p_L5pJ4JW8G9B6rR6T6aV9VP
status: active
merged_into: null
display_name: 王惠吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U9WGbRHu5o754or5cHqn5A
        subject_person_id: p_L5pJ4JW8G9B6rR6T6aV9VP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eduGANgdSVNnmtyraGMEei
          claim_id: c_U9WGbRHu5o754or5cHqn5A
          source_id: s_7T8Wp89ytNm436hzwQWB8H
          stance: supports
          locator: CBDB:343347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343347）
          source: &a1
            id: s_7T8Wp89ytNm436hzwQWB8H
            source_type: api_record
            title: 中国历代人物传记资料库：王惠吉（CBDB 343347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343347&o=json
            external_identifier: CBDB:343347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZDj5QSG8aWVPYxJ2QACLcE
        subject_person_id: p_L5pJ4JW8G9B6rR6T6aV9VP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠吉，清人物。明清進士進士，籍贯定興，入仕進士。（中国历代人物传记资料库 CBDB 343347）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QzfIwpRR6Nl1nsh7V4lLBd
          claim_id: c_ZDj5QSG8aWVPYxJ2QACLcE
          source_id: s_7T8Wp89ytNm436hzwQWB8H
          stance: supports
          locator: CBDB:343347
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

# 王惠吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠吉 | accepted |
| bio.summary | 王惠吉，清人物。明清進士進士，籍贯定興，入仕進士。（中国历代人物传记资料库 CBDB 343347） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惠吉（CBDB 343347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343347&o=json)
