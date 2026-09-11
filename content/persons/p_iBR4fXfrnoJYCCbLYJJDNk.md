---
schema: wang-person/v1
id: p_iBR4fXfrnoJYCCbLYJJDNk
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 337199
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_IOfogc5afldNTb0II1NUPQ
        subject_person_id: p_iBR4fXfrnoJYCCbLYJJDNk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 337199）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKMHHkZPfcJ7Tzk04ueZHR
          claim_id: c_IOfogc5afldNTb0II1NUPQ
          source_id: s_D3BpLiq1xOYY7MQ993NhQS
          stance: supports
          locator: CBDB:337199
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D3BpLiq1xOYY7MQ993NhQS
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王臣妻)（CBDB 337199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337199&o=json
            external_identifier: CBDB:337199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FyD33J6pIApuSvonEWKxM0
        subject_person_id: p_iBR4fXfrnoJYCCbLYJJDNk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KuQnuo-7DgC0ye39S5H1s4
          claim_id: c_FyD33J6pIApuSvonEWKxM0
          source_id: s_D3BpLiq1xOYY7MQ993NhQS
          stance: supports
          locator: CBDB:337199
          quotation: null
          interpretation_note: CBDB 明确记录的王臣配偶
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
        id: c_iuKeu7xVyTvqJhyc5PAuD3
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iBR4fXfrnoJYCCbLYJJDNk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7kykSPl7JTiryEg17H27F
          claim_id: c_iuKeu7xVyTvqJhyc5PAuD3
          source_id: s_D3BpLiq1xOYY7MQ993NhQS
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第五十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BMNf3Y1e3GX9M1tCr78uZv
        status: active
        display_name: 王臣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孫氏，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 337199） | accepted |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BMNf3Y1e3GX9M1tCr78uZv | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王臣妻)（CBDB 337199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337199&o=json)
