---
schema: wang-person/v1
id: p_yjoMBM16z87Ac7boUs7w1H
status: active
merged_into: null
display_name: 王安節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EtCrUJDKwCwHxecbZ858xB
        subject_person_id: p_yjoMBM16z87Ac7boUs7w1H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCiz9pD2LBquyqVv9DtpQX
          claim_id: c_EtCrUJDKwCwHxecbZ858xB
          source_id: s_ysMvrF41DX1qmnFM5ZxcYh
          stance: supports
          locator: CBDB:37952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37952）
          source: &a1
            id: s_ysMvrF41DX1qmnFM5ZxcYh
            source_type: api_record
            title: 中国历代人物传记资料库：王安節（CBDB 37952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37952&o=json
            external_identifier: CBDB:37952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4n6VZ91t13GBCMjHbeHNLu
        subject_person_id: p_yjoMBM16z87Ac7boUs7w1H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYWm8y7Kuoqittzpy6btLL
          claim_id: c_4n6VZ91t13GBCMjHbeHNLu
          source_id: s_ysMvrF41DX1qmnFM5ZxcYh
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
        id: c_YYXoQmrLCft2CWD2DawKkA
        subject_person_id: p_yjoMBM16z87Ac7boUs7w1H
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
        - id: cs_9rmVAw1arvRRerG78pZTva
          claim_id: c_YYXoQmrLCft2CWD2DawKkA
          source_id: s_ysMvrF41DX1qmnFM5ZxcYh
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

# 王安節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安節 | accepted |
| death.date | 1275年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安節（CBDB 37952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37952&o=json)
