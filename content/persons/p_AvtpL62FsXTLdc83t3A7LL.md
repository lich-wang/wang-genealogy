---
schema: wang-person/v1
id: p_AvtpL62FsXTLdc83t3A7LL
status: active
merged_into: null
display_name: 王會極
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QNcMK3C1esKBDx1AHY26Zh
        subject_person_id: p_AvtpL62FsXTLdc83t3A7LL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XByfow4FVgnH7wDg1a9caT
          claim_id: c_QNcMK3C1esKBDx1AHY26Zh
          source_id: s_Gp9Z4YSfwJgQrT2CXT8QDR
          stance: supports
          locator: CBDB:343755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343755）
          source: &a1
            id: s_Gp9Z4YSfwJgQrT2CXT8QDR
            source_type: api_record
            title: 中国历代人物传记资料库：王會極（CBDB 343755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343755&o=json
            external_identifier: CBDB:343755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9YCZnNiiH2YF3mcZEtCwvH
        subject_person_id: p_AvtpL62FsXTLdc83t3A7LL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1pxeKoJowL6P2Wzz7vQNty
          claim_id: c_9YCZnNiiH2YF3mcZEtCwvH
          source_id: s_Gp9Z4YSfwJgQrT2CXT8QDR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王會極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會極 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會極（CBDB 343755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343755&o=json)
