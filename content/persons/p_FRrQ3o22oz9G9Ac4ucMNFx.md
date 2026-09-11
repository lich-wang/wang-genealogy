---
schema: wang-person/v1
id: p_FRrQ3o22oz9G9Ac4ucMNFx
status: active
merged_into: null
display_name: 王啟宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GEriA3djmKPWr98D145nQU
        subject_person_id: p_FRrQ3o22oz9G9Ac4ucMNFx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2QGVYBFHNVDfQzfe8zR7H4
          claim_id: c_GEriA3djmKPWr98D145nQU
          source_id: s_B8oYaoVEKGyL9mTDyEmK9H
          stance: supports
          locator: CBDB:636544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636544）
          source: &a1
            id: s_B8oYaoVEKGyL9mTDyEmK9H
            source_type: api_record
            title: 中国历代人物传记资料库：王啟宗（CBDB 636544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636544&o=json
            external_identifier: CBDB:636544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H4jhbCyL51qPbUSPktzotA
        subject_person_id: p_FRrQ3o22oz9G9Ac4ucMNFx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王啟宗，清人物。籍贯登州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 636544）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z4gpY8TwjF0jJbx6jyaKII
          claim_id: c_H4jhbCyL51qPbUSPktzotA
          source_id: s_B8oYaoVEKGyL9mTDyEmK9H
          stance: supports
          locator: CBDB:636544
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

# 王啟宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟宗 | accepted |
| bio.summary | 王啟宗，清人物。籍贯登州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 636544） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟宗（CBDB 636544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636544&o=json)
