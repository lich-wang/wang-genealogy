---
schema: wang-person/v1
id: p_AUM2HxD245JgNTZGYMevph
status: active
merged_into: null
display_name: 王鐸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WiYBy448WvRJNvMPja4KVm
        subject_person_id: p_AUM2HxD245JgNTZGYMevph
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xKXwnb9EQT8YbT1uJZ19Kg
          claim_id: c_WiYBy448WvRJNvMPja4KVm
          source_id: s_RxHFeVG51d1E6UoFejMg9b
          stance: supports
          locator: CBDB:245289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245289）
          source: &a1
            id: s_RxHFeVG51d1E6UoFejMg9b
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 245289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245289&o=json
            external_identifier: CBDB:245289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AH1d6wCd5fAMdjHDgaZU7b
        subject_person_id: p_AUM2HxD245JgNTZGYMevph
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。成化八年進士，籍贯岳池，曾任丞。（中国历代人物传记资料库 CBDB 245289）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_myxT65aKPpDhTOWYJ-gzQH
          claim_id: c_AH1d6wCd5fAMdjHDgaZU7b
          source_id: s_RxHFeVG51d1E6UoFejMg9b
          stance: supports
          locator: CBDB:245289
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ms9RrOVcEuE23HhUno8MXg
        subject_person_id: p_AUM2HxD245JgNTZGYMevph
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nMp3bRUZX5b7h1zfUaXGei
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KZooHFcVlH4LdikMLDHbCu
          claim_id: c_Ms9RrOVcEuE23HhUno8MXg
          source_id: s_RxHFeVG51d1E6UoFejMg9b
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第二十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nMp3bRUZX5b7h1zfUaXGei
        status: active
        display_name: 王參
        merged_into_person_id: null
    - claim:
        id: c_HZA3H-LGDw4H8POWNQumKs
        subject_person_id: p_AUM2HxD245JgNTZGYMevph
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2DPUNb8tuJPhzRR5B7kFDr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hW5Ixps3VFv8OsW-7diuV0
          claim_id: c_HZA3H-LGDw4H8POWNQumKs
          source_id: s_6-zu7QlVrly12GaCeHMz11
          stance: supports
          locator: CBDB：兄弟 王參（199457）之父／母 王鐸
          quotation: null
          interpretation_note: 由兄弟关系推断：王斗南 与 王參 为同胞（CBDB 记「弟」），王參 之父／母即 王斗南 之父／母。
          source:
            id: s_6-zu7QlVrly12GaCeHMz11
            source_type: api_record
            title: 中国历代人物传记资料库：王斗南（CBDB 245292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245292&o=json
            external_identifier: CBDB:245292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2DPUNb8tuJPhzRR5B7kFDr
        status: active
        display_name: 王斗南
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。成化八年進士，籍贯岳池，曾任丞。（中国历代人物传记资料库 CBDB 245289） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nMp3bRUZX5b7h1zfUaXGei | 王參 | accepted |
| children | p_2DPUNb8tuJPhzRR5B7kFDr | 王斗南 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斗南（CBDB 245292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245292&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 245289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245289&o=json)
