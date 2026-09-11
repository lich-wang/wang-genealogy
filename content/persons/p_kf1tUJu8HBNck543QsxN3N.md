---
schema: wang-person/v1
id: p_kf1tUJu8HBNck543QsxN3N
status: active
merged_into: null
display_name: 王杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_83Ws4syMqV2GZXXHEq2pZV
        subject_person_id: p_kf1tUJu8HBNck543QsxN3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_352PW73NWftz29Hee8dV6z
          claim_id: c_83Ws4syMqV2GZXXHEq2pZV
          source_id: s_g8HYbHDFzrs6p1E72BzUGu
          stance: supports
          locator: CBDB:470198
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470198）
          source: &a1
            id: s_g8HYbHDFzrs6p1E72BzUGu
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 470198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470198&o=json
            external_identifier: CBDB:470198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HyE73rG5xyLhFraiP6F6w1
        subject_person_id: p_kf1tUJu8HBNck543QsxN3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 470198）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TlG50Nti2p_FhVswA87jAT
          claim_id: c_HyE73rG5xyLhFraiP6F6w1
          source_id: s_g8HYbHDFzrs6p1E72BzUGu
          stance: supports
          locator: CBDB:470198
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

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| bio.summary | 王杲，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 470198） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 470198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470198&o=json)
