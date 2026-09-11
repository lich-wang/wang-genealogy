---
schema: wang-person/v1
id: p_rrwEh3x6Hzahw5xkBMELgq
status: active
merged_into: null
display_name: 王允中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w3KZvSdb5xVPAbMdiv9rqW
        subject_person_id: p_rrwEh3x6Hzahw5xkBMELgq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ovQ1dQnJypyusaNfKbcUhy
          claim_id: c_w3KZvSdb5xVPAbMdiv9rqW
          source_id: s_eG9F4oQEnnRBaTExaHCR1M
          stance: supports
          locator: CBDB:510589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510589）
          source: &a1
            id: s_eG9F4oQEnnRBaTExaHCR1M
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 510589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510589&o=json
            external_identifier: CBDB:510589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jNnQUon3S6rNkuehtXnwCc
        subject_person_id: p_rrwEh3x6Hzahw5xkBMELgq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 510589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wwVLVBSSAjgV-yS0LskClR
          claim_id: c_jNnQUon3S6rNkuehtXnwCc
          source_id: s_eG9F4oQEnnRBaTExaHCR1M
          stance: supports
          locator: CBDB:510589
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

# 王允中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允中 | accepted |
| bio.summary | 王允中，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 510589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允中（CBDB 510589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510589&o=json)
