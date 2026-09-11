---
schema: wang-person/v1
id: p_ZA7hGVUCSmBNVD3SjZBUbk
status: active
merged_into: null
display_name: 王耿如
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xMGTwh8ps1SGUiE4Zh1J1r
        subject_person_id: p_ZA7hGVUCSmBNVD3SjZBUbk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耿如
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPLKq7sMTgD1f4w5GsHRsr
          claim_id: c_xMGTwh8ps1SGUiE4Zh1J1r
          source_id: s_xS1XDJmbyG7RW1J52hCiVP
          stance: supports
          locator: CBDB:639936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639936）
          source: &a1
            id: s_xS1XDJmbyG7RW1J52hCiVP
            source_type: api_record
            title: 中国历代人物传记资料库：王耿如（CBDB 639936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639936&o=json
            external_identifier: CBDB:639936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JK8AZ1dH96dFkbRjiLPwz9
        subject_person_id: p_ZA7hGVUCSmBNVD3SjZBUbk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王耿如，清人物。籍贯登州府，入仕貢生: 副貢，曾任訓導。（中国历代人物传记资料库 CBDB 639936）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hKKSs70BabaD8UCgNCAKmr
          claim_id: c_JK8AZ1dH96dFkbRjiLPwz9
          source_id: s_xS1XDJmbyG7RW1J52hCiVP
          stance: supports
          locator: CBDB:639936
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

# 王耿如

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耿如 | accepted |
| bio.summary | 王耿如，清人物。籍贯登州府，入仕貢生: 副貢，曾任訓導。（中国历代人物传记资料库 CBDB 639936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耿如（CBDB 639936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639936&o=json)
