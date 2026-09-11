---
schema: wang-person/v1
id: p_HARqLGN7p6GNTL7NUgnF93
status: active
merged_into: null
display_name: 王國選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rhGJwL2exvavLN6cHCgH7o
        subject_person_id: p_HARqLGN7p6GNTL7NUgnF93
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6aBvWNrzkUyaFCG1xbSw8M
          claim_id: c_rhGJwL2exvavLN6cHCgH7o
          source_id: s_oXorf7KEdaPDkDRWRNFZ1g
          stance: supports
          locator: CBDB:636674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636674）
          source: &a1
            id: s_oXorf7KEdaPDkDRWRNFZ1g
            source_type: api_record
            title: 中国历代人物传记资料库：王國選（CBDB 636674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636674&o=json
            external_identifier: CBDB:636674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZoQ3Qa3q6Dv8Txxwm3rvE
        subject_person_id: p_HARqLGN7p6GNTL7NUgnF93
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國選，清人物。籍贯臨安，入仕鄉貢舉人，曾任教授。（中国历代人物传记资料库 CBDB 636674）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u0Vlj1cU-odXIy2NJFioEH
          claim_id: c_EZoQ3Qa3q6Dv8Txxwm3rvE
          source_id: s_oXorf7KEdaPDkDRWRNFZ1g
          stance: supports
          locator: CBDB:636674
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

# 王國選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國選 | accepted |
| bio.summary | 王國選，清人物。籍贯臨安，入仕鄉貢舉人，曾任教授。（中国历代人物传记资料库 CBDB 636674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國選（CBDB 636674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636674&o=json)
