---
schema: wang-person/v1
id: p_NkAbTJ9d5SmH3apwzG6XBB
status: active
merged_into: null
display_name: 王靈仙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZbXHTX9GHzb3NgZCKMq3Uo
        subject_person_id: p_NkAbTJ9d5SmH3apwzG6XBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靈仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qMy2Rnah8sAmXCzvipGuxg
          claim_id: c_ZbXHTX9GHzb3NgZCKMq3Uo
          source_id: s_2FjEnWYNbCzKhqiYb1AeVt
          stance: supports
          locator: CBDB:142250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142250）
          source: &a1
            id: s_2FjEnWYNbCzKhqiYb1AeVt
            source_type: api_record
            title: 中国历代人物传记资料库：王靈仙（CBDB 142250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142250&o=json
            external_identifier: CBDB:142250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BREP3J7qMRiUnEzaSpcHzo
        subject_person_id: p_NkAbTJ9d5SmH3apwzG6XBB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 591年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2qbLrtvZGtdE3Z4TGpf7JY
          claim_id: c_BREP3J7qMRiUnEzaSpcHzo
          source_id: s_2FjEnWYNbCzKhqiYb1AeVt
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
        id: c_J96n11XiRCgYZ6oqfXgbGL
        subject_person_id: p_NkAbTJ9d5SmH3apwzG6XBB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 641年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRnvjv94fnj4PEmoEEZbiF
          claim_id: c_J96n11XiRCgYZ6oqfXgbGL
          source_id: s_2FjEnWYNbCzKhqiYb1AeVt
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
        id: c_FuY1HEePbimjhHDRJAKpTT
        subject_person_id: p_NkAbTJ9d5SmH3apwzG6XBB
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
        - id: cs_eU28WRoez2RUabJnijkkQE
          claim_id: c_FuY1HEePbimjhHDRJAKpTT
          source_id: s_2FjEnWYNbCzKhqiYb1AeVt
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
        id: c_c6SclBf50dLbwHwG0OIo1D
        subject_person_id: p_yUZLAtMWFoZRMpr8ZmpoQa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NkAbTJ9d5SmH3apwzG6XBB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bszj1tSswKg-lgSOnVw2mk
          claim_id: c_c6SclBf50dLbwHwG0OIo1D
          source_id: s_tejBG873ouLnUuY3rrsL7B
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Zhenguan25：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tejBG873ouLnUuY3rrsL7B
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 161932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161932&o=json
            external_identifier: CBDB:161932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yUZLAtMWFoZRMpr8ZmpoQa
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Pw4q_9yFOsyTmhuoAgjAWy
        subject_person_id: p_a6jmb3ajVms3ePYfHKWKGp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NkAbTJ9d5SmH3apwzG6XBB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m253hcn4W_U2U1uacMk5JF
          claim_id: c_Pw4q_9yFOsyTmhuoAgjAWy
          source_id: s_ML9FjNANmmG3EfnYzWQVQd
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Zhenguan25：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ML9FjNANmmG3EfnYzWQVQd
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 161931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161931&o=json
            external_identifier: CBDB:161931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a6jmb3ajVms3ePYfHKWKGp
        status: active
        display_name: 王綱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王靈仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靈仙 | accepted |
| birth.date | 591年 | accepted |
| death.date | 641年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yUZLAtMWFoZRMpr8ZmpoQa | 王貴 | accepted |
| ancestors | p_a6jmb3ajVms3ePYfHKWKGp | 王綱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 161931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161931&o=json)
- [中国历代人物传记资料库：王貴（CBDB 161932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161932&o=json)
- [中国历代人物传记资料库：王靈仙（CBDB 142250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142250&o=json)
