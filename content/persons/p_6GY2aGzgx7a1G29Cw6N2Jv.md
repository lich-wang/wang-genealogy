---
schema: wang-person/v1
id: p_6GY2aGzgx7a1G29Cw6N2Jv
status: active
merged_into: null
display_name: 王漸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbuZzH4nFfGXCWACkntn8Y
        subject_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9BhJDH7ueXhLsLLpC7Vx5e
          claim_id: c_cbuZzH4nFfGXCWACkntn8Y
          source_id: s_sqFzrQfGDUhoV1ycTDWczt
          stance: supports
          locator: CBDB:204365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204365）
          source: &a1
            id: s_sqFzrQfGDUhoV1ycTDWczt
            source_type: api_record
            title: 中国历代人物传记资料库：王漸（CBDB 204365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204365&o=json
            external_identifier: CBDB:204365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4ihQE9PASHV4e7tkwmEH62
        subject_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1512年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydQbvQ8gFAKfRgZAkmbiFW
          claim_id: c_4ihQE9PASHV4e7tkwmEH62
          source_id: s_sqFzrQfGDUhoV1ycTDWczt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_45T7Bo1n7xYNai1V9NP627
        subject_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
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
        - id: cs_3S338QMmaKEFwyNygrfLpd
          claim_id: c_45T7Bo1n7xYNai1V9NP627
          source_id: s_sqFzrQfGDUhoV1ycTDWczt
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
        id: c_Rdr7FPPgpjZMoGEL0_BKf6
        subject_person_id: p_jAZa72xQV94hCgdDQtVTKA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wPBYjkxQ9ckjRSDTnAIpGB
          claim_id: c_Rdr7FPPgpjZMoGEL0_BKf6
          source_id: s_sqFzrQfGDUhoV1ycTDWczt
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百零七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jAZa72xQV94hCgdDQtVTKA
        status: active
        display_name: 王銳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_O9sJ2JhvwbPIw3m3eJAu8P
        subject_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eSoDBeAAu4S7WjBoKvvSwk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WHXdcnOg7w-DVIalrabK2
          claim_id: c_O9sJ2JhvwbPIw3m3eJAu8P
          source_id: s_tzeZLIi_KNw_lz8azi36dq
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百零七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tzeZLIi_KNw_lz8azi36dq
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王漸妻)（CBDB 318104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318104&o=json
            external_identifier: CBDB:318104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eSoDBeAAu4S7WjBoKvvSwk
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_oiSgSxvjCPYSWDErN57bD-
        subject_person_id: p_WbWQMADc4P4hpU1j5MkQRv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1jQSYCL5pg5DV42qMtxwe
          claim_id: c_oiSgSxvjCPYSWDErN57bD-
          source_id: s_sqFzrQfGDUhoV1ycTDWczt
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百零七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WbWQMADc4P4hpU1j5MkQRv
        status: active
        display_name: 王能
        merged_into_person_id: null
    - claim:
        id: c_Zn4QaJt6a7dQM7ufovy-Q2
        subject_person_id: p_XpMH1cL6CXgJt3oweEfNNU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QiQXIVnLP0qA31pu2l1pTp
          claim_id: c_Zn4QaJt6a7dQM7ufovy-Q2
          source_id: s_sqFzrQfGDUhoV1ycTDWczt
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百零七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XpMH1cL6CXgJt3oweEfNNU
        status: active
        display_name: 王興
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王漸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漸 | accepted |
| birth.date | 1512年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jAZa72xQV94hCgdDQtVTKA | 王銳 | accepted |
| spouses | p_eSoDBeAAu4S7WjBoKvvSwk | 陳氏 | accepted |
| ancestors | p_WbWQMADc4P4hpU1j5MkQRv | 王能 | accepted |
| ancestors | p_XpMH1cL6CXgJt3oweEfNNU | 王興 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王漸妻)（CBDB 318104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318104&o=json)
- [中国历代人物传记资料库：王漸（CBDB 204365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204365&o=json)
