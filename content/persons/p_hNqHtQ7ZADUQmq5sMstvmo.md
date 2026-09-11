---
schema: wang-person/v1
id: p_hNqHtQ7ZADUQmq5sMstvmo
status: active
merged_into: null
display_name: 王傳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQmDzZjM7YEgBq9yXjfKW1
        subject_person_id: p_hNqHtQ7ZADUQmq5sMstvmo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qLPpNRx7TAAX5f6BNw7SJC
          claim_id: c_FQmDzZjM7YEgBq9yXjfKW1
          source_id: s_oYK78jzXiYL8rtEp4QaGYJ
          stance: supports
          locator: CBDB:342355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342355）
          source: &a1
            id: s_oYK78jzXiYL8rtEp4QaGYJ
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 342355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342355&o=json
            external_identifier: CBDB:342355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rzUxENCxDMc1A4evMgWVZL
        subject_person_id: p_hNqHtQ7ZADUQmq5sMstvmo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳，明人物。明清進士進士，籍贯金吾右衛，入仕進士。（中国历代人物传记资料库 CBDB 342355）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mhGqLdp2NVMNBAfCyaMoPT
          claim_id: c_rzUxENCxDMc1A4evMgWVZL
          source_id: s_oYK78jzXiYL8rtEp4QaGYJ
          stance: supports
          locator: CBDB:342355
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

# 王傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傳 | accepted |
| bio.summary | 王傳，明人物。明清進士進士，籍贯金吾右衛，入仕進士。（中国历代人物传记资料库 CBDB 342355） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傳（CBDB 342355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342355&o=json)
