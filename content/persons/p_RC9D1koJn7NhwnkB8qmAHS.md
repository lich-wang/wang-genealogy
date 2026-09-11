---
schema: wang-person/v1
id: p_RC9D1koJn7NhwnkB8qmAHS
status: active
merged_into: null
display_name: 王士偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4kGBPTk1YNXtr1JAen1wSH
        subject_person_id: p_RC9D1koJn7NhwnkB8qmAHS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qEU9CjZPipbGcRftCteAq3
          claim_id: c_4kGBPTk1YNXtr1JAen1wSH
          source_id: s_zEDSJxP3Mob59HNkFUEVDj
          stance: supports
          locator: CBDB:101032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101032）
          source: &a1
            id: s_zEDSJxP3Mob59HNkFUEVDj
            source_type: api_record
            title: 中国历代人物传记资料库：王士偉（CBDB 101032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101032&o=json
            external_identifier: CBDB:101032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vAB8S2vPkaJrg5p85nL2zt
        subject_person_id: p_RC9D1koJn7NhwnkB8qmAHS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1314年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CHoa3nMHDyLAKvPCv4pC3a
          claim_id: c_vAB8S2vPkaJrg5p85nL2zt
          source_id: s_zEDSJxP3Mob59HNkFUEVDj
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
        id: c_wNUAs4LDmo6A76H5PMGKDn
        subject_person_id: p_RC9D1koJn7NhwnkB8qmAHS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1375年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CaFgDKyvr55mdCgr9EC9tA
          claim_id: c_wNUAs4LDmo6A76H5PMGKDn
          source_id: s_zEDSJxP3Mob59HNkFUEVDj
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
        id: c_531raMtonF2BD5VB7YnSLb
        subject_person_id: p_RC9D1koJn7NhwnkB8qmAHS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士偉（1314年—1375年），明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 101032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QRpYzJYneiriP2kLl68BX_
          claim_id: c_531raMtonF2BD5VB7YnSLb
          source_id: s_zEDSJxP3Mob59HNkFUEVDj
          stance: supports
          locator: CBDB:101032
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

# 王士偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士偉 | accepted |
| birth.date | 1314年 | accepted |
| death.date | 1375年 | accepted |
| bio.summary | 王士偉（1314年—1375年），明人物。籍贯浦江。（中国历代人物传记资料库 CBDB 101032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士偉（CBDB 101032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101032&o=json)
