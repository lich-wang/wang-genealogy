---
schema: wang-person/v1
id: p_vZskfyWDenRTEAgQsuQKb4
status: active
merged_into: null
display_name: 王福徵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XeAnaMc6B7FbrtBn9rnzZ3
        subject_person_id: p_vZskfyWDenRTEAgQsuQKb4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hhE5BcWcEF5DhEN3P3beqe
          claim_id: c_XeAnaMc6B7FbrtBn9rnzZ3
          source_id: s_3PdmacMQMiX3FXHx2VZoyR
          stance: supports
          locator: CBDB:207439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207439）
          source: &a1
            id: s_3PdmacMQMiX3FXHx2VZoyR
            source_type: api_record
            title: 中国历代人物传记资料库：王福徵（CBDB 207439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207439&o=json
            external_identifier: CBDB:207439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XMcLWPUv9tC33wiZzjpm49
        subject_person_id: p_vZskfyWDenRTEAgQsuQKb4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1560年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLm8SzHsi5E3Cxkb3Py4KP
          claim_id: c_XMcLWPUv9tC33wiZzjpm49
          source_id: s_3PdmacMQMiX3FXHx2VZoyR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PnprzTx16RGL6uTxZb6XuD
        subject_person_id: p_vZskfyWDenRTEAgQsuQKb4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福徵（生于1560年），明人物。明清進士進士，籍贯慈溪，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 207439）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__Pf1aR9uukG0RPNzBlJGzY
          claim_id: c_PnprzTx16RGL6uTxZb6XuD
          source_id: s_3PdmacMQMiX3FXHx2VZoyR
          stance: supports
          locator: CBDB:207439
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-IOlXSCseQhPNcEmV12SCM
        subject_person_id: p_anz8KLcvPcmYY6nBMBz9Uy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vZskfyWDenRTEAgQsuQKb4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wyyx-0pulanpVw62BSPmJI
          claim_id: c_-IOlXSCseQhPNcEmV12SCM
          source_id: s_3PdmacMQMiX3FXHx2VZoyR
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_anz8KLcvPcmYY6nBMBz9Uy
        status: active
        display_name: 王燇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王福徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福徵 | accepted |
| birth.date | 1560年 | accepted |
| bio.summary | 王福徵（生于1560年），明人物。明清進士進士，籍贯慈溪，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 207439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_anz8KLcvPcmYY6nBMBz9Uy | 王燇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福徵（CBDB 207439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207439&o=json)
