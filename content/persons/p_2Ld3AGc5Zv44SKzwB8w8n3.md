---
schema: wang-person/v1
id: p_2Ld3AGc5Zv44SKzwB8w8n3
status: active
merged_into: null
display_name: 王錫元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KF8STiU7HuMVfPVP8TRTMK
        subject_person_id: p_2Ld3AGc5Zv44SKzwB8w8n3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Mam1Qnji2umGvX1nMVrBu
          claim_id: c_KF8STiU7HuMVfPVP8TRTMK
          source_id: s_gNsWGd6Es4LX244dCmP56m
          stance: supports
          locator: CBDB:72115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72115）
          source: &a1
            id: s_gNsWGd6Es4LX244dCmP56m
            source_type: api_record
            title: 中国历代人物传记资料库：王錫元（CBDB 72115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72115&o=json
            external_identifier: CBDB:72115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZnAE79dXL9vCWDhQPUbPNi
        subject_person_id: p_2Ld3AGc5Zv44SKzwB8w8n3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XbsLBHu7RNJVVuphczosKF
          claim_id: c_ZnAE79dXL9vCWDhQPUbPNi
          source_id: s_gNsWGd6Es4LX244dCmP56m
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
        id: c_wFVkg9JCBppJPSBxtEeCKK
        subject_person_id: p_2Ld3AGc5Zv44SKzwB8w8n3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫元（生于1824年），清人物。籍贯盱眙，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 72115）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cgTfvzqNoG0-kBGzmpXiTj
          claim_id: c_wFVkg9JCBppJPSBxtEeCKK
          source_id: s_gNsWGd6Es4LX244dCmP56m
          stance: supports
          locator: CBDB:72115
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

# 王錫元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫元 | accepted |
| birth.date | 1824年 | accepted |
| bio.summary | 王錫元（生于1824年），清人物。籍贯盱眙，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 72115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫元（CBDB 72115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72115&o=json)
