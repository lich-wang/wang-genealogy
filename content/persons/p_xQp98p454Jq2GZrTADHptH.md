---
schema: wang-person/v1
id: p_xQp98p454Jq2GZrTADHptH
status: active
merged_into: null
display_name: 王概
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7Z4KKPeN4NP39BAukRNsxW
        subject_person_id: p_xQp98p454Jq2GZrTADHptH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王概
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M2SFh5x5G7nBaqmeUjaf6q
          claim_id: c_7Z4KKPeN4NP39BAukRNsxW
          source_id: s_2wsoaeQ3Lkffcj9eFtsCMe
          stance: supports
          locator: CBDB:505787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505787）
          source: &a1
            id: s_2wsoaeQ3Lkffcj9eFtsCMe
            source_type: api_record
            title: 中国历代人物传记资料库：王概（CBDB 505787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505787&o=json
            external_identifier: CBDB:505787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LSFfZNctyaefpH9ucqk9ZJ
        subject_person_id: p_xQp98p454Jq2GZrTADHptH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王概，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任兵備道。（中国历代人物传记资料库 CBDB 505787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gcMS3zYyIBVGXPtmFKjHEG
          claim_id: c_LSFfZNctyaefpH9ucqk9ZJ
          source_id: s_2wsoaeQ3Lkffcj9eFtsCMe
          stance: supports
          locator: CBDB:505787
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

# 王概

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王概 | accepted |
| bio.summary | 王概，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任兵備道。（中国历代人物传记资料库 CBDB 505787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王概（CBDB 505787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505787&o=json)
