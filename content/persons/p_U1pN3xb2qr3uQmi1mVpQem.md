---
schema: wang-person/v1
id: p_U1pN3xb2qr3uQmi1mVpQem
status: active
merged_into: null
display_name: 王宏佐
cbdb_id: 414292
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CMuZZMS13LJz7aSKySVHs6
        subject_person_id: p_U1pN3xb2qr3uQmi1mVpQem
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏佐，清人物。曾任守備。（中国历代人物传记资料库 CBDB 414292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kAWjD5C6uWhyqkg0SQStC0
          claim_id: c_CMuZZMS13LJz7aSKySVHs6
          source_id: s_B8BV16GN2bnLssZrQC98QY
          stance: supports
          locator: CBDB:414292
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B8BV16GN2bnLssZrQC98QY
            source_type: api_record
            title: 中国历代人物传记资料库：王宏佐（CBDB 414292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414292&o=json
            external_identifier: CBDB:414292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:30.615Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_huNtgpBW23wJsFM2VwxZWH
        subject_person_id: p_U1pN3xb2qr3uQmi1mVpQem
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KFnAfYFwf4d522Td7hKV9x
          claim_id: c_huNtgpBW23wJsFM2VwxZWH
          source_id: s_B8BV16GN2bnLssZrQC98QY
          stance: supports
          locator: CBDB:414292
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5301-5400）｜历史性依据：CBDB 朝代 = 清
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

# 王宏佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宏佐，清人物。曾任守備。（中国历代人物传记资料库 CBDB 414292） | accepted |
| name.primary | 王宏佐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏佐（CBDB 414292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414292&o=json)
