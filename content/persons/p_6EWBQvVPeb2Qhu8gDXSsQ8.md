---
schema: wang-person/v1
id: p_6EWBQvVPeb2Qhu8gDXSsQ8
status: active
merged_into: null
display_name: 王濟
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sq3vBCRjCBQfsna3VxAvXC
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7iYu7EwZyF7PkwM7qgjK2m
          claim_id: c_Sq3vBCRjCBQfsna3VxAvXC
          source_id: s_wLEbWYLLazDhSugeJUxnDY
          stance: supports
          locator: CBDB:312870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312870）
          source: &a1
            id: s_wLEbWYLLazDhSugeJUxnDY
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 312870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312870&o=json
            external_identifier: CBDB:312870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4eRgZMwu8h8S8CQqGBX9Mo
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，明人物。嘉靖二十九年進士，籍贯無為州，曾任正千戶。（中国历代人物传记资料库 CBDB 312870）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZbwXqkcobxhhPVg8boxaoA
          claim_id: c_4eRgZMwu8h8S8CQqGBX9Mo
          source_id: s_wLEbWYLLazDhSugeJUxnDY
          stance: supports
          locator: CBDB:312870
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_IQZzv_eCU81cn9pEzs95Ur
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m5D4GfM4aBvUFTlUmLPx3W
          claim_id: c_IQZzv_eCU81cn9pEzs95Ur
          source_id: s_bZsmvVZ8aVw1owZkSWkXLZ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bZsmvVZ8aVw1owZkSWkXLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 203985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203985&o=json
            external_identifier: CBDB:203985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3m7CP7DGKJ8uiCH5xxVdzo
        status: active
        display_name: 王極
        merged_into_person_id: null
    - claim:
        id: c_vS82tsczUOu4yvEtTjH3P_
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hv5Ao485RRGeaKxWT24P5g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2j9YXo-D8fVoWYj2hXo71
          claim_id: c_vS82tsczUOu4yvEtTjH3P_
          source_id: s_GB0CJsL-ivgEELqACrCLLq
          stance: supports
          locator: CBDB：兄弟 王極（203985）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王極 为同胞（CBDB 记「兄」），王極 之父／母即 王棟 之父／母。
          source:
            id: s_GB0CJsL-ivgEELqACrCLLq
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 312874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312874&o=json
            external_identifier: CBDB:312874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hv5Ao485RRGeaKxWT24P5g
        status: active
        display_name: 王棟
        merged_into_person_id: null
    - claim:
        id: c_CdXHJrrehOD4fddAjz7DYz
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KyPy8L1DNsywuC6rJLXrp5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X2v5q9tQIUUDGKlTJnMQ8M
          claim_id: c_CdXHJrrehOD4fddAjz7DYz
          source_id: s_T480TNFlPY-b5-ve419mm7
          stance: supports
          locator: CBDB：兄弟 王極（203985）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王檜 与 王極 为同胞（CBDB 记「兄」），王極 之父／母即 王檜 之父／母。
          source:
            id: s_T480TNFlPY-b5-ve419mm7
            source_type: api_record
            title: 中国历代人物传记资料库：王檜（CBDB 312876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312876&o=json
            external_identifier: CBDB:312876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KyPy8L1DNsywuC6rJLXrp5
        status: active
        display_name: 王檜
        merged_into_person_id: null
    - claim:
        id: c__KuyYHOT-euyOlwxOhrTwV
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oSk8NVfBAKE4981PspXopR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ug6wYn9N87Y39Sv8WV-RzM
          claim_id: c__KuyYHOT-euyOlwxOhrTwV
          source_id: s_u4tL4dWtQxf3Zj8JoKOjB6
          stance: supports
          locator: CBDB：兄弟 王極（203985）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王柱 与 王極 为同胞（CBDB 记「兄」），王極 之父／母即 王柱 之父／母。
          source:
            id: s_u4tL4dWtQxf3Zj8JoKOjB6
            source_type: api_record
            title: 中国历代人物传记资料库：王柱（CBDB 312878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312878&o=json
            external_identifier: CBDB:312878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oSk8NVfBAKE4981PspXopR
        status: active
        display_name: 王柱
        merged_into_person_id: null
    - claim:
        id: c_BwwmgJ_ke6V8cPw-85cJ2L
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pCED2AKQ8hWwVJifmmH2ii
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NAn0eOM7JIZljdLvuOfoor
          claim_id: c_BwwmgJ_ke6V8cPw-85cJ2L
          source_id: s_a_xbYb_9SfWhjYMUZKpRWl
          stance: supports
          locator: CBDB：兄弟 王極（203985）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王桂 与 王極 为同胞（CBDB 记「兄」），王極 之父／母即 王桂 之父／母。
          source:
            id: s_a_xbYb_9SfWhjYMUZKpRWl
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 312875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312875&o=json
            external_identifier: CBDB:312875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pCED2AKQ8hWwVJifmmH2ii
        status: active
        display_name: 王桂
        merged_into_person_id: null
    - claim:
        id: c_AnmIiLScuE576MDvt6b66O
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wdPTSKEesHpkKHfSHJ9g4h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vBarXSpXriINtVbn-9EV-M
          claim_id: c_AnmIiLScuE576MDvt6b66O
          source_id: s_yyEc1ySCdFO23AZv1wJng8
          stance: supports
          locator: CBDB：兄弟 王極（203985）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王楹 与 王極 为同胞（CBDB 记「兄」），王極 之父／母即 王楹 之父／母。
          source:
            id: s_yyEc1ySCdFO23AZv1wJng8
            source_type: api_record
            title: 中国历代人物传记资料库：王楹（CBDB 312877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312877&o=json
            external_identifier: CBDB:312877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wdPTSKEesHpkKHfSHJ9g4h
        status: active
        display_name: 王楹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。嘉靖二十九年進士，籍贯無為州，曾任正千戶。（中国历代人物传记资料库 CBDB 312870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3m7CP7DGKJ8uiCH5xxVdzo | 王極 | accepted |
| children | p_Hv5Ao485RRGeaKxWT24P5g | 王棟 | accepted |
| children | p_KyPy8L1DNsywuC6rJLXrp5 | 王檜 | accepted |
| children | p_oSk8NVfBAKE4981PspXopR | 王柱 | accepted |
| children | p_pCED2AKQ8hWwVJifmmH2ii | 王桂 | accepted |
| children | p_wdPTSKEesHpkKHfSHJ9g4h | 王楹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 312874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312874&o=json)
- [中国历代人物传记资料库：王桂（CBDB 312875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312875&o=json)
- [中国历代人物传记资料库：王檜（CBDB 312876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312876&o=json)
- [中国历代人物传记资料库：王極（CBDB 203985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203985&o=json)
- [中国历代人物传记资料库：王濟（CBDB 312870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312870&o=json)
- [中国历代人物传记资料库：王楹（CBDB 312877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312877&o=json)
- [中国历代人物传记资料库：王柱（CBDB 312878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312878&o=json)
