---
schema: wang-person/v1
id: p_E58Vca5EjnRX72JibBzjUH
status: active
merged_into: null
display_name: 王永和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KYtDJisEUyXpeYredx9Z2X
        subject_person_id: p_E58Vca5EjnRX72JibBzjUH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yZZ8d1rCVk4Ro1XPHmisEa
          claim_id: c_KYtDJisEUyXpeYredx9Z2X
          source_id: s_WcZzRfHBGy8dQ7qQB3BHsH
          stance: supports
          locator: CBDB:342505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342505）
          source: &a1
            id: s_WcZzRfHBGy8dQ7qQB3BHsH
            source_type: api_record
            title: 中国历代人物传记资料库：王永和（CBDB 342505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342505&o=json
            external_identifier: CBDB:342505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xm2v146TeRUqUELa4SeVST
        subject_person_id: p_E58Vca5EjnRX72JibBzjUH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永和，清人物。明清進士進士，籍贯昆明，入仕進士。（中国历代人物传记资料库 CBDB 342505）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U8H3W0UKEmJnblB7DUnNwU
          claim_id: c_xm2v146TeRUqUELa4SeVST
          source_id: s_WcZzRfHBGy8dQ7qQB3BHsH
          stance: supports
          locator: CBDB:342505
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

# 王永和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永和 | accepted |
| bio.summary | 王永和，清人物。明清進士進士，籍贯昆明，入仕進士。（中国历代人物传记资料库 CBDB 342505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永和（CBDB 342505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342505&o=json)
