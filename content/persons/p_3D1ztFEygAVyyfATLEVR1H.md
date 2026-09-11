---
schema: wang-person/v1
id: p_3D1ztFEygAVyyfATLEVR1H
status: active
merged_into: null
display_name: 王之棟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wpTNVeXmwFVQsgim67JGpe
        subject_person_id: p_3D1ztFEygAVyyfATLEVR1H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_baWLvCVYMSXF8uVB4jARzb
          claim_id: c_wpTNVeXmwFVQsgim67JGpe
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
          stance: supports
          locator: CBDB:206799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206799）
          source: &a1
            id: s_WyiFq24QS7Fy2DiGFUazoa
            source_type: api_record
            title: 中国历代人物传记资料库：王之棟（CBDB 206799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206799&o=json
            external_identifier: CBDB:206799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xC9gPEc9eLwr8p5cFAv86r
        subject_person_id: p_3D1ztFEygAVyyfATLEVR1H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1557年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vca8b55rco1sgZF6GNdfqi
          claim_id: c_xC9gPEc9eLwr8p5cFAv86r
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
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
        id: c_79UeuhqDDy3NbG1nftyYr1
        subject_person_id: p_3D1ztFEygAVyyfATLEVR1H
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
        - id: cs_sdZ13s9DH9xiAh7XcSPBg9
          claim_id: c_79UeuhqDDy3NbG1nftyYr1
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
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
        id: c_nEoX1f4wCQ-qJ7up0CAXqO
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3D1ztFEygAVyyfATLEVR1H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gUvqjJv9M-2gugNaOjTG61
          claim_id: c_nEoX1f4wCQ-qJ7up0CAXqO
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jEBuZsCrqAXDchh52wkHw1
        status: active
        display_name: 王克慎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PWcoyP7ZPw-UIKipPb-ImS
        subject_person_id: p_w8mi7mqMaXMCEUP8CHCXE5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3D1ztFEygAVyyfATLEVR1H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SiAgpDYSVcpiB4Oc5VjLrR
          claim_id: c_PWcoyP7ZPw-UIKipPb-ImS
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w8mi7mqMaXMCEUP8CHCXE5
        status: active
        display_name: 王亨
        merged_into_person_id: null
    - claim:
        id: c_cwZXi0MV0wBXgXNVsnB9ke
        subject_person_id: p_Tof1NpCVHZB8477t7K9DZr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3D1ztFEygAVyyfATLEVR1H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kLKiP1_2JY_ycaR1hC_hv1
          claim_id: c_cwZXi0MV0wBXgXNVsnB9ke
          source_id: s_WyiFq24QS7Fy2DiGFUazoa
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tof1NpCVHZB8477t7K9DZr
        status: active
        display_name: 王獎
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之棟 | accepted |
| birth.date | 1557年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jEBuZsCrqAXDchh52wkHw1 | 王克慎 | accepted |
| ancestors | p_w8mi7mqMaXMCEUP8CHCXE5 | 王亨 | accepted |
| ancestors | p_Tof1NpCVHZB8477t7K9DZr | 王獎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之棟（CBDB 206799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206799&o=json)
