---
schema: wang-person/v1
id: p_zp2AZ2hRUut6GtZ8fNkjjs
status: active
merged_into: null
display_name: 王皋
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZZ3s7BxLsbkJZK9BZqb5G
        subject_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ys16mg7CTEKqCefMbZKR6s
          claim_id: c_kZZ3s7BxLsbkJZK9BZqb5G
          source_id: s_zXFABsR8a4uUovE7yhHU2w
          stance: supports
          locator: CBDB:199701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199701）
          source: &a1
            id: s_zXFABsR8a4uUovE7yhHU2w
            source_type: api_record
            title: 中国历代人物传记资料库：王皋（CBDB 199701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199701&o=json
            external_identifier: CBDB:199701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.575Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AohZT1cMe3JwTCbiDDz3LU
        subject_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1442年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LfHmk4n2gt4ZFQf3pU4hCf
          claim_id: c_AohZT1cMe3JwTCbiDDz3LU
          source_id: s_zXFABsR8a4uUovE7yhHU2w
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
        id: c_uuYYBrsAJs2Hv2KpkNo3Ev
        subject_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
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
        - id: cs_LHKts3o6dvsUJ6nahqcTxC
          claim_id: c_uuYYBrsAJs2Hv2KpkNo3Ev
          source_id: s_zXFABsR8a4uUovE7yhHU2w
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
        id: c_vTRoAPWQWIDcZIS04XbOmI
        subject_person_id: p_9B1FXBmYAzycryvGH6JiV6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JkkdighQApTl7EHF8bEJtI
          claim_id: c_vTRoAPWQWIDcZIS04XbOmI
          source_id: s_wY2vDouRH5yvqr4EEZmxS4
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wY2vDouRH5yvqr4EEZmxS4
            source_type: api_record
            title: 中国历代人物传记资料库：王瑽（CBDB 248691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248691&o=json
            external_identifier: CBDB:248691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9B1FXBmYAzycryvGH6JiV6
        status: active
        display_name: 王瑽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_UO8_VVp93Dz9Zz6AytvtOw
        subject_person_id: p_aoEXjau1NzbGGzzrL7Y4No
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HpVmMNPBmw6PFYrDeuzxj3
          claim_id: c_UO8_VVp93Dz9Zz6AytvtOw
          source_id: s_x78ni52N8NwJM9AYYV19i6
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_x78ni52N8NwJM9AYYV19i6
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 248690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248690&o=json
            external_identifier: CBDB:248690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aoEXjau1NzbGGzzrL7Y4No
        status: active
        display_name: 王仁
        merged_into_person_id: null
    - claim:
        id: c_3ptZNihxMq1ueTecGk1E5E
        subject_person_id: p_zcKTEwgz5YVMVT2MShosmN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kFZiEqywAjsmvEgPwPcR_f
          claim_id: c_3ptZNihxMq1ueTecGk1E5E
          source_id: s_24J88C1dYQ7zuAEYFK4z6w
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_24J88C1dYQ7zuAEYFK4z6w
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 248689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248689&o=json
            external_identifier: CBDB:248689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zcKTEwgz5YVMVT2MShosmN
        status: active
        display_name: 王俊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王皋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皋 | accepted |
| birth.date | 1442年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9B1FXBmYAzycryvGH6JiV6 | 王瑽 | accepted |
| ancestors | p_aoEXjau1NzbGGzzrL7Y4No | 王仁 | accepted |
| ancestors | p_zcKTEwgz5YVMVT2MShosmN | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑽（CBDB 248691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248691&o=json)
- [中国历代人物传记资料库：王皋（CBDB 199701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199701&o=json)
- [中国历代人物传记资料库：王俊（CBDB 248689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248689&o=json)
- [中国历代人物传记资料库：王仁（CBDB 248690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248690&o=json)
