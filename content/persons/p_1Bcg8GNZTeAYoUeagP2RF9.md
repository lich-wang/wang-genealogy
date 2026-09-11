---
schema: wang-person/v1
id: p_1Bcg8GNZTeAYoUeagP2RF9
status: active
merged_into: null
display_name: 王際熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DRD8nE75fUXvU52uP4vFMW
        subject_person_id: p_1Bcg8GNZTeAYoUeagP2RF9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ap9M7ZJ2oE7MNkA221LLoA
          claim_id: c_DRD8nE75fUXvU52uP4vFMW
          source_id: s_cSreZW7DrGTJJeXR22KXpC
          stance: supports
          locator: CBDB:640791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640791）
          source: &a1
            id: s_cSreZW7DrGTJJeXR22KXpC
            source_type: api_record
            title: 中国历代人物传记资料库：王際熙（CBDB 640791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640791&o=json
            external_identifier: CBDB:640791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AA4VJpbEBA8jfrG7HTjTfY
        subject_person_id: p_1Bcg8GNZTeAYoUeagP2RF9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際熙，清人物。籍贯寶坻，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_abS7jzyBal1IQsYd5_Q1cq
          claim_id: c_AA4VJpbEBA8jfrG7HTjTfY
          source_id: s_cSreZW7DrGTJJeXR22KXpC
          stance: supports
          locator: CBDB:640791
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

# 王際熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王際熙 | accepted |
| bio.summary | 王際熙，清人物。籍贯寶坻，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王際熙（CBDB 640791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640791&o=json)
