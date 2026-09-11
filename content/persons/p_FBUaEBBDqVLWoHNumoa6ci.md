---
schema: wang-person/v1
id: p_FBUaEBBDqVLWoHNumoa6ci
status: active
merged_into: null
display_name: 王大智
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5vM5sP5Bha1j2NFotZuaZ6
        subject_person_id: p_FBUaEBBDqVLWoHNumoa6ci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ocS1d6L5acay4rSz9aA4jN
          claim_id: c_5vM5sP5Bha1j2NFotZuaZ6
          source_id: s_ch6FC1yzDKQLzxJv8n7UCP
          stance: supports
          locator: CBDB:342920
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342920）
          source: &a1
            id: s_ch6FC1yzDKQLzxJv8n7UCP
            source_type: api_record
            title: 中国历代人物传记资料库：王大智（CBDB 342920）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342920&o=json
            external_identifier: CBDB:342920
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bzaHnuzY5J2GvLrgFxwiyJ
        subject_person_id: p_FBUaEBBDqVLWoHNumoa6ci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大智，明人物。明清進士進士，籍贯玉田，入仕進士。（中国历代人物传记资料库 CBDB 342920）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fn4C-5rLVi460rRnIVmdDX
          claim_id: c_bzaHnuzY5J2GvLrgFxwiyJ
          source_id: s_ch6FC1yzDKQLzxJv8n7UCP
          stance: supports
          locator: CBDB:342920
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

# 王大智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大智 | accepted |
| bio.summary | 王大智，明人物。明清進士進士，籍贯玉田，入仕進士。（中国历代人物传记资料库 CBDB 342920） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大智（CBDB 342920）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342920&o=json)
