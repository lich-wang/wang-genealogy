---
schema: wang-person/v1
id: p_SVD4ad7FN3HZR5xT4Zf8eG
status: active
merged_into: null
display_name: 王傳古
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RrR5xaNeAJhHGmNN2unXTG
        subject_person_id: p_SVD4ad7FN3HZR5xT4Zf8eG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2UQzx1kb8EVnzhTwBBPoU5
          claim_id: c_RrR5xaNeAJhHGmNN2unXTG
          source_id: s_jhk48ELG6q7EBUxBnKUBrm
          stance: supports
          locator: CBDB:191813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191813）
          source: &a1
            id: s_jhk48ELG6q7EBUxBnKUBrm
            source_type: api_record
            title: 中国历代人物传记资料库：王傳古（CBDB 191813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191813&o=json
            external_identifier: CBDB:191813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_exmy5vckGprdJddLjKmSCZ
        subject_person_id: p_SVD4ad7FN3HZR5xT4Zf8eG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8GXYPUwe3YKd3kMQkDHwJn
          claim_id: c_exmy5vckGprdJddLjKmSCZ
          source_id: s_jhk48ELG6q7EBUxBnKUBrm
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
        id: c_wtN6MbBgTNhdSRchsPrQ8w
        subject_person_id: p_SVD4ad7FN3HZR5xT4Zf8eG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BH8KwHf9w5nb9xTqBHSAcy
          claim_id: c_wtN6MbBgTNhdSRchsPrQ8w
          source_id: s_jhk48ELG6q7EBUxBnKUBrm
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

# 王傳古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳古 | accepted |
| death.date | 878年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傳古（CBDB 191813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191813&o=json)
