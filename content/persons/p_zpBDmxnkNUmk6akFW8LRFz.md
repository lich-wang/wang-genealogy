---
schema: wang-person/v1
id: p_zpBDmxnkNUmk6akFW8LRFz
status: active
merged_into: null
display_name: 王鍇
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t43xhpmXnLzrm7kMUbs3FG
        subject_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dX6RF5bsKVpQE1z8wU95LL
          claim_id: c_t43xhpmXnLzrm7kMUbs3FG
          source_id: s_776dRjcFxdBG81TBeHfx9P
          stance: supports
          locator: CBDB:201376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201376）
          source: &a1
            id: s_776dRjcFxdBG81TBeHfx9P
            source_type: api_record
            title: 中国历代人物传记资料库：王鍇（CBDB 201376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201376&o=json
            external_identifier: CBDB:201376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LwTrunqgJG9zzjLLZ9NvJH
        subject_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_exLohUa6JqkhX2KovS39Qi
          claim_id: c_LwTrunqgJG9zzjLLZ9NvJH
          source_id: s_776dRjcFxdBG81TBeHfx9P
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
        id: c_784fpUYGPN1hRc7fk2F3qf
        subject_person_id: p_zpBDmxnkNUmk6akFW8LRFz
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
        - id: cs_r9gX3E3CkN5BwDKrUg1QU7
          claim_id: c_784fpUYGPN1hRc7fk2F3qf
          source_id: s_776dRjcFxdBG81TBeHfx9P
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
        id: c_owEkaWJYs6JMBzcEFlGzoE
        subject_person_id: p_JYHQSHbJNEj1qbs1Pwnvij
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHZVKNl_TSTI4Vzc5sR8wO
          claim_id: c_owEkaWJYs6JMBzcEFlGzoE
          source_id: s_pFFjBtn9YCQ7Qtnq3MLJub
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pFFjBtn9YCQ7Qtnq3MLJub
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 271354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271354&o=json
            external_identifier: CBDB:271354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JYHQSHbJNEj1qbs1Pwnvij
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_OMQmeDbOIVgCiIzhV4_WcJ
        subject_person_id: p_B4eoN41qLx1MGhkDxBctoU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SDhXLz8M87mOw3Jnx0IoiW
          claim_id: c_OMQmeDbOIVgCiIzhV4_WcJ
          source_id: s_JjnAn9gGQQniEniGrw8SSk
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第六十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JjnAn9gGQQniEniGrw8SSk
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 271353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271353&o=json
            external_identifier: CBDB:271353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B4eoN41qLx1MGhkDxBctoU
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_uFRzt4plj3ku9zFZwe5D2u
        subject_person_id: p_uJDxG88zJtx2jQCASmL829
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MOcwk2_nrJPpKS3dh5z5wC
          claim_id: c_uFRzt4plj3ku9zFZwe5D2u
          source_id: s_ReoAVfkfBkPTXTVp8gTB6A
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ReoAVfkfBkPTXTVp8gTB6A
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 271352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271352&o=json
            external_identifier: CBDB:271352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uJDxG88zJtx2jQCASmL829
        status: active
        display_name: 王綱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鍇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍇 | accepted |
| birth.date | 1468年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JYHQSHbJNEj1qbs1Pwnvij | 王紀 | accepted |
| ancestors | p_B4eoN41qLx1MGhkDxBctoU | 王忠 | accepted |
| ancestors | p_uJDxG88zJtx2jQCASmL829 | 王綱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 271352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271352&o=json)
- [中国历代人物传记资料库：王紀（CBDB 271354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271354&o=json)
- [中国历代人物传记资料库：王鍇（CBDB 201376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201376&o=json)
- [中国历代人物传记资料库：王忠（CBDB 271353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271353&o=json)
