---
schema: wang-person/v1
id: p_uYeiiDP276BFYR684ft1ad
status: active
merged_into: null
display_name: 王瀛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qVoc1gRpeqTX6BseQ4pqa6
        subject_person_id: p_uYeiiDP276BFYR684ft1ad
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GXVPLuJ7LbDxS3SYHjufth
          claim_id: c_qVoc1gRpeqTX6BseQ4pqa6
          source_id: s_5DAV7Smeq79yd23px794ME
          stance: supports
          locator: CBDB:71302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71302）
          source: &a1
            id: s_5DAV7Smeq79yd23px794ME
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 71302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71302&o=json
            external_identifier: CBDB:71302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Qf3qdFLTS7MTrBmKEV8AS8
        subject_person_id: p_uYeiiDP276BFYR684ft1ad
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1687年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eqr2EtusJtRMkP2meezxcy
          claim_id: c_Qf3qdFLTS7MTrBmKEV8AS8
          source_id: s_5DAV7Smeq79yd23px794ME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NATSKyFzxpRcJpxiq9amYX
        subject_person_id: p_uYeiiDP276BFYR684ft1ad
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀛（生于1687年），清人物。籍贯臨淄。（中国历代人物传记资料库 CBDB 71302）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AuiivZw2DSTQKpjx-CEQ9Z
          claim_id: c_NATSKyFzxpRcJpxiq9amYX
          source_id: s_5DAV7Smeq79yd23px794ME
          stance: supports
          locator: CBDB:71302
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

# 王瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀛 | accepted |
| birth.date | 1687年 | accepted |
| bio.summary | 王瀛（生于1687年），清人物。籍贯臨淄。（中国历代人物传记资料库 CBDB 71302） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瀛（CBDB 71302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71302&o=json)
