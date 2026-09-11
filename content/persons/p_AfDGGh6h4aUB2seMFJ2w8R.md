---
schema: wang-person/v1
id: p_AfDGGh6h4aUB2seMFJ2w8R
status: active
merged_into: null
display_name: 王宇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ke9v8gNwQA7WFPChu8uAzT
        subject_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1zWPVQxcZYH24f51B7V2fB
          claim_id: c_Ke9v8gNwQA7WFPChu8uAzT
          source_id: s_2D4p66LisW9zuWaUxemQ21
          stance: supports
          locator: CBDB:66976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66976）
          source: &a1
            id: s_2D4p66LisW9zuWaUxemQ21
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 66976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json
            external_identifier: CBDB:66976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xY5Z8vVJ5WsaFWBoyov6gL
        subject_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1417年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AZvvWpBPxqJQuijbn1ZGyh
          claim_id: c_xY5Z8vVJ5WsaFWBoyov6gL
          source_id: s_2D4p66LisW9zuWaUxemQ21
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
        id: c_3yuk4ydC5xKpbAuGZafGt7
        subject_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1463年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W5PQpeEeK7ZwjdN1PodGWX
          claim_id: c_3yuk4ydC5xKpbAuGZafGt7
          source_id: s_2D4p66LisW9zuWaUxemQ21
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
        id: c_QjTDRYGo8BuYRR4Hx1tX3G
        subject_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
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
        - id: cs_eLHHaCPG4Ha9sRRTqtWWWZ
          claim_id: c_QjTDRYGo8BuYRR4Hx1tX3G
          source_id: s_2D4p66LisW9zuWaUxemQ21
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
        id: c_jqytP4b1ow89RfSt_Z6Kmq
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0PDqpw6ETqDty76jw5V_P4
          claim_id: c_jqytP4b1ow89RfSt_Z6Kmq
          source_id: s_2D4p66LisW9zuWaUxemQ21
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CgEKz1NoAXQAHTMt7rq26j
        status: active
        display_name: 王希哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Z5crrassfcZdayH1hHcx8B
        subject_person_id: p_iN53V4mFM6PKNc4Xcrnzf6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Al9gSo94g0pErXHhHiBF_3
          claim_id: c_Z5crrassfcZdayH1hHcx8B
          source_id: s_2D4p66LisW9zuWaUxemQ21
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iN53V4mFM6PKNc4Xcrnzf6
        status: active
        display_name: 王敦本
        merged_into_person_id: null
    - claim:
        id: c_62c2nEOxXXMOm-BpPKARNl
        subject_person_id: p_ALnGH7uowije6trJgmryLj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b--pm6-VqfMxRWx-MCRTfI
          claim_id: c_62c2nEOxXXMOm-BpPKARNl
          source_id: s_2D4p66LisW9zuWaUxemQ21
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ALnGH7uowije6trJgmryLj
        status: active
        display_name: 王友德
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| birth.date | 1417年 | accepted |
| death.date | 1463年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CgEKz1NoAXQAHTMt7rq26j | 王希哲 | accepted |
| ancestors | p_iN53V4mFM6PKNc4Xcrnzf6 | 王敦本 | accepted |
| ancestors | p_ALnGH7uowije6trJgmryLj | 王友德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宇（CBDB 66976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json)
