---
schema: wang-person/v1
id: p_WTHnYizj7FG4VTeGe9h9Rv
status: active
merged_into: null
display_name: 王僑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BfoNNtw9SERK5Jjx1g2AG8
        subject_person_id: p_WTHnYizj7FG4VTeGe9h9Rv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pEwN9CiCS6mKzPgzd5D3F4
          claim_id: c_BfoNNtw9SERK5Jjx1g2AG8
          source_id: s_AauGqMKLLHN968VSYZycnW
          stance: supports
          locator: CBDB:298819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298819）
          source: &a1
            id: s_AauGqMKLLHN968VSYZycnW
            source_type: api_record
            title: 中国历代人物传记资料库：王僑（CBDB 298819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298819&o=json
            external_identifier: CBDB:298819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eAVfKEJNdoBaUEfyJKJiiC
        subject_person_id: p_WTHnYizj7FG4VTeGe9h9Rv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僑，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 298819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ILGtI_s3spHWcWA82-zNz8
          claim_id: c_eAVfKEJNdoBaUEfyJKJiiC
          source_id: s_AauGqMKLLHN968VSYZycnW
          stance: supports
          locator: CBDB:298819
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

# 王僑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僑 | accepted |
| bio.summary | 王僑，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 298819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僑（CBDB 298819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298819&o=json)
