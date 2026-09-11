---
schema: wang-person/v1
id: p_2GwNrH68Dk1fVEK286JrgU
status: active
merged_into: null
display_name: 王轂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1CTm7AJCPi5ceNAKMhFKDv
        subject_person_id: p_2GwNrH68Dk1fVEK286JrgU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W6ffF3LUEe2g4XV2xGDQXd
          claim_id: c_1CTm7AJCPi5ceNAKMhFKDv
          source_id: s_rrX4XKFAjCwPTuGHZYSSuC
          stance: supports
          locator: CBDB:550595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550595）
          source: &a1
            id: s_rrX4XKFAjCwPTuGHZYSSuC
            source_type: api_record
            title: 中国历代人物传记资料库：王轂（CBDB 550595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550595&o=json
            external_identifier: CBDB:550595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sGTDJBAHvRCun2gKepawBm
        subject_person_id: p_2GwNrH68Dk1fVEK286JrgU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1657年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_16YW7fhLXWi7aUxXFDzatp
          claim_id: c_sGTDJBAHvRCun2gKepawBm
          source_id: s_rrX4XKFAjCwPTuGHZYSSuC
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
        id: c_CDe2q5fL6KWL4nvAJPRmGJ
        subject_person_id: p_2GwNrH68Dk1fVEK286JrgU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轂（卒于1657年），清人物。曾任知縣。（中国历代人物传记资料库 CBDB 550595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c-Uh-GI_hjNctmO5S6vWkO
          claim_id: c_CDe2q5fL6KWL4nvAJPRmGJ
          source_id: s_rrX4XKFAjCwPTuGHZYSSuC
          stance: supports
          locator: CBDB:550595
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

# 王轂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王轂 | accepted |
| death.date | 1657年 | accepted |
| bio.summary | 王轂（卒于1657年），清人物。曾任知縣。（中国历代人物传记资料库 CBDB 550595） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王轂（CBDB 550595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550595&o=json)
