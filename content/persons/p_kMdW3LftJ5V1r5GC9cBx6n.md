---
schema: wang-person/v1
id: p_kMdW3LftJ5V1r5GC9cBx6n
status: active
merged_into: null
display_name: 王斌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eVqcKQLvk5qN2F2kGU3LE4
        subject_person_id: p_kMdW3LftJ5V1r5GC9cBx6n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t4jTHHE4mnJUahiHZr52d5
          claim_id: c_eVqcKQLvk5qN2F2kGU3LE4
          source_id: s_Y1FTzD48MKip8AXu6VpgFh
          stance: supports
          locator: CBDB:483374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483374）
          source: &a1
            id: s_Y1FTzD48MKip8AXu6VpgFh
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 483374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483374&o=json
            external_identifier: CBDB:483374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HLPC9bHYaR5d387uSU9sQr
        subject_person_id: p_kMdW3LftJ5V1r5GC9cBx6n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G49QskY9Dtnbk7ywYuEnmj
          claim_id: c_HLPC9bHYaR5d387uSU9sQr
          source_id: s_Y1FTzD48MKip8AXu6VpgFh
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

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 483374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483374&o=json)
