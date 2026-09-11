---
schema: wang-person/v1
id: p_rcs4teF7cXNkkxDS7Kb3fd
status: active
merged_into: null
display_name: 程氏
revision: 1
cbdb_id: 161529
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E_tevSi8ix8-Q3EiS3j5jy
        subject_person_id: p_rcs4teF7cXNkkxDS7Kb3fd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 程氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eAkeijQ67u-2fv1AtPI2U1
          claim_id: c_E_tevSi8ix8-Q3EiS3j5jy
          source_id: s_XDfu_U5IiVW9xAHRh0Za6-
          stance: supports
          locator: CBDB:161529
          quotation: null
          interpretation_note: CBDB 明确记录的王文進配偶
          source: &a1
            id: s_XDfu_U5IiVW9xAHRh0Za6-
            source_type: api_record
            title: 中国历代人物传记资料库：程氏(王文進妻)（CBDB 161529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161529&o=json
            external_identifier: CBDB:161529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_8s1bejXCSYB30MLrqsaMNV
        subject_person_id: p_vjzSJPL4Yr4rG66CFjoYUz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rcs4teF7cXNkkxDS7Kb3fd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yywM1V2lM5xkxF9P3VpQd8
          claim_id: c_8s1bejXCSYB30MLrqsaMNV
          source_id: s_XDfu_U5IiVW9xAHRh0Za6-
          stance: supports
          locator: 唐代墓誌匯編:二卷，Guangqi 3：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vjzSJPL4Yr4rG66CFjoYUz
        status: active
        display_name: 王文進
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 程氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 程氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_vjzSJPL4Yr4rG66CFjoYUz | 王文進 | accepted |

## 外部来源

- [中国历代人物传记资料库：程氏(王文進妻)（CBDB 161529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161529&o=json)
