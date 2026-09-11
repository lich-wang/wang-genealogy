---
schema: wang-person/v1
id: p_L63L5TyuU3pSJC5Y6Rggcu
status: active
merged_into: null
display_name: 王謙覲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vJx6FJP1Rr5ANnKX6wEaLR
        subject_person_id: p_L63L5TyuU3pSJC5Y6Rggcu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙覲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kfUhPWXBGeS2Aj5TTLMLxn
          claim_id: c_vJx6FJP1Rr5ANnKX6wEaLR
          source_id: s_dvTR2k2Mo7sub1n7xFNqCH
          stance: supports
          locator: CBDB:640287
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640287）
          source: &a1
            id: s_dvTR2k2Mo7sub1n7xFNqCH
            source_type: api_record
            title: 中国历代人物传记资料库：王謙覲（CBDB 640287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640287&o=json
            external_identifier: CBDB:640287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.207Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YDCyM8NYA3BC77MH1wLscN
        subject_person_id: p_L63L5TyuU3pSJC5Y6Rggcu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙覲，清人物。籍贯鳳陽，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640287）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K7FYASkwGEe0osFNf65SuG
          claim_id: c_YDCyM8NYA3BC77MH1wLscN
          source_id: s_dvTR2k2Mo7sub1n7xFNqCH
          stance: supports
          locator: CBDB:640287
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

# 王謙覲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙覲 | accepted |
| bio.summary | 王謙覲，清人物。籍贯鳳陽，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640287） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謙覲（CBDB 640287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640287&o=json)
