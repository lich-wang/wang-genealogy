---
schema: wang-person/v1
id: p_7X7Ae958CiPMFs4oEDLjWT
status: active
merged_into: null
display_name: 王善士
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gxdrxChNgtW6zjWqkR4NSK
        subject_person_id: p_7X7Ae958CiPMFs4oEDLjWT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u6tErn43R1ru1SYk3GHE5x
          claim_id: c_gxdrxChNgtW6zjWqkR4NSK
          source_id: s_jgQF4MrWGAv9UB132WMfe5
          stance: supports
          locator: CBDB:72083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72083）
          source: &a1
            id: s_jgQF4MrWGAv9UB132WMfe5
            source_type: api_record
            title: 中国历代人物传记资料库：王善士（CBDB 72083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72083&o=json
            external_identifier: CBDB:72083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sVj5MN47HcYtfqKvdrNRu8
        subject_person_id: p_7X7Ae958CiPMFs4oEDLjWT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1849年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cKB323avVG8iQeELA2qFcp
          claim_id: c_sVj5MN47HcYtfqKvdrNRu8
          source_id: s_jgQF4MrWGAv9UB132WMfe5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ht4KchYm8igheFQAH67aMG
        subject_person_id: p_7X7Ae958CiPMFs4oEDLjWT
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
        - id: cs_9soZSkyoaUtx14J7NuxW3G
          claim_id: c_ht4KchYm8igheFQAH67aMG
          source_id: s_jgQF4MrWGAv9UB132WMfe5
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

# 王善士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善士 | accepted |
| birth.date | 1849年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善士（CBDB 72083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72083&o=json)
