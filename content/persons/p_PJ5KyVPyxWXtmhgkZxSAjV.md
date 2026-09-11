---
schema: wang-person/v1
id: p_PJ5KyVPyxWXtmhgkZxSAjV
status: active
merged_into: null
display_name: 黃氏
revision: 1
cbdb_id: 563626
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y9CavwS8lRoh0EqFcU1eAN
        subject_person_id: p_PJ5KyVPyxWXtmhgkZxSAjV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃氏，明人物。籍贯會稽。（中国历代人物传记资料库 CBDB 563626）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gU0_xDGPAKjDr5h5lu-DCJ
          claim_id: c_Y9CavwS8lRoh0EqFcU1eAN
          source_id: s_lxAArLYrzYSYKHJr83seEp
          stance: supports
          locator: CBDB:563626
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_lxAArLYrzYSYKHJr83seEp
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(王延祚妻)（CBDB 563626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563626&o=json
            external_identifier: CBDB:563626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WN1KoUITLDRbk9EMwHPCM9
        subject_person_id: p_PJ5KyVPyxWXtmhgkZxSAjV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8J7qyd_qSrV9WExeBsF_k0
          claim_id: c_WN1KoUITLDRbk9EMwHPCM9
          source_id: s_lxAArLYrzYSYKHJr83seEp
          stance: supports
          locator: CBDB:563626
          quotation: null
          interpretation_note: CBDB 明确记录的王延祚配偶
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
        id: c_H_ANIfDxcvIRfyX_IDmpp_
        subject_person_id: p_fyJ2GFtjRmpZiPW2dtt1Ef
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PJ5KyVPyxWXtmhgkZxSAjV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SPe0PRhYXuxme8MQFK2vbe
          claim_id: c_H_ANIfDxcvIRfyX_IDmpp_
          source_id: s_lxAArLYrzYSYKHJr83seEp
          stance: supports
          locator: 紹興府志:八十卷，lgid=316743：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fyJ2GFtjRmpZiPW2dtt1Ef
        status: active
        display_name: 王延祚
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 黃氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 黃氏，明人物。籍贯會稽。（中国历代人物传记资料库 CBDB 563626） | accepted |
| name.primary | 黃氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fyJ2GFtjRmpZiPW2dtt1Ef | 王延祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(王延祚妻)（CBDB 563626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563626&o=json)
