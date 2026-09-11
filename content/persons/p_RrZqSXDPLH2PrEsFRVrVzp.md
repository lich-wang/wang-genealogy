---
schema: wang-person/v1
id: p_RrZqSXDPLH2PrEsFRVrVzp
status: active
merged_into: null
display_name: 王士驥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Nrp2aYe34toBDT9vpgUj1
        subject_person_id: p_RrZqSXDPLH2PrEsFRVrVzp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_96DcHbkdE6pbqT1DbD1dKB
          claim_id: c_5Nrp2aYe34toBDT9vpgUj1
          source_id: s_WxsxERN1VfjhgG9Q2PiSLR
          stance: supports
          locator: CBDB:59894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59894）
          source: &a1
            id: s_WxsxERN1VfjhgG9Q2PiSLR
            source_type: api_record
            title: 中国历代人物传记资料库：王士驥（CBDB 59894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59894&o=json
            external_identifier: CBDB:59894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yEts7Do62hZnhhaacK6iSw
        subject_person_id: p_RrZqSXDPLH2PrEsFRVrVzp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1679年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5844Xp7Zt1v9dz91MNWniy
          claim_id: c_yEts7Do62hZnhhaacK6iSw
          source_id: s_WxsxERN1VfjhgG9Q2PiSLR
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
        id: c_LaBvp7qmGTLDKzQ4s4vd9V
        subject_person_id: p_RrZqSXDPLH2PrEsFRVrVzp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士驥（卒于1679年），清人物。籍贯山陰，曾任道監察御史。（中国历代人物传记资料库 CBDB 59894）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CzhB8AvrPL2g83MpcreFCM
          claim_id: c_LaBvp7qmGTLDKzQ4s4vd9V
          source_id: s_WxsxERN1VfjhgG9Q2PiSLR
          stance: supports
          locator: CBDB:59894
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

# 王士驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士驥 | accepted |
| death.date | 1679年 | accepted |
| bio.summary | 王士驥（卒于1679年），清人物。籍贯山陰，曾任道監察御史。（中国历代人物传记资料库 CBDB 59894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士驥（CBDB 59894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59894&o=json)
