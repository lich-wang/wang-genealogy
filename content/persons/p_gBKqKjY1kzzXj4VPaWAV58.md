---
schema: wang-person/v1
id: p_gBKqKjY1kzzXj4VPaWAV58
status: active
merged_into: null
display_name: 王國相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ggKpYfkUX2i8LQsVixd8fJ
        subject_person_id: p_gBKqKjY1kzzXj4VPaWAV58
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_33QFoocVTtgfPX8F1NLTbM
          claim_id: c_ggKpYfkUX2i8LQsVixd8fJ
          source_id: s_MdYdNY6MrNiNdyD8EsteAF
          stance: supports
          locator: CBDB:698864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698864）
          source: &a1
            id: s_MdYdNY6MrNiNdyD8EsteAF
            source_type: api_record
            title: 中国历代人物传记资料库：王國相（CBDB 698864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698864&o=json
            external_identifier: CBDB:698864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P4hNm12ZvLBAf5MmEa1Usp
        subject_person_id: p_gBKqKjY1kzzXj4VPaWAV58
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國相，明人物。籍贯武進，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698864）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aPpYrvU5Zn4lkpo-C-0U4J
          claim_id: c_P4hNm12ZvLBAf5MmEa1Usp
          source_id: s_MdYdNY6MrNiNdyD8EsteAF
          stance: supports
          locator: CBDB:698864
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

# 王國相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國相 | accepted |
| bio.summary | 王國相，明人物。籍贯武進，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 698864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國相（CBDB 698864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698864&o=json)
