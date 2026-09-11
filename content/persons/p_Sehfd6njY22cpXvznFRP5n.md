---
schema: wang-person/v1
id: p_Sehfd6njY22cpXvznFRP5n
status: active
merged_into: null
display_name: 王銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_btwy6DvnyxmEXNFKU3Yyha
        subject_person_id: p_Sehfd6njY22cpXvznFRP5n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G6XQyQDxffDWFmdHAPmcmQ
          claim_id: c_btwy6DvnyxmEXNFKU3Yyha
          source_id: s_wG2C3NQ8qRzag252WwKBfp
          stance: supports
          locator: CBDB:71193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71193）
          source: &a1
            id: s_wG2C3NQ8qRzag252WwKBfp
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 71193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71193&o=json
            external_identifier: CBDB:71193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VW5BwZYyhRLra9nBBHFNmQ
        subject_person_id: p_Sehfd6njY22cpXvznFRP5n
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hSRYiFBqtyFGDsX4PWf5oA
          claim_id: c_VW5BwZYyhRLra9nBBHFNmQ
          source_id: s_wG2C3NQ8qRzag252WwKBfp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3WQSRMXeXh8QXXBL9H9vX3
        subject_person_id: p_Sehfd6njY22cpXvznFRP5n
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1829年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rQAUXbtdiGNNFfKFNbY2GM
          claim_id: c_3WQSRMXeXh8QXXBL9H9vX3
          source_id: s_wG2C3NQ8qRzag252WwKBfp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nQiSCnTDP7LhCZtR7UVRWy
        subject_person_id: p_Sehfd6njY22cpXvznFRP5n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘（1792年—1829年），清人物。籍贯會稽。（中国历代人物传记资料库 CBDB 71193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xx_QhaUn1bCuSGlXElDe4f
          claim_id: c_nQiSCnTDP7LhCZtR7UVRWy
          source_id: s_wG2C3NQ8qRzag252WwKBfp
          stance: supports
          locator: CBDB:71193
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

# 王銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘 | accepted |
| birth.date | 1792年 | accepted |
| death.date | 1829年 | accepted |
| bio.summary | 王銘（1792年—1829年），清人物。籍贯會稽。（中国历代人物传记资料库 CBDB 71193） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 71193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71193&o=json)
