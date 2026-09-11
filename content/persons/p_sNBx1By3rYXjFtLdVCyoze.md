---
schema: wang-person/v1
id: p_sNBx1By3rYXjFtLdVCyoze
status: active
merged_into: null
display_name: 王汝言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S9b81o6AMcN5kRZu3LAh9K
        subject_person_id: p_sNBx1By3rYXjFtLdVCyoze
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3DtcCzRkc514fZejpZqaov
          claim_id: c_S9b81o6AMcN5kRZu3LAh9K
          source_id: s_asqVdqH4YR4QECWKaApuy9
          stance: supports
          locator: CBDB:126500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126500）
          source: &a1
            id: s_asqVdqH4YR4QECWKaApuy9
            source_type: api_record
            title: 中国历代人物传记资料库：王汝言（CBDB 126500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126500&o=json
            external_identifier: CBDB:126500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MGSAxHjXa81MxbLYeZQCLP
        subject_person_id: p_sNBx1By3rYXjFtLdVCyoze
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJ4YBrGcUwg9hdqBQD6unc
          claim_id: c_MGSAxHjXa81MxbLYeZQCLP
          source_id: s_asqVdqH4YR4QECWKaApuy9
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
        id: c_4ppMvA8aDfstaeXXPnB5Nh
        subject_person_id: p_sNBx1By3rYXjFtLdVCyoze
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1579年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dGS13CgkMWKqSEDGeJAdSF
          claim_id: c_4ppMvA8aDfstaeXXPnB5Nh
          source_id: s_asqVdqH4YR4QECWKaApuy9
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
        id: c_2WAFg7anK5YHfqK2V752yd
        subject_person_id: p_sNBx1By3rYXjFtLdVCyoze
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vTx3xecYX95hL1D1HcTxeW
          claim_id: c_2WAFg7anK5YHfqK2V752yd
          source_id: s_asqVdqH4YR4QECWKaApuy9
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
  ancestors:
    - claim:
        id: c_cb6HVL9ebtOri5eVYqPUm7
        subject_person_id: p_7pynUL8pd6HES6aaAFZwhP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0dZjuCL2ou9cCQ1XJSvwDC
          claim_id: c_cb6HVL9ebtOri5eVYqPUm7
          source_id: s_XMe7zjWwPEMG5aZamr66QQ
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百二十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XMe7zjWwPEMG5aZamr66QQ
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 318308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318308&o=json
            external_identifier: CBDB:318308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7pynUL8pd6HES6aaAFZwhP
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_Irz0hEsA2y6U5HYtAH_q_Q
        subject_person_id: p_GxHmTXA7oD96gMtbuVKH9Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_he65DHhWKTzVoJO4PUVfh7
          claim_id: c_Irz0hEsA2y6U5HYtAH_q_Q
          source_id: s_e62KDQVsTATycgpijPwCo4
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百二十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e62KDQVsTATycgpijPwCo4
            source_type: api_record
            title: 中国历代人物传记资料库：王弘（CBDB 318309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318309&o=json
            external_identifier: CBDB:318309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GxHmTXA7oD96gMtbuVKH9Q
        status: active
        display_name: 王弘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝言 | accepted |
| birth.date | 1525年 | accepted |
| death.date | 1579年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_7pynUL8pd6HES6aaAFZwhP | 王福 | accepted |
| ancestors | p_GxHmTXA7oD96gMtbuVKH9Q | 王弘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 318308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318308&o=json)
- [中国历代人物传记资料库：王弘（CBDB 318309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318309&o=json)
- [中国历代人物传记资料库：王汝言（CBDB 126500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126500&o=json)
