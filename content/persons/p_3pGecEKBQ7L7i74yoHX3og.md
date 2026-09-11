---
schema: wang-person/v1
id: p_3pGecEKBQ7L7i74yoHX3og
status: active
merged_into: null
display_name: 王京幾
cbdb_id: 275614
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GLZG93PPW79xat1Ei2mKQq
        subject_person_id: p_3pGecEKBQ7L7i74yoHX3og
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京幾，明人物。中国历代人物传记资料库（CBDB）以人物编号 275614 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_CZxPPhT4WwgjZrtvvs2-Cz
          claim_id: c_GLZG93PPW79xat1Ei2mKQq
          source_id: s_EcHdfq9p5EBum8XxV3JGa1
          stance: supports
          locator: CBDB:275614
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EcHdfq9p5EBum8XxV3JGa1
            source_type: api_record
            title: 中国历代人物传记资料库：王京幾（CBDB 275614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275614&o=json
            external_identifier: CBDB:275614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fzK88TS5E5GqFyofjGxAAy
        subject_person_id: p_3pGecEKBQ7L7i74yoHX3og
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京幾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ch5ATNokY33AEkQyb6txJh
          claim_id: c_fzK88TS5E5GqFyofjGxAAy
          source_id: s_EcHdfq9p5EBum8XxV3JGa1
          stance: supports
          locator: CBDB:275614
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_EcHdfq9p5EBum8XxV3JGa1
            source_type: api_record
            title: 中国历代人物传记资料库：王京幾（CBDB 275614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275614&o=json
            external_identifier: CBDB:275614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OYqhBwK27vvZX3GKxaI3Sv
        subject_person_id: p_3pGecEKBQ7L7i74yoHX3og
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JzYJz85lsKdzDD5BDPf4TT
          claim_id: c_OYqhBwK27vvZX3GKxaI3Sv
          source_id: s_EcHdfq9p5EBum8XxV3JGa1
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第一百九十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hgNMo84ydGRxnNtLqHjNYL
        status: active
        display_name: 王光佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王京幾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王京幾，明人物。中国历代人物传记资料库（CBDB）以人物编号 275614 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王京幾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hgNMo84ydGRxnNtLqHjNYL | 王光佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王京幾（CBDB 275614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275614&o=json)
