---
schema: wang-person/v1
id: p_S9Xtc5wmS6d9BBT6zEDEEn
status: active
merged_into: null
display_name: 王祁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HrFKZmNG4aq4PeFMmxKhuu
        subject_person_id: p_S9Xtc5wmS6d9BBT6zEDEEn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mTpB9Gy9n4EZ9qf9SbtBiY
          claim_id: c_HrFKZmNG4aq4PeFMmxKhuu
          source_id: s_wuT2Hn7dAQrSSUzGa1Z7mm
          stance: supports
          locator: CBDB:100704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100704）
          source: &a1
            id: s_wuT2Hn7dAQrSSUzGa1Z7mm
            source_type: api_record
            title: 中国历代人物传记资料库：王祁（CBDB 100704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100704&o=json
            external_identifier: CBDB:100704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1B3MKHNp4euVC1JmXCPAzV
        subject_person_id: p_S9Xtc5wmS6d9BBT6zEDEEn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁，元人物。籍贯槁城，身份为鄉先生。（中国历代人物传记资料库 CBDB 100704）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eFZP4PbY3w0F_X6PkQuO-v
          claim_id: c_1B3MKHNp4euVC1JmXCPAzV
          source_id: s_wuT2Hn7dAQrSSUzGa1Z7mm
          stance: supports
          locator: CBDB:100704
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

# 王祁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祁 | accepted |
| bio.summary | 王祁，元人物。籍贯槁城，身份为鄉先生。（中国历代人物传记资料库 CBDB 100704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祁（CBDB 100704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100704&o=json)
