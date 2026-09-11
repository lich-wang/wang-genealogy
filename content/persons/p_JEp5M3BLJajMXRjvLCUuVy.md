---
schema: wang-person/v1
id: p_JEp5M3BLJajMXRjvLCUuVy
status: active
merged_into: null
display_name: 王惟熙
cbdb_id: 27691
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_chpFFjNMeyAQcYg1uKM3yE
        subject_person_id: p_JEp5M3BLJajMXRjvLCUuVy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟熙，宋人物。中国历代人物传记资料库（CBDB）以人物编号 27691 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_LCSo00dDDTAmrheB28geID
          claim_id: c_chpFFjNMeyAQcYg1uKM3yE
          source_id: s_tkN2VP1TQLwyDCJb4Kvj77
          stance: supports
          locator: CBDB:27691
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_tkN2VP1TQLwyDCJb4Kvj77
            source_type: api_record
            title: 中国历代人物传记资料库：王惟熙（CBDB 27691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27691&o=json
            external_identifier: CBDB:27691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RJ7GUg44hSD32ar7jFSHJf
        subject_person_id: p_JEp5M3BLJajMXRjvLCUuVy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p1HahFLbF7p2LYYurimQAw
          claim_id: c_RJ7GUg44hSD32ar7jFSHJf
          source_id: s_tkN2VP1TQLwyDCJb4Kvj77
          stance: supports
          locator: CBDB:27691
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_tkN2VP1TQLwyDCJb4Kvj77
            source_type: api_record
            title: 中国历代人物传记资料库：王惟熙（CBDB 27691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27691&o=json
            external_identifier: CBDB:27691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JQ8n53VfFB8eraNIyRhOTo
        subject_person_id: p_JEp5M3BLJajMXRjvLCUuVy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qcwb8eCXR6GyvE8ryN6YF1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7yDLw_Yrp5voKr6unD7ym
          claim_id: c_JQ8n53VfFB8eraNIyRhOTo
          source_id: s_SDsZgLqBM9JtYL99b9djLF
          stance: supports
          locator: CBDB 双向互证（父 王惟熙 ⇄ 子 王覿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_SDsZgLqBM9JtYL99b9djLF
            source_type: api_record
            title: 中国历代人物传记资料库：王覿（CBDB 1894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1894&o=json
            external_identifier: CBDB:1894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qcwb8eCXR6GyvE8ryN6YF1
        status: active
        display_name: 王覿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_cIfcyARpE6nykoKPQhfrXm
        subject_person_id: p_JEp5M3BLJajMXRjvLCUuVy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cGef58rhE7bXm1CRCgR3Qt
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__xYysvfNEWbxJfMwPXjtyz
          claim_id: c_cIfcyARpE6nykoKPQhfrXm
          source_id: s_Qx8rkcxqMcWQr7ib8KhZC7
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王惟熙 ⇄ 玄孫;四世孫 王正綱）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Qx8rkcxqMcWQr7ib8KhZC7
            source_type: api_record
            title: 中国历代人物传记资料库：王正綱（CBDB 27696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27696&o=json
            external_identifier: CBDB:27696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cGef58rhE7bXm1CRCgR3Qt
        status: active
        display_name: 王正綱
        merged_into_person_id: null
    - claim:
        id: c_NKrKH88GY76_tgouruTMzR
        subject_person_id: p_JEp5M3BLJajMXRjvLCUuVy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rZY47tCzATgSjS4iyRApEg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0kDkuEc07uAzC3ZI9Ie_C8
          claim_id: c_NKrKH88GY76_tgouruTMzR
          source_id: s_L6xMeNcqMpN5659bk272KT
          stance: supports
          locator: CBDB 双向互证（曾祖 王惟熙 ⇄ 曾孫; 重孫 王岐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_L6xMeNcqMpN5659bk272KT
            source_type: api_record
            title: 中国历代人物传记资料库：王岐（CBDB 27695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27695&o=json
            external_identifier: CBDB:27695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rZY47tCzATgSjS4iyRApEg
        status: active
        display_name: 王岐
        merged_into_person_id: null
    - claim:
        id: c_o4WtViwyC1PtP7-hxcqCfy
        subject_person_id: p_JEp5M3BLJajMXRjvLCUuVy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GTieLzNQ74rYisejtAhtGE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDUEIwRsDoqviG52nP_gYg
          claim_id: c_o4WtViwyC1PtP7-hxcqCfy
          source_id: s_oUjfbcBCsqzycCm5LAof91
          stance: supports
          locator: CBDB 双向互证（祖父 王惟熙 ⇄ 孫 王咸義）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oUjfbcBCsqzycCm5LAof91
            source_type: api_record
            title: 中国历代人物传记资料库：王咸義（CBDB 27694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27694&o=json
            external_identifier: CBDB:27694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GTieLzNQ74rYisejtAhtGE
        status: active
        display_name: 王咸義
        merged_into_person_id: null
  other: []
---

# 王惟熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟熙，宋人物。中国历代人物传记资料库（CBDB）以人物编号 27691 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王惟熙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qcwb8eCXR6GyvE8ryN6YF1 | 王覿 | accepted |
| descendants | p_cGef58rhE7bXm1CRCgR3Qt | 王正綱 | accepted |
| descendants | p_rZY47tCzATgSjS4iyRApEg | 王岐 | accepted |
| descendants | p_GTieLzNQ74rYisejtAhtGE | 王咸義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王覿（CBDB 1894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1894&o=json)
- [中国历代人物传记资料库：王岐（CBDB 27695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27695&o=json)
- [中国历代人物传记资料库：王惟熙（CBDB 27691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27691&o=json)
- [中国历代人物传记资料库：王咸義（CBDB 27694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27694&o=json)
- [中国历代人物传记资料库：王正綱（CBDB 27696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27696&o=json)
