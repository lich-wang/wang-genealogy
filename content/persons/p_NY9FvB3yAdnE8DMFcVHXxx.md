---
schema: wang-person/v1
id: p_NY9FvB3yAdnE8DMFcVHXxx
status: active
merged_into: null
display_name: 王炎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MW2XpCJQom1cGZAuNeNMCN
        subject_person_id: p_NY9FvB3yAdnE8DMFcVHXxx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c47Y7GBHrFZv5EDxbeJueX
          claim_id: c_MW2XpCJQom1cGZAuNeNMCN
          source_id: s_uPnJA8KPScMDPBDNh8XtsG
          stance: supports
          locator: CBDB:175923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175923）
          source: &a1
            id: s_uPnJA8KPScMDPBDNh8XtsG
            source_type: api_record
            title: 中国历代人物传记资料库：王炎（CBDB 175923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175923&o=json
            external_identifier: CBDB:175923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3pTnszUZjZJestt6NN3dp6
        subject_person_id: p_NY9FvB3yAdnE8DMFcVHXxx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 819年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hyue8V6EcnNu39TZpWvj7w
          claim_id: c_3pTnszUZjZJestt6NN3dp6
          source_id: s_uPnJA8KPScMDPBDNh8XtsG
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
        id: c_wKKGNL1P4dP8WRFMvC5uMD
        subject_person_id: p_NY9FvB3yAdnE8DMFcVHXxx
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
        - id: cs_iTndBzDFTR2WBLEVPZpxfF
          claim_id: c_wKKGNL1P4dP8WRFMvC5uMD
          source_id: s_uPnJA8KPScMDPBDNh8XtsG
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
        id: c_VWwXM_N-A7Ay4cjWAx7CSJ
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NY9FvB3yAdnE8DMFcVHXxx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O52vG0vxG6OvbhRW6FYPN0
          claim_id: c_VWwXM_N-A7Ay4cjWAx7CSJ
          source_id: s_mdsYqnaUWb8rvkx4qY5hGx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mdsYqnaUWb8rvkx4qY5hGx
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 145608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json
            external_identifier: CBDB:145608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6YDDamD31FqdZsDuahyiXX
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children:
    - claim:
        id: c_fEbRUlnWMRGRPEm4-08CyO
        subject_person_id: p_NY9FvB3yAdnE8DMFcVHXxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a5rQiHmNZWngyHVW3pUq3z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tk7y4FM1Ry_x8iO5BmNCqQ
          claim_id: c_fEbRUlnWMRGRPEm4-08CyO
          source_id: s_iNdXp8KntRh3doJ1sSHCSf
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iNdXp8KntRh3doJ1sSHCSf
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 175924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175924&o=json
            external_identifier: CBDB:175924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a5rQiHmNZWngyHVW3pUq3z
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炎 | accepted |
| death.date | 819年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6YDDamD31FqdZsDuahyiXX | 王恕 | accepted |
| children | p_a5rQiHmNZWngyHVW3pUq3z | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 175924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175924&o=json)
- [中国历代人物传记资料库：王恕（CBDB 145608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145608&o=json)
- [中国历代人物传记资料库：王炎（CBDB 175923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175923&o=json)
