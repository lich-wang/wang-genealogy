---
schema: wang-person/v1
id: p_vLfWMwhHDFvcZU8WJFZRFE
status: active
merged_into: null
display_name: 王師保
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TX4KSmS59ir3kSCSe1UsHr
        subject_person_id: p_vLfWMwhHDFvcZU8WJFZRFE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8TBphPFAGyNrH1r1bE4X1x
          claim_id: c_TX4KSmS59ir3kSCSe1UsHr
          source_id: s_3B6JMQTT1Dfn3yPTDnPbpQ
          stance: supports
          locator: CBDB:149257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149257）
          source: &a1
            id: s_3B6JMQTT1Dfn3yPTDnPbpQ
            source_type: api_record
            title: 中国历代人物传记资料库：王師保（CBDB 149257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149257&o=json
            external_identifier: CBDB:149257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_raa4vsk6xHARwsVNFgLmvA
        subject_person_id: p_vLfWMwhHDFvcZU8WJFZRFE
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
        - id: cs_PtYYhDap5gj6JoK9U927kF
          claim_id: c_raa4vsk6xHARwsVNFgLmvA
          source_id: s_3B6JMQTT1Dfn3yPTDnPbpQ
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
        id: c_09NC3C7Bxw92Eivg1alTXD
        subject_person_id: p_vLfWMwhHDFvcZU8WJFZRFE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Dg6XHckcaLtCF8z4S2GGo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2qRiAsVwqZqeHkUiZGT6DT
          claim_id: c_09NC3C7Bxw92Eivg1alTXD
          source_id: s_3B6JMQTT1Dfn3yPTDnPbpQ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Chuigong 25：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8Dg6XHckcaLtCF8z4S2GGo
        status: active
        display_name: 王行威
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師保 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8Dg6XHckcaLtCF8z4S2GGo | 王行威 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師保（CBDB 149257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149257&o=json)
