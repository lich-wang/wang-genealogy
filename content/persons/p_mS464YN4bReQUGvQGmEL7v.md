---
schema: wang-person/v1
id: p_mS464YN4bReQUGvQGmEL7v
status: active
merged_into: null
display_name: 王眞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FFdAmw78krcd7KEBGrnCVJ
        subject_person_id: p_mS464YN4bReQUGvQGmEL7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王眞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5c1EL6g2jdKT66dfj2FHfn
          claim_id: c_FFdAmw78krcd7KEBGrnCVJ
          source_id: s_YGHrsddHLw1A3Pf99AUtbX
          stance: supports
          locator: CBDB:459506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459506）
          source: &a1
            id: s_YGHrsddHLw1A3Pf99AUtbX
            source_type: api_record
            title: 中国历代人物传记资料库：王眞（CBDB 459506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459506&o=json
            external_identifier: CBDB:459506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kFqLm9KEmUS695QXKzFX74
        subject_person_id: p_mS464YN4bReQUGvQGmEL7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王眞，明人物。曾任百戶、正千戶、知縣。（中国历代人物传记资料库 CBDB 459506）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pNapMIHLs1T9FqzKqylKYy
          claim_id: c_kFqLm9KEmUS695QXKzFX74
          source_id: s_YGHrsddHLw1A3Pf99AUtbX
          stance: supports
          locator: CBDB:459506
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

# 王眞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王眞 | accepted |
| bio.summary | 王眞，明人物。曾任百戶、正千戶、知縣。（中国历代人物传记资料库 CBDB 459506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王眞（CBDB 459506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459506&o=json)
