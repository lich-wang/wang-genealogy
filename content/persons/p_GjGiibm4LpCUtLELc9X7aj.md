---
schema: wang-person/v1
id: p_GjGiibm4LpCUtLELc9X7aj
status: active
merged_into: null
display_name: 王术
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MAndt6EGtfV1o9kPxNayqm
        subject_person_id: p_GjGiibm4LpCUtLELc9X7aj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王术
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i7PQQ1NdmYVkPsh6rXJ4Ph
          claim_id: c_MAndt6EGtfV1o9kPxNayqm
          source_id: s_HSuCzHi2UKsx9FC15ov5xF
          stance: supports
          locator: CBDB:213209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213209）
          source: &a1
            id: s_HSuCzHi2UKsx9FC15ov5xF
            source_type: api_record
            title: 中国历代人物传记资料库：王术（CBDB 213209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213209&o=json
            external_identifier: CBDB:213209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h2Rvz6nQRKPh14K651ezpR
        subject_person_id: p_GjGiibm4LpCUtLELc9X7aj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王术，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213209）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M3bBdLxLF4sz1bp48isjaK
          claim_id: c_h2Rvz6nQRKPh14K651ezpR
          source_id: s_HSuCzHi2UKsx9FC15ov5xF
          stance: supports
          locator: CBDB:213209
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

# 王术

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王术 | accepted |
| bio.summary | 王术，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王术（CBDB 213209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213209&o=json)
