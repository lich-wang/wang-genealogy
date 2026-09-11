---
schema: wang-person/v1
id: p_YH2AWKboAH8csm9uQT4BD3
status: active
merged_into: null
display_name: 王安中
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eEEng5JJU9iqHh8FqMX45B
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NwbZPyAWPBiTsy7MDjxnrz
          claim_id: c_eEEng5JJU9iqHh8FqMX45B
          source_id: s_qG8CjfakYkgHewxaZUKuDr
          stance: supports
          locator: CBDB:8143
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8143）
          source: &a1
            id: s_qG8CjfakYkgHewxaZUKuDr
            source_type: api_record
            title: 中国历代人物传记资料库：王安中（CBDB 8143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8143&o=json
            external_identifier: CBDB:8143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CHVFfwNoPsS7tGaX6Gc9Fo
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1076年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59Xd1EUJADqUMsXowyG74x
          claim_id: c_CHVFfwNoPsS7tGaX6Gc9Fo
          source_id: s_qG8CjfakYkgHewxaZUKuDr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HGJ7DNnqcyVekN5hrPbi1v
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1134年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TyJp4G9zQnN3Tj69zZ7S6o
          claim_id: c_HGJ7DNnqcyVekN5hrPbi1v
          source_id: s_qG8CjfakYkgHewxaZUKuDr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qf8h8EhdJwZVo3ME7n4nx2
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安中（1076年—1134年），宋人物。籍贯陽曲，入仕進士，曾任翰林學士、御史中丞、尚書省左丞。（中国历代人物传记资料库 CBDB 8143）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zb6dwJmwB8ltYRqtIjINuk
          claim_id: c_qf8h8EhdJwZVo3ME7n4nx2
          source_id: s_qG8CjfakYkgHewxaZUKuDr
          stance: supports
          locator: CBDB:8143
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_S4NZh56W2LvI2VAkQAyMPh
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GUYLnGM4rWDWWLLPQPgoPA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z9y7zhWRmBJP2rhhRag4tL
          claim_id: c_S4NZh56W2LvI2VAkQAyMPh
          source_id: s_qG8CjfakYkgHewxaZUKuDr
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GUYLnGM4rWDWWLLPQPgoPA
        status: active
        display_name: 王辟章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_SlOUsnqZf_qN2zg8DWjFnD
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJLPSgL13g5Bn4eeTNS1zm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wdzZqA3oqovbPEMzXCClWO
          claim_id: c_SlOUsnqZf_qN2zg8DWjFnD
          source_id: s_2QJvV8kezM4QekN57fwwSU
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2QJvV8kezM4QekN57fwwSU
            source_type: api_record
            title: 中国历代人物传记资料库：王秬（CBDB 1792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1792&o=json
            external_identifier: CBDB:1792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tJLPSgL13g5Bn4eeTNS1zm
        status: active
        display_name: 王秬
        merged_into_person_id: null
    - claim:
        id: c_JtKJCM7Cd7M2ZaMVEPl6qR
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_quHCTR6QvY8PHS7yoHNPKr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKn7wpclhNEZmX0HnDXNPB
          claim_id: c_JtKJCM7Cd7M2ZaMVEPl6qR
          source_id: s_XCPvVRadWqKXtwK7MCMyEN
          stance: supports
          locator: CBDB 双向互证（曾祖 王安中 ⇄ 曾孫; 重孫 王宗孟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_XCPvVRadWqKXtwK7MCMyEN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗孟（CBDB 97859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97859&o=json
            external_identifier: CBDB:97859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_quHCTR6QvY8PHS7yoHNPKr
        status: active
        display_name: 王宗孟
        merged_into_person_id: null
  other: []
---

# 王安中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安中 | accepted |
| birth.date | 1076年 | accepted |
| death.date | 1134年 | accepted |
| bio.summary | 王安中（1076年—1134年），宋人物。籍贯陽曲，入仕進士，曾任翰林學士、御史中丞、尚書省左丞。（中国历代人物传记资料库 CBDB 8143） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GUYLnGM4rWDWWLLPQPgoPA | 王辟章 | accepted |
| descendants | p_tJLPSgL13g5Bn4eeTNS1zm | 王秬 | accepted |
| descendants | p_quHCTR6QvY8PHS7yoHNPKr | 王宗孟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安中（CBDB 8143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8143&o=json)
- [中国历代人物传记资料库：王秬（CBDB 1792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1792&o=json)
- [中国历代人物传记资料库：王宗孟（CBDB 97859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97859&o=json)
