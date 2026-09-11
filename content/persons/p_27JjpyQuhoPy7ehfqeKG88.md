---
schema: wang-person/v1
id: p_27JjpyQuhoPy7ehfqeKG88
status: active
merged_into: null
display_name: 王智
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fMH3cRKdjPUXCuyCpuVPCy
        subject_person_id: p_27JjpyQuhoPy7ehfqeKG88
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wFAz68zqAmTWcsFUNDKa8Q
          claim_id: c_fMH3cRKdjPUXCuyCpuVPCy
          source_id: s_eV3n3P2H6Gwc13NGFoUkE8
          stance: supports
          locator: CBDB:139618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139618）
          source: &a1
            id: s_eV3n3P2H6Gwc13NGFoUkE8
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 139618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139618&o=json
            external_identifier: CBDB:139618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w4k9L7h4hRpzeJupr98bXA
        subject_person_id: p_27JjpyQuhoPy7ehfqeKG88
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 596年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Keq9mcLKpfE9kM6grCDN4M
          claim_id: c_w4k9L7h4hRpzeJupr98bXA
          source_id: s_eV3n3P2H6Gwc13NGFoUkE8
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
        id: c_ge4z79nczzRvb7RUTrqaz2
        subject_person_id: p_27JjpyQuhoPy7ehfqeKG88
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 671年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J6ZpohJF4JABtKM4qYnZyb
          claim_id: c_ge4z79nczzRvb7RUTrqaz2
          source_id: s_eV3n3P2H6Gwc13NGFoUkE8
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
        id: c_orHrcnr6ap4GvD35Kdaa1v
        subject_person_id: p_27JjpyQuhoPy7ehfqeKG88
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
        - id: cs_UNwK7ffAiEobt7JgBPBjK9
          claim_id: c_orHrcnr6ap4GvD35Kdaa1v
          source_id: s_eV3n3P2H6Gwc13NGFoUkE8
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
        id: c__PUT-qe5RieYpxnHrUctUN
        subject_person_id: p_zJibquaKXDF6eMKXvyGJ6H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_27JjpyQuhoPy7ehfqeKG88
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4aiRg-jNxz2nKW5C-vbZiU
          claim_id: c__PUT-qe5RieYpxnHrUctUN
          source_id: s_eV3n3P2H6Gwc13NGFoUkE8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 39：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zJibquaKXDF6eMKXvyGJ6H
        status: active
        display_name: 王音
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_dhY0lQyoJ8SpPGnmbqopkb
        subject_person_id: p_27JjpyQuhoPy7ehfqeKG88
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dxfnHyDBZ8JmE7aHUMZh1d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pk9h5cV-CBjbWrlkP58QM0
          claim_id: c_dhY0lQyoJ8SpPGnmbqopkb
          source_id: s_MnD15cbgXygnd6OHfmCjTT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 39：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MnD15cbgXygnd6OHfmCjTT
            source_type: api_record
            title: 中国历代人物传记资料库：張某(王智夫)（CBDB 148532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148532&o=json
            external_identifier: CBDB:148532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dxfnHyDBZ8JmE7aHUMZh1d
        status: active
        display_name: 張某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| birth.date | 596年 | accepted |
| death.date | 671年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zJibquaKXDF6eMKXvyGJ6H | 王音 | accepted |
| spouses | p_dxfnHyDBZ8JmE7aHUMZh1d | 張某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王智（CBDB 139618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139618&o=json)
- [中国历代人物传记资料库：張某(王智夫)（CBDB 148532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148532&o=json)
