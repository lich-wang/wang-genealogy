---
schema: wang-person/v1
id: p_geWnKMsTcUqaVsW4685Pnh
status: active
merged_into: null
display_name: 董雲鶴
revision: 1
cbdb_id: 69973
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FFoL4KnFFNnUDYlhb_Kfkl
        subject_person_id: p_geWnKMsTcUqaVsW4685Pnh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董雲鶴（1784—1847），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 69973）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7N-lyKMxwgHFAzR8S5ro9B
          claim_id: c_FFoL4KnFFNnUDYlhb_Kfkl
          source_id: s_zWm484WGtUTeTQXzITtAGa
          stance: supports
          locator: CBDB:69973
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zWm484WGtUTeTQXzITtAGa
            source_type: api_record
            title: 中国历代人物传记资料库：董雲鶴（CBDB 69973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69973&o=json
            external_identifier: CBDB:69973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GcS5TyI8q1gt6yuOPaToyp
        subject_person_id: p_geWnKMsTcUqaVsW4685Pnh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 董雲鶴
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_63y49Um4JFKGZ3Eb0uuH9E
          claim_id: c_GcS5TyI8q1gt6yuOPaToyp
          source_id: s_zWm484WGtUTeTQXzITtAGa
          stance: supports
          locator: CBDB:69973
          quotation: null
          interpretation_note: CBDB 明确记录的王家榛配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NMaAdGvNawO9kqlmpG686h
        subject_person_id: p_B5mQ7kbzLM3vgbBCkgHMb6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_geWnKMsTcUqaVsW4685Pnh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CRXNt5AqA5k-ZfYeEbZGbu
          claim_id: c_NMaAdGvNawO9kqlmpG686h
          source_id: s_zWm484WGtUTeTQXzITtAGa
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1437, HuWenKai #689：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_B5mQ7kbzLM3vgbBCkgHMb6
        status: active
        display_name: 王家榛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 董雲鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 董雲鶴（1784—1847），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 69973） | accepted |
| name.primary | 董雲鶴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_B5mQ7kbzLM3vgbBCkgHMb6 | 王家榛 | accepted |

## 外部来源

- [中国历代人物传记资料库：董雲鶴（CBDB 69973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69973&o=json)
