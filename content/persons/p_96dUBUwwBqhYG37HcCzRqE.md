---
schema: wang-person/v1
id: p_96dUBUwwBqhYG37HcCzRqE
status: active
merged_into: null
display_name: 王嘉賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9qPC6ZQgipu7AmPD8YoKAQ
        subject_person_id: p_96dUBUwwBqhYG37HcCzRqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Xghc3y3Dz1TRxNPwaKxC6
          claim_id: c_9qPC6ZQgipu7AmPD8YoKAQ
          source_id: s_5MDrbKkDtNu1Z673AZ39wL
          stance: supports
          locator: CBDB:574147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574147）
          source: &a1
            id: s_5MDrbKkDtNu1Z673AZ39wL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 574147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574147&o=json
            external_identifier: CBDB:574147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mW234VecgGuKfrAkR28EDS
        subject_person_id: p_96dUBUwwBqhYG37HcCzRqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王嘉賓，清人物。籍贯孝感，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 574147）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PxBPyzZlygM2oEn-EDbMX4
          claim_id: c_mW234VecgGuKfrAkR28EDS
          source_id: s_5MDrbKkDtNu1Z673AZ39wL
          stance: supports
          locator: CBDB:574147
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

# 王嘉賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉賓 | accepted |
| bio.summary | 王嘉賓，清人物。籍贯孝感，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 574147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉賓（CBDB 574147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574147&o=json)
