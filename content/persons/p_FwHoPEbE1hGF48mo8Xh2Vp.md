---
schema: wang-person/v1
id: p_FwHoPEbE1hGF48mo8Xh2Vp
status: active
merged_into: null
display_name: 陳某
revision: 1
cbdb_id: 135164
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KxYfCfAWWRb276Ro62liCB
        subject_person_id: p_FwHoPEbE1hGF48mo8Xh2Vp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳某，史料所见人物。本项目依据《中国历代人物传记资料库：陳某(王智珪夫)（CBDB 135164）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PgqJpVMjYk7PKZR1Y1s7JY
          claim_id: c_KxYfCfAWWRb276Ro62liCB
          source_id: s_LDFfG5pZPTfSSgnZmBHiPQ
          stance: supports
          locator: CBDB:135164
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_LDFfG5pZPTfSSgnZmBHiPQ
            source_type: api_record
            title: 中国历代人物传记资料库：陳某(王智珪夫)（CBDB 135164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135164&o=json
            external_identifier: CBDB:135164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EfCdUSIXee2x2DafGmpwdi
        subject_person_id: p_FwHoPEbE1hGF48mo8Xh2Vp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳某
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZavGqq2gqwEJyvUbAhNnic
          claim_id: c_EfCdUSIXee2x2DafGmpwdi
          source_id: s_LDFfG5pZPTfSSgnZmBHiPQ
          stance: supports
          locator: CBDB:135164
          quotation: null
          interpretation_note: CBDB 明确记录的王智珪配偶
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
        id: c_p56QiXzRPz-8n_Q_7R9_0j
        subject_person_id: p_2D3Uiid7tmFDXR6PrK3xNB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FwHoPEbE1hGF48mo8Xh2Vp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7MVFYLRvefPgReun_0Jpy3
          claim_id: c_p56QiXzRPz-8n_Q_7R9_0j
          source_id: s_LDFfG5pZPTfSSgnZmBHiPQ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5540：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2D3Uiid7tmFDXR6PrK3xNB
        status: active
        display_name: 王智珪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳某，史料所见人物。本项目依据《中国历代人物传记资料库：陳某(王智珪夫)（CBDB 135164）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 陳某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2D3Uiid7tmFDXR6PrK3xNB | 王智珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳某(王智珪夫)（CBDB 135164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135164&o=json)
