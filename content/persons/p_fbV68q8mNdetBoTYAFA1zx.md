---
schema: wang-person/v1
id: p_fbV68q8mNdetBoTYAFA1zx
status: active
merged_into: null
display_name: 王異
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BT782y46CgtEJxJFhzaaB6
        subject_person_id: p_fbV68q8mNdetBoTYAFA1zx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王異
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CDaGHJPbq6knnSmQ95FmDD
          claim_id: c_BT782y46CgtEJxJFhzaaB6
          source_id: s_A2MMVwiDiBZFLDjuyPMDU1
          stance: supports
          locator: CBDB:37871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37871）
          source: &a1
            id: s_A2MMVwiDiBZFLDjuyPMDU1
            source_type: api_record
            title: 中国历代人物传记资料库：王異（CBDB 37871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37871&o=json
            external_identifier: CBDB:37871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7x5SjYxVTiUG1YRVPXiYKB
        subject_person_id: p_fbV68q8mNdetBoTYAFA1zx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1157年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3TFGGKruZS1Ku169dDPdPm
          claim_id: c_7x5SjYxVTiUG1YRVPXiYKB
          source_id: s_A2MMVwiDiBZFLDjuyPMDU1
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
        id: c_WtEx8sryqWeigHiRYgHGp6
        subject_person_id: p_fbV68q8mNdetBoTYAFA1zx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1202年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rsrd7LdukG5ooXNqyBrPRd
          claim_id: c_WtEx8sryqWeigHiRYgHGp6
          source_id: s_A2MMVwiDiBZFLDjuyPMDU1
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
        id: c_wufhNB1cMjzPnRovjTm8Y7
        subject_person_id: p_fbV68q8mNdetBoTYAFA1zx
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
        - id: cs_PDiJvhcd4LRPMnv34ksFHN
          claim_id: c_wufhNB1cMjzPnRovjTm8Y7
          source_id: s_A2MMVwiDiBZFLDjuyPMDU1
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

# 王異

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王異 | accepted |
| birth.date | 1157年 | accepted |
| death.date | 1202年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王異（CBDB 37871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37871&o=json)
