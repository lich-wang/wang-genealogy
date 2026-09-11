---
schema: wang-person/v1
id: p_tSjdG1B1DnVyyHghZpZTEB
status: active
merged_into: null
display_name: 王彥芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1qWxxhBa2N5KheqqycBKDb
        subject_person_id: p_tSjdG1B1DnVyyHghZpZTEB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k372xtnUfYAPE9A8n4rrZ9
          claim_id: c_1qWxxhBa2N5KheqqycBKDb
          source_id: s_ZbZf6cDSrjAp8uT9UurXub
          stance: supports
          locator: CBDB:637629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637629）
          source: &a1
            id: s_ZbZf6cDSrjAp8uT9UurXub
            source_type: api_record
            title: 中国历代人物传记资料库：王彥芳（CBDB 637629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637629&o=json
            external_identifier: CBDB:637629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aPB64ssnHuDt74FQtcGSMM
        subject_person_id: p_tSjdG1B1DnVyyHghZpZTEB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥芳，清人物。籍贯武寧，入仕鄉貢舉人，曾任典簿。（中国历代人物传记资料库 CBDB 637629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CWODazXXKLDzAxgQeFcKsl
          claim_id: c_aPB64ssnHuDt74FQtcGSMM
          source_id: s_ZbZf6cDSrjAp8uT9UurXub
          stance: supports
          locator: CBDB:637629
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

# 王彥芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥芳 | accepted |
| bio.summary | 王彥芳，清人物。籍贯武寧，入仕鄉貢舉人，曾任典簿。（中国历代人物传记资料库 CBDB 637629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥芳（CBDB 637629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637629&o=json)
