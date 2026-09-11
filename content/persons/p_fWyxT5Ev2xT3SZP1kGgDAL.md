---
schema: wang-person/v1
id: p_fWyxT5Ev2xT3SZP1kGgDAL
status: active
merged_into: null
display_name: 王可大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QYQz5gwJvEdcAiY2WnuUt9
        subject_person_id: p_fWyxT5Ev2xT3SZP1kGgDAL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Eo1Hpwz6YydU9yG3j22mow
          claim_id: c_QYQz5gwJvEdcAiY2WnuUt9
          source_id: s_bucR4uz9vnS6Sf1fpUJjB4
          stance: supports
          locator: CBDB:38379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38379）
          source: &a1
            id: s_bucR4uz9vnS6Sf1fpUJjB4
            source_type: api_record
            title: 中国历代人物传记资料库：王可大（CBDB 38379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38379&o=json
            external_identifier: CBDB:38379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yh6zVGBPuEYcfXH2jQ9BeK
        subject_person_id: p_fWyxT5Ev2xT3SZP1kGgDAL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可大，宋人物。籍贯平江府，身份为良吏;循吏。（中国历代人物传记资料库 CBDB 38379）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oSbKzaZ-JSTaP9ZHvH2Ykc
          claim_id: c_Yh6zVGBPuEYcfXH2jQ9BeK
          source_id: s_bucR4uz9vnS6Sf1fpUJjB4
          stance: supports
          locator: CBDB:38379
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

# 王可大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可大 | accepted |
| bio.summary | 王可大，宋人物。籍贯平江府，身份为良吏;循吏。（中国历代人物传记资料库 CBDB 38379） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可大（CBDB 38379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38379&o=json)
