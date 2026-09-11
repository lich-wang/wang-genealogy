---
schema: wang-person/v1
id: p_SKrX6A3YZp1GxrUFanBwYL
status: active
merged_into: null
display_name: 王憲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YAqSHNpR9VDoyVKm9v2iVR
        subject_person_id: p_SKrX6A3YZp1GxrUFanBwYL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6jPqyo7DJXhQabjrz2nxHU
          claim_id: c_YAqSHNpR9VDoyVKm9v2iVR
          source_id: s_mdpZ23VtMrbo7LUCg72DVM
          stance: supports
          locator: CBDB:148801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148801）
          source: &a1
            id: s_mdpZ23VtMrbo7LUCg72DVM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 148801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148801&o=json
            external_identifier: CBDB:148801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aD474n5gAcCgfwTnutMXns
        subject_person_id: p_SKrX6A3YZp1GxrUFanBwYL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为隋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KCyc1sKZ33sd8SYoLJA4Ak
          claim_id: c_aD474n5gAcCgfwTnutMXns
          source_id: s_mdpZ23VtMrbo7LUCg72DVM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xZvpOR3zM09ce3GpJYCYcB
        subject_person_id: p_SKrX6A3YZp1GxrUFanBwYL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zmruA2xHKLRt77V-PptVP-
          claim_id: c_xZvpOR3zM09ce3GpJYCYcB
          source_id: s_ntk53u5XLSBffeHe5eAWSP
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yifeng12：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ntk53u5XLSBffeHe5eAWSP
            source_type: api_record
            title: 中国历代人物传记资料库：王叡（CBDB 142667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142667&o=json
            external_identifier: CBDB:142667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        status: active
        display_name: 王叡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_pXnwChWxOEVjE28kCChPzN
        subject_person_id: p_SKrX6A3YZp1GxrUFanBwYL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LmAoLQfacgJM3Ub6uRAgM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_okMoEvRUDLSL_ZrgaC4Ws0
          claim_id: c_pXnwChWxOEVjE28kCChPzN
          source_id: s_DMWGwN7H5DNmedpaWr7xXi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 7：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DMWGwN7H5DNmedpaWr7xXi
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 139697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139697&o=json
            external_identifier: CBDB:139697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LmAoLQfacgJM3Ub6uRAgM
        status: active
        display_name: 王烈
        merged_into_person_id: null
  other: []
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | CBDB 记载为隋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pLBQ4Lr5Q5VkSkEccpnRyk | 王叡 | accepted |
| descendants | p_2LmAoLQfacgJM3Ub6uRAgM | 王烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 139697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139697&o=json)
- [中国历代人物传记资料库：王叡（CBDB 142667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142667&o=json)
- [中国历代人物传记资料库：王憲（CBDB 148801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148801&o=json)
