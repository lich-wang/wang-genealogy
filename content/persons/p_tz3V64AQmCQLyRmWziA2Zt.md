---
schema: wang-person/v1
id: p_tz3V64AQmCQLyRmWziA2Zt
status: active
merged_into: null
display_name: 王日新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G4wmLx3RAXgcsCe3MAciNk
        subject_person_id: p_tz3V64AQmCQLyRmWziA2Zt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jMB8pr1gHS4k5cywEyCRME
          claim_id: c_G4wmLx3RAXgcsCe3MAciNk
          source_id: s_Z6HEXcP3EgM6fJDsBMrPxU
          stance: supports
          locator: CBDB:485169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485169）
          source: &a1
            id: s_Z6HEXcP3EgM6fJDsBMrPxU
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 485169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485169&o=json
            external_identifier: CBDB:485169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B67tT2PpWPtCQ1WFsiyAuz
        subject_person_id: p_tz3V64AQmCQLyRmWziA2Zt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新，宋人物。入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 485169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1CILdd_qfOXw7dXMbJT4hR
          claim_id: c_B67tT2PpWPtCQ1WFsiyAuz
          source_id: s_Z6HEXcP3EgM6fJDsBMrPxU
          stance: supports
          locator: CBDB:485169
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

# 王日新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日新 | accepted |
| bio.summary | 王日新，宋人物。入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 485169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日新（CBDB 485169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485169&o=json)
