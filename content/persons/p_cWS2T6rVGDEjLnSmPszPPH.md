---
schema: wang-person/v1
id: p_cWS2T6rVGDEjLnSmPszPPH
status: active
merged_into: null
display_name: 王一泰
cbdb_id: 413674
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NBeqP25qReyb8HyAtE27ed
        subject_person_id: p_cWS2T6rVGDEjLnSmPszPPH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一泰，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 413674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IBsaijRwmyhAqX4RXXHGnt
          claim_id: c_NBeqP25qReyb8HyAtE27ed
          source_id: s_XcQBmVE9NZSGfKVTkLMZJf
          stance: supports
          locator: CBDB:413674
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XcQBmVE9NZSGfKVTkLMZJf
            source_type: api_record
            title: 中国历代人物传记资料库：王一泰（CBDB 413674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413674&o=json
            external_identifier: CBDB:413674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NgNyaH9Dsf2ctQEfWz1fH1
        subject_person_id: p_cWS2T6rVGDEjLnSmPszPPH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qz1aWJW2k3msn7s6rxjp4T
          claim_id: c_NgNyaH9Dsf2ctQEfWz1fH1
          source_id: s_XcQBmVE9NZSGfKVTkLMZJf
          stance: supports
          locator: CBDB:413674
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 明
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

# 王一泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一泰，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 413674） | accepted |
| name.primary | 王一泰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一泰（CBDB 413674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413674&o=json)
