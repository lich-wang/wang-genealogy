---
schema: wang-person/v1
id: p_j2HzE3F4gKwm8dP9vGQ9G1
status: active
merged_into: null
display_name: 王聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a4x8XjA5kxJAtZZhH94jiJ
        subject_person_id: p_j2HzE3F4gKwm8dP9vGQ9G1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C3Cb48uTxfcV7z548SSroU
          claim_id: c_a4x8XjA5kxJAtZZhH94jiJ
          source_id: s_CkWnwj6U9ReVBKH8vqtVeJ
          stance: supports
          locator: CBDB:241027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241027）
          source: &a1
            id: s_CkWnwj6U9ReVBKH8vqtVeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 241027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241027&o=json
            external_identifier: CBDB:241027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rYVkiXKM5yvTEcqKJYKYB1
        subject_person_id: p_j2HzE3F4gKwm8dP9vGQ9G1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰，明人物。正統十三年進士，籍贯夏縣。（中国历代人物传记资料库 CBDB 241027）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2H5YQ5cXMNJuL0pRLCzlm1
          claim_id: c_rYVkiXKM5yvTEcqKJYKYB1
          source_id: s_CkWnwj6U9ReVBKH8vqtVeJ
          stance: supports
          locator: CBDB:241027
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

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | 王聰，明人物。正統十三年進士，籍贯夏縣。（中国历代人物传记资料库 CBDB 241027） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 241027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241027&o=json)
