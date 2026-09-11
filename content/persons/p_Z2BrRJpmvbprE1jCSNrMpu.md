---
schema: wang-person/v1
id: p_Z2BrRJpmvbprE1jCSNrMpu
status: active
merged_into: null
display_name: 王札
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oLvKw3QWipaP64d948J4vy
        subject_person_id: p_Z2BrRJpmvbprE1jCSNrMpu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王札
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RP1YV641AngGX7sBAR62MR
          claim_id: c_oLvKw3QWipaP64d948J4vy
          source_id: s_v9vFiy1v2fijQGJtwzo4QX
          stance: supports
          locator: CBDB:506032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506032）
          source: &a1
            id: s_v9vFiy1v2fijQGJtwzo4QX
            source_type: api_record
            title: 中国历代人物传记资料库：王札（CBDB 506032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506032&o=json
            external_identifier: CBDB:506032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BqNCWvo9mAHe4NYN6KCTUm
        subject_person_id: p_Z2BrRJpmvbprE1jCSNrMpu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王札，明人物。入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 506032）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L-jOgSyxDDxoS-B7N42HB6
          claim_id: c_BqNCWvo9mAHe4NYN6KCTUm
          source_id: s_v9vFiy1v2fijQGJtwzo4QX
          stance: supports
          locator: CBDB:506032
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

# 王札

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王札 | accepted |
| bio.summary | 王札，明人物。入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 506032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王札（CBDB 506032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506032&o=json)
