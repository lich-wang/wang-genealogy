---
schema: wang-person/v1
id: p_Qeav4GLvbK5gz38hx7pdce
status: active
merged_into: null
display_name: 王好學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UnWFTRNBZHPS3Cvohk7Wgm
        subject_person_id: p_Qeav4GLvbK5gz38hx7pdce
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oJxBcWH3Y1uMdwVo6sCaoL
          claim_id: c_UnWFTRNBZHPS3Cvohk7Wgm
          source_id: s_6quqGFuEuCgXPsgq288xvn
          stance: supports
          locator: CBDB:306924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306924）
          source: &a1
            id: s_6quqGFuEuCgXPsgq288xvn
            source_type: api_record
            title: 中国历代人物传记资料库：王好學（CBDB 306924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306924&o=json
            external_identifier: CBDB:306924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RhwS6fxK329UPEWqWcgUv9
        subject_person_id: p_Qeav4GLvbK5gz38hx7pdce
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好學，明人物。嘉靖二十三年進士，籍贯陽朔。（中国历代人物传记资料库 CBDB 306924）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PmDhfOiFU9JSpd6Y6nCYyG
          claim_id: c_RhwS6fxK329UPEWqWcgUv9
          source_id: s_6quqGFuEuCgXPsgq288xvn
          stance: supports
          locator: CBDB:306924
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

# 王好學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好學 | accepted |
| bio.summary | 王好學，明人物。嘉靖二十三年進士，籍贯陽朔。（中国历代人物传记资料库 CBDB 306924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王好學（CBDB 306924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306924&o=json)
