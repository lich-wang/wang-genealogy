---
schema: wang-person/v1
id: p_KVo9tD5GtmxFP8e9t93ruK
status: active
merged_into: null
display_name: 王永春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_38hMKJ58GePaZNHrf6w3W9
        subject_person_id: p_KVo9tD5GtmxFP8e9t93ruK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZoY4sHFqvGAGjCdhrSADmB
          claim_id: c_38hMKJ58GePaZNHrf6w3W9
          source_id: s_QiFkUMnF8fZH34Ya69MVE4
          stance: supports
          locator: CBDB:342515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342515）
          source: &a1
            id: s_QiFkUMnF8fZH34Ya69MVE4
            source_type: api_record
            title: 中国历代人物传记资料库：王永春（CBDB 342515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342515&o=json
            external_identifier: CBDB:342515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zT2S7RT82GnQL3tyHe8Eje
        subject_person_id: p_KVo9tD5GtmxFP8e9t93ruK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永春，清人物。明清進士進士，籍贯臨縣，入仕進士。（中国历代人物传记资料库 CBDB 342515）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CSFtqLqgoFNpuWtH8DPSgd
          claim_id: c_zT2S7RT82GnQL3tyHe8Eje
          source_id: s_QiFkUMnF8fZH34Ya69MVE4
          stance: supports
          locator: CBDB:342515
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

# 王永春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永春 | accepted |
| bio.summary | 王永春，清人物。明清進士進士，籍贯臨縣，入仕進士。（中国历代人物传记资料库 CBDB 342515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永春（CBDB 342515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342515&o=json)
