---
schema: wang-person/v1
id: p_rJjT8SEAAUkWGSz5YzGbND
status: active
merged_into: null
display_name: 王良劍
cbdb_id: 155638
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KpPAwp2Po2qp3etYEXr5QS
        subject_person_id: p_rJjT8SEAAUkWGSz5YzGbND
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良劍，唐人物。籍贯中部。（中国历代人物传记资料库 CBDB 155638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dAnZIojruqg7o83ZzMWz5O
          claim_id: c_KpPAwp2Po2qp3etYEXr5QS
          source_id: s_YCqRvnBrC1358D4tEeDk4a
          stance: supports
          locator: CBDB:155638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YCqRvnBrC1358D4tEeDk4a
            source_type: api_record
            title: 中国历代人物传记资料库：王良劍（CBDB 155638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155638&o=json
            external_identifier: CBDB:155638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XkrDdx6PJAc4SkFXp9SahS
        subject_person_id: p_rJjT8SEAAUkWGSz5YzGbND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良劍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8Dvu33dnuMdyubZNz4aFsK
          claim_id: c_XkrDdx6PJAc4SkFXp9SahS
          source_id: s_YCqRvnBrC1358D4tEeDk4a
          stance: supports
          locator: CBDB:155638
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gSM8utnGUFlSKN9Ds1cxPB
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rJjT8SEAAUkWGSz5YzGbND
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNNc_ut8MWf9da9whrP0kV
          claim_id: c_gSM8utnGUFlSKN9Ds1cxPB
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 50：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NvuDtdsVXEChdgpchxcaLA
            source_type: api_record
            title: 中国历代人物传记资料库：王崇俊（CBDB 141300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141300&o=json
            external_identifier: CBDB:141300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7u3bSDEcDWQ7xscg7g1yer
        status: active
        display_name: 王崇俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王良劍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良劍，唐人物。籍贯中部。（中国历代人物传记资料库 CBDB 155638） | accepted |
| name.primary | 王良劍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7u3bSDEcDWQ7xscg7g1yer | 王崇俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇俊（CBDB 141300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141300&o=json)
- [中国历代人物传记资料库：王良劍（CBDB 155638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155638&o=json)
