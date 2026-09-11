---
schema: wang-person/v1
id: p_XCN522Y2rcDXAcvo2YH7zV
status: active
merged_into: null
display_name: 王紹文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MXLGqpd3t9fRE4zLstBMF7
        subject_person_id: p_XCN522Y2rcDXAcvo2YH7zV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GyYWVAM7VfPehSmm3Bc7V3
          claim_id: c_MXLGqpd3t9fRE4zLstBMF7
          source_id: s_RrsCv1FkzHG5dX5mKaEgz1
          stance: supports
          locator: CBDB:487286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（487286）
          source: &a1
            id: s_RrsCv1FkzHG5dX5mKaEgz1
            source_type: api_record
            title: 中国历代人物传记资料库：王紹文（CBDB 487286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487286&o=json
            external_identifier: CBDB:487286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zsnEHr2Uq8foHoLjY2QXdq
        subject_person_id: p_XCN522Y2rcDXAcvo2YH7zV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹文，明人物。曾任知府。（中国历代人物传记资料库 CBDB 487286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JhDn4rS2wSqi7JRLjlkFQJ
          claim_id: c_zsnEHr2Uq8foHoLjY2QXdq
          source_id: s_RrsCv1FkzHG5dX5mKaEgz1
          stance: supports
          locator: CBDB:487286
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

# 王紹文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹文 | accepted |
| bio.summary | 王紹文，明人物。曾任知府。（中国历代人物传记资料库 CBDB 487286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹文（CBDB 487286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487286&o=json)
