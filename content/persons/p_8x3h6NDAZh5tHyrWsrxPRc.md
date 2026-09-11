---
schema: wang-person/v1
id: p_8x3h6NDAZh5tHyrWsrxPRc
status: active
merged_into: null
display_name: 王慎言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XqZYaPPtf1h7aavtHKeBCR
        subject_person_id: p_8x3h6NDAZh5tHyrWsrxPRc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jZVf19DLjRQ3r1oxgbSii3
          claim_id: c_XqZYaPPtf1h7aavtHKeBCR
          source_id: s_tabkP8rEePGf1AMcAsVVXz
          stance: supports
          locator: CBDB:3977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3977）
          source: &a1
            id: s_tabkP8rEePGf1AMcAsVVXz
            source_type: api_record
            title: 中国历代人物传记资料库：王慎言（CBDB 3977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3977&o=json
            external_identifier: CBDB:3977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YfKHX19TmG74r1CPDAy7tS
        subject_person_id: p_8x3h6NDAZh5tHyrWsrxPRc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1011年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qEhBpvDYDWfy5kHQGb9j3t
          claim_id: c_YfKHX19TmG74r1CPDAy7tS
          source_id: s_tabkP8rEePGf1AMcAsVVXz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Eargd4FJDhi7Ck7TydnWLj
        subject_person_id: p_8x3h6NDAZh5tHyrWsrxPRc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1087年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e9zsePsCJKpfVqV39gDsVk
          claim_id: c_Eargd4FJDhi7Ck7TydnWLj
          source_id: s_tabkP8rEePGf1AMcAsVVXz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j27VFCwPhPoQE8poWn3pTy
        subject_person_id: p_8x3h6NDAZh5tHyrWsrxPRc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_muBE9BVJQPjLxn9MUG8bTj
          claim_id: c_j27VFCwPhPoQE8poWn3pTy
          source_id: s_tabkP8rEePGf1AMcAsVVXz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uv3z152HDNvFHfnz5qI3Y-
        subject_person_id: p_8x3h6NDAZh5tHyrWsrxPRc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M4qQMGtKYPyLVMGmE2YAH1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjE4TwOvUTgHfxnsM63IRY
          claim_id: c_uv3z152HDNvFHfnz5qI3Y-
          source_id: s_ijQ7LNChmn7uB6tNXESTmP
          stance: supports
          locator: 芒洛冢墓遺文四編，孺人王氏墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ijQ7LNChmn7uB6tNXESTmP
            source_type: api_record
            title: 中国历代人物传记资料库：王群（CBDB 573351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573351&o=json
            external_identifier: CBDB:573351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M4qQMGtKYPyLVMGmE2YAH1
        status: active
        display_name: 王群
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cRQP2MzJHW6efUp5tQ6bID
        subject_person_id: p_oXazvgZDCU1eQZ2UVAEZ4j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8x3h6NDAZh5tHyrWsrxPRc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96jrM12P8Fhczr9G1Y8aQd
          claim_id: c_cRQP2MzJHW6efUp5tQ6bID
          source_id: s_e5drH5xPh5jbJyVbSxpyNA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1970：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e5drH5xPh5jbJyVbSxpyNA
            source_type: api_record
            title: 中国历代人物传记资料库：王曙（CBDB 1877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1877&o=json
            external_identifier: CBDB:1877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oXazvgZDCU1eQZ2UVAEZ4j
        status: active
        display_name: 王曙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王慎言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎言 | accepted |
| birth.date | 1011年 | accepted |
| death.date | 1087年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_M4qQMGtKYPyLVMGmE2YAH1 | 王群 | accepted |
| ancestors | p_oXazvgZDCU1eQZ2UVAEZ4j | 王曙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王群（CBDB 573351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573351&o=json)
- [中国历代人物传记资料库：王慎言（CBDB 3977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3977&o=json)
- [中国历代人物传记资料库：王曙（CBDB 1877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1877&o=json)
