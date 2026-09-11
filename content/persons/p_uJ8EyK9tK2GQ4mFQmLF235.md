---
schema: wang-person/v1
id: p_uJ8EyK9tK2GQ4mFQmLF235
status: active
merged_into: null
display_name: 王棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ujx5knF9FNfUGabHrWAMEq
        subject_person_id: p_uJ8EyK9tK2GQ4mFQmLF235
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q1kWsGM64gt9SGaZZcNv5y
          claim_id: c_ujx5knF9FNfUGabHrWAMEq
          source_id: s_vBNX7rBREfwDbqyF8Chjpn
          stance: supports
          locator: CBDB:283936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283936）
          source: &a1
            id: s_vBNX7rBREfwDbqyF8Chjpn
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json
            external_identifier: CBDB:283936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cJ8MF8A1XxoqmQ4yG5DtcN
        subject_person_id: p_uJ8EyK9tK2GQ4mFQmLF235
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。正德十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 283936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RIhQORvrDNM675LErqcNGL
          claim_id: c_cJ8MF8A1XxoqmQ4yG5DtcN
          source_id: s_vBNX7rBREfwDbqyF8Chjpn
          stance: supports
          locator: CBDB:283936
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

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。正德十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 283936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 283936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json)
