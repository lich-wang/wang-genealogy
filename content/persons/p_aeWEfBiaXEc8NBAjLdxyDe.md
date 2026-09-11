---
schema: wang-person/v1
id: p_aeWEfBiaXEc8NBAjLdxyDe
status: active
merged_into: null
display_name: 王璠
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2FXGDHLFyrbncJ5fpgBYhm
        subject_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KFvVD1zp1h89Rye3oyNSnq
          claim_id: c_2FXGDHLFyrbncJ5fpgBYhm
          source_id: s_1JzEzT12KBqGknnXk3hoxA
          stance: supports
          locator: CBDB:198758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198758）
          source: &a1
            id: s_1JzEzT12KBqGknnXk3hoxA
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 198758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198758&o=json
            external_identifier: CBDB:198758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gMo6RA8KM2LCEyCLTjXFkX
        subject_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1423年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fydPehKfE5hWaqhVHczDSM
          claim_id: c_gMo6RA8KM2LCEyCLTjXFkX
          source_id: s_1JzEzT12KBqGknnXk3hoxA
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
        id: c_DZiMpxo4HvP5K79MyDJDj8
        subject_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠（生于1423年），明人物。明清進士進士，籍贯修武，入仕進士。（中国历代人物传记资料库 CBDB 198758）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h7PplrIRfXvMKVMYYSp7Td
          claim_id: c_DZiMpxo4HvP5K79MyDJDj8
          source_id: s_1JzEzT12KBqGknnXk3hoxA
          stance: supports
          locator: CBDB:198758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RExJE15Qe96bX3q3rbNpaV
        subject_person_id: p_SFZ4bgpN7HUNWVTQwjnX9y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WWYnCXXq0e6so7A8ommscu
          claim_id: c_RExJE15Qe96bX3q3rbNpaV
          source_id: s_7JqddEbZZNCZg9LXnreF7A
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7JqddEbZZNCZg9LXnreF7A
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 313107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313107&o=json
            external_identifier: CBDB:313107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SFZ4bgpN7HUNWVTQwjnX9y
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8JLCwHEhIdStVFD12IQCxM
        subject_person_id: p_2fdZ7nzVXE411ABM98Hv5W
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZOVDfEkuo9bQpccbluZ4ha
          claim_id: c_8JLCwHEhIdStVFD12IQCxM
          source_id: s_1B2x1aFgKn3tLBFiKJLBib
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1B2x1aFgKn3tLBFiKJLBib
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 313095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313095&o=json
            external_identifier: CBDB:313095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2fdZ7nzVXE411ABM98Hv5W
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_wSfbMaG5VuPjlHFAJBjaOH
        subject_person_id: p_oC4rtp2QA8Eu4SzLXi3D5c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aeWEfBiaXEc8NBAjLdxyDe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8egbIYLSqEUxBn_T71JsBV
          claim_id: c_wSfbMaG5VuPjlHFAJBjaOH
          source_id: s_X8ktLKm7GbA217oHhLB3q2
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X8ktLKm7GbA217oHhLB3q2
            source_type: api_record
            title: 中国历代人物传记资料库：王德通（CBDB 313084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313084&o=json
            external_identifier: CBDB:313084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oC4rtp2QA8Eu4SzLXi3D5c
        status: active
        display_name: 王德通
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| birth.date | 1423年 | accepted |
| bio.summary | 王璠（生于1423年），明人物。明清進士進士，籍贯修武，入仕進士。（中国历代人物传记资料库 CBDB 198758） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SFZ4bgpN7HUNWVTQwjnX9y | 王懋 | accepted |
| ancestors | p_2fdZ7nzVXE411ABM98Hv5W | 王鐸 | accepted |
| ancestors | p_oC4rtp2QA8Eu4SzLXi3D5c | 王德通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德通（CBDB 313084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313084&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 313095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313095&o=json)
- [中国历代人物传记资料库：王璠（CBDB 198758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198758&o=json)
- [中国历代人物传记资料库：王懋（CBDB 313107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313107&o=json)
