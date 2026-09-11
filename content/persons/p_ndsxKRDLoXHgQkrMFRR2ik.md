---
schema: wang-person/v1
id: p_ndsxKRDLoXHgQkrMFRR2ik
status: active
merged_into: null
display_name: 王通
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D1AUPrcsc544eJReSUSf8d
        subject_person_id: p_ndsxKRDLoXHgQkrMFRR2ik
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4DhMGL1qK5PxMd7sHss1RY
          claim_id: c_D1AUPrcsc544eJReSUSf8d
          source_id: s_EnTThsfgkiuVhxVY8cTxTy
          stance: supports
          locator: CBDB:189499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189499）
          source: &a1
            id: s_EnTThsfgkiuVhxVY8cTxTy
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 189499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189499&o=json
            external_identifier: CBDB:189499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SQcXBSCbwTRVnBTpCAHoPz
        subject_person_id: p_ndsxKRDLoXHgQkrMFRR2ik
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LkPxJhbaEVbJQufZSCi5M3
          claim_id: c_SQcXBSCbwTRVnBTpCAHoPz
          source_id: s_EnTThsfgkiuVhxVY8cTxTy
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
        id: c_gVFsky8EtEeFKo9zHAfiqe
        subject_person_id: p_ndsxKRDLoXHgQkrMFRR2ik
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
        - id: cs_VCk3BZ4fV6yWUpM5dBY4qd
          claim_id: c_gVFsky8EtEeFKo9zHAfiqe
          source_id: s_EnTThsfgkiuVhxVY8cTxTy
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
        id: c_ptgXqXFfT_ofn6B169Dcaa
        subject_person_id: p_ndsxKRDLoXHgQkrMFRR2ik
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sj796DnK3Tgm7RLGsbpMfe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AILoWcLP9DoqSXdK--nYnF
          claim_id: c_ptgXqXFfT_ofn6B169Dcaa
          source_id: s_EnTThsfgkiuVhxVY8cTxTy
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Sj796DnK3Tgm7RLGsbpMfe
        status: active
        display_name: 王福祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| death.date | 648年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Sj796DnK3Tgm7RLGsbpMfe | 王福祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 189499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189499&o=json)
