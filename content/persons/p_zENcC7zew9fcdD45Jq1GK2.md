---
schema: wang-person/v1
id: p_zENcC7zew9fcdD45Jq1GK2
status: active
merged_into: null
display_name: 王廷爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iE3cZ9sTU5EAsEDSCwth4G
        subject_person_id: p_zENcC7zew9fcdD45Jq1GK2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t8eQxDSN5eAfcKq25CEsES
          claim_id: c_iE3cZ9sTU5EAsEDSCwth4G
          source_id: s_nw6qpSqPD82FoHrwPpx3Hz
          stance: supports
          locator: CBDB:71571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71571）
          source: &a1
            id: s_nw6qpSqPD82FoHrwPpx3Hz
            source_type: api_record
            title: 中国历代人物传记资料库：王廷爵（CBDB 71571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71571&o=json
            external_identifier: CBDB:71571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yk5a6PtEiu893AvgbUA7VR
        subject_person_id: p_zENcC7zew9fcdD45Jq1GK2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AY6K6B1XwJPN4fSJyH6Zji
          claim_id: c_yk5a6PtEiu893AvgbUA7VR
          source_id: s_nw6qpSqPD82FoHrwPpx3Hz
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
        id: c_LED3tnxgHLD4kQNVy4Mt5g
        subject_person_id: p_zENcC7zew9fcdD45Jq1GK2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYa2k6GgfSew6388TMC8qF
          claim_id: c_LED3tnxgHLD4kQNVy4Mt5g
          source_id: s_nw6qpSqPD82FoHrwPpx3Hz
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
        id: c_CmRejnp3KMqQApKXPJrjYC
        subject_person_id: p_zENcC7zew9fcdD45Jq1GK2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷爵（1852年—1917年），中華民國人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71571）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iwqUfyBgLmU_zwHszvV0vy
          claim_id: c_CmRejnp3KMqQApKXPJrjYC
          source_id: s_nw6qpSqPD82FoHrwPpx3Hz
          stance: supports
          locator: CBDB:71571
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

# 王廷爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷爵 | accepted |
| birth.date | 1852年 | accepted |
| death.date | 1917年 | accepted |
| bio.summary | 王廷爵（1852年—1917年），中華民國人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷爵（CBDB 71571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71571&o=json)
