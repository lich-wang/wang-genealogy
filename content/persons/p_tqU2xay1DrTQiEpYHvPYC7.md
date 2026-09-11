---
schema: wang-person/v1
id: p_tqU2xay1DrTQiEpYHvPYC7
status: active
merged_into: null
display_name: 王宗弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2LT1izbxik4iqoqTKj5XEp
        subject_person_id: p_tqU2xay1DrTQiEpYHvPYC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JdE4XDCxDR5faErDTtSMD8
          claim_id: c_2LT1izbxik4iqoqTKj5XEp
          source_id: s_u1QfxCgTHsavTWGHLHSG79
          stance: supports
          locator: CBDB:383463
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383463）
          source: &a1
            id: s_u1QfxCgTHsavTWGHLHSG79
            source_type: api_record
            title: 中国历代人物传记资料库：王宗弼（CBDB 383463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383463&o=json
            external_identifier: CBDB:383463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LKCAvcbWDKhbPYw5FR8PUM
        subject_person_id: p_tqU2xay1DrTQiEpYHvPYC7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗弼，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383463）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rd5yAJXk6pVE-tcQgBkvc-
          claim_id: c_LKCAvcbWDKhbPYw5FR8PUM
          source_id: s_u1QfxCgTHsavTWGHLHSG79
          stance: supports
          locator: CBDB:383463
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

# 王宗弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗弼 | accepted |
| bio.summary | 王宗弼，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383463） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗弼（CBDB 383463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383463&o=json)
