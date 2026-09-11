---
schema: wang-person/v1
id: p_wASVEDbiYLEKABsFruwoev
status: active
merged_into: null
display_name: 王衍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uAcTKaHENC5N1x2hdcDQVq
        subject_person_id: p_wASVEDbiYLEKABsFruwoev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2jAps6tCJeugu17T739eQf
          claim_id: c_uAcTKaHENC5N1x2hdcDQVq
          source_id: s_AuHdmDmA6paKx5uynv9KTW
          stance: supports
          locator: CBDB:92058
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92058）
          source: &a1
            id: s_AuHdmDmA6paKx5uynv9KTW
            source_type: api_record
            title: 中国历代人物传记资料库：王衍（CBDB 92058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92058&o=json
            external_identifier: CBDB:92058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wECPVsPskBWoc6oa6ze2J1
        subject_person_id: p_wASVEDbiYLEKABsFruwoev
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 899年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZ4YGv15t23R91ww84hD36
          claim_id: c_wECPVsPskBWoc6oa6ze2J1
          source_id: s_AuHdmDmA6paKx5uynv9KTW
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
        id: c_DdhJBTULDUCGwu1WS79ASs
        subject_person_id: p_wASVEDbiYLEKABsFruwoev
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 926年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCx19rYQxPEK7QNR64HPd4
          claim_id: c_DdhJBTULDUCGwu1WS79ASs
          source_id: s_AuHdmDmA6paKx5uynv9KTW
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
        id: c_zKbGiWF15V5QJzCV6pdvbo
        subject_person_id: p_wASVEDbiYLEKABsFruwoev
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍（899年—926年），前蜀人物。籍贯舞陽，身份为詩人、工於文，曾任皇帝、太子、左奉駕軍使。（中国历代人物传记资料库 CBDB 92058）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OE7msXZadNQxgrpGVRWM7y
          claim_id: c_zKbGiWF15V5QJzCV6pdvbo
          source_id: s_AuHdmDmA6paKx5uynv9KTW
          stance: supports
          locator: CBDB:92058
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

# 王衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍 | accepted |
| birth.date | 899年 | accepted |
| death.date | 926年 | accepted |
| bio.summary | 王衍（899年—926年），前蜀人物。籍贯舞陽，身份为詩人、工於文，曾任皇帝、太子、左奉駕軍使。（中国历代人物传记资料库 CBDB 92058） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍（CBDB 92058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92058&o=json)
