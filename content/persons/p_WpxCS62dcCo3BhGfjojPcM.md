---
schema: wang-person/v1
id: p_WpxCS62dcCo3BhGfjojPcM
status: active
merged_into: null
display_name: 王乃賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CFv6N4FMrAuCp9CzRSGz1Y
        subject_person_id: p_WpxCS62dcCo3BhGfjojPcM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r5FMHfqF2immbDww2NiapC
          claim_id: c_CFv6N4FMrAuCp9CzRSGz1Y
          source_id: s_tH96zcor2TU86h2a7Q2YRK
          stance: supports
          locator: CBDB:635766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635766）
          source: &a1
            id: s_tH96zcor2TU86h2a7Q2YRK
            source_type: api_record
            title: 中国历代人物传记资料库：王乃賓（CBDB 635766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635766&o=json
            external_identifier: CBDB:635766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q58YYxooKifJKBKnQoM64Y
        subject_person_id: p_WpxCS62dcCo3BhGfjojPcM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃賓，清人物。籍贯合浦，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 635766）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6nx0LUC6fWlvuNbhvdB6no
          claim_id: c_Q58YYxooKifJKBKnQoM64Y
          source_id: s_tH96zcor2TU86h2a7Q2YRK
          stance: supports
          locator: CBDB:635766
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

# 王乃賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乃賓 | accepted |
| bio.summary | 王乃賓，清人物。籍贯合浦，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 635766） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乃賓（CBDB 635766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635766&o=json)
