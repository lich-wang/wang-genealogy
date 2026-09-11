---
schema: wang-person/v1
id: p_E8jSpcxrGiAGkwV96Q4xB8
status: active
merged_into: null
display_name: 王晃
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bZ4sX284CrYcA8A9u63cXN
        subject_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SVJyPsDJCLXNUg4Nm2Wso7
          claim_id: c_bZ4sX284CrYcA8A9u63cXN
          source_id: s_LVkiLfpWRSUub38iqH4wUA
          stance: supports
          locator: CBDB:175890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175890）
          source: &a1
            id: s_LVkiLfpWRSUub38iqH4wUA
            source_type: api_record
            title: 中国历代人物传记资料库：王晃（CBDB 175890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175890&o=json
            external_identifier: CBDB:175890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DwP7L1HAJyukZK6Xvbmy7N
        subject_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UE5fA63H6hFP7vhFgL9k5
          claim_id: c_DwP7L1HAJyukZK6Xvbmy7N
          source_id: s_LVkiLfpWRSUub38iqH4wUA
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
        id: c_CCGhAowoNH83iToQVHDDcc
        subject_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
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
        - id: cs_BKFes48mn5aNoqBn3tSNok
          claim_id: c_CCGhAowoNH83iToQVHDDcc
          source_id: s_LVkiLfpWRSUub38iqH4wUA
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
        id: c_lDDWsGfFTjYwvWix-jY8kj
        subject_person_id: p_aT36ZKtHXC6aAaFGz8ZxGj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RxwKghcObz6g1giUQPyqqJ
          claim_id: c_lDDWsGfFTjYwvWix-jY8kj
          source_id: s_6idbvdgTP8dUpYmnrUJYbr
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6idbvdgTP8dUpYmnrUJYbr
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 175889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175889&o=json
            external_identifier: CBDB:175889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aT36ZKtHXC6aAaFGz8ZxGj
        status: active
        display_name: 王祚
        merged_into_person_id: null
  children:
    - claim:
        id: c_h91AFT0kGS9eSuOY5h55w0
        subject_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9SUuW2WkQibUPJTWf3Qh46
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K0_biLPUxXLhy-4qAN-t0U
          claim_id: c_h91AFT0kGS9eSuOY5h55w0
          source_id: s_3LM5i52T79E6Ji1EBA13QG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3LM5i52T79E6Ji1EBA13QG
            source_type: api_record
            title: 中国历代人物传记资料库：王沼（CBDB 175891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175891&o=json
            external_identifier: CBDB:175891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9SUuW2WkQibUPJTWf3Qh46
        status: active
        display_name: 王沼
        merged_into_person_id: null
    - claim:
        id: c_sOvmfuzb-1i9bh6CvbUw7o
        subject_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vbEaTwSyS6JEzGzTU5DQPA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4bGvdwylByoe5ePtd4_1-A
          claim_id: c_sOvmfuzb-1i9bh6CvbUw7o
          source_id: s_L31EN7QNzNJZ5r69x7mKXJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L31EN7QNzNJZ5r69x7mKXJ
            source_type: api_record
            title: 中国历代人物传记资料库：王涯（CBDB 92079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92079&o=json
            external_identifier: CBDB:92079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vbEaTwSyS6JEzGzTU5DQPA
        status: active
        display_name: 王涯
        merged_into_person_id: null
    - claim:
        id: c_jYinaxyIsgn7hqOpTZVDvD
        subject_person_id: p_E8jSpcxrGiAGkwV96Q4xB8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZkYoN1dEFKVMSeB2QhFYgD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_27TrOwbwGtHaRxlkXOYybB
          claim_id: c_jYinaxyIsgn7hqOpTZVDvD
          source_id: s_ovKPUoWSN7YxgDQBKss2dJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ovKPUoWSN7YxgDQBKss2dJ
            source_type: api_record
            title: 中国历代人物传记资料库：王潔（CBDB 175892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175892&o=json
            external_identifier: CBDB:175892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZkYoN1dEFKVMSeB2QhFYgD
        status: active
        display_name: 王潔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晃 | accepted |
| death.date | 798年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aT36ZKtHXC6aAaFGz8ZxGj | 王祚 | accepted |
| children | p_9SUuW2WkQibUPJTWf3Qh46 | 王沼 | accepted |
| children | p_vbEaTwSyS6JEzGzTU5DQPA | 王涯 | accepted |
| children | p_ZkYoN1dEFKVMSeB2QhFYgD | 王潔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晃（CBDB 175890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175890&o=json)
- [中国历代人物传记资料库：王潔（CBDB 175892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175892&o=json)
- [中国历代人物传记资料库：王涯（CBDB 92079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92079&o=json)
- [中国历代人物传记资料库：王沼（CBDB 175891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175891&o=json)
- [中国历代人物传记资料库：王祚（CBDB 175889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175889&o=json)
