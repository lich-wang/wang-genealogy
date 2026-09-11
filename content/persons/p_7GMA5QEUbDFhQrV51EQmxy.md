---
schema: wang-person/v1
id: p_7GMA5QEUbDFhQrV51EQmxy
status: active
merged_into: null
display_name: 王藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_68EzG5X5yGuyPa8CsYV8aL
        subject_person_id: p_7GMA5QEUbDFhQrV51EQmxy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FknLppZw9szQ8gRk8nHkyj
          claim_id: c_68EzG5X5yGuyPa8CsYV8aL
          source_id: s_AgEEnY2EHzCSkCNA9SiZCP
          stance: supports
          locator: CBDB:45837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45837）
          source: &a1
            id: s_AgEEnY2EHzCSkCNA9SiZCP
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 45837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45837&o=json
            external_identifier: CBDB:45837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kk9EivEpL3ff4E8f1Dz339
        subject_person_id: p_7GMA5QEUbDFhQrV51EQmxy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻，宋人物。籍贯建安，入仕進士。（中国历代人物传记资料库 CBDB 45837）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MViy3q0R_bBe-bazQ1VJUp
          claim_id: c_Kk9EivEpL3ff4E8f1Dz339
          source_id: s_AgEEnY2EHzCSkCNA9SiZCP
          stance: supports
          locator: CBDB:45837
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

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| bio.summary | 王藻，宋人物。籍贯建安，入仕進士。（中国历代人物传记资料库 CBDB 45837） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 45837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45837&o=json)
