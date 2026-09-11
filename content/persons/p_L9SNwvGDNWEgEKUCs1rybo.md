---
schema: wang-person/v1
id: p_L9SNwvGDNWEgEKUCs1rybo
status: active
merged_into: null
display_name: 王汝舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sLq7X9nK3bv5TbF2neu6Vq
        subject_person_id: p_L9SNwvGDNWEgEKUCs1rybo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DgL2axpiaDzwEgs5sw88eG
          claim_id: c_sLq7X9nK3bv5TbF2neu6Vq
          source_id: s_1Y39w9JTLM1AtDCDUPQs7o
          stance: supports
          locator: CBDB:71611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71611）
          source: &a1
            id: s_1Y39w9JTLM1AtDCDUPQs7o
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 71611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71611&o=json
            external_identifier: CBDB:71611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vdLXH5sFGAV37grC1kyWaK
        subject_person_id: p_L9SNwvGDNWEgEKUCs1rybo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BuidGrConTMvHZCgcoZP8K
          claim_id: c_vdLXH5sFGAV37grC1kyWaK
          source_id: s_1Y39w9JTLM1AtDCDUPQs7o
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
        id: c_bHEWG661Xja7n4qFF4dyr5
        subject_person_id: p_L9SNwvGDNWEgEKUCs1rybo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝舟（生于1800年），清人物。籍贯晉寧州，曾任縣令。（中国历代人物传记资料库 CBDB 71611）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vLUMr3PZxiooYJ62B82c9K
          claim_id: c_bHEWG661Xja7n4qFF4dyr5
          source_id: s_1Y39w9JTLM1AtDCDUPQs7o
          stance: supports
          locator: CBDB:71611
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

# 王汝舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝舟 | accepted |
| birth.date | 1800年 | accepted |
| bio.summary | 王汝舟（生于1800年），清人物。籍贯晉寧州，曾任縣令。（中国历代人物传记资料库 CBDB 71611） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝舟（CBDB 71611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71611&o=json)
