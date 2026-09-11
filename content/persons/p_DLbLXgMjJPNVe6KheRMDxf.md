---
schema: wang-person/v1
id: p_DLbLXgMjJPNVe6KheRMDxf
status: active
merged_into: null
display_name: 王恒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6AZV11ee3WTpXdgh8AMNjG
        subject_person_id: p_DLbLXgMjJPNVe6KheRMDxf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恒
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fq65gi9KgirxXAvxaFzZSa
          claim_id: c_6AZV11ee3WTpXdgh8AMNjG
          source_id: s_Btt3gZwJns4qamNUMmGNAN
          stance: supports
          locator: CBDB:476996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476996）
          source: &a1
            id: s_Btt3gZwJns4qamNUMmGNAN
            source_type: api_record
            title: 中国历代人物传记资料库：王恒（CBDB 476996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476996&o=json
            external_identifier: CBDB:476996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qja5qU9wzHutv1Nb1t1Hf2
        subject_person_id: p_DLbLXgMjJPNVe6KheRMDxf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恒，明人物。入仕監生，曾任判官。（中国历代人物传记资料库 CBDB 476996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5vxDb8Xt9VejwcEYb-Ysi4
          claim_id: c_qja5qU9wzHutv1Nb1t1Hf2
          source_id: s_Btt3gZwJns4qamNUMmGNAN
          stance: supports
          locator: CBDB:476996
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

# 王恒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恒 | accepted |
| bio.summary | 王恒，明人物。入仕監生，曾任判官。（中国历代人物传记资料库 CBDB 476996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恒（CBDB 476996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476996&o=json)
