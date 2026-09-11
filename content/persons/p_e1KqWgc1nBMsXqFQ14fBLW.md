---
schema: wang-person/v1
id: p_e1KqWgc1nBMsXqFQ14fBLW
status: active
merged_into: null
display_name: 王再榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G3pmaRouyzJ8zKc3MHvBft
        subject_person_id: p_e1KqWgc1nBMsXqFQ14fBLW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王再榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dz5aF3NNKfzJAuCrJGu5E8
          claim_id: c_G3pmaRouyzJ8zKc3MHvBft
          source_id: s_qGYQ9W3EKQndr4CfAiwJzz
          stance: supports
          locator: CBDB:190232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190232）
          source: &a1
            id: s_qGYQ9W3EKQndr4CfAiwJzz
            source_type: api_record
            title: 中国历代人物传记资料库：王再榮（CBDB 190232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190232&o=json
            external_identifier: CBDB:190232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HbnRDv2b4tR5kqBUZ1oGEw
        subject_person_id: p_e1KqWgc1nBMsXqFQ14fBLW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 825年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q8d9US7x6yhzGtoeDANRBo
          claim_id: c_HbnRDv2b4tR5kqBUZ1oGEw
          source_id: s_qGYQ9W3EKQndr4CfAiwJzz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EzZcp1W2s8DT1AbD8Qf7Jo
        subject_person_id: p_e1KqWgc1nBMsXqFQ14fBLW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王再榮（卒于825年），唐人物。籍贯長安，曾任羽林軍。（中国历代人物传记资料库 CBDB 190232）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_quiFKF59Pnz3DLEFB_0JSt
          claim_id: c_EzZcp1W2s8DT1AbD8Qf7Jo
          source_id: s_qGYQ9W3EKQndr4CfAiwJzz
          stance: supports
          locator: CBDB:190232
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

# 王再榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王再榮 | accepted |
| death.date | 825年 | accepted |
| bio.summary | 王再榮（卒于825年），唐人物。籍贯長安，曾任羽林軍。（中国历代人物传记资料库 CBDB 190232） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王再榮（CBDB 190232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190232&o=json)
