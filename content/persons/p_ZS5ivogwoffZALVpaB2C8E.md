---
schema: wang-person/v1
id: p_ZS5ivogwoffZALVpaB2C8E
status: active
merged_into: null
display_name: 王元顗
cbdb_id: 25795
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pesxhfG6HqvXv6Ho6VhNzg
        subject_person_id: p_ZS5ivogwoffZALVpaB2C8E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元顗，隋人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25795）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8TjUTvj6aW77qlZtRncUXu
          claim_id: c_pesxhfG6HqvXv6Ho6VhNzg
          source_id: s_Xn1FM96wTYHvpmHhjQowAz
          stance: supports
          locator: CBDB:25795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Xn1FM96wTYHvpmHhjQowAz
            source_type: api_record
            title: 中国历代人物传记资料库：王元顗（CBDB 25795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25795&o=json
            external_identifier: CBDB:25795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WNiuRsxkSDkbpY9542hPu7
        subject_person_id: p_ZS5ivogwoffZALVpaB2C8E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元顗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fnJhHkAhovrUiFwCmBynK9
          claim_id: c_WNiuRsxkSDkbpY9542hPu7
          source_id: s_Xn1FM96wTYHvpmHhjQowAz
          stance: supports
          locator: CBDB:25795
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 隋
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

# 王元顗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元顗，隋人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25795） | accepted |
| name.primary | 王元顗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元顗（CBDB 25795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25795&o=json)
