---
schema: wang-person/v1
id: p_L3H9FzvCMxrVzF3v6CDfJv
status: active
merged_into: null
display_name: 王九峯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FYe2KRD5FCx2ytKS6Bt8dJ
        subject_person_id: p_L3H9FzvCMxrVzF3v6CDfJv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九峯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HC8WMPGeutqCA2HPA4oudG
          claim_id: c_FYe2KRD5FCx2ytKS6Bt8dJ
          source_id: s_89BqqrWJgNSwXFQvexiHpF
          stance: supports
          locator: CBDB:126441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126441）
          source: &a1
            id: s_89BqqrWJgNSwXFQvexiHpF
            source_type: api_record
            title: 中国历代人物传记资料库：王九峯（CBDB 126441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126441&o=json
            external_identifier: CBDB:126441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xE4PJXq9b6FG1L9teZeLzQ
        subject_person_id: p_L3H9FzvCMxrVzF3v6CDfJv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1479年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UqyyTmEfkJHTXcRJbF5wpQ
          claim_id: c_xE4PJXq9b6FG1L9teZeLzQ
          source_id: s_89BqqrWJgNSwXFQvexiHpF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ntSffjhB4syUxCP6yNoCp8
        subject_person_id: p_L3H9FzvCMxrVzF3v6CDfJv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XsNBP3w5NNTZAv7SoXc1vi
          claim_id: c_ntSffjhB4syUxCP6yNoCp8
          source_id: s_89BqqrWJgNSwXFQvexiHpF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HWbQ8Peh6fwajUFPWcgLcP
        subject_person_id: p_L3H9FzvCMxrVzF3v6CDfJv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九峯（1479年—1526年），明人物。曾任知府。（中国历代人物传记资料库 CBDB 126441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1MwkZjzbd4OG3dMKRVMhKX
          claim_id: c_HWbQ8Peh6fwajUFPWcgLcP
          source_id: s_89BqqrWJgNSwXFQvexiHpF
          stance: supports
          locator: CBDB:126441
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

# 王九峯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九峯 | accepted |
| birth.date | 1479年 | accepted |
| death.date | 1526年 | accepted |
| bio.summary | 王九峯（1479年—1526年），明人物。曾任知府。（中国历代人物传记资料库 CBDB 126441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九峯（CBDB 126441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126441&o=json)
