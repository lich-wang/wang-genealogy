---
schema: wang-person/v1
id: p_NjPduXYBX7s59BpL4Ei7xQ
status: active
merged_into: null
display_name: 范氏
revision: 1
cbdb_id: 239749
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nCW4DSUejC7KISLByJKEug
        subject_person_id: p_NjPduXYBX7s59BpL4Ei7xQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 范氏，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239749）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QtN_s1T86hG1x0ClxR1x2_
          claim_id: c_nCW4DSUejC7KISLByJKEug
          source_id: s_OwKopGOCD7qZifFKSf2mxQ
          stance: supports
          locator: CBDB:239749
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_OwKopGOCD7qZifFKSf2mxQ
            source_type: api_record
            title: 中国历代人物传记资料库：范氏(王紹妻)（CBDB 239749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239749&o=json
            external_identifier: CBDB:239749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dp2RS1wgRaWoKJNoir6yYB
        subject_person_id: p_NjPduXYBX7s59BpL4Ei7xQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 范氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D38A1xRx_HNNHkU-8HY0xt
          claim_id: c_dp2RS1wgRaWoKJNoir6yYB
          source_id: s_OwKopGOCD7qZifFKSf2mxQ
          stance: supports
          locator: CBDB:239749
          quotation: null
          interpretation_note: CBDB 明确记录的王紹配偶
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
        id: c_XuiqqjzvIQIJvpYBf9WrOX
        subject_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NjPduXYBX7s59BpL4Ei7xQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IXIDSTAn27RbVzw-EWDX3E
          claim_id: c_XuiqqjzvIQIJvpYBf9WrOX
          source_id: s_OwKopGOCD7qZifFKSf2mxQ
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kFVLZcH5HhGCPzncqbfvAU
        status: active
        display_name: 王紹
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 范氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 范氏，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239749） | accepted |
| name.primary | 范氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kFVLZcH5HhGCPzncqbfvAU | 王紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：范氏(王紹妻)（CBDB 239749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239749&o=json)
