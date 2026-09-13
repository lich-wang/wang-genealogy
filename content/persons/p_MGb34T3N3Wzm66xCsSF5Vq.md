---
schema: wang-person/v1
id: p_MGb34T3N3Wzm66xCsSF5Vq
status: active
merged_into: null
display_name: 王文誥
cbdb_id: 71426
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ee8LR9HqToDDgtFtkQ2xBP
        subject_person_id: p_MGb34T3N3Wzm66xCsSF5Vq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文誥（生于1764年），清人物。籍贯仁和。（中国历代人物传记资料库 CBDB 71426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aqyh_djHptF13hkDvSVYQR
          claim_id: c_Ee8LR9HqToDDgtFtkQ2xBP
          source_id: s_sBd8EDziXoTarVoec9AZux
          stance: supports
          locator: CBDB:71426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sBd8EDziXoTarVoec9AZux
            source_type: api_record
            title: 中国历代人物传记资料库：王文誥（CBDB 71426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71426&o=json
            external_identifier: CBDB:71426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TkPvR66JB2a2LHeCtidE6s
        subject_person_id: p_MGb34T3N3Wzm66xCsSF5Vq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1764年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1764-01-01
            latest: 1764-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S534z4J7ZKP3xTRBzKPJdd
          claim_id: c_TkPvR66JB2a2LHeCtidE6s
          source_id: s_sBd8EDziXoTarVoec9AZux
          stance: supports
          locator: CBDB:71426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1764
          source:
            id: s_sBd8EDziXoTarVoec9AZux
            source_type: api_record
            title: 中国历代人物传记资料库：王文誥（CBDB 71426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71426&o=json
            external_identifier: CBDB:71426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xzy5xgV5a29P57oaXb2B5Y
        subject_person_id: p_MGb34T3N3Wzm66xCsSF5Vq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LfWbHYWtixZfarzQvGhgWZ
          claim_id: c_Xzy5xgV5a29P57oaXb2B5Y
          source_id: s_sBd8EDziXoTarVoec9AZux
          stance: supports
          locator: CBDB:71426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1764
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

# 王文誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文誥（生于1764年），清人物。籍贯仁和。（中国历代人物传记资料库 CBDB 71426） | accepted |
| birth.date | 1764年 | accepted |
| name.primary | 王文誥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文誥（CBDB 71426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71426&o=json)
