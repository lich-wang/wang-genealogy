---
schema: wang-person/v1
id: p_T3W95sW7SgUDh6EEZUezDy
status: active
merged_into: null
display_name: 王道充
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5V9ro7NVD7F5KHqXc7B5Uc
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道充
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TBD2SyV3B26f3GdtAsmbQh
          claim_id: c_5V9ro7NVD7F5KHqXc7B5Uc
          source_id: s_W2uVhTnnk3MbPxMDojKRnj
          stance: supports
          locator: CBDB:204586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204586）
          source: &a1
            id: s_W2uVhTnnk3MbPxMDojKRnj
            source_type: api_record
            title: 中国历代人物传记资料库：王道充（CBDB 204586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204586&o=json
            external_identifier: CBDB:204586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H51u8bN6WHHefqUQGeM11v
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BdvG94TuS7uPzWLC1R6BB
          claim_id: c_H51u8bN6WHHefqUQGeM11v
          source_id: s_W2uVhTnnk3MbPxMDojKRnj
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
        id: c_J544vHdCgnABHvywPrF8QQ
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道充（生于1526年），明人物。明清進士進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 204586）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UHBh9zmhg4KQrXRTqAmimd
          claim_id: c_J544vHdCgnABHvywPrF8QQ
          source_id: s_W2uVhTnnk3MbPxMDojKRnj
          stance: supports
          locator: CBDB:204586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V1wwuVVBYO1SsLv3ZUSk4b
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4I-fzHW2n8zbFYqzy75taO
          claim_id: c_V1wwuVVBYO1SsLv3ZUSk4b
          source_id: s_bCBKKNkA6YiPxLd61kAJv6
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bCBKKNkA6YiPxLd61kAJv6
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 321152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321152&o=json
            external_identifier: CBDB:321152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VLfme2j6JVKmdY6bLRnUg5
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_H9hZGJm7LDE849A-DE2QqI
        subject_person_id: p_aZs7RsspgmyvRkoqMGX2uh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1lMebgUBExp3AOKH7MBlWl
          claim_id: c_H9hZGJm7LDE849A-DE2QqI
          source_id: s_jzUeXJcwtBWDMLGmqCFspt
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jzUeXJcwtBWDMLGmqCFspt
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 321150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321150&o=json
            external_identifier: CBDB:321150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aZs7RsspgmyvRkoqMGX2uh
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_iKE3JPfxTN5GdYG5Kx3r5t
        subject_person_id: p_yrFPjE4tPK92ux9Ny5qWph
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_68soi4AJtqZpdDGbbMQdv0
          claim_id: c_iKE3JPfxTN5GdYG5Kx3r5t
          source_id: s_5qGHo6BLKLyKRQZVZyjcgv
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5qGHo6BLKLyKRQZVZyjcgv
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 321149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321149&o=json
            external_identifier: CBDB:321149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yrFPjE4tPK92ux9Ny5qWph
        status: active
        display_name: 王謹
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王道充

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道充 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | 王道充（生于1526年），明人物。明清進士進士，籍贯常熟，入仕進士。（中国历代人物传记资料库 CBDB 204586） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLfme2j6JVKmdY6bLRnUg5 | 王法 | accepted |
| ancestors | p_aZs7RsspgmyvRkoqMGX2uh | 王賓 | accepted |
| ancestors | p_yrFPjE4tPK92ux9Ny5qWph | 王謹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 321150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321150&o=json)
- [中国历代人物传记资料库：王道充（CBDB 204586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204586&o=json)
- [中国历代人物传记资料库：王法（CBDB 321152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321152&o=json)
- [中国历代人物传记资料库：王謹（CBDB 321149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321149&o=json)
