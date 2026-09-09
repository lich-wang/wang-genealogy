---
schema: wang-person/v1
id: p_iLBztGC5LbBPcHLPSMKsm5
status: active
merged_into: null
display_name: 王沖用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D1dpj5FU8aRAP9afCwEq6u
        subject_person_id: p_iLBztGC5LbBPcHLPSMKsm5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沖用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EPXByUUPXdEyaN5VPAGSge
          claim_id: c_D1dpj5FU8aRAP9afCwEq6u
          source_id: s_dXthzvwnrT3sJTCTYZxaJY
          stance: supports
          locator: CBDB:546645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546645）
          source: &a1
            id: s_dXthzvwnrT3sJTCTYZxaJY
            source_type: api_record
            title: 中国历代人物传记资料库：王沖用（CBDB 546645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546645&o=json
            external_identifier: CBDB:546645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eaETK1ua7YSo39p9NeLEL1
        subject_person_id: p_iLBztGC5LbBPcHLPSMKsm5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dP6XkerSGZ6EC1nQBVu3QX
          claim_id: c_eaETK1ua7YSo39p9NeLEL1
          source_id: s_dXthzvwnrT3sJTCTYZxaJY
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

# 王沖用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沖用 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沖用（CBDB 546645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546645&o=json)
