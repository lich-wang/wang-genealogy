---
schema: wang-person/v1
id: p_c13t1gAnQni4prMz3DPJbk
status: active
merged_into: null
display_name: 王俁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KgFqPFMUKPcyTy8HJvCa1Y
        subject_person_id: p_c13t1gAnQni4prMz3DPJbk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvM1L4it7D4Au8Fz85FBRY
          claim_id: c_KgFqPFMUKPcyTy8HJvCa1Y
          source_id: s_vBkKyzpaPfffzvS2LjjmEL
          stance: supports
          locator: CBDB:1932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1932）
          source: &a1
            id: s_vBkKyzpaPfffzvS2LjjmEL
            source_type: api_record
            title: 中国历代人物传记资料库：王俁（CBDB 1932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1932&o=json
            external_identifier: CBDB:1932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QCBsnPyyyTNQ2R2GQ5Le7M
        subject_person_id: p_c13t1gAnQni4prMz3DPJbk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1157年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EYoi2tYoaaLVXegBUXe29J
          claim_id: c_QCBsnPyyyTNQ2R2GQ5Le7M
          source_id: s_vBkKyzpaPfffzvS2LjjmEL
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
        id: c_RG476bbC33cqFWLgHFswVr
        subject_person_id: p_c13t1gAnQni4prMz3DPJbk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bDC3c2GCuS87ydBMe85KF1
          claim_id: c_RG476bbC33cqFWLgHFswVr
          source_id: s_vBkKyzpaPfffzvS2LjjmEL
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
        id: c__w5yeaT5rO7qJ7Bf4CzIdz
        subject_person_id: p_c13t1gAnQni4prMz3DPJbk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tqRPPbAN8FAMxiSJbvoGN3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_adGBdMt48QEkg2UuZpiRzV
          claim_id: c__w5yeaT5rO7qJ7Bf4CzIdz
          source_id: s_3TGDMB4jgWU83aG94C1R2a
          stance: supports
          locator: 宋人傳記資料索引(電子版)，963：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3TGDMB4jgWU83aG94C1R2a
            source_type: api_record
            title: 中国历代人物传记资料库：王逨（CBDB 17885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17885&o=json
            external_identifier: CBDB:17885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tqRPPbAN8FAMxiSJbvoGN3
        status: active
        display_name: 王逨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_oFFVxe88YF1hOWT3Xt2SNW
        subject_person_id: p_c13t1gAnQni4prMz3DPJbk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zPJV9uPvg66nyW635J36Ep
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NTn_Md7tacuXXCWYIdXT0_
          claim_id: c_oFFVxe88YF1hOWT3Xt2SNW
          source_id: s_vBkKyzpaPfffzvS2LjjmEL
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1444：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zPJV9uPvg66nyW635J36Ep
        status: active
        display_name: 王中行
        merged_into_person_id: null
  other: []
---

# 王俁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俁 | accepted |
| death.date | 1157年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tqRPPbAN8FAMxiSJbvoGN3 | 王逨 | accepted |
| descendants | p_zPJV9uPvg66nyW635J36Ep | 王中行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逨（CBDB 17885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17885&o=json)
- [中国历代人物传记资料库：王俁（CBDB 1932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1932&o=json)
