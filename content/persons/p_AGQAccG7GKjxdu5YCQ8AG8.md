---
schema: wang-person/v1
id: p_AGQAccG7GKjxdu5YCQ8AG8
status: active
merged_into: null
display_name: 王友貴
cbdb_id: 69076
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sPAofGJQTDSABfUxN6M4Rw
        subject_person_id: p_AGQAccG7GKjxdu5YCQ8AG8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友貴（卒于1826年），清人物。籍贯西寧，入仕募入軍伍，曾任營經制外委、右營把總。（中国历代人物传记资料库 CBDB 69076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5devfcn1qSIZdvbXEcvhHC
          claim_id: c_sPAofGJQTDSABfUxN6M4Rw
          source_id: s_5H1hodyw3Dq6vfr7Ykcnrs
          stance: supports
          locator: CBDB:69076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5H1hodyw3Dq6vfr7Ykcnrs
            source_type: api_record
            title: 中国历代人物传记资料库：王友貴（CBDB 69076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69076&o=json
            external_identifier: CBDB:69076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DuLeqEB46g8eMmzAGVxSDc
        subject_person_id: p_AGQAccG7GKjxdu5YCQ8AG8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1826年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1826-01-01
            latest: 1826-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Q8CtpXJYNESM5z47JmskC
          claim_id: c_DuLeqEB46g8eMmzAGVxSDc
          source_id: s_5H1hodyw3Dq6vfr7Ykcnrs
          stance: supports
          locator: CBDB:69076
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1826
          source:
            id: s_5H1hodyw3Dq6vfr7Ykcnrs
            source_type: api_record
            title: 中国历代人物传记资料库：王友貴（CBDB 69076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69076&o=json
            external_identifier: CBDB:69076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xn5KCEhqesnP49BnAzFPxm
        subject_person_id: p_AGQAccG7GKjxdu5YCQ8AG8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jupTc85dHSJKoa2vRPdFwm
          claim_id: c_xn5KCEhqesnP49BnAzFPxm
          source_id: s_5H1hodyw3Dq6vfr7Ykcnrs
          stance: supports
          locator: CBDB:69076
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1826
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_p5Gj5jUjFVX_vOb8lhP22I
        subject_person_id: p_AGQAccG7GKjxdu5YCQ8AG8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zdH8ZZvkaC5ZG5BwA6dxG4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VRp80wdZUx3LzqEh4BHxPx
          claim_id: c_p5Gj5jUjFVX_vOb8lhP22I
          source_id: s_5H1hodyw3Dq6vfr7Ykcnrs
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12773：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5H1hodyw3Dq6vfr7Ykcnrs
            source_type: api_record
            title: 中国历代人物传记资料库：王友貴（CBDB 69076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69076&o=json
            external_identifier: CBDB:69076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zdH8ZZvkaC5ZG5BwA6dxG4
        status: active
        display_name: 王受祿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王友貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王友貴（卒于1826年），清人物。籍贯西寧，入仕募入軍伍，曾任營經制外委、右營把總。（中国历代人物传记资料库 CBDB 69076） | accepted |
| death.date | 1826年 | accepted |
| name.primary | 王友貴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zdH8ZZvkaC5ZG5BwA6dxG4 | 王受祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友貴（CBDB 69076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69076&o=json)
