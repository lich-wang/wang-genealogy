---
schema: wang-person/v1
id: p_rbkQ1KZNcDg636Lb8j13dR
status: active
merged_into: null
display_name: 王景胤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8VM8MQzjXJCmp52gF73US
        subject_person_id: p_rbkQ1KZNcDg636Lb8j13dR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景胤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZH3w6LWThmx7SLWWqm3HMP
          claim_id: c_q8VM8MQzjXJCmp52gF73US
          source_id: s_yA4iY6qfA6VL3ka6AqfvuF
          stance: supports
          locator: CBDB:184952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（184952）
          source: &a1
            id: s_yA4iY6qfA6VL3ka6AqfvuF
            source_type: api_record
            title: 中国历代人物传记资料库：王景胤（CBDB 184952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184952&o=json
            external_identifier: CBDB:184952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XF7WxMfgiTQBUfDPmqZCPB
        subject_person_id: p_rbkQ1KZNcDg636Lb8j13dR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AX5FKhuu2dUiDZ9eUvq28C
          claim_id: c_XF7WxMfgiTQBUfDPmqZCPB
          source_id: s_yA4iY6qfA6VL3ka6AqfvuF
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
        id: c_sCSyjnXL8MAB6FQYtYDssw
        subject_person_id: p_rbkQ1KZNcDg636Lb8j13dR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景胤（卒于894年），唐人物。籍贯晉陽，曾任州刺史。（中国历代人物传记资料库 CBDB 184952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_02OIEVddGsizO7vgkdbFMB
          claim_id: c_sCSyjnXL8MAB6FQYtYDssw
          source_id: s_yA4iY6qfA6VL3ka6AqfvuF
          stance: supports
          locator: CBDB:184952
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bjaFe8QwqWLyBS_fpnhjf9
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rbkQ1KZNcDg636Lb8j13dR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZPeS7lQPa3BIA8LJhmNc3
          claim_id: c_bjaFe8QwqWLyBS_fpnhjf9
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8Qx7mCtqguJx1LnrSReN3k
            source_type: api_record
            title: 中国历代人物传记资料库：王紹鼎（CBDB 159540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159540&o=json
            external_identifier: CBDB:159540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        status: active
        display_name: 王紹鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景胤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景胤 | accepted |
| death.date | 894年 | accepted |
| bio.summary | 王景胤（卒于894年），唐人物。籍贯晉陽，曾任州刺史。（中国历代人物传记资料库 CBDB 184952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGZ3Xya3EBe2Q1KNp6DVk3 | 王紹鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景胤（CBDB 184952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184952&o=json)
- [中国历代人物传记资料库：王紹鼎（CBDB 159540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159540&o=json)
