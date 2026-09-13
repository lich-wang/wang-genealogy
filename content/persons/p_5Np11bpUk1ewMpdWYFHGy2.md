---
schema: wang-person/v1
id: p_5Np11bpUk1ewMpdWYFHGy2
status: active
merged_into: null
display_name: 王令思
cbdb_id: 163178
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9CbXC2x5DF4QcgP2RugrN8
        subject_person_id: p_5Np11bpUk1ewMpdWYFHGy2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令思，史料所见人物。本项目依据《中国历代人物传记资料库：王令思（CBDB 163178）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_CpN_ILzxgunNBtPOWYqBIG
          claim_id: c_9CbXC2x5DF4QcgP2RugrN8
          source_id: s_rzrTPfAsQYmZCnUY695x46
          stance: supports
          locator: CBDB:163178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_rzrTPfAsQYmZCnUY695x46
            source_type: api_record
            title: 中国历代人物传记资料库：王令思（CBDB 163178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163178&o=json
            external_identifier: CBDB:163178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pgBDJBsB4xMUsz3QdMUH7W
        subject_person_id: p_5Np11bpUk1ewMpdWYFHGy2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iBN2uu3hXTcaY4mScfoTsV
          claim_id: c_pgBDJBsB4xMUsz3QdMUH7W
          source_id: s_rzrTPfAsQYmZCnUY695x46
          stance: supports
          locator: CBDB:163178
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 南北朝
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oQ9ClEa-qkBqwN6fxuYnnx
        subject_person_id: p_7fzzJxcbXZYkPTFPz4wvKh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Np11bpUk1ewMpdWYFHGy2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4qfxRtHUDcB_cFkIdPgiBA
          claim_id: c_oQ9ClEa-qkBqwN6fxuYnnx
          source_id: s_n3VEAD8PtJrNNjsnm57GMb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n3VEAD8PtJrNNjsnm57GMb
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 163177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163177&o=json
            external_identifier: CBDB:163177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7fzzJxcbXZYkPTFPz4wvKh
        status: active
        display_name: 王緝
        merged_into_person_id: null
  children:
    - claim:
        id: c_Kv4Vt_F7ICikuYSNZe9IqM
        subject_person_id: p_5Np11bpUk1ewMpdWYFHGy2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qU5ePg25AxmDuXd2vF94MX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_twnsz00UhBjhwn9I2jJzjo
          claim_id: c_Kv4Vt_F7ICikuYSNZe9IqM
          source_id: s_gr9nC5fppawN8wNE5BV19X
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gr9nC5fppawN8wNE5BV19X
            source_type: api_record
            title: 中国历代人物传记资料库：王元慎（CBDB 163179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163179&o=json
            external_identifier: CBDB:163179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qU5ePg25AxmDuXd2vF94MX
        status: active
        display_name: 王元慎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_wrmhPIT-rrK-DR7WfYZyms
        subject_person_id: p_5Np11bpUk1ewMpdWYFHGy2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NSHzodfNdrkusSbSkt8y7L
          claim_id: c_wrmhPIT-rrK-DR7WfYZyms
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Wansuitongtian4：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KFkS5hiMaGh1959L5ARJrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王婉（CBDB 142690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json
            external_identifier: CBDB:142690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6YpXxeKRMWr6vVrAX9K1Tv
        status: active
        display_name: 王婉
        merged_into_person_id: null
  other: []
---

# 王令思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王令思，史料所见人物。本项目依据《中国历代人物传记资料库：王令思（CBDB 163178）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王令思 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7fzzJxcbXZYkPTFPz4wvKh | 王緝 | accepted |
| children | p_qU5ePg25AxmDuXd2vF94MX | 王元慎 | accepted |
| descendants | p_6YpXxeKRMWr6vVrAX9K1Tv | 王婉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緝（CBDB 163177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163177&o=json)
- [中国历代人物传记资料库：王令思（CBDB 163178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163178&o=json)
- [中国历代人物传记资料库：王婉（CBDB 142690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json)
- [中国历代人物传记资料库：王元慎（CBDB 163179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163179&o=json)
