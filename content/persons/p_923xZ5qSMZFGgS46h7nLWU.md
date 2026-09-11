---
schema: wang-person/v1
id: p_923xZ5qSMZFGgS46h7nLWU
status: active
merged_into: null
display_name: 王樵
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDYQDQWMdqSn7s74VYkhBn
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6BLafpy1ETKajnYLSEx9PC
          claim_id: c_nDYQDQWMdqSn7s74VYkhBn
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: CBDB:34720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34720）
          source: &a1
            id: s_eb5Xn1ejYbkj9jFGqum44L
            source_type: api_record
            title: 中国历代人物传记资料库：王樵（CBDB 34720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json
            external_identifier: CBDB:34720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uip2ekr9o19fM4khrz6akc
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1521年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EgCdnYzBM1BVbwBjZF82Bo
          claim_id: c_uip2ekr9o19fM4khrz6akc
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zVcugXkDj8jXsf8uR2GvBE
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFhACDevcg4Kqs7JUpfVWQ
          claim_id: c_zVcugXkDj8jXsf8uR2GvBE
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
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
        id: c_x4EJ5HopoLMSuru43bmke8
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wKeRZpdBaa79GhhgHNgvZt
          claim_id: c_x4EJ5HopoLMSuru43bmke8
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ALbWCDhwM2hL1Vu8wdKDO8
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1A4fzo1sn4CjE2_GlMN0F0
          claim_id: c_ALbWCDhwM2hL1Vu8wdKDO8
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: CBDB 双向互证（父 王臬 ⇄ 子 王樵）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  children:
    - claim:
        id: c_0n3J8E-HuOj0eN0c9yxE8c
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Jy3mzrK4nD5ZKcdARUJuQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hin3-6Vh6BoZa2vhkBgrcj
          claim_id: c_0n3J8E-HuOj0eN0c9yxE8c
          source_id: s_EBFrf3tktAQ9Uun45jM9MQ
          stance: supports
          locator: CBDB 双向互证（父 王樵 ⇄ 子 王肯堂）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_EBFrf3tktAQ9Uun45jM9MQ
            source_type: api_record
            title: 中国历代人物传记资料库：王肯堂（CBDB 34722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34722&o=json
            external_identifier: CBDB:34722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5Jy3mzrK4nD5ZKcdARUJuQ
        status: active
        display_name: 王肯堂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_W5gj3nmCx_8itkP3hEgRsQ
        subject_person_id: p_Eb1QdbChXgN1GA8BEpt3kU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6I31ULflWEwLVZt5G_UHB2
          claim_id: c_W5gj3nmCx_8itkP3hEgRsQ
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Eb1QdbChXgN1GA8BEpt3kU
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_bA8JxrQeQeYJ68A5jiv00C
        subject_person_id: p_XJ6D4tBNDdCJKx5sTBjB7e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qPGyOjQM9c8V3o6nE3A0Ed
          claim_id: c_bA8JxrQeQeYJ68A5jiv00C
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XJ6D4tBNDdCJKx5sTBjB7e
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_Ihr6qn-2q-38e_Sj731pdn
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FE6i55GXzPWLVER3EtdHfo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wH0WEzXEMCk95cRjv-pxRq
          claim_id: c_Ihr6qn-2q-38e_Sj731pdn
          source_id: s_FjES678jDu1PEn5f7GLKsm
          stance: supports
          locator: 明詩紀事:一百八十七卷，辛籤卷三二：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FjES678jDu1PEn5f7GLKsm
            source_type: api_record
            title: 中国历代人物传记资料库：王彥泓（CBDB 120462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120462&o=json
            external_identifier: CBDB:120462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FE6i55GXzPWLVER3EtdHfo
        status: active
        display_name: 王彥泓
        merged_into_person_id: null
  other: []
---

# 王樵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樵 | accepted |
| birth.date | 1521年 | accepted |
| death.date | 1599年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| children | p_5Jy3mzrK4nD5ZKcdARUJuQ | 王肯堂 | accepted |
| ancestors | p_Eb1QdbChXgN1GA8BEpt3kU | 王鎮 | accepted |
| ancestors | p_XJ6D4tBNDdCJKx5sTBjB7e | 王瀚 | accepted |
| descendants | p_FE6i55GXzPWLVER3EtdHfo | 王彥泓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肯堂（CBDB 34722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34722&o=json)
- [中国历代人物传记资料库：王樵（CBDB 34720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json)
- [中国历代人物传记资料库：王彥泓（CBDB 120462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120462&o=json)
