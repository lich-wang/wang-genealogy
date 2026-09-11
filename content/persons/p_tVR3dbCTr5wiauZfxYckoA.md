---
schema: wang-person/v1
id: p_tVR3dbCTr5wiauZfxYckoA
status: active
merged_into: null
display_name: 王文錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ybRsmvxBTunKPodqmHMKB
        subject_person_id: p_tVR3dbCTr5wiauZfxYckoA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2pN6MV21yVPUy5MNNSHSNx
          claim_id: c_8ybRsmvxBTunKPodqmHMKB
          source_id: s_QR1uQa965XNttVr6mzNs18
          stance: supports
          locator: CBDB:71430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71430）
          source: &a1
            id: s_QR1uQa965XNttVr6mzNs18
            source_type: api_record
            title: 中国历代人物传记资料库：王文錦（CBDB 71430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71430&o=json
            external_identifier: CBDB:71430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QkhCszMcUSzgGhm6WcxDS2
        subject_person_id: p_tVR3dbCTr5wiauZfxYckoA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jycmJRbbRKshHCg3ZkzJG2
          claim_id: c_QkhCszMcUSzgGhm6WcxDS2
          source_id: s_QR1uQa965XNttVr6mzNs18
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
        id: c_usJM83sgzUU67etohEe1ru
        subject_person_id: p_tVR3dbCTr5wiauZfxYckoA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文錦（生于1824年），清人物。籍贯阜寧。（中国历代人物传记资料库 CBDB 71430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cTaESy7Hxxq06lTcgVxPil
          claim_id: c_usJM83sgzUU67etohEe1ru
          source_id: s_QR1uQa965XNttVr6mzNs18
          stance: supports
          locator: CBDB:71430
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

# 王文錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文錦 | accepted |
| birth.date | 1824年 | accepted |
| bio.summary | 王文錦（生于1824年），清人物。籍贯阜寧。（中国历代人物传记资料库 CBDB 71430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文錦（CBDB 71430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71430&o=json)
