---
schema: wang-person/v1
id: p_pTqMfXNKoZU1VFa3LGewX6
status: active
merged_into: null
display_name: 王文山
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wsVnRNxt8gY65jcKQ7XMUh
        subject_person_id: p_pTqMfXNKoZU1VFa3LGewX6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vAEbeZLD8xbeVBQwaM6Lv7
          claim_id: c_wsVnRNxt8gY65jcKQ7XMUh
          source_id: s_xB4ngJV9teeMeBNSFP7hFB
          stance: supports
          locator: CBDB:570519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570519）
          source: &a1
            id: s_xB4ngJV9teeMeBNSFP7hFB
            source_type: api_record
            title: 中国历代人物传记资料库：王文山（CBDB 570519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570519&o=json
            external_identifier: CBDB:570519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m7cuDW9GZHygBCMC174g8B
        subject_person_id: p_pTqMfXNKoZU1VFa3LGewX6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1bQPvJnCm893b1tv7ENaDF
          claim_id: c_m7cuDW9GZHygBCMC174g8B
          source_id: s_xB4ngJV9teeMeBNSFP7hFB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王文山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文山 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文山（CBDB 570519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570519&o=json)
