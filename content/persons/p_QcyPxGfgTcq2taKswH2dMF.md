---
schema: wang-person/v1
id: p_QcyPxGfgTcq2taKswH2dMF
status: active
merged_into: null
display_name: 申氏
revision: 1
cbdb_id: 154872
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZRptlWb7FnfCrVocfEh2Zg
        subject_person_id: p_QcyPxGfgTcq2taKswH2dMF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 申氏，史料所见人物。本项目依据《中国历代人物传记资料库：申氏(王休泰妻)（CBDB 154872）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hlrjV0C4wH2U3WXzly82NE
          claim_id: c_ZRptlWb7FnfCrVocfEh2Zg
          source_id: s_xSMdoRMRgFCAN8EHkndkqt
          stance: supports
          locator: CBDB:154872
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xSMdoRMRgFCAN8EHkndkqt
            source_type: api_record
            title: 中国历代人物传记资料库：申氏(王休泰妻)（CBDB 154872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154872&o=json
            external_identifier: CBDB:154872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqpPC6znwMkktyJRQ3L9SJ
        subject_person_id: p_QcyPxGfgTcq2taKswH2dMF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 申氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_69ORGj8wFzWX8eVxVFkEiN
          claim_id: c_qqpPC6znwMkktyJRQ3L9SJ
          source_id: s_xSMdoRMRgFCAN8EHkndkqt
          stance: supports
          locator: CBDB:154872
          quotation: null
          interpretation_note: CBDB 明确记录的王休泰配偶
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
        id: c_4IkMLq9vgAGhDl7MAz8BKU
        subject_person_id: p_8aPaEptBHxExeRt6XEYQQF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QcyPxGfgTcq2taKswH2dMF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ckI5UtdOJ2x5gnIIlZDncn
          claim_id: c_4IkMLq9vgAGhDl7MAz8BKU
          source_id: s_xSMdoRMRgFCAN8EHkndkqt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 23：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8aPaEptBHxExeRt6XEYQQF
        status: active
        display_name: 王休泰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 申氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 申氏，史料所见人物。本项目依据《中国历代人物传记资料库：申氏(王休泰妻)（CBDB 154872）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 申氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8aPaEptBHxExeRt6XEYQQF | 王休泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：申氏(王休泰妻)（CBDB 154872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154872&o=json)
