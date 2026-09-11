---
schema: wang-person/v1
id: p_dKYsAzX1XL6ZKpw8RqU4i2
status: active
merged_into: null
display_name: 王恩洋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8h54CjUkHMEeKSC1DvufMX
        subject_person_id: p_dKYsAzX1XL6ZKpw8RqU4i2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩洋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JtMsNX1jJt1yALCxz2gLiv
          claim_id: c_8h54CjUkHMEeKSC1DvufMX
          source_id: s_QM1r81sDKcWAan1RfYui1C
          stance: supports
          locator: CBDB:637841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637841）
          source: &a1
            id: s_QM1r81sDKcWAan1RfYui1C
            source_type: api_record
            title: 中国历代人物传记资料库：王恩洋（CBDB 637841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637841&o=json
            external_identifier: CBDB:637841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MFrgRLR32Yc68eRyLVnJcr
        subject_person_id: p_dKYsAzX1XL6ZKpw8RqU4i2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩洋，清人物。籍贯婺源，曾任縣丞。（中国历代人物传记资料库 CBDB 637841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZmhzTMVT45Yjoldi_G0Rwg
          claim_id: c_MFrgRLR32Yc68eRyLVnJcr
          source_id: s_QM1r81sDKcWAan1RfYui1C
          stance: supports
          locator: CBDB:637841
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

# 王恩洋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩洋 | accepted |
| bio.summary | 王恩洋，清人物。籍贯婺源，曾任縣丞。（中国历代人物传记资料库 CBDB 637841） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩洋（CBDB 637841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637841&o=json)
