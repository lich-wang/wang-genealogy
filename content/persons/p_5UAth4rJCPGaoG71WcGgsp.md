---
schema: wang-person/v1
id: p_5UAth4rJCPGaoG71WcGgsp
status: active
merged_into: null
display_name: 王權
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qpYXz7dJrxBvjV5UDd8m3P
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王權
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W2jAxU8GocKrFQaVfXeU8k
          claim_id: c_qpYXz7dJrxBvjV5UDd8m3P
          source_id: s_b4y5Ah8FMs1dAAQC1d3wNR
          stance: supports
          locator: CBDB:185654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185654）
          source: &a1
            id: s_b4y5Ah8FMs1dAAQC1d3wNR
            source_type: api_record
            title: 中国历代人物传记资料库：王權（CBDB 185654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185654&o=json
            external_identifier: CBDB:185654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QJysfqkUEkQHM4KmtEckXw
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 880年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QgCb8UggrS1DGU41Pto21m
          claim_id: c_QJysfqkUEkQHM4KmtEckXw
          source_id: s_b4y5Ah8FMs1dAAQC1d3wNR
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
        id: c_1RXLr6gPkenVNznJYRpTJL
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王權（卒于880年），史料所见人物。本项目依据《中国历代人物传记资料库：王權（CBDB 185654）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OTSohPlv6kQgfelZNtWg82
          claim_id: c_1RXLr6gPkenVNznJYRpTJL
          source_id: s_b4y5Ah8FMs1dAAQC1d3wNR
          stance: supports
          locator: CBDB:185654
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3XPiotZaktaU9nP23_Tdt4
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qbMsKJz49VxDT7JG8FhSHx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0rdGx-J4d2H1On94eLlUUX
          claim_id: c_3XPiotZaktaU9nP23_Tdt4
          source_id: s_b4y5Ah8FMs1dAAQC1d3wNR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qbMsKJz49VxDT7JG8FhSHx
        status: active
        display_name: 王牟
        merged_into_person_id: null
    - claim:
        id: c_oR-GGFj1QXLvoQwcVZwO8g
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PPCjb3WLAXAZdvH2wXG32m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yhnToYyV2dpzOab680Ed3X
          claim_id: c_oR-GGFj1QXLvoQwcVZwO8g
          source_id: s_b4y5Ah8FMs1dAAQC1d3wNR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PPCjb3WLAXAZdvH2wXG32m
        status: active
        display_name: 王釗
        merged_into_person_id: null
    - claim:
        id: c_QDmRot14lkIciDzI-vJ17d
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wGQGzDMTTEQQ5geZtLTc1w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HsMv8N6-1q6N5z6viA8JUh
          claim_id: c_QDmRot14lkIciDzI-vJ17d
          source_id: s_b4y5Ah8FMs1dAAQC1d3wNR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wGQGzDMTTEQQ5geZtLTc1w
        status: active
        display_name: 王遠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6osb8dCw5SJ2BjxXRiV83K
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Qnx8QBvxwpEu69h5VtDYBu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7dHLpy0pkJy8Yyuc2Hw3Bi
          claim_id: c_6osb8dCw5SJ2BjxXRiV83K
          source_id: s_LYemR3_c_U0H4GRpwBCJyh
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LYemR3_c_U0H4GRpwBCJyh
            source_type: api_record
            title: 中国历代人物传记资料库：解氏(王權妻)（CBDB 169077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169077&o=json
            external_identifier: CBDB:169077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Qnx8QBvxwpEu69h5VtDYBu
        status: active
        display_name: 解氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王權

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王權 | accepted |
| death.date | 880年 | accepted |
| bio.summary | 王權（卒于880年），史料所见人物。本项目依据《中国历代人物传记资料库：王權（CBDB 185654）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qbMsKJz49VxDT7JG8FhSHx | 王牟 | accepted |
| children | p_PPCjb3WLAXAZdvH2wXG32m | 王釗 | accepted |
| children | p_wGQGzDMTTEQQ5geZtLTc1w | 王遠 | accepted |
| spouses | p_Qnx8QBvxwpEu69h5VtDYBu | 解氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：解氏(王權妻)（CBDB 169077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169077&o=json)
- [中国历代人物传记资料库：王權（CBDB 185654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185654&o=json)
