---
schema: wang-person/v1
id: p_MpBE9w4EcyDUZfritfzdFL
status: active
merged_into: null
display_name: 王文照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ApzCD5S7gepxxNRNXk8K6r
        subject_person_id: p_MpBE9w4EcyDUZfritfzdFL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jNDs3DnVTyAR8Y5bSVh1Jn
          claim_id: c_ApzCD5S7gepxxNRNXk8K6r
          source_id: s_V4om1VaKWESCGqSzjdjCpE
          stance: supports
          locator: CBDB:638260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638260）
          source: &a1
            id: s_V4om1VaKWESCGqSzjdjCpE
            source_type: api_record
            title: 中国历代人物传记资料库：王文照（CBDB 638260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638260&o=json
            external_identifier: CBDB:638260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GsXfmvTJrDQhm9Lgd9Khcb
        subject_person_id: p_MpBE9w4EcyDUZfritfzdFL
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
        - id: cs_SThHnnkCf1w448o8XLZQf6
          claim_id: c_GsXfmvTJrDQhm9Lgd9Khcb
          source_id: s_V4om1VaKWESCGqSzjdjCpE
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

# 王文照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文照 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文照（CBDB 638260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638260&o=json)
