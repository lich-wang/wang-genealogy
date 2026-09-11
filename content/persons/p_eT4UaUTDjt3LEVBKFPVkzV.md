---
schema: wang-person/v1
id: p_eT4UaUTDjt3LEVBKFPVkzV
status: active
merged_into: null
display_name: 王博文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6ZKzcAhdZ8uA3qabau7ET
        subject_person_id: p_eT4UaUTDjt3LEVBKFPVkzV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王博文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z2pYbJtFD4W3HXWZBdxPN9
          claim_id: c_G6ZKzcAhdZ8uA3qabau7ET
          source_id: s_23Q58q6H8xrx1dN3iLZPEr
          stance: supports
          locator: CBDB:28769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28769）
          source: &a1
            id: s_23Q58q6H8xrx1dN3iLZPEr
            source_type: api_record
            title: 中国历代人物传记资料库：王博文（CBDB 28769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28769&o=json
            external_identifier: CBDB:28769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N82SgFuMsBbnwMPFhy3z23
        subject_person_id: p_eT4UaUTDjt3LEVBKFPVkzV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1223年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n3m1WgzvBeLV7X7cH6gLRZ
          claim_id: c_N82SgFuMsBbnwMPFhy3z23
          source_id: s_23Q58q6H8xrx1dN3iLZPEr
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
        id: c_HPMg1xiRHzB3PFawDaW7VD
        subject_person_id: p_eT4UaUTDjt3LEVBKFPVkzV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1288年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8TjqsUspyof4ZkYRYdKYt
          claim_id: c_HPMg1xiRHzB3PFawDaW7VD
          source_id: s_23Q58q6H8xrx1dN3iLZPEr
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
        id: c_wZBPHKajJeR5HHopxC9FX4
        subject_person_id: p_eT4UaUTDjt3LEVBKFPVkzV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王博文（1223年—1288年），元人物。籍贯安陽，曾任按察使、禮部尚書、諸路總管府總管。（中国历代人物传记资料库 CBDB 28769）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ub0bRxvIdV0c85hQMVb3Y9
          claim_id: c_wZBPHKajJeR5HHopxC9FX4
          source_id: s_23Q58q6H8xrx1dN3iLZPEr
          stance: supports
          locator: CBDB:28769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t44rkFVEZPP20gxTA9HlJz
        subject_person_id: p_Mm6YXV7FP22H8DfjeHF6Xp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eT4UaUTDjt3LEVBKFPVkzV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3v4SMD91rDR5W--hWCG50M
          claim_id: c_t44rkFVEZPP20gxTA9HlJz
          source_id: s_23Q58q6H8xrx1dN3iLZPEr
          stance: supports
          locator: CBDB 双向互证（父 王信 ⇄ 子 王博文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Mm6YXV7FP22H8DfjeHF6Xp
        status: active
        display_name: 王信
        merged_into_person_id: null
  children:
    - claim:
        id: c_mHkFueM2aYuAqS2vcdHGtp
        subject_person_id: p_eT4UaUTDjt3LEVBKFPVkzV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NEQbiiHHegsq8Nd4DRRS6P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFfpp3EVb3YKrEm5CCCgYr
          claim_id: c_mHkFueM2aYuAqS2vcdHGtp
          source_id: s_23Q58q6H8xrx1dN3iLZPEr
          stance: supports
          locator: CBDB 双向互证（子 王希賢 ⇄ 父 王博文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_NEQbiiHHegsq8Nd4DRRS6P
        status: active
        display_name: 王希賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王博文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王博文 | accepted |
| birth.date | 1223年 | accepted |
| death.date | 1288年 | accepted |
| bio.summary | 王博文（1223年—1288年），元人物。籍贯安陽，曾任按察使、禮部尚書、諸路總管府總管。（中国历代人物传记资料库 CBDB 28769） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mm6YXV7FP22H8DfjeHF6Xp | 王信 | accepted |
| children | p_NEQbiiHHegsq8Nd4DRRS6P | 王希賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王博文（CBDB 28769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28769&o=json)
