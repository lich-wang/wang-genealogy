---
schema: wang-person/v1
id: p_74AVJogdybebtFT6DXvEhJ
status: active
merged_into: null
display_name: 王羽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2KsphQ1WAPuD5opNhMvSXL
        subject_person_id: p_74AVJogdybebtFT6DXvEhJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CXH1HYKrkspz1L6AZrbc95
          claim_id: c_2KsphQ1WAPuD5opNhMvSXL
          source_id: s_ucYCQuoKg5N46G1rB8ffbv
          stance: supports
          locator: CBDB:153367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153367）
          source: &a1
            id: s_ucYCQuoKg5N46G1rB8ffbv
            source_type: api_record
            title: 中国历代人物传记资料库：王羽（CBDB 153367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153367&o=json
            external_identifier: CBDB:153367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vkp85BXQQbL3q8Kz5MZb3z
        subject_person_id: p_74AVJogdybebtFT6DXvEhJ
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
        - id: cs_4UpKRj6cA8PXfEP2ZHYU5L
          claim_id: c_Vkp85BXQQbL3q8Kz5MZb3z
          source_id: s_ucYCQuoKg5N46G1rB8ffbv
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
        id: c_QEg9IWH4ICBlvoRtyc7F2J
        subject_person_id: p_NQEG3VEtv6G5kdckYDLpGN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_74AVJogdybebtFT6DXvEhJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BKbJGm83JcdBL6Id87uDko
          claim_id: c_QEg9IWH4ICBlvoRtyc7F2J
          source_id: s_ucYCQuoKg5N46G1rB8ffbv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 28：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NQEG3VEtv6G5kdckYDLpGN
        status: active
        display_name: 王之渙
        merged_into_person_id: null
    - claim:
        id: c_KJHlZqMG7KYb_-y7NCte7v
        subject_person_id: p_s92BnuiYU99B9CbbcpkN5z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_74AVJogdybebtFT6DXvEhJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AgZaD1UJsyIDu9Bj_gLKV1
          claim_id: c_KJHlZqMG7KYb_-y7NCte7v
          source_id: s_oQtwPumURyxwA6cHx8wRTZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 134：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oQtwPumURyxwA6cHx8wRTZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（140938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140938&o=json
            external_identifier: CBDB:140938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:04.054Z
            metadata_json: null
      object_person:
        id: p_s92BnuiYU99B9CbbcpkN5z
        status: active
        display_name: 李氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王羽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羽 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NQEG3VEtv6G5kdckYDLpGN | 王之渙 | accepted |
| parents | p_s92BnuiYU99B9CbbcpkN5z | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王羽（CBDB 153367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153367&o=json)
- [CBDB 中国历代人物传记资料库：李氏（140938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140938&o=json)
