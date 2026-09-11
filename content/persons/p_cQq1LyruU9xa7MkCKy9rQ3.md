---
schema: wang-person/v1
id: p_cQq1LyruU9xa7MkCKy9rQ3
status: active
merged_into: null
display_name: 王嶽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6WswCUUWtjrxpNumpyZN3Q
        subject_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hGp51ChBy1d1i4yuATkHPw
          claim_id: c_6WswCUUWtjrxpNumpyZN3Q
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
          stance: supports
          locator: CBDB:199663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199663）
          source: &a1
            id: s_dnGcX27WSqLJQi9Wfz8Gdu
            source_type: api_record
            title: 中国历代人物传记资料库：王嶽（CBDB 199663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199663&o=json
            external_identifier: CBDB:199663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MFsVVQd4w3pZLyGVNdCTdZ
        subject_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1436年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qRdtx8b5DZR68iBuG7fj3E
          claim_id: c_MFsVVQd4w3pZLyGVNdCTdZ
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
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
        id: c_YmXPyKJRwNDmh2aX927BbT
        subject_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
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
        - id: cs_FLE7NQ99eMNg75gF8A9Q93
          claim_id: c_YmXPyKJRwNDmh2aX927BbT
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
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
        id: c_BDC364T3DQiPpWQbiFssyW
        subject_person_id: p_hkkZy7J5ztQnL3t6fCHvcP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RhXEAWNQDw7DbX4ChZtyvC
          claim_id: c_BDC364T3DQiPpWQbiFssyW
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第四十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hkkZy7J5ztQnL3t6fCHvcP
        status: active
        display_name: 王崇志
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hFLDfBf9VPBApHOVdxQiYc
        subject_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VfhCAGmScV1Ww7WRACtCNH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fIJNV72i06CM9QfGOVa1wF
          claim_id: c_hFLDfBf9VPBApHOVdxQiYc
          source_id: s_G9ivBKWqLM5ceBgGldSFoD
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第四十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G9ivBKWqLM5ceBgGldSFoD
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王嶽妻)（CBDB 248131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248131&o=json
            external_identifier: CBDB:248131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VfhCAGmScV1Ww7WRACtCNH
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_if5Azo019u7X9bwJbfDv2J
        subject_person_id: p_YyT6AeK4EyXH1THz1a4YvT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QoizptRK-SuglyPJdJiwPb
          claim_id: c_if5Azo019u7X9bwJbfDv2J
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第四十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YyT6AeK4EyXH1THz1a4YvT
        status: active
        display_name: 王茂春
        merged_into_person_id: null
    - claim:
        id: c_4OfHDYuklvJsrVqcQvPA5o
        subject_person_id: p_TdtTDBShmb1aCgpxE3qjM3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cQq1LyruU9xa7MkCKy9rQ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UrLLz3mUrwA_TRiLbV52iY
          claim_id: c_4OfHDYuklvJsrVqcQvPA5o
          source_id: s_dnGcX27WSqLJQi9Wfz8Gdu
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第四十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TdtTDBShmb1aCgpxE3qjM3
        status: active
        display_name: 王資善
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嶽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶽 | accepted |
| birth.date | 1436年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hkkZy7J5ztQnL3t6fCHvcP | 王崇志 | accepted |
| spouses | p_VfhCAGmScV1Ww7WRACtCNH | 劉氏 | accepted |
| ancestors | p_YyT6AeK4EyXH1THz1a4YvT | 王茂春 | accepted |
| ancestors | p_TdtTDBShmb1aCgpxE3qjM3 | 王資善 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王嶽妻)（CBDB 248131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248131&o=json)
- [中国历代人物传记资料库：王嶽（CBDB 199663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199663&o=json)
