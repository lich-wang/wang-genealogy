---
schema: wang-person/v1
id: p_kWCAH39pAzT9drAMHyGYDB
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XkCUCAGa64v2kMnx5sTVZ9
        subject_person_id: p_kWCAH39pAzT9drAMHyGYDB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h4WJVjK5mgCzqHptCDF9Zx
          claim_id: c_XkCUCAGa64v2kMnx5sTVZ9
          source_id: s_oLQ79DrcdPdCtXn4cYeYwk
          stance: supports
          locator: CBDB:490565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490565）
          source: &a1
            id: s_oLQ79DrcdPdCtXn4cYeYwk
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 490565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490565&o=json
            external_identifier: CBDB:490565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1xkhRcYEK7r3h2ozjBia3
        subject_person_id: p_kWCAH39pAzT9drAMHyGYDB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道，明人物。入仕監生，曾任吏目。（中国历代人物传记资料库 CBDB 490565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hn9CrwtUJJPtMq9Um2YBlv
          claim_id: c_q1xkhRcYEK7r3h2ozjBia3
          source_id: s_oLQ79DrcdPdCtXn4cYeYwk
          stance: supports
          locator: CBDB:490565
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

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | 王道，明人物。入仕監生，曾任吏目。（中国历代人物传记资料库 CBDB 490565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 490565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490565&o=json)
