---
schema: wang-person/v1
id: p_5et8kTWsJn7PFJk92c2Fju
status: active
merged_into: null
display_name: 王言惠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d8V6w63WGt87E8EwRtqBPB
        subject_person_id: p_5et8kTWsJn7PFJk92c2Fju
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qWN6Yi1z8B96H1LtnUFt3Q
          claim_id: c_d8V6w63WGt87E8EwRtqBPB
          source_id: s_HY5tHpz4JBgovN9TeTJE2k
          stance: supports
          locator: CBDB:489656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489656）
          source: &a1
            id: s_HY5tHpz4JBgovN9TeTJE2k
            source_type: api_record
            title: 中国历代人物传记资料库：王言惠（CBDB 489656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489656&o=json
            external_identifier: CBDB:489656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dr42DnK9iuKYSctGPmtqAB
        subject_person_id: p_5et8kTWsJn7PFJk92c2Fju
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言惠，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 489656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5xWA63WGfhR0jWKU6HUo9j
          claim_id: c_Dr42DnK9iuKYSctGPmtqAB
          source_id: s_HY5tHpz4JBgovN9TeTJE2k
          stance: supports
          locator: CBDB:489656
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

# 王言惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言惠 | accepted |
| bio.summary | 王言惠，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 489656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言惠（CBDB 489656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489656&o=json)
