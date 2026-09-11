---
schema: wang-person/v1
id: p_khZqe3F3aGzUjmp2fGqXCw
status: active
merged_into: null
display_name: 王臨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U2BbBpLw6yK177CkrgKfkE
        subject_person_id: p_khZqe3F3aGzUjmp2fGqXCw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kVGNbHTki6phrvHmkJGRQQ
          claim_id: c_U2BbBpLw6yK177CkrgKfkE
          source_id: s_nBJtnayPySdWGhnD9pdoe7
          stance: supports
          locator: CBDB:100979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100979）
          source: &a1
            id: s_nBJtnayPySdWGhnD9pdoe7
            source_type: api_record
            title: 中国历代人物传记资料库：王臨（CBDB 100979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100979&o=json
            external_identifier: CBDB:100979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o5V5MLcCXERzn3UPcx5KAS
        subject_person_id: p_khZqe3F3aGzUjmp2fGqXCw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1271年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qjgiAjsJXQ1SjNJEcibJD7
          claim_id: c_o5V5MLcCXERzn3UPcx5KAS
          source_id: s_nBJtnayPySdWGhnD9pdoe7
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
        id: c_TH3ptYLYNUbhJRw3o9x5un
        subject_person_id: p_khZqe3F3aGzUjmp2fGqXCw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1334年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JK3c9hw7M4Tu1H1DGrQoCS
          claim_id: c_TH3ptYLYNUbhJRw3o9x5un
          source_id: s_nBJtnayPySdWGhnD9pdoe7
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
        id: c_ftVZcg5aLKCiUHkUoajzKQ
        subject_person_id: p_khZqe3F3aGzUjmp2fGqXCw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨（1271年—1334年），元人物。籍贯麗水，曾任縣學教諭、路吏。（中国历代人物传记资料库 CBDB 100979）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_862kPMUQJ2whtFLQ4JIp3V
          claim_id: c_ftVZcg5aLKCiUHkUoajzKQ
          source_id: s_nBJtnayPySdWGhnD9pdoe7
          stance: supports
          locator: CBDB:100979
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

# 王臨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臨 | accepted |
| birth.date | 1271年 | accepted |
| death.date | 1334年 | accepted |
| bio.summary | 王臨（1271年—1334年），元人物。籍贯麗水，曾任縣學教諭、路吏。（中国历代人物传记资料库 CBDB 100979） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臨（CBDB 100979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100979&o=json)
