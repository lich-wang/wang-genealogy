---
schema: wang-person/v1
id: p_Mw3eUDKfnvakUBhkJMLF33
status: active
merged_into: null
display_name: 王成已
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8HVzYGz26C2ProNXM1DQ5D
        subject_person_id: p_Mw3eUDKfnvakUBhkJMLF33
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成已
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K3EiRdSp2cJbP55HY7yxun
          claim_id: c_8HVzYGz26C2ProNXM1DQ5D
          source_id: s_GDgMM9hFBto1nAHUDf2Ggf
          stance: supports
          locator: CBDB:456574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456574）
          source: &a1
            id: s_GDgMM9hFBto1nAHUDf2Ggf
            source_type: api_record
            title: 中国历代人物传记资料库：王成已（CBDB 456574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456574&o=json
            external_identifier: CBDB:456574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9nnd9uxcCSu18MGkuMnFjF
        subject_person_id: p_Mw3eUDKfnvakUBhkJMLF33
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成已，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 456574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QNEJGS8gpsO_8mChp-RMAf
          claim_id: c_9nnd9uxcCSu18MGkuMnFjF
          source_id: s_GDgMM9hFBto1nAHUDf2Ggf
          stance: supports
          locator: CBDB:456574
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

# 王成已

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成已 | accepted |
| bio.summary | 王成已，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 456574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成已（CBDB 456574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456574&o=json)
