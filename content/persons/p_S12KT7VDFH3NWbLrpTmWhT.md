---
schema: wang-person/v1
id: p_S12KT7VDFH3NWbLrpTmWhT
status: active
merged_into: null
display_name: 王國忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LguAEPCXNNg5ZcgKb8axfq
        subject_person_id: p_S12KT7VDFH3NWbLrpTmWhT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jhp7NZ73KvL8xDdyxuw5ZV
          claim_id: c_LguAEPCXNNg5ZcgKb8axfq
          source_id: s_h36mLP4brV8C4eAg5UJzYm
          stance: supports
          locator: CBDB:69363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69363）
          source: &a1
            id: s_h36mLP4brV8C4eAg5UJzYm
            source_type: api_record
            title: 中国历代人物传记资料库：王國忠（CBDB 69363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69363&o=json
            external_identifier: CBDB:69363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9R3RSD2TCzvWxcqHQZLHY9
        subject_person_id: p_S12KT7VDFH3NWbLrpTmWhT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uq4GaJegEf4rBdcLcLmh83
          claim_id: c_9R3RSD2TCzvWxcqHQZLHY9
          source_id: s_h36mLP4brV8C4eAg5UJzYm
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
        id: c_6hy5V4inBFaberhNvdx2PH
        subject_person_id: p_S12KT7VDFH3NWbLrpTmWhT
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
        - id: cs_sCBDxW716yZzFAjmmPWiV8
          claim_id: c_6hy5V4inBFaberhNvdx2PH
          source_id: s_h36mLP4brV8C4eAg5UJzYm
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

# 王國忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國忠 | accepted |
| death.date | 1862年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國忠（CBDB 69363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69363&o=json)
