---
schema: wang-person/v1
id: p_NzG5XUCAkW7dBCrq4ZUG2U
status: active
merged_into: null
display_name: 王宗蔭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AZMcEzQYqGrNNbmH2BLzSN
        subject_person_id: p_NzG5XUCAkW7dBCrq4ZUG2U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sv6tBd2uQHEPUGt3XNwqag
          claim_id: c_AZMcEzQYqGrNNbmH2BLzSN
          source_id: s_RwtCevimuDL3xbRKdnoM9Q
          stance: supports
          locator: CBDB:311239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311239）
          source: &a1
            id: s_RwtCevimuDL3xbRKdnoM9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蔭（CBDB 311239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311239&o=json
            external_identifier: CBDB:311239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q8eXwXaSQpozQBxmreJTJD
        subject_person_id: p_NzG5XUCAkW7dBCrq4ZUG2U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蔭，明人物。嘉靖二十六年進士，籍贯京山。（中国历代人物传记资料库 CBDB 311239）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U3qRMS2Kx3oBxzwibdZikM
          claim_id: c_Q8eXwXaSQpozQBxmreJTJD
          source_id: s_RwtCevimuDL3xbRKdnoM9Q
          stance: supports
          locator: CBDB:311239
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

# 王宗蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗蔭 | accepted |
| bio.summary | 王宗蔭，明人物。嘉靖二十六年進士，籍贯京山。（中国历代人物传记资料库 CBDB 311239） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗蔭（CBDB 311239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311239&o=json)
