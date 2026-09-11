---
schema: wang-person/v1
id: p_rik64ggwrZJYQxKGEo3ucr
status: active
merged_into: null
display_name: 王堅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aBWuQcZEhyP52xkpJ7f5aZ
        subject_person_id: p_rik64ggwrZJYQxKGEo3ucr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NDWo8b18z5ee97rj1k1H4s
          claim_id: c_aBWuQcZEhyP52xkpJ7f5aZ
          source_id: s_96XL3YscTyFK1NjJnsrWTr
          stance: supports
          locator: CBDB:153009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153009）
          source: &a1
            id: s_96XL3YscTyFK1NjJnsrWTr
            source_type: api_record
            title: 中国历代人物传记资料库：王堅（CBDB 153009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153009&o=json
            external_identifier: CBDB:153009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2fqzc66EKdHQiTYAmN2HNi
        subject_person_id: p_rik64ggwrZJYQxKGEo3ucr
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
        - id: cs_k76uzGGjgPtnHnmyePM9fh
          claim_id: c_2fqzc66EKdHQiTYAmN2HNi
          source_id: s_96XL3YscTyFK1NjJnsrWTr
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
        id: c_3uEBM9DokkYVenFi2OtneH
        subject_person_id: p_YN2bi35jN8EKBymoEEUjxN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rik64ggwrZJYQxKGEo3ucr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DvrqtsbkLCwI4YL-p29_ix
          claim_id: c_3uEBM9DokkYVenFi2OtneH
          source_id: s_96XL3YscTyFK1NjJnsrWTr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 486：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YN2bi35jN8EKBymoEEUjxN
        status: active
        display_name: 王惠忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堅 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YN2bi35jN8EKBymoEEUjxN | 王惠忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堅（CBDB 153009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153009&o=json)
