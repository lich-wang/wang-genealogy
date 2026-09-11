---
schema: wang-person/v1
id: p_Qnx8QBvxwpEu69h5VtDYBu
status: active
merged_into: null
display_name: 解氏
revision: 1
cbdb_id: 169077
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9yTzZLclrpq-00NqjLk_1H
        subject_person_id: p_Qnx8QBvxwpEu69h5VtDYBu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 解氏，史料所见人物。本项目依据《中国历代人物传记资料库：解氏(王權妻)（CBDB 169077）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sVIIZCvWFYhe42olwlOFpe
          claim_id: c_9yTzZLclrpq-00NqjLk_1H
          source_id: s_LYemR3_c_U0H4GRpwBCJyh
          stance: supports
          locator: CBDB:169077
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wfpRmh91O2tPSB1XGObXlJ
        subject_person_id: p_Qnx8QBvxwpEu69h5VtDYBu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 解氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0aEHJHx3xGPj1fXPYOXK4G
          claim_id: c_wfpRmh91O2tPSB1XGObXlJ
          source_id: s_LYemR3_c_U0H4GRpwBCJyh
          stance: supports
          locator: CBDB:169077
          quotation: null
          interpretation_note: CBDB 明确记录的王權配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
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
          source: *a1
      object_person:
        id: p_5UAth4rJCPGaoG71WcGgsp
        status: active
        display_name: 王權
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 解氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 解氏，史料所见人物。本项目依据《中国历代人物传记资料库：解氏(王權妻)（CBDB 169077）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 解氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5UAth4rJCPGaoG71WcGgsp | 王權 | accepted |

## 外部来源

- [中国历代人物传记资料库：解氏(王權妻)（CBDB 169077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169077&o=json)
