---
schema: wang-person/v1
id: p_qJdMe19F5Ckh8JFGUcB3KU
status: active
merged_into: null
display_name: 王惟義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XzDbZ9ym6GuSbnFoDCfpNV
        subject_person_id: p_qJdMe19F5Ckh8JFGUcB3KU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uddnaQzX5crrU2RFpuYbKC
          claim_id: c_XzDbZ9ym6GuSbnFoDCfpNV
          source_id: s_MNSWemULySdPDHLY7TDX4q
          stance: supports
          locator: CBDB:492605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492605）
          source: &a1
            id: s_MNSWemULySdPDHLY7TDX4q
            source_type: api_record
            title: 中国历代人物传记资料库：王惟義（CBDB 492605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492605&o=json
            external_identifier: CBDB:492605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uqEXxBBeQLKtmsSXvXcYCB
        subject_person_id: p_qJdMe19F5Ckh8JFGUcB3KU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟義，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 492605）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qrouc9T3h8spMP3hFdb35p
          claim_id: c_uqEXxBBeQLKtmsSXvXcYCB
          source_id: s_MNSWemULySdPDHLY7TDX4q
          stance: supports
          locator: CBDB:492605
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

# 王惟義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟義 | accepted |
| bio.summary | 王惟義，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 492605） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟義（CBDB 492605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492605&o=json)
