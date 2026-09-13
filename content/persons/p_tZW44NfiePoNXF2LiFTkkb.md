---
schema: wang-person/v1
id: p_tZW44NfiePoNXF2LiFTkkb
status: active
merged_into: null
display_name: 王如寶
cbdb_id: 193633
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ydGTTmKgqFtspZu8tNnsTf
        subject_person_id: p_tZW44NfiePoNXF2LiFTkkb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如寶（卒于783年），唐人物。籍贯洛陽，曾任州刺史。（中国历代人物传记资料库 CBDB 193633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bJetrbgrFpFu0Q9W1OCfgD
          claim_id: c_ydGTTmKgqFtspZu8tNnsTf
          source_id: s_dDLZSsh6kLnA1sREu6nq67
          stance: supports
          locator: CBDB:193633
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dDLZSsh6kLnA1sREu6nq67
            source_type: api_record
            title: 中国历代人物传记资料库：王如寶（CBDB 193633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193633&o=json
            external_identifier: CBDB:193633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dzeXbvVzc5n3K5rLAikNbT
        subject_person_id: p_tZW44NfiePoNXF2LiFTkkb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CU62rZSvrKi2RwsEC2aBV7
          claim_id: c_dzeXbvVzc5n3K5rLAikNbT
          source_id: s_dDLZSsh6kLnA1sREu6nq67
          stance: supports
          locator: CBDB:193633
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 783
          source:
            id: s_dDLZSsh6kLnA1sREu6nq67
            source_type: api_record
            title: 中国历代人物传记资料库：王如寶（CBDB 193633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193633&o=json
            external_identifier: CBDB:193633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dy18HgbX6RZVPVqas6bKi4
        subject_person_id: p_tZW44NfiePoNXF2LiFTkkb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JjRHkMznsVHvmdBfg4c8kt
          claim_id: c_Dy18HgbX6RZVPVqas6bKi4
          source_id: s_dDLZSsh6kLnA1sREu6nq67
          stance: supports
          locator: CBDB:193633
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 783
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_O-xttH-3_c39KChYMC2P5Y
        subject_person_id: p_4yer6RaD2W3SvLPWsRXSkx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tZW44NfiePoNXF2LiFTkkb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4iDXijMchxVJlTGDsXFpg0
          claim_id: c_O-xttH-3_c39KChYMC2P5Y
          source_id: s_ra83A6K1wazGwg8Ub9vU14
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ra83A6K1wazGwg8Ub9vU14
            source_type: api_record
            title: 中国历代人物传记资料库：王傳慶（CBDB 193634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193634&o=json
            external_identifier: CBDB:193634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4yer6RaD2W3SvLPWsRXSkx
        status: active
        display_name: 王傳慶
        merged_into_person_id: null
  children:
    - claim:
        id: c_JdypdW8WY5Hztz7jFxs5yz
        subject_person_id: p_tZW44NfiePoNXF2LiFTkkb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m27sxFV9XUMPKTcePfzjXM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__1_v72GFHbq1ulaP9ghBHQ
          claim_id: c_JdypdW8WY5Hztz7jFxs5yz
          source_id: s_Fo23FEuezL66w6xmMr9LzP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Fo23FEuezL66w6xmMr9LzP
            source_type: api_record
            title: 中国历代人物传记资料库：王仁長（CBDB 193632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193632&o=json
            external_identifier: CBDB:193632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_m27sxFV9XUMPKTcePfzjXM
        status: active
        display_name: 王仁長
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王如寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如寶（卒于783年），唐人物。籍贯洛陽，曾任州刺史。（中国历代人物传记资料库 CBDB 193633） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王如寶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4yer6RaD2W3SvLPWsRXSkx | 王傳慶 | accepted |
| children | p_m27sxFV9XUMPKTcePfzjXM | 王仁長 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳慶（CBDB 193634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193634&o=json)
- [中国历代人物传记资料库：王仁長（CBDB 193632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193632&o=json)
- [中国历代人物传记资料库：王如寶（CBDB 193633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193633&o=json)
