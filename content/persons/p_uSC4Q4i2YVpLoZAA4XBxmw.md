---
schema: wang-person/v1
id: p_uSC4Q4i2YVpLoZAA4XBxmw
status: active
merged_into: null
display_name: 王玾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dN5dk6C45oQsLiFrvt3JYL
        subject_person_id: p_uSC4Q4i2YVpLoZAA4XBxmw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WVUdADgYShj2Qunfps4egL
          claim_id: c_dN5dk6C45oQsLiFrvt3JYL
          source_id: s_2eydo14a2UPuXzYyQX3Wwo
          stance: supports
          locator: CBDB:555064
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555064）
          source: &a1
            id: s_2eydo14a2UPuXzYyQX3Wwo
            source_type: api_record
            title: 中国历代人物传记资料库：王玾（CBDB 555064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555064&o=json
            external_identifier: CBDB:555064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_312gmSqHq3EjT17wRWaS3Y
        subject_person_id: p_uSC4Q4i2YVpLoZAA4XBxmw
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
        - id: cs_BLhowo2Z7rjVG6rK2MqsPF
          claim_id: c_312gmSqHq3EjT17wRWaS3Y
          source_id: s_2eydo14a2UPuXzYyQX3Wwo
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

# 王玾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玾（CBDB 555064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555064&o=json)
