---
schema: wang-person/v1
id: p_vwUe1TDLNEeB4D1MjVR25k
status: active
merged_into: null
display_name: 王六典
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qw9gyKn32WcCGsaN4CwiFX
        subject_person_id: p_vwUe1TDLNEeB4D1MjVR25k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s8U2Fy9xw5hfZY8ADmu6VB
          claim_id: c_Qw9gyKn32WcCGsaN4CwiFX
          source_id: s_Y3MMr3bBgrgCW3AxjEFzAM
          stance: supports
          locator: CBDB:636322
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636322）
          source: &a1
            id: s_Y3MMr3bBgrgCW3AxjEFzAM
            source_type: api_record
            title: 中国历代人物传记资料库：王六典（CBDB 636322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636322&o=json
            external_identifier: CBDB:636322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x41bxv3XCjF8jC9K4Cj6sD
        subject_person_id: p_vwUe1TDLNEeB4D1MjVR25k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六典，清人物。籍贯開封府，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 636322）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EEjnHhKcJNVLps77M0lRPf
          claim_id: c_x41bxv3XCjF8jC9K4Cj6sD
          source_id: s_Y3MMr3bBgrgCW3AxjEFzAM
          stance: supports
          locator: CBDB:636322
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

# 王六典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王六典 | accepted |
| bio.summary | 王六典，清人物。籍贯開封府，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 636322） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王六典（CBDB 636322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636322&o=json)
