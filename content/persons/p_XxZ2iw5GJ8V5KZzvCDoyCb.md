---
schema: wang-person/v1
id: p_XxZ2iw5GJ8V5KZzvCDoyCb
status: active
merged_into: null
display_name: 王淨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3UpG6FBKZsS3WiZVd63jEy
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J4wc7HidazZcaXtVqWK1Te
          claim_id: c_3UpG6FBKZsS3WiZVd63jEy
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
          stance: supports
          locator: CBDB:142434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142434）
          source: &a1
            id: s_6EekkKb5e2vAt6c9PbEWcw
            source_type: api_record
            title: 中国历代人物传记资料库：王淨（CBDB 142434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142434&o=json
            external_identifier: CBDB:142434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KsagazYzbgt1CiPyJoXwKR
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wvaPvvbMnu7rv3rzfw6C8z
          claim_id: c_KsagazYzbgt1CiPyJoXwKR
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
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
        id: c_ii2LtcZC3fnyEjCn5Q7Vgn
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iqN2jHJqL6JPJ5ZUtWgEGB
          claim_id: c_ii2LtcZC3fnyEjCn5Q7Vgn
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
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
        id: c_bsVq6XfH3nAZ4fesXtusFH
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淨（595年—655年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 142434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5ibvM1QZOJ9ar_uyrQ-9XG
          claim_id: c_bsVq6XfH3nAZ4fesXtusFH
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
          stance: supports
          locator: CBDB:142434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TDrTeR0tel2aPc49hWVxSK
        subject_person_id: p_HevG7fhUJLFKNL48eqNtsn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ucmK5PLpEX_xXvO3SEA4jf
          claim_id: c_TDrTeR0tel2aPc49hWVxSK
          source_id: s_6EekkKb5e2vAt6c9PbEWcw
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui29：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HevG7fhUJLFKNL48eqNtsn
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_t8Vrk0leKUvXysBL69BKh6
        subject_person_id: p_XxZ2iw5GJ8V5KZzvCDoyCb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_W4nh58zswmJ97A4idB5ywj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ziU9NygginJGDjfpufEKMY
          claim_id: c_t8Vrk0leKUvXysBL69BKh6
          source_id: s_fh1eU3tQo5TzOKrR8jqRB0
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui29：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fh1eU3tQo5TzOKrR8jqRB0
            source_type: api_record
            title: 中国历代人物传记资料库：高士明（CBDB 162065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162065&o=json
            external_identifier: CBDB:162065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W4nh58zswmJ97A4idB5ywj
        status: active
        display_name: 高士明
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王淨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淨 | accepted |
| birth.date | 595年 | accepted |
| death.date | 655年 | accepted |
| bio.summary | 王淨（595年—655年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 142434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HevG7fhUJLFKNL48eqNtsn | 王通 | accepted |
| spouses | p_W4nh58zswmJ97A4idB5ywj | 高士明 | accepted |

## 外部来源

- [中国历代人物传记资料库：高士明（CBDB 162065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162065&o=json)
- [中国历代人物传记资料库：王淨（CBDB 142434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142434&o=json)
