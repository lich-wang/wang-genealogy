---
schema: wang-person/v1
id: p_t6H1zNNGoqTrr1wuAW11VY
status: active
merged_into: null
display_name: 王宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a9Qh1ykqqrtqW1ZQ6pqh8N
        subject_person_id: p_t6H1zNNGoqTrr1wuAW11VY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d7nGcYPHS5qHpDiH5tUj6f
          claim_id: c_a9Qh1ykqqrtqW1ZQ6pqh8N
          source_id: s_a6N9wS2AmK2oDJ2oTCTsBP
          stance: supports
          locator: CBDB:157073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157073）
          source: &a1
            id: s_a6N9wS2AmK2oDJ2oTCTsBP
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 157073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157073&o=json
            external_identifier: CBDB:157073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y63Xph4GyQbuVZWtnFJhF5
        subject_person_id: p_t6H1zNNGoqTrr1wuAW11VY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bbWxHje6mTTAJKNH7H3gG1
          claim_id: c_y63Xph4GyQbuVZWtnFJhF5
          source_id: s_a6N9wS2AmK2oDJ2oTCTsBP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XUGtW7mbTYaTxhPQxtYt6V
        subject_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t6H1zNNGoqTrr1wuAW11VY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxMqEsgQxJrSFrWir36DYT
          claim_id: c_XUGtW7mbTYaTxhPQxtYt6V
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6tg181GfEavpwsgSRrvE1t
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 160565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160565&o=json
            external_identifier: CBDB:160565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BzEC3FxQZmQshcKpSR8HHx
        status: active
        display_name: 王雲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BzEC3FxQZmQshcKpSR8HHx | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 160565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160565&o=json)
- [中国历代人物传记资料库：王宗（CBDB 157073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157073&o=json)
