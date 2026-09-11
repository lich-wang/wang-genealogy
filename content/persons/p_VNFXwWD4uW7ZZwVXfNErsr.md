---
schema: wang-person/v1
id: p_VNFXwWD4uW7ZZwVXfNErsr
status: active
merged_into: null
display_name: 王晏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8b1B24g5eWAj9etW6xb9Ks
        subject_person_id: p_VNFXwWD4uW7ZZwVXfNErsr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UiC4TNW4hg985wLHBjk989
          claim_id: c_8b1B24g5eWAj9etW6xb9Ks
          source_id: s_XwK6995zDuLKBwtp6DhDnQ
          stance: supports
          locator: CBDB:142376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142376）
          source: &a1
            id: s_XwK6995zDuLKBwtp6DhDnQ
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 142376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142376&o=json
            external_identifier: CBDB:142376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZAHX1gcZNf24dvawc7HD1L
        subject_person_id: p_VNFXwWD4uW7ZZwVXfNErsr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 654年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMLSKAid8SeHtVZRP2whWh
          claim_id: c_ZAHX1gcZNf24dvawc7HD1L
          source_id: s_XwK6995zDuLKBwtp6DhDnQ
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
        id: c_2xGBTsbd3Zyf6KJLyUVdKj
        subject_person_id: p_VNFXwWD4uW7ZZwVXfNErsr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PTs73WPWwcr3PSKYimCPG5
          claim_id: c_2xGBTsbd3Zyf6KJLyUVdKj
          source_id: s_XwK6995zDuLKBwtp6DhDnQ
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
        id: c_dop65e3mdhHSx1Mnt6P21R
        subject_person_id: p_VNFXwWD4uW7ZZwVXfNErsr
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
        - id: cs_cXYjDskDTA4mEW67D3YmB7
          claim_id: c_dop65e3mdhHSx1Mnt6P21R
          source_id: s_XwK6995zDuLKBwtp6DhDnQ
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
        id: c_X1sWwg-tTRKq1CcCx629Zk
        subject_person_id: p_VNFXwWD4uW7ZZwVXfNErsr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4qEC6svJUXem3b3PUvCg4p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B6mDTa_dSm2OMsS5SK5RsH
          claim_id: c_X1sWwg-tTRKq1CcCx629Zk
          source_id: s_a9rMZB4uqSVHt5LqpUcBUc
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Jinglong13：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a9rMZB4uqSVHt5LqpUcBUc
            source_type: api_record
            title: 中国历代人物传记资料库：王曉（CBDB 163587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163587&o=json
            external_identifier: CBDB:163587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4qEC6svJUXem3b3PUvCg4p
        status: active
        display_name: 王曉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_i4FD3J1PC4lR1f5n7V5eg0
        subject_person_id: p_bmbwdV3HEBP41vyQnog2Gc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VNFXwWD4uW7ZZwVXfNErsr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMEvcqNJGPkL6mQQLxtfLg
          claim_id: c_i4FD3J1PC4lR1f5n7V5eg0
          source_id: s_85EBvENbuhhCGZsJ7kZAGr
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Jinglong13：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_85EBvENbuhhCGZsJ7kZAGr
            source_type: api_record
            title: 中国历代人物传记资料库：王君素（CBDB 148173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148173&o=json
            external_identifier: CBDB:148173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bmbwdV3HEBP41vyQnog2Gc
        status: active
        display_name: 王君素
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏 | accepted |
| birth.date | 654年 | accepted |
| death.date | 709年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4qEC6svJUXem3b3PUvCg4p | 王曉 | accepted |
| ancestors | p_bmbwdV3HEBP41vyQnog2Gc | 王君素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君素（CBDB 148173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148173&o=json)
- [中国历代人物传记资料库：王曉（CBDB 163587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163587&o=json)
- [中国历代人物传记资料库：王晏（CBDB 142376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142376&o=json)
