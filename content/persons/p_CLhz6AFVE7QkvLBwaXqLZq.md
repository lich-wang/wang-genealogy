---
schema: wang-person/v1
id: p_CLhz6AFVE7QkvLBwaXqLZq
status: active
merged_into: null
display_name: 王慕麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m6p7Xz99Xwe1oG3pB6ovt8
        subject_person_id: p_CLhz6AFVE7QkvLBwaXqLZq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慕麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VsiyU2xk4ycBF5GsfNpsGr
          claim_id: c_m6p7Xz99Xwe1oG3pB6ovt8
          source_id: s_Goarni775a6vWBzh27gSeR
          stance: supports
          locator: CBDB:637917
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637917）
          source: &a1
            id: s_Goarni775a6vWBzh27gSeR
            source_type: api_record
            title: 中国历代人物传记资料库：王慕麟（CBDB 637917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637917&o=json
            external_identifier: CBDB:637917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XJH9UZ2TXDeko5KrRS6dbD
        subject_person_id: p_CLhz6AFVE7QkvLBwaXqLZq
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
        - id: cs_mNt7CWYeCVBXYW2ThBLBLG
          claim_id: c_XJH9UZ2TXDeko5KrRS6dbD
          source_id: s_Goarni775a6vWBzh27gSeR
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

# 王慕麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慕麟 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慕麟（CBDB 637917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637917&o=json)
