---
schema: wang-person/v1
id: p_wavGkhnv68YMYz8thhaAFp
status: active
merged_into: null
display_name: 王啟曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_87PRMHPNVcAnMrgRatJCWq
        subject_person_id: p_wavGkhnv68YMYz8thhaAFp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_USzZn4T8QJMpNfZ6vRvkTF
          claim_id: c_87PRMHPNVcAnMrgRatJCWq
          source_id: s_KEm2E2NDEnmnuccZeLJkvk
          stance: supports
          locator: CBDB:71720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71720）
          source: &a1
            id: s_KEm2E2NDEnmnuccZeLJkvk
            source_type: api_record
            title: 中国历代人物传记资料库：王啟曾（CBDB 71720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71720&o=json
            external_identifier: CBDB:71720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HmuK5y3r5BzxFzQTa9iiEN
        subject_person_id: p_wavGkhnv68YMYz8thhaAFp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1795年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AFz4ap6S9QCMqFdroVdHE5
          claim_id: c_HmuK5y3r5BzxFzQTa9iiEN
          source_id: s_KEm2E2NDEnmnuccZeLJkvk
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
        id: c_r1Sr1SjBNoYEa4oD8mkFvi
        subject_person_id: p_wavGkhnv68YMYz8thhaAFp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟曾（生于1795年），清人物。籍贯蓬萊。（中国历代人物传记资料库 CBDB 71720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OkWf-toNOrVKZrRDLGXzDX
          claim_id: c_r1Sr1SjBNoYEa4oD8mkFvi
          source_id: s_KEm2E2NDEnmnuccZeLJkvk
          stance: supports
          locator: CBDB:71720
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

# 王啟曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟曾 | accepted |
| birth.date | 1795年 | accepted |
| bio.summary | 王啟曾（生于1795年），清人物。籍贯蓬萊。（中国历代人物传记资料库 CBDB 71720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟曾（CBDB 71720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71720&o=json)
