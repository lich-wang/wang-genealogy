---
schema: wang-person/v1
id: p_wi37Gn35NMVYcwoza3zXcj
status: active
merged_into: null
display_name: 弘氏
revision: 1
cbdb_id: 143436
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oRqR7NuL4pXiwuGiu4-PK6
        subject_person_id: p_wi37Gn35NMVYcwoza3zXcj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 弘氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSPd7mjaXGd6UNytJMbFie
          claim_id: c_oRqR7NuL4pXiwuGiu4-PK6
          source_id: s_7Xj0TvnMHrMgjeYFi-LOpw
          stance: supports
          locator: CBDB:143436
          quotation: null
          interpretation_note: CBDB 明确记录的王叔寧配偶
          source: &a1
            id: s_7Xj0TvnMHrMgjeYFi-LOpw
            source_type: api_record
            title: 中国历代人物传记资料库：弘氏(弘昇女)（CBDB 143436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143436&o=json
            external_identifier: CBDB:143436
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
        id: c_yEtAbTwhZDcksQaalCst9J
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wi37Gn35NMVYcwoza3zXcj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qck6dmuMJ33RnImATztYzj
          claim_id: c_yEtAbTwhZDcksQaalCst9J
          source_id: s_7Xj0TvnMHrMgjeYFi-LOpw
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MbxgwAf2NWWEn85CBY6PsB
        status: active
        display_name: 王叔寧
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 弘氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 弘氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MbxgwAf2NWWEn85CBY6PsB | 王叔寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：弘氏(弘昇女)（CBDB 143436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143436&o=json)
