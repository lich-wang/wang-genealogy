---
schema: wang-person/v1
id: p_TRQjGhd3sDCij8DXauZSkt
status: active
merged_into: null
display_name: 王大才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cfmTQqyiEpCzjBaJ9aVnjr
        subject_person_id: p_TRQjGhd3sDCij8DXauZSkt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CgXCoBF9qJiRFMNvtbpC1A
          claim_id: c_cfmTQqyiEpCzjBaJ9aVnjr
          source_id: s_DRTiU9fwpkeCgbGUTuhxJZ
          stance: supports
          locator: CBDB:97848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97848）
          source: &a1
            id: s_DRTiU9fwpkeCgbGUTuhxJZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大才（CBDB 97848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97848&o=json
            external_identifier: CBDB:97848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VdP3XoQ3n1ZEw32N17akJR
        subject_person_id: p_TRQjGhd3sDCij8DXauZSkt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大才，宋人物。曾任武功大夫。（中国历代人物传记资料库 CBDB 97848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_phsPFUrnyWhpup_G7kE4g9
          claim_id: c_VdP3XoQ3n1ZEw32N17akJR
          source_id: s_DRTiU9fwpkeCgbGUTuhxJZ
          stance: supports
          locator: CBDB:97848
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

# 王大才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大才 | accepted |
| bio.summary | 王大才，宋人物。曾任武功大夫。（中国历代人物传记资料库 CBDB 97848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大才（CBDB 97848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97848&o=json)
