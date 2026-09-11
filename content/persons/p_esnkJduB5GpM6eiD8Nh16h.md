---
schema: wang-person/v1
id: p_esnkJduB5GpM6eiD8Nh16h
status: active
merged_into: null
display_name: 王之垣
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xdqMD7xN7Qinp852q9tW4e
        subject_person_id: p_esnkJduB5GpM6eiD8Nh16h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JFG9uWWDgRhBHi5w7qmRy3
          claim_id: c_xdqMD7xN7Qinp852q9tW4e
          source_id: s_J5h1ziQ5NRt7PNTDno5XKU
          stance: supports
          locator: CBDB:126464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126464）
          source: &a1
            id: s_J5h1ziQ5NRt7PNTDno5XKU
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 126464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126464&o=json
            external_identifier: CBDB:126464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qMeKFfiJNPhsEeX7Zi7p7p
        subject_person_id: p_esnkJduB5GpM6eiD8Nh16h
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LaMCfVRFEvm1J6tBuu3Jx
          claim_id: c_qMeKFfiJNPhsEeX7Zi7p7p
          source_id: s_J5h1ziQ5NRt7PNTDno5XKU
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
        id: c_XAhjY17zXRqvLxNWHCbhUG
        subject_person_id: p_esnkJduB5GpM6eiD8Nh16h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1604年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HtqcCiqy8A7XHrfVL16X2Z
          claim_id: c_XAhjY17zXRqvLxNWHCbhUG
          source_id: s_J5h1ziQ5NRt7PNTDno5XKU
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
        id: c_9vefvqq1GGJ5NiE2A5CEW6
        subject_person_id: p_esnkJduB5GpM6eiD8Nh16h
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
        - id: cs_75RAjB1hpY5GrLULtmv5GN
          claim_id: c_9vefvqq1GGJ5NiE2A5CEW6
          source_id: s_J5h1ziQ5NRt7PNTDno5XKU
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
        id: c_NBJpbfeUENDLAT3l1Epk5W
        subject_person_id: p_Q2kyUvSiKLewvDJ84trCAk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_esnkJduB5GpM6eiD8Nh16h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_81zbT09bTQjQa05qcxo0GW
          claim_id: c_NBJpbfeUENDLAT3l1Epk5W
          source_id: s_NBQHFjDRutK3uEHM3749jq
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NBQHFjDRutK3uEHM3749jq
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 328690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328690&o=json
            external_identifier: CBDB:328690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q2kyUvSiKLewvDJ84trCAk
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JJic6bdoOPMXAj7BzBTSxr
        subject_person_id: p_HAyVcBmm4b2NDQpjnqrEC2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_esnkJduB5GpM6eiD8Nh16h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k6Wt04cuSDTXZcbFsSAVjJ
          claim_id: c_JJic6bdoOPMXAj7BzBTSxr
          source_id: s_6ymMX8xcNFyLEUsMd9uNjX
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百四十五名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6ymMX8xcNFyLEUsMd9uNjX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：于氏（328692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328692&o=json
            external_identifier: CBDB:328692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:04.717Z
            metadata_json: null
      object_person:
        id: p_HAyVcBmm4b2NDQpjnqrEC2
        status: active
        display_name: 于氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_S87XpqCXLirDYz_2TseVFN
        subject_person_id: p_aFunzdiBCEEnCHq6Us158d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_esnkJduB5GpM6eiD8Nh16h
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XdVpWwSM2vzInHutK72gpe
          claim_id: c_S87XpqCXLirDYz_2TseVFN
          source_id: s_SyPFB1pzQ1zjZ5DxuXsmM5
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SyPFB1pzQ1zjZ5DxuXsmM5
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 328689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328689&o=json
            external_identifier: CBDB:328689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aFunzdiBCEEnCHq6Us158d
        status: active
        display_name: 王麟
        merged_into_person_id: null
    - claim:
        id: c_up8rAaTOVQU8ljJEQ7knkM
        subject_person_id: p_FPPus9AT8wmb1wjQX27Ny9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_esnkJduB5GpM6eiD8Nh16h
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBw8s4fCVGdZfGF2Kk_0NO
          claim_id: c_up8rAaTOVQU8ljJEQ7knkM
          source_id: s_gVm8igupxjrrHJvGDE9hpG
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gVm8igupxjrrHJvGDE9hpG
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 328688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328688&o=json
            external_identifier: CBDB:328688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FPPus9AT8wmb1wjQX27Ny9
        status: active
        display_name: 王伍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之垣 | accepted |
| birth.date | 1527年 | accepted |
| death.date | 1604年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q2kyUvSiKLewvDJ84trCAk | 王重光 | accepted |
| spouses | p_HAyVcBmm4b2NDQpjnqrEC2 | 于氏 | accepted |
| ancestors | p_aFunzdiBCEEnCHq6Us158d | 王麟 | accepted |
| ancestors | p_FPPus9AT8wmb1wjQX27Ny9 | 王伍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 328689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328689&o=json)
- [中国历代人物传记资料库：王伍（CBDB 328688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328688&o=json)
- [中国历代人物传记资料库：王之垣（CBDB 126464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126464&o=json)
- [中国历代人物传记资料库：王重光（CBDB 328690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328690&o=json)
- [CBDB 中国历代人物传记资料库：于氏（328692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328692&o=json)
