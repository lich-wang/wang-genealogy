---
schema: wang-person/v1
id: p_gYCzF6vom9uRciu3ySukCo
status: active
merged_into: null
display_name: 王輔
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uWLw41SF5kwr92B9NgEX4j
        subject_person_id: p_gYCzF6vom9uRciu3ySukCo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bYZNthHcBTRr7EW8ZiQqE6
          claim_id: c_uWLw41SF5kwr92B9NgEX4j
          source_id: s_PzpjqWC2hRndJ6gnuQh22b
          stance: supports
          locator: CBDB:212648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212648）
          source: &a1
            id: s_PzpjqWC2hRndJ6gnuQh22b
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 212648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212648&o=json
            external_identifier: CBDB:212648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.095Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eJGaMW59zSGXTLScCGCPQM
        subject_person_id: p_gYCzF6vom9uRciu3ySukCo
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
        - id: cs_8tnZa1M8c9vQs9YZhYo5xh
          claim_id: c_eJGaMW59zSGXTLScCGCPQM
          source_id: s_PzpjqWC2hRndJ6gnuQh22b
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
        id: c_CO-Ph_HAuUEdA81_Vz0J5R
        subject_person_id: p_aQkyWCSC3KokRarHEM1c8Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gYCzF6vom9uRciu3ySukCo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XUaoQes4kzMbN2lXHbS9V3
          claim_id: c_CO-Ph_HAuUEdA81_Vz0J5R
          source_id: s_L7TuBtQ6aWwZDZBFWbSwFB
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第九十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L7TuBtQ6aWwZDZBFWbSwFB
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 227950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227950&o=json
            external_identifier: CBDB:227950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aQkyWCSC3KokRarHEM1c8Q
        status: active
        display_name: 王聰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tcOf3jhYTajvL2GlD4ibbA
        subject_person_id: p_1153YmzQrFf4MqpahVJUVe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gYCzF6vom9uRciu3ySukCo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4I9ACv4HotyQRXUqH3yueg
          claim_id: c_tcOf3jhYTajvL2GlD4ibbA
          source_id: s_HADGpGmGSr6wM8sh2Mqjo9
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第九十一名：曾孫；重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HADGpGmGSr6wM8sh2Mqjo9
            source_type: api_record
            title: 中国历代人物传记资料库：王俊卿（CBDB 227928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227928&o=json
            external_identifier: CBDB:227928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1153YmzQrFf4MqpahVJUVe
        status: active
        display_name: 王俊卿
        merged_into_person_id: null
    - claim:
        id: c_QoEiuq6MpdiOUl2OaAWChW
        subject_person_id: p_9APm5s4Qnt3Y1TuWpeSg1p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gYCzF6vom9uRciu3ySukCo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DjV-g3jy5UbT8jLGDe6BR3
          claim_id: c_QoEiuq6MpdiOUl2OaAWChW
          source_id: s_oYwPkbWkuWCrQ3GYQsxLVj
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第九十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oYwPkbWkuWCrQ3GYQsxLVj
            source_type: api_record
            title: 中国历代人物传记资料库：王文智（CBDB 227939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227939&o=json
            external_identifier: CBDB:227939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9APm5s4Qnt3Y1TuWpeSg1p
        status: active
        display_name: 王文智
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aQkyWCSC3KokRarHEM1c8Q | 王聰 | accepted |
| ancestors | p_1153YmzQrFf4MqpahVJUVe | 王俊卿 | accepted |
| ancestors | p_9APm5s4Qnt3Y1TuWpeSg1p | 王文智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 227950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227950&o=json)
- [中国历代人物传记资料库：王輔（CBDB 212648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212648&o=json)
- [中国历代人物传记资料库：王俊卿（CBDB 227928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227928&o=json)
- [中国历代人物传记资料库：王文智（CBDB 227939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227939&o=json)
