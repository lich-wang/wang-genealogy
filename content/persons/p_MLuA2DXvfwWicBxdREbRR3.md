---
schema: wang-person/v1
id: p_MLuA2DXvfwWicBxdREbRR3
status: active
merged_into: null
display_name: 王百齡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J1sS4LC1uA5yKZoSN3DAfV
        subject_person_id: p_MLuA2DXvfwWicBxdREbRR3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sKq5KoJ7uz4MdbAbK2npRn
          claim_id: c_J1sS4LC1uA5yKZoSN3DAfV
          source_id: s_8rP67uteQvS7iGgrLpQnDA
          stance: supports
          locator: CBDB:69195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69195）
          source: &a1
            id: s_8rP67uteQvS7iGgrLpQnDA
            source_type: api_record
            title: 中国历代人物传记资料库：王百齡（CBDB 69195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69195&o=json
            external_identifier: CBDB:69195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_weBfSE1Datpk21PHgc7K1x
        subject_person_id: p_MLuA2DXvfwWicBxdREbRR3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1770年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XuWZYGcD5Rmy8BETUqutVN
          claim_id: c_weBfSE1Datpk21PHgc7K1x
          source_id: s_8rP67uteQvS7iGgrLpQnDA
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
        id: c_5T7ZLPKMQH6iGrABFDJuzG
        subject_person_id: p_MLuA2DXvfwWicBxdREbRR3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百齡（生于1770年），清人物。明清進士進士，籍贯長安，入仕進士，曾任縣知縣、知州。（中国历代人物传记资料库 CBDB 69195）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7lFYSNw76BpsgNH7LX7T9d
          claim_id: c_5T7ZLPKMQH6iGrABFDJuzG
          source_id: s_8rP67uteQvS7iGgrLpQnDA
          stance: supports
          locator: CBDB:69195
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AK8nMw4XfSKsnyRYmTVVOY
        subject_person_id: p_PHTMPNYgPbZ6fQDxbDP6xk
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_MLuA2DXvfwWicBxdREbRR3
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qAQ-Lvnw2U-75GXvwtKS8w
          claim_id: c_AK8nMw4XfSKsnyRYmTVVOY
          source_id: s_Wo1gpSPf2t6d_-0Kvbmr1w
          stance: supports
          locator: CBDB 亲属：母（KinPerson 70471）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Wo1gpSPf2t6d_-0Kvbmr1w
            source_type: api_record
            title: 中国历代人物传记资料库：王百齡（CBDB 69195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69195&o=json
            external_identifier: CBDB:69195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PHTMPNYgPbZ6fQDxbDP6xk
        status: active
        display_name: 王筠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王百齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王百齡 | accepted |
| birth.date | 1770年 | accepted |
| bio.summary | 王百齡（生于1770年），清人物。明清進士進士，籍贯長安，入仕進士，曾任縣知縣、知州。（中国历代人物传记资料库 CBDB 69195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PHTMPNYgPbZ6fQDxbDP6xk | 王筠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王百齡（CBDB 69195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69195&o=json)
