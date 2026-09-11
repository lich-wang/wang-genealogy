---
schema: wang-person/v1
id: p_x1Ni6WWy7axBELC316BrDX
status: active
merged_into: null
display_name: 王綸熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KKJNn1W3beUEVjBM4mSLNH
        subject_person_id: p_x1Ni6WWy7axBELC316BrDX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HY9e5Vfgk1oTZNfQmHtVLX
          claim_id: c_KKJNn1W3beUEVjBM4mSLNH
          source_id: s_yw8bkSsBRrf91APtrsgHbR
          stance: supports
          locator: CBDB:639837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639837）
          source: &a1
            id: s_yw8bkSsBRrf91APtrsgHbR
            source_type: api_record
            title: 中国历代人物传记资料库：王綸熙（CBDB 639837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639837&o=json
            external_identifier: CBDB:639837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rajeGXcgz6guCFY6zzGPbN
        subject_person_id: p_x1Ni6WWy7axBELC316BrDX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸熙，清人物。籍贯石門，曾任典史。（中国历代人物传记资料库 CBDB 639837）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_--6CfJCQuN_2rV-guf44PP
          claim_id: c_rajeGXcgz6guCFY6zzGPbN
          source_id: s_yw8bkSsBRrf91APtrsgHbR
          stance: supports
          locator: CBDB:639837
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

# 王綸熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸熙 | accepted |
| bio.summary | 王綸熙，清人物。籍贯石門，曾任典史。（中国历代人物传记资料库 CBDB 639837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綸熙（CBDB 639837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639837&o=json)
