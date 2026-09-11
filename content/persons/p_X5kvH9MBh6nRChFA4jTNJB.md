---
schema: wang-person/v1
id: p_X5kvH9MBh6nRChFA4jTNJB
status: active
merged_into: null
display_name: 王紹偁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yuu6Z2hNUXXVe8ArYJDhCA
        subject_person_id: p_X5kvH9MBh6nRChFA4jTNJB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹偁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SLiG36cFbZC5M7VNtY5uvu
          claim_id: c_yuu6Z2hNUXXVe8ArYJDhCA
          source_id: s_mwtRudjALwwCuhFaY5SawA
          stance: supports
          locator: CBDB:639751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639751）
          source: &a1
            id: s_mwtRudjALwwCuhFaY5SawA
            source_type: api_record
            title: 中国历代人物传记资料库：王紹偁（CBDB 639751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639751&o=json
            external_identifier: CBDB:639751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Gnpk7Do9jgPN4ASLBurNd
        subject_person_id: p_X5kvH9MBh6nRChFA4jTNJB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹偁，清人物。籍贯大興，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639751）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XFlJQ2pjFvGL08A7mBKPYi
          claim_id: c_1Gnpk7Do9jgPN4ASLBurNd
          source_id: s_mwtRudjALwwCuhFaY5SawA
          stance: supports
          locator: CBDB:639751
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

# 王紹偁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹偁 | accepted |
| bio.summary | 王紹偁，清人物。籍贯大興，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639751） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹偁（CBDB 639751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639751&o=json)
