---
schema: wang-person/v1
id: p_gE38wphVgSX2ysH6WXuLZH
status: active
merged_into: null
display_name: 王大禮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HF7BKEhLU1GaArideiuRBY
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZExA4zBed5N3S18bBApceQ
          claim_id: c_HF7BKEhLU1GaArideiuRBY
          source_id: s_SCjaj55Aj1kTwEVxtWhrFY
          stance: supports
          locator: CBDB:142599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142599）
          source: &a1
            id: s_SCjaj55Aj1kTwEVxtWhrFY
            source_type: api_record
            title: 中国历代人物传记资料库：王大禮（CBDB 142599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142599&o=json
            external_identifier: CBDB:142599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_77PQxevJJLD8Vw8d99m7sw
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QwhKde54ySEBQNLB6SJxgA
          claim_id: c_77PQxevJJLD8Vw8d99m7sw
          source_id: s_SCjaj55Aj1kTwEVxtWhrFY
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
        id: c_tk1j592LqjonMkzPtB1RwA
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z98tjZHCtCCboqHz84DqC3
          claim_id: c_tk1j592LqjonMkzPtB1RwA
          source_id: s_SCjaj55Aj1kTwEVxtWhrFY
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
        id: c_oRQh6EGFWhgipyCK4jHcyc
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大禮（613年—669年），唐人物。籍贯洛陽，曾任州刺史。（中国历代人物传记资料库 CBDB 142599）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jo_arLfy5oPbi9qwfX39if
          claim_id: c_oRQh6EGFWhgipyCK4jHcyc
          source_id: s_SCjaj55Aj1kTwEVxtWhrFY
          stance: supports
          locator: CBDB:142599
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xt8obXNTXKW1DgXhpmul9l
        subject_person_id: p_BBMZKVuEpxR5WRY9AieqFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gE38wphVgSX2ysH6WXuLZH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ViH1wburT9pbVd7Q-dQJ2g
          claim_id: c_xt8obXNTXKW1DgXhpmul9l
          source_id: s_gtGxwZcJjcb72zqCoXaPmc
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianheng2：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gtGxwZcJjcb72zqCoXaPmc
            source_type: api_record
            title: 中国历代人物传记资料库：王朗（CBDB 162480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162480&o=json
            external_identifier: CBDB:162480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BBMZKVuEpxR5WRY9AieqFs
        status: active
        display_name: 王朗
        merged_into_person_id: null
  children:
    - claim:
        id: c_uELy3eN7RHEQlwwRdTM1Ds
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_65VMUGA6qbK4R77Pu7xNTc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yhyzwSW8R1W06NyYA52gMg
          claim_id: c_uELy3eN7RHEQlwwRdTM1Ds
          source_id: s_4HXB65xMmkL2KJTr63Hvzo
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianheng2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4HXB65xMmkL2KJTr63Hvzo
            source_type: api_record
            title: 中国历代人物传记资料库：王起牧（CBDB 162481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162481&o=json
            external_identifier: CBDB:162481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_65VMUGA6qbK4R77Pu7xNTc
        status: active
        display_name: 王起牧
        merged_into_person_id: null
    - claim:
        id: c_862Dae6yNNTAtP1JbHDhcS
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tWvLcyqPqfcv2k5sniX1uV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ItQzMYxkIXBihhZJ-JKPu
          claim_id: c_862Dae6yNNTAtP1JbHDhcS
          source_id: s_Pg3fv61z448uccdBG9fJFt
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Pg3fv61z448uccdBG9fJFt
            source_type: api_record
            title: 中国历代人物传记资料库：王玄起（CBDB 140444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140444&o=json
            external_identifier: CBDB:140444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tWvLcyqPqfcv2k5sniX1uV
        status: active
        display_name: 王玄起
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大禮 | accepted |
| birth.date | 613年 | accepted |
| death.date | 669年 | accepted |
| bio.summary | 王大禮（613年—669年），唐人物。籍贯洛陽，曾任州刺史。（中国历代人物传记资料库 CBDB 142599） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BBMZKVuEpxR5WRY9AieqFs | 王朗 | accepted |
| children | p_65VMUGA6qbK4R77Pu7xNTc | 王起牧 | accepted |
| children | p_tWvLcyqPqfcv2k5sniX1uV | 王玄起 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大禮（CBDB 142599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142599&o=json)
- [中国历代人物传记资料库：王朗（CBDB 162480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162480&o=json)
- [中国历代人物传记资料库：王起牧（CBDB 162481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162481&o=json)
- [中国历代人物传记资料库：王玄起（CBDB 140444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140444&o=json)
