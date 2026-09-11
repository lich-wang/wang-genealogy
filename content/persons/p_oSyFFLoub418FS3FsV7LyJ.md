---
schema: wang-person/v1
id: p_oSyFFLoub418FS3FsV7LyJ
status: active
merged_into: null
display_name: 屈大均
revision: 1
cbdb_id: 30190
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_azULnKDfEz_a6A_3lBEB2T
        subject_person_id: p_oSyFFLoub418FS3FsV7LyJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 屈大均
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MomObgIzuZYXym2IlGUC42
          claim_id: c_azULnKDfEz_a6A_3lBEB2T
          source_id: s_JPlkw3XYYJcjsZLhDlBDnw
          stance: supports
          locator: CBDB:30190
          quotation: null
          interpretation_note: CBDB 明确记录的王華姜配偶
          source: &a1
            id: s_JPlkw3XYYJcjsZLhDlBDnw
            source_type: api_record
            title: 中国历代人物传记资料库：屈大均（CBDB 30190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30190&o=json
            external_identifier: CBDB:30190
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
        id: c_H-7Pj3OJBvxIppJzwPUXEe
        subject_person_id: p_bas9F8qn5mmHqo3q8sM16v
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_oSyFFLoub418FS3FsV7LyJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dVj8-RG_MlSOE2u5pZudD
          claim_id: c_H-7Pj3OJBvxIppJzwPUXEe
          source_id: s_JPlkw3XYYJcjsZLhDlBDnw
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9262：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bas9F8qn5mmHqo3q8sM16v
        status: active
        display_name: 王華姜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 屈大均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 屈大均 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bas9F8qn5mmHqo3q8sM16v | 王華姜 | accepted |

## 外部来源

- [中国历代人物传记资料库：屈大均（CBDB 30190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30190&o=json)
