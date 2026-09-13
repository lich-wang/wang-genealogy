---
schema: wang-person/v1
id: p_b5CJHTF3CJhC1Zauo4Pc4i
status: active
merged_into: null
display_name: 王浰
cbdb_id: 165259
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_auEmijuXCr8dyT4nWsGpzb
        subject_person_id: p_b5CJHTF3CJhC1Zauo4Pc4i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浰，史料所见人物。本项目依据《中国历代人物传记资料库：王浰（CBDB 165259）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Wl_8eoiTXCffYvreNkszCa
          claim_id: c_auEmijuXCr8dyT4nWsGpzb
          source_id: s_SGKJHxtfrmR3EDR6wGr2R1
          stance: supports
          locator: CBDB:165259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_SGKJHxtfrmR3EDR6wGr2R1
            source_type: api_record
            title: 中国历代人物传记资料库：王浰（CBDB 165259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165259&o=json
            external_identifier: CBDB:165259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4N3m27RSr5A9bfSPJQuWhE
        subject_person_id: p_b5CJHTF3CJhC1Zauo4Pc4i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SZkRnxma6CVgD549Lk76Q3
          claim_id: c_4N3m27RSr5A9bfSPJQuWhE
          source_id: s_SGKJHxtfrmR3EDR6wGr2R1
          stance: supports
          locator: CBDB:165259
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JcL8JDVYUTY3T2fTE_jMtl
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b5CJHTF3CJhC1Zauo4Pc4i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gnlxfahdkBHOugA16ZeBVt
          claim_id: c_JcL8JDVYUTY3T2fTE_jMtl
          source_id: s_y7B65XeE2bvCsAck3T9oCY
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y7B65XeE2bvCsAck3T9oCY
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 143108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json
            external_identifier: CBDB:143108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7QnGBiPzUFUWD8rSwCwAQh
        status: active
        display_name: 王鈞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王浰，史料所见人物。本项目依据《中国历代人物传记资料库：王浰（CBDB 165259）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王浰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7QnGBiPzUFUWD8rSwCwAQh | 王鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 143108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143108&o=json)
- [中国历代人物传记资料库：王浰（CBDB 165259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165259&o=json)
