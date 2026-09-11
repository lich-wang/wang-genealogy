---
schema: wang-person/v1
id: p_hDJe5v9tZ1zb7NVKfSdi1s
status: active
merged_into: null
display_name: 王思溫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Af7ASZiiz3UvsDoCKsKYB2
        subject_person_id: p_hDJe5v9tZ1zb7NVKfSdi1s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e2w6BjvLKTozGan9UPEJRo
          claim_id: c_Af7ASZiiz3UvsDoCKsKYB2
          source_id: s_cmrvRKCM8jKh2Cn55Hn75h
          stance: supports
          locator: CBDB:147773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147773）
          source: &a1
            id: s_cmrvRKCM8jKh2Cn55Hn75h
            source_type: api_record
            title: 中国历代人物传记资料库：王思溫（CBDB 147773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147773&o=json
            external_identifier: CBDB:147773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GkLe73sCSJHATLgya5QACB
        subject_person_id: p_hDJe5v9tZ1zb7NVKfSdi1s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思溫，唐人物。籍贯芒山。（中国历代人物传记资料库 CBDB 147773）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MRQSdnsi0bw3eKg7peoTGK
          claim_id: c_GkLe73sCSJHATLgya5QACB
          source_id: s_cmrvRKCM8jKh2Cn55Hn75h
          stance: supports
          locator: CBDB:147773
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e3dB7iXxkzaj0ZIKIKmoR9
        subject_person_id: p_hpiL8y2kkeQYQD6WASebN9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hDJe5v9tZ1zb7NVKfSdi1s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Ff2oqDGAnTBPLuk-IoqSt
          claim_id: c_e3dB7iXxkzaj0ZIKIKmoR9
          source_id: s_cmrvRKCM8jKh2Cn55Hn75h
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 31：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hpiL8y2kkeQYQD6WASebN9
        status: active
        display_name: 王積善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思溫 | accepted |
| bio.summary | 王思溫，唐人物。籍贯芒山。（中国历代人物传记资料库 CBDB 147773） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hpiL8y2kkeQYQD6WASebN9 | 王積善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思溫（CBDB 147773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147773&o=json)
