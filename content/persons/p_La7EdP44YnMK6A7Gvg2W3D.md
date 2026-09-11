---
schema: wang-person/v1
id: p_La7EdP44YnMK6A7Gvg2W3D
status: active
merged_into: null
display_name: 王積
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dNXQVrbXmQWTP22wrXzNhU
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hTEyNAhQaCbPVoTbY2vQme
          claim_id: c_dNXQVrbXmQWTP22wrXzNhU
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
          stance: supports
          locator: CBDB:126838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126838）
          source: &a1
            id: s_UzrMNYt4hLiXQhrsqJ6zWr
            source_type: api_record
            title: 中国历代人物传记资料库：王積（CBDB 126838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126838&o=json
            external_identifier: CBDB:126838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uCvX1NwN9m9WXrBj6RvNsf
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qr3FssStQeeWQvTDNFvG3r
          claim_id: c_uCvX1NwN9m9WXrBj6RvNsf
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
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
        id: c_J5LSfaBEKkE83TSQ3U8brZ
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1567年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9JpvvLeXGgm2xbgTF9GmyG
          claim_id: c_J5LSfaBEKkE83TSQ3U8brZ
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
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
        id: c_CEgdGoqWw4tNokL5uoVCgp
        subject_person_id: p_La7EdP44YnMK6A7Gvg2W3D
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
        - id: cs_GjX8Gca3PZq2kGuQkyQbV2
          claim_id: c_CEgdGoqWw4tNokL5uoVCgp
          source_id: s_UzrMNYt4hLiXQhrsqJ6zWr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3AEjgCYLevwPoA7VA2SbQK
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IpUncYFEauUm8D5Afsn7EC
          claim_id: c_3AEjgCYLevwPoA7VA2SbQK
          source_id: s_kAVHW2hxxC3wMci6HBMCKk
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kAVHW2hxxC3wMci6HBMCKk
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 283097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283097&o=json
            external_identifier: CBDB:283097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VJQopdY7QNQGYKuXURfXDN
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YTkoFJM30gSPx3lT_Fiv7N
        subject_person_id: p_buzH1NmLD49b66Y4shHBhR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_36N4TG0MA3PqJcSWXctLLO
          claim_id: c_YTkoFJM30gSPx3lT_Fiv7N
          source_id: s_dSKDE722uR62vkAtww1rD9
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dSKDE722uR62vkAtww1rD9
            source_type: api_record
            title: 中国历代人物传记资料库：王海（CBDB 283095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283095&o=json
            external_identifier: CBDB:283095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_buzH1NmLD49b66Y4shHBhR
        status: active
        display_name: 王海
        merged_into_person_id: null
    - claim:
        id: c_rmqGl9HXql9SnQrf6bYT3t
        subject_person_id: p_pYCAbF1Xi98jKsuGW8vvJD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jofEk6W8dI9YMeEYiTf8FP
          claim_id: c_rmqGl9HXql9SnQrf6bYT3t
          source_id: s_1tBQZ3dKy7F72oNjnmvv7m
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1tBQZ3dKy7F72oNjnmvv7m
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 283096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283096&o=json
            external_identifier: CBDB:283096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pYCAbF1Xi98jKsuGW8vvJD
        status: active
        display_name: 王原
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王積

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積 | accepted |
| birth.date | 1492年 | accepted |
| death.date | 1567年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VJQopdY7QNQGYKuXURfXDN | 王成 | accepted |
| ancestors | p_buzH1NmLD49b66Y4shHBhR | 王海 | accepted |
| ancestors | p_pYCAbF1Xi98jKsuGW8vvJD | 王原 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 283097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283097&o=json)
- [中国历代人物传记资料库：王海（CBDB 283095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283095&o=json)
- [中国历代人物传记资料库：王積（CBDB 126838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126838&o=json)
- [中国历代人物传记资料库：王原（CBDB 283096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283096&o=json)
