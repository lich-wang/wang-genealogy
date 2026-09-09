---
schema: wang-person/v1
id: p_7iyRQncFJW2io35eoRYhHK
status: active
merged_into: null
display_name: 王賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p846HpBcYnBo8G72z4zEPh
        subject_person_id: p_7iyRQncFJW2io35eoRYhHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xyJWeiQh8etHbPaTBor89y
          claim_id: c_p846HpBcYnBo8G72z4zEPh
          source_id: s_rda23hAGUGbhMpDNdySLPF
          stance: supports
          locator: CBDB:577678
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577678）
          source: &a1
            id: s_rda23hAGUGbhMpDNdySLPF
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 577678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577678&o=json
            external_identifier: CBDB:577678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9iUbP6TKHKkfiMKQwTJDFQ
        subject_person_id: p_7iyRQncFJW2io35eoRYhHK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1868年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_69UeYiXfG5YiYD4gVNfURN
          claim_id: c_9iUbP6TKHKkfiMKQwTJDFQ
          source_id: s_rda23hAGUGbhMpDNdySLPF
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
        id: c_1Aq3Tr3RQ8YLwtgasL77NY
        subject_person_id: p_7iyRQncFJW2io35eoRYhHK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1930年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3yLNo2QZowx4aib2mtFcM
          claim_id: c_1Aq3Tr3RQ8YLwtgasL77NY
          source_id: s_rda23hAGUGbhMpDNdySLPF
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
        id: c_HXPhf6rttiQnNMtjGZpScB
        subject_person_id: p_7iyRQncFJW2io35eoRYhHK
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
        - id: cs_25BdznSB4GRBT2aE3wjqt7
          claim_id: c_HXPhf6rttiQnNMtjGZpScB
          source_id: s_rda23hAGUGbhMpDNdySLPF
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

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| birth.date | 1868年 | accepted |
| death.date | 1930年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 577678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577678&o=json)
