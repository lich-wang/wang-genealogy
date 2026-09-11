---
schema: wang-person/v1
id: p_MaGB66mhMrHZAHGAJ5yXPR
status: active
merged_into: null
display_name: 夏恆
revision: 1
cbdb_id: 54868
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_IIojWwor4Xo8zXzBKqfgta
        subject_person_id: p_MaGB66mhMrHZAHGAJ5yXPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 夏恆
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ikILj1M8Rm0xc_QWQYjvF
          claim_id: c_IIojWwor4Xo8zXzBKqfgta
          source_id: s_JIe_nNaGvVThuJYMZhTyfO
          stance: supports
          locator: CBDB:54868
          quotation: null
          interpretation_note: CBDB 明确记录的王璊配偶
          source: &a1
            id: s_JIe_nNaGvVThuJYMZhTyfO
            source_type: api_record
            title: 中国历代人物传记资料库：夏恆（CBDB 54868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54868&o=json
            external_identifier: CBDB:54868
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
        id: c_CUTnPuisVc_gz1RH433yuT
        subject_person_id: p_HR1bM3Py7J5ZMbLuKMh6ft
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MaGB66mhMrHZAHGAJ5yXPR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ClFSotjUVoCf6xP7BrCW0
          claim_id: c_CUTnPuisVc_gz1RH433yuT
          source_id: s_JIe_nNaGvVThuJYMZhTyfO
          stance: supports
          locator: CBDB 双向互证（丈夫 夏恆）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HR1bM3Py7J5ZMbLuKMh6ft
        status: active
        display_name: 王璊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 夏恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 夏恆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HR1bM3Py7J5ZMbLuKMh6ft | 王璊 | accepted |

## 外部来源

- [中国历代人物传记资料库：夏恆（CBDB 54868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54868&o=json)
