---
schema: wang-person/v1
id: p_5oKocA9BUGjHzntSN6XByL
status: active
merged_into: null
display_name: 王汝璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y17bMBd7HV1HUiJsYkMRYQ
        subject_person_id: p_5oKocA9BUGjHzntSN6XByL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qWgjKXz3iP7Fs5yP6KAAWH
          claim_id: c_Y17bMBd7HV1HUiJsYkMRYQ
          source_id: s_53YgwLH5up2tZKoa3wuz1t
          stance: supports
          locator: CBDB:57129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57129）
          source: &a1
            id: s_53YgwLH5up2tZKoa3wuz1t
            source_type: api_record
            title: 中国历代人物传记资料库：王汝璧（CBDB 57129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57129&o=json
            external_identifier: CBDB:57129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QL21gwtFcuew2W5wphmpWD
        subject_person_id: p_5oKocA9BUGjHzntSN6XByL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1746年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P7GH4iX139rb65AwYiEKYC
          claim_id: c_QL21gwtFcuew2W5wphmpWD
          source_id: s_53YgwLH5up2tZKoa3wuz1t
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
        id: c_nM52u7K8UAmQxnY2zwK2fa
        subject_person_id: p_5oKocA9BUGjHzntSN6XByL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MSdCmr4H5u6ExJVCqMQGvv
          claim_id: c_nM52u7K8UAmQxnY2zwK2fa
          source_id: s_53YgwLH5up2tZKoa3wuz1t
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
        id: c_MHENZWxQt7yQySCMPTEgcn
        subject_person_id: p_5oKocA9BUGjHzntSN6XByL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝璧（1746年—1806年），清人物。明清進士進士，籍贯銅梁，入仕進士，曾任管河道、吏部考功司員外郎、吏部文選司郎中。（中国历代人物传记资料库 CBDB 57129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_77mk0vIHOYEXaI4ZAOVn3z
          claim_id: c_MHENZWxQt7yQySCMPTEgcn
          source_id: s_53YgwLH5up2tZKoa3wuz1t
          stance: supports
          locator: CBDB:57129
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

# 王汝璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝璧 | accepted |
| birth.date | 1746年 | accepted |
| death.date | 1806年 | accepted |
| bio.summary | 王汝璧（1746年—1806年），清人物。明清進士進士，籍贯銅梁，入仕進士，曾任管河道、吏部考功司員外郎、吏部文選司郎中。（中国历代人物传记资料库 CBDB 57129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝璧（CBDB 57129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57129&o=json)
