---
schema: wang-person/v1
id: p_ETJ8GA9tsaiGVk4wLdBfAB
status: active
merged_into: null
display_name: 王莽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c2Xs7TqtzMc9vQhZee8FQo
        subject_person_id: p_ETJ8GA9tsaiGVk4wLdBfAB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ypHdksuZh4fUbLQU2iAiKg
          claim_id: c_c2Xs7TqtzMc9vQhZee8FQo
          source_id: s_PVePbJdM1RaDzAvaw3eFBP
          stance: supports
          locator: CBDB:339519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（339519）
          source: &a1
            id: s_PVePbJdM1RaDzAvaw3eFBP
            source_type: api_record
            title: 中国历代人物传记资料库：王莽（CBDB 339519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339519&o=json
            external_identifier: CBDB:339519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GoGgkMaa676PL4mjCegdCB
        subject_person_id: p_ETJ8GA9tsaiGVk4wLdBfAB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前45年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZdNc3XMwEQNzi4MfgHy6Y1
          claim_id: c_GoGgkMaa676PL4mjCegdCB
          source_id: s_PVePbJdM1RaDzAvaw3eFBP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_b3JkNJ12Asr7VgdJsTRNSf
        subject_person_id: p_ETJ8GA9tsaiGVk4wLdBfAB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 23年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k82Y8CS8DcD2EkkGMHsZQx
          claim_id: c_b3JkNJ12Asr7VgdJsTRNSf
          source_id: s_PVePbJdM1RaDzAvaw3eFBP
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
        id: c_yq9JMzeCyagEdPdyiFwiQw
        subject_person_id: p_ETJ8GA9tsaiGVk4wLdBfAB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为新人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZELJVq9EfkpUaXDLjtxGRL
          claim_id: c_yq9JMzeCyagEdPdyiFwiQw
          source_id: s_PVePbJdM1RaDzAvaw3eFBP
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

# 王莽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莽 | accepted |
| birth.date | 前45年 | accepted |
| death.date | 23年 | accepted |
| bio.summary | CBDB 记载为新人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王莽（CBDB 339519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=339519&o=json)
