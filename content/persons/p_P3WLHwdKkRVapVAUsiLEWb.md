---
schema: wang-person/v1
id: p_P3WLHwdKkRVapVAUsiLEWb
status: active
merged_into: null
display_name: 王會英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SHfARJceFNPRofrsBjv8Q3
        subject_person_id: p_P3WLHwdKkRVapVAUsiLEWb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pc3qRt3NQseCrCKDezpcpK
          claim_id: c_SHfARJceFNPRofrsBjv8Q3
          source_id: s_TeSVAhqGYGSxHCMRvRgoD6
          stance: supports
          locator: CBDB:71591
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71591）
          source: &a1
            id: s_TeSVAhqGYGSxHCMRvRgoD6
            source_type: api_record
            title: 中国历代人物传记资料库：王會英（CBDB 71591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71591&o=json
            external_identifier: CBDB:71591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6NxuaKnAaTjjASpd34dwTf
        subject_person_id: p_P3WLHwdKkRVapVAUsiLEWb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1831年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iinzuhT2152C76tCvDbPCM
          claim_id: c_6NxuaKnAaTjjASpd34dwTf
          source_id: s_TeSVAhqGYGSxHCMRvRgoD6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HP2GEoXFdUAeRBBLicmwBm
        subject_person_id: p_P3WLHwdKkRVapVAUsiLEWb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會英（生于1831年），清人物。籍贯利津。（中国历代人物传记资料库 CBDB 71591）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b_FTUmv26YNf93r5zj4t95
          claim_id: c_HP2GEoXFdUAeRBBLicmwBm
          source_id: s_TeSVAhqGYGSxHCMRvRgoD6
          stance: supports
          locator: CBDB:71591
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

# 王會英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會英 | accepted |
| birth.date | 1831年 | accepted |
| bio.summary | 王會英（生于1831年），清人物。籍贯利津。（中国历代人物传记资料库 CBDB 71591） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會英（CBDB 71591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71591&o=json)
