---
schema: wang-person/v1
id: p_9QRchByBPwUZfBCV7KN6rH
status: active
merged_into: null
display_name: 王闢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wpNP539KqGdwdAkmFMeRD3
        subject_person_id: p_9QRchByBPwUZfBCV7KN6rH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3g2DSQjF1S3rZx9ZL5oMKM
          claim_id: c_wpNP539KqGdwdAkmFMeRD3
          source_id: s_CuBQKUXdELTb5UeQXbCYDz
          stance: supports
          locator: CBDB:175807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175807）
          source: &a1
            id: s_CuBQKUXdELTb5UeQXbCYDz
            source_type: api_record
            title: 中国历代人物传记资料库：王闢（CBDB 175807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175807&o=json
            external_identifier: CBDB:175807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RYsDm8GYtCW3enBpcBwkVJ
        subject_person_id: p_9QRchByBPwUZfBCV7KN6rH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 785年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TcR42psjDveM9CGoZToXBS
          claim_id: c_RYsDm8GYtCW3enBpcBwkVJ
          source_id: s_CuBQKUXdELTb5UeQXbCYDz
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
        id: c_99CMaUiFD2bdBZsyWAHPS8
        subject_person_id: p_9QRchByBPwUZfBCV7KN6rH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闢（卒于785年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 175807）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3ZJZIzKLd9w-txYTGbLzoQ
          claim_id: c_99CMaUiFD2bdBZsyWAHPS8
          source_id: s_CuBQKUXdELTb5UeQXbCYDz
          stance: supports
          locator: CBDB:175807
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a1S4oWtcHvp2zdJrLKq5rR
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9QRchByBPwUZfBCV7KN6rH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ka88kPPHuAk5D4GwEUCpCB
          claim_id: c_a1S4oWtcHvp2zdJrLKq5rR
          source_id: s_CuBQKUXdELTb5UeQXbCYDz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XkASXMtAcYaJTsp7v8xTAK
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王闢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闢 | accepted |
| death.date | 785年 | accepted |
| bio.summary | 王闢（卒于785年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 175807） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XkASXMtAcYaJTsp7v8xTAK | 王釗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王闢（CBDB 175807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175807&o=json)
