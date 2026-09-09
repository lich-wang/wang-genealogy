---
schema: wang-person/v1
id: p_oMSCz6k336XBhBo6xK3BkA
status: active
merged_into: null
display_name: 王寶槤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3yB55Ns3hkG2Vh3QCKr3ii
        subject_person_id: p_oMSCz6k336XBhBo6xK3BkA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶槤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_466bK9qvAL8MVWhxKLBgQb
          claim_id: c_3yB55Ns3hkG2Vh3QCKr3ii
          source_id: s_q4LWDb3YjMD58ZsUf5HFJA
          stance: supports
          locator: CBDB:637261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637261）
          source: &a1
            id: s_q4LWDb3YjMD58ZsUf5HFJA
            source_type: api_record
            title: 中国历代人物传记资料库：王寶槤（CBDB 637261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637261&o=json
            external_identifier: CBDB:637261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XxBVfufh3jcFfoxrUFwwfm
        subject_person_id: p_oMSCz6k336XBhBo6xK3BkA
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
        - id: cs_Q1iknXCPKTNRgG3U47DFmG
          claim_id: c_XxBVfufh3jcFfoxrUFwwfm
          source_id: s_q4LWDb3YjMD58ZsUf5HFJA
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

# 王寶槤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶槤 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶槤（CBDB 637261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637261&o=json)
