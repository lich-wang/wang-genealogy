---
schema: wang-person/v1
id: p_2R9S6o8WgY6gPoDdLpNtgP
status: active
merged_into: null
display_name: 王業
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v2rSrNy6XmqQRPnr6CdP7U
        subject_person_id: p_2R9S6o8WgY6gPoDdLpNtgP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1s18ZDBKGH6x4RBPX82BAs
          claim_id: c_v2rSrNy6XmqQRPnr6CdP7U
          source_id: s_6XLPGeN77uiVbFMu8xP1ux
          stance: supports
          locator: CBDB:155341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155341）
          source: &a1
            id: s_6XLPGeN77uiVbFMu8xP1ux
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 155341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155341&o=json
            external_identifier: CBDB:155341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eVyxhMNrzyc9VrxiX2BA4Q
        subject_person_id: p_2R9S6o8WgY6gPoDdLpNtgP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kcHAkU2oaFnrCooDw4Myc6
          claim_id: c_eVyxhMNrzyc9VrxiX2BA4Q
          source_id: s_6XLPGeN77uiVbFMu8xP1ux
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TbOxASNZ86LCT8eAjGRqUR
        subject_person_id: p_2R9S6o8WgY6gPoDdLpNtgP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_si2kM1cTkuZYqxLyr1N7Wh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j9nLW3M2EfK8Xs7YDW1Y24
          claim_id: c_TbOxASNZ86LCT8eAjGRqUR
          source_id: s_6XLPGeN77uiVbFMu8xP1ux
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jianzhong 14：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_si2kM1cTkuZYqxLyr1N7Wh
        status: active
        display_name: 王士林
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_si2kM1cTkuZYqxLyr1N7Wh | 王士林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王業（CBDB 155341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155341&o=json)
