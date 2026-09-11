---
schema: wang-person/v1
id: p_6FQbt5WFr9SvncDbMvkSFg
status: active
merged_into: null
display_name: 王秉一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wNxxQCGV8zUVHnZgph1ThH
        subject_person_id: p_6FQbt5WFr9SvncDbMvkSFg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3dVkD2DveE5kieo2EAwdc7
          claim_id: c_wNxxQCGV8zUVHnZgph1ThH
          source_id: s_F5vNq6N4G6Ks1QYDsuneER
          stance: supports
          locator: CBDB:639637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639637）
          source: &a1
            id: s_F5vNq6N4G6Ks1QYDsuneER
            source_type: api_record
            title: 中国历代人物传记资料库：王秉一（CBDB 639637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639637&o=json
            external_identifier: CBDB:639637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SKjMP9q8HsYsLQQC8Y6HwT
        subject_person_id: p_6FQbt5WFr9SvncDbMvkSFg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王秉一，清人物。籍贯興義，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 639637）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_II2Uaw35zPdfVHKGCzPH-V
          claim_id: c_SKjMP9q8HsYsLQQC8Y6HwT
          source_id: s_F5vNq6N4G6Ks1QYDsuneER
          stance: supports
          locator: CBDB:639637
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

# 王秉一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉一 | accepted |
| bio.summary | 王秉一，清人物。籍贯興義，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 639637） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉一（CBDB 639637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639637&o=json)
