---
schema: wang-person/v1
id: p_1SPkxqhyY4ATtBYqQzF4ka
status: active
merged_into: null
display_name: 王淑元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HAUYkJsLRKX3hFM7ruzUrq
        subject_person_id: p_1SPkxqhyY4ATtBYqQzF4ka
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9US3wCC6pzoDFu3AmFTmMa
          claim_id: c_HAUYkJsLRKX3hFM7ruzUrq
          source_id: s_TWBPCw7DtsUsnMc4AfUyfS
          stance: supports
          locator: CBDB:69338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69338）
          source: &a1
            id: s_TWBPCw7DtsUsnMc4AfUyfS
            source_type: api_record
            title: 中国历代人物传记资料库：王淑元（CBDB 69338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69338&o=json
            external_identifier: CBDB:69338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_drQdnhmNyQrttZdomMQFdU
        subject_person_id: p_1SPkxqhyY4ATtBYqQzF4ka
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1850年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_18XqHg52o7TScZMgud3kyM
          claim_id: c_drQdnhmNyQrttZdomMQFdU
          source_id: s_TWBPCw7DtsUsnMc4AfUyfS
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
        id: c_mcs3w1L7cL96GkDYBhRBPz
        subject_person_id: p_1SPkxqhyY4ATtBYqQzF4ka
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑元（卒于1850年），清人物。籍贯鄞縣，身份为書法家、詩人，入仕鄉貢舉人，曾任太僕寺卿、縣知縣、知府。（中国历代人物传记资料库 CBDB 69338）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8Bq_Wm447c9bdm_7vtps1H
          claim_id: c_mcs3w1L7cL96GkDYBhRBPz
          source_id: s_TWBPCw7DtsUsnMc4AfUyfS
          stance: supports
          locator: CBDB:69338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FI4QxnPCFNBrVtt6OYZ0Vn
        subject_person_id: p_1SPkxqhyY4ATtBYqQzF4ka
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WHh5Qo24zT1qqTRoyyXi8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c6O7ohD4bgQtEEoQA5cXHv
          claim_id: c_FI4QxnPCFNBrVtt6OYZ0Vn
          source_id: s_TWBPCw7DtsUsnMc4AfUyfS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13042：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WHh5Qo24zT1qqTRoyyXi8E
        status: active
        display_name: 王光頡
        merged_into_person_id: null
    - claim:
        id: c_qdb4Ky6mYFTV1qrery1ZTc
        subject_person_id: p_1SPkxqhyY4ATtBYqQzF4ka
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SDMTLhLNQUJiAijTQCcFtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LBGR4_Hk2GnN04DyMqHVFs
          claim_id: c_qdb4Ky6mYFTV1qrery1ZTc
          source_id: s_TWBPCw7DtsUsnMc4AfUyfS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13042：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SDMTLhLNQUJiAijTQCcFtZ
        status: active
        display_name: 王光頲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淑元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑元 | accepted |
| death.date | 1850年 | accepted |
| bio.summary | 王淑元（卒于1850年），清人物。籍贯鄞縣，身份为書法家、詩人，入仕鄉貢舉人，曾任太僕寺卿、縣知縣、知府。（中国历代人物传记资料库 CBDB 69338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WHh5Qo24zT1qqTRoyyXi8E | 王光頡 | accepted |
| children | p_SDMTLhLNQUJiAijTQCcFtZ | 王光頲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑元（CBDB 69338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69338&o=json)
