---
schema: wang-person/v1
id: p_g1ZQp25f7TDHH92Q6ePC8K
status: active
merged_into: null
display_name: 王應詔
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tyW5suNHkLGY2MXzH9CMJk
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gmQDC89MKFpcPcj9H6txfW
          claim_id: c_tyW5suNHkLGY2MXzH9CMJk
          source_id: s_KMkQAVDmGwtdEAC6sGbnTv
          stance: supports
          locator: CBDB:202740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202740）
          source: &a1
            id: s_KMkQAVDmGwtdEAC6sGbnTv
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 202740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202740&o=json
            external_identifier: CBDB:202740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GmMUqHXtmkyZg7m7nGFVch
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1490年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z8M8FNJ8kjedt44K3L3LtK
          claim_id: c_GmMUqHXtmkyZg7m7nGFVch
          source_id: s_KMkQAVDmGwtdEAC6sGbnTv
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
        id: c_rdXK1MWVsxuFa3Rdgz6pGS
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
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
        - id: cs_BaEe3v7pUhWK3yBXSuUGRk
          claim_id: c_rdXK1MWVsxuFa3Rdgz6pGS
          source_id: s_KMkQAVDmGwtdEAC6sGbnTv
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
        id: c_igOCY-_G5SEBBmiEHJCaDg
        subject_person_id: p_5B4suypXr1H38m3G8Gpz1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-wBZhfV4xXMp5-cMZfh6h
          claim_id: c_igOCY-_G5SEBBmiEHJCaDg
          source_id: s_uch6cdgWh3qREth5P5dYko
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uch6cdgWh3qREth5P5dYko
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 293424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293424&o=json
            external_identifier: CBDB:293424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5B4suypXr1H38m3G8Gpz1b
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children:
    - claim:
        id: c_Pm-6P8_sucgi1EA99S4Z7B
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_93BK4LgU7cv5zsPfXRD2xN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66bdJvYnQI8yPFq11MkZmK
          claim_id: c_Pm-6P8_sucgi1EA99S4Z7B
          source_id: s_RQV58hzGTFracHfL4QSH5b
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RQV58hzGTFracHfL4QSH5b
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 293434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293434&o=json
            external_identifier: CBDB:293434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_93BK4LgU7cv5zsPfXRD2xN
        status: active
        display_name: 王大猷
        merged_into_person_id: null
    - claim:
        id: c_IeLuwCIMqXRLlkWFYVR5sC
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cvC8L1vrbWFZKrbKVxPgQV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kcyp-l8JFxQCUKG7jC97ra
          claim_id: c_IeLuwCIMqXRLlkWFYVR5sC
          source_id: s_po7QygabEpBnpgx6QAzuXH
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_po7QygabEpBnpgx6QAzuXH
            source_type: api_record
            title: 中国历代人物传记资料库：王大韶（CBDB 293436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293436&o=json
            external_identifier: CBDB:293436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cvC8L1vrbWFZKrbKVxPgQV
        status: active
        display_name: 王大韶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_apopmNLuIC9PIu2uLMNzhP
        subject_person_id: p_cCqCniHxX8eyza8bF9cLNL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_duUvlSn8BVHErdfEh1ClI2
          claim_id: c_apopmNLuIC9PIu2uLMNzhP
          source_id: s_oR8YeQaGGSPjGL12pbZvGX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oR8YeQaGGSPjGL12pbZvGX
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 293422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293422&o=json
            external_identifier: CBDB:293422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cCqCniHxX8eyza8bF9cLNL
        status: active
        display_name: 王昇
        merged_into_person_id: null
    - claim:
        id: c_0dfqnGnWMX4av9rgzyhs2_
        subject_person_id: p_KPvKVsNKbgXykr5Bz7jo9o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5URrcj1ORI2EGBUOaaBGD7
          claim_id: c_0dfqnGnWMX4av9rgzyhs2_
          source_id: s_GLxmy4PQLz5g8K2yR6kn7G
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GLxmy4PQLz5g8K2yR6kn7G
            source_type: api_record
            title: 中国历代人物传记资料库：王民瞻（CBDB 293423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293423&o=json
            external_identifier: CBDB:293423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KPvKVsNKbgXykr5Bz7jo9o
        status: active
        display_name: 王民瞻
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應詔 | accepted |
| birth.date | 1490年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5B4suypXr1H38m3G8Gpz1b | 王貴 | accepted |
| children | p_93BK4LgU7cv5zsPfXRD2xN | 王大猷 | accepted |
| children | p_cvC8L1vrbWFZKrbKVxPgQV | 王大韶 | accepted |
| ancestors | p_cCqCniHxX8eyza8bF9cLNL | 王昇 | accepted |
| ancestors | p_KPvKVsNKbgXykr5Bz7jo9o | 王民瞻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大韶（CBDB 293436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293436&o=json)
- [中国历代人物传记资料库：王大猷（CBDB 293434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293434&o=json)
- [中国历代人物传记资料库：王貴（CBDB 293424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293424&o=json)
- [中国历代人物传记资料库：王民瞻（CBDB 293423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293423&o=json)
- [中国历代人物传记资料库：王昇（CBDB 293422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293422&o=json)
- [中国历代人物传记资料库：王應詔（CBDB 202740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202740&o=json)
