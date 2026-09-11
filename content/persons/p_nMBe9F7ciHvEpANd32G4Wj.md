---
schema: wang-person/v1
id: p_nMBe9F7ciHvEpANd32G4Wj
status: active
merged_into: null
display_name: 王傅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4g79rTnPGqv7hBkW2Vrd5S
        subject_person_id: p_nMBe9F7ciHvEpANd32G4Wj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_numvprpQgr4LD8bzEQyeHm
          claim_id: c_4g79rTnPGqv7hBkW2Vrd5S
          source_id: s_qGPKboQZX6MLSXfnMKmaR2
          stance: supports
          locator: CBDB:1808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1808）
          source: &a1
            id: s_qGPKboQZX6MLSXfnMKmaR2
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 1808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1808&o=json
            external_identifier: CBDB:1808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XCxrEyPL9xvxCVLQukEzP6
        subject_person_id: p_nMBe9F7ciHvEpANd32G4Wj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅，宋人物。籍贯會稽，曾任提舉、提舉市舶司官、朝請郎。（中国历代人物传记资料库 CBDB 1808）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OGtBBqWv9Em1XE-jQBfKBo
          claim_id: c_XCxrEyPL9xvxCVLQukEzP6
          source_id: s_qGPKboQZX6MLSXfnMKmaR2
          stance: supports
          locator: CBDB:1808
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

# 王傅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅 | accepted |
| bio.summary | 王傅，宋人物。籍贯會稽，曾任提舉、提舉市舶司官、朝請郎。（中国历代人物传记资料库 CBDB 1808） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傅（CBDB 1808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1808&o=json)
