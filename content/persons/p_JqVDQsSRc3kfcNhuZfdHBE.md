---
schema: wang-person/v1
id: p_JqVDQsSRc3kfcNhuZfdHBE
status: active
merged_into: null
display_name: 王鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jZNPHoLGSzRxHa88qVoibZ
        subject_person_id: p_JqVDQsSRc3kfcNhuZfdHBE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gSPNJcdY5Q2vnijPRH6W9U
          claim_id: c_jZNPHoLGSzRxHa88qVoibZ
          source_id: s_HjEnt6H1YtJM2hHuJGXsHs
          stance: supports
          locator: CBDB:343630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343630）
          source: &a1
            id: s_HjEnt6H1YtJM2hHuJGXsHs
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 343630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343630&o=json
            external_identifier: CBDB:343630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z2nwTVkbHiw3QPZo6dWF7w
        subject_person_id: p_JqVDQsSRc3kfcNhuZfdHBE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬，清人物。明清進士進士，籍贯臨榆，入仕進士。（中国历代人物传记资料库 CBDB 343630）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z0llgXmh7E2o2ohh23O6Ku
          claim_id: c_z2nwTVkbHiw3QPZo6dWF7w
          source_id: s_HjEnt6H1YtJM2hHuJGXsHs
          stance: supports
          locator: CBDB:343630
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

# 王鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬 | accepted |
| bio.summary | 王鵬，清人物。明清進士進士，籍贯臨榆，入仕進士。（中国历代人物传记资料库 CBDB 343630） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵬（CBDB 343630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343630&o=json)
