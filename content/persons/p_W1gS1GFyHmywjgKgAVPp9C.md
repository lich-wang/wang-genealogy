---
schema: wang-person/v1
id: p_W1gS1GFyHmywjgKgAVPp9C
status: active
merged_into: null
display_name: 王有融
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LjT24QR5HWvCbCTsqeeAms
        subject_person_id: p_W1gS1GFyHmywjgKgAVPp9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有融
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3DXf9xDUGTPxe3i1dS9JZZ
          claim_id: c_LjT24QR5HWvCbCTsqeeAms
          source_id: s_nkdtMB83BcDtSAuTjp6Kg6
          stance: supports
          locator: CBDB:638602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638602）
          source: &a1
            id: s_nkdtMB83BcDtSAuTjp6Kg6
            source_type: api_record
            title: 中国历代人物传记资料库：王有融（CBDB 638602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638602&o=json
            external_identifier: CBDB:638602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eyrhNvU95vM8ENkpzj5P3W
        subject_person_id: p_W1gS1GFyHmywjgKgAVPp9C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有融，清人物。籍贯蕭山，曾任典史。（中国历代人物传记资料库 CBDB 638602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T6xmGAmPt4iEN3wBChnwv5
          claim_id: c_eyrhNvU95vM8ENkpzj5P3W
          source_id: s_nkdtMB83BcDtSAuTjp6Kg6
          stance: supports
          locator: CBDB:638602
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

# 王有融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有融 | accepted |
| bio.summary | 王有融，清人物。籍贯蕭山，曾任典史。（中国历代人物传记资料库 CBDB 638602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有融（CBDB 638602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638602&o=json)
