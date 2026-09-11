---
schema: wang-person/v1
id: p_w6PbVqG7YELePrhgmop5eH
status: active
merged_into: null
display_name: 王守正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5KYY8xSQQCB2u1n2uZqZqi
        subject_person_id: p_w6PbVqG7YELePrhgmop5eH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DKabbpM73S39WnuMjL5Fvi
          claim_id: c_5KYY8xSQQCB2u1n2uZqZqi
          source_id: s_A9r3u72Ep5QZTV5pPprx6X
          stance: supports
          locator: CBDB:489262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489262）
          source: &a1
            id: s_A9r3u72Ep5QZTV5pPprx6X
            source_type: api_record
            title: 中国历代人物传记资料库：王守正（CBDB 489262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489262&o=json
            external_identifier: CBDB:489262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TbiTkenTeNusDeJRfz9M7h
        subject_person_id: p_w6PbVqG7YELePrhgmop5eH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 489262）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PZNCoaQTpRoeiGMJHEPp90
          claim_id: c_TbiTkenTeNusDeJRfz9M7h
          source_id: s_A9r3u72Ep5QZTV5pPprx6X
          stance: supports
          locator: CBDB:489262
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

# 王守正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守正 | accepted |
| bio.summary | 王守正，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 489262） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守正（CBDB 489262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489262&o=json)
