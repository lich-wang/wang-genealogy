---
schema: wang-person/v1
id: p_DYLT56WnxF8ucjBEfxKt7G
status: active
merged_into: null
display_name: 王和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eiz73WEfUVZ619Qam3qp2n
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q3TonPoMXe4CP9JDonj4mb
          claim_id: c_eiz73WEfUVZ619Qam3qp2n
          source_id: s_TrbZ1QLxmczCSANfHPm41D
          stance: supports
          locator: CBDB:139519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139519）
          source: &a1
            id: s_TrbZ1QLxmczCSANfHPm41D
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 139519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139519&o=json
            external_identifier: CBDB:139519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aAV51GPTWqhbevZYnrkHDW
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 589年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_heTQehb3LhSToxJkZGk3HR
          claim_id: c_aAV51GPTWqhbevZYnrkHDW
          source_id: s_TrbZ1QLxmczCSANfHPm41D
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
        id: c_zWcCHHp7Qu3da34KkAByRk
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 667年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NYcarXjtcYmrsvq2ACBgL4
          claim_id: c_zWcCHHp7Qu3da34KkAByRk
          source_id: s_TrbZ1QLxmczCSANfHPm41D
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
        id: c_9ZLo1S3fPrjmJKEwGXCWaS
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7zXLNv77hfquJU6h7BUzA
          claim_id: c_9ZLo1S3fPrjmJKEwGXCWaS
          source_id: s_TrbZ1QLxmczCSANfHPm41D
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

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| birth.date | 589年 | accepted |
| death.date | 667年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 139519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139519&o=json)
