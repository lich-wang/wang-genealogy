---
schema: wang-person/v1
id: p_SKxFrmKSNfgBaWNy9hoxQU
status: active
merged_into: null
display_name: 王淳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_guR7eSJL9fAB1AVLjaVPDz
        subject_person_id: p_SKxFrmKSNfgBaWNy9hoxQU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gy1NNUsRMtUVG7BiyqY9BX
          claim_id: c_guR7eSJL9fAB1AVLjaVPDz
          source_id: s_PV8ZA2NwNaXWMtASWMxYWP
          stance: supports
          locator: CBDB:466613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466613）
          source: &a1
            id: s_PV8ZA2NwNaXWMtASWMxYWP
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 466613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466613&o=json
            external_identifier: CBDB:466613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZVksViQi9h3X5SxZPZNZtx
        subject_person_id: p_SKxFrmKSNfgBaWNy9hoxQU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王淳，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 466613）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kf5OmzwR738-HnElfFI3Cs
          claim_id: c_ZVksViQi9h3X5SxZPZNZtx
          source_id: s_PV8ZA2NwNaXWMtASWMxYWP
          stance: supports
          locator: CBDB:466613
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

# 王淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淳 | accepted |
| bio.summary | 王淳，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 466613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淳（CBDB 466613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466613&o=json)
