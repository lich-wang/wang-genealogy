---
schema: wang-person/v1
id: p_P7pK2hg9xQF1Su5BtoHyom
status: merged
merged_into: p_yr8fqvLJH1oMzLPa3PcC7o
display_name: 王世隆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qKs1RQ1WkinQNeYBZAbvZ2
        subject_person_id: p_P7pK2hg9xQF1Su5BtoHyom
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nn8aXFNmyzPMRSRs7T5fJN
          claim_id: c_qKs1RQ1WkinQNeYBZAbvZ2
          source_id: s_5eatypGua1LdcXchB99vca
          stance: supports
          locator: CBDB:17757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17757）
          source: &a1
            id: s_5eatypGua1LdcXchB99vca
            source_type: api_record
            title: 中国历代人物传记资料库：王世隆（CBDB 17757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17757&o=json
            external_identifier: CBDB:17757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Sw6H8eevt8kad2D9dF7m66
        subject_person_id: p_P7pK2hg9xQF1Su5BtoHyom
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1004年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wh6j6FD7pJLWDBC1izByyc
          claim_id: c_Sw6H8eevt8kad2D9dF7m66
          source_id: s_5eatypGua1LdcXchB99vca
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
        id: c_ooxq4gm7pJ57ynVB6td8Av
        subject_person_id: p_P7pK2hg9xQF1Su5BtoHyom
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
        - id: cs_eCEG6NQqBCiBGvT2r3UF5Q
          claim_id: c_ooxq4gm7pJ57ynVB6td8Av
          source_id: s_5eatypGua1LdcXchB99vca
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

# 王世隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世隆 | accepted |
| death.date | 1004年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世隆（CBDB 17757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17757&o=json)
