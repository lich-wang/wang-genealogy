---
schema: wang-person/v1
id: p_gDDhHyUpexDpGCwDoqx25V
status: active
merged_into: null
display_name: 王思詒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C39Dp28UGsTxsC9FpS13NF
        subject_person_id: p_gDDhHyUpexDpGCwDoqx25V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思詒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bki59p568d1d5WRkjYGZ69
          claim_id: c_C39Dp28UGsTxsC9FpS13NF
          source_id: s_VJcGrejVGP9xGZ64AGXAwG
          stance: supports
          locator: CBDB:71877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71877）
          source: &a1
            id: s_VJcGrejVGP9xGZ64AGXAwG
            source_type: api_record
            title: 中国历代人物传记资料库：王思詒（CBDB 71877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71877&o=json
            external_identifier: CBDB:71877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_93sPvgs8M2K89JKcGCFDxC
        subject_person_id: p_gDDhHyUpexDpGCwDoqx25V
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1753年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M4C2BVp1HSKdMRyAFHLv68
          claim_id: c_93sPvgs8M2K89JKcGCFDxC
          source_id: s_VJcGrejVGP9xGZ64AGXAwG
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
        id: c_G1DREQsJwxirFzahzEbjiB
        subject_person_id: p_gDDhHyUpexDpGCwDoqx25V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思詒（生于1753年），清人物。籍贯宛平。（中国历代人物传记资料库 CBDB 71877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OTfTtKYqvaGNh13ntxLGZ1
          claim_id: c_G1DREQsJwxirFzahzEbjiB
          source_id: s_VJcGrejVGP9xGZ64AGXAwG
          stance: supports
          locator: CBDB:71877
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

# 王思詒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思詒 | accepted |
| birth.date | 1753年 | accepted |
| bio.summary | 王思詒（生于1753年），清人物。籍贯宛平。（中国历代人物传记资料库 CBDB 71877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思詒（CBDB 71877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71877&o=json)
