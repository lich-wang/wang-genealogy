---
schema: wang-person/v1
id: p_5gFtU7bz388JJrvKh3CRZC
status: active
merged_into: null
display_name: 王碧瑩
cbdb_id: 56419
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EtSU9JfWcJEDJJ2mJ8Tdpm
        subject_person_id: p_5gFtU7bz388JJrvKh3CRZC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碧瑩，史料所见人物。本项目依据《中国历代人物传记资料库：王碧瑩（CBDB 56419）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_qJoBD02DmKrhBATvMPMnsI
          claim_id: c_EtSU9JfWcJEDJJ2mJ8Tdpm
          source_id: s_XTXrD8L14RSEYCEUpsbFNH
          stance: supports
          locator: CBDB:56419
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_XTXrD8L14RSEYCEUpsbFNH
            source_type: api_record
            title: 中国历代人物传记资料库：王碧瑩（CBDB 56419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56419&o=json
            external_identifier: CBDB:56419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ug3i6uA58NyGBFUJKZs9ne
        subject_person_id: p_5gFtU7bz388JJrvKh3CRZC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碧瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p8apFPg8X42eKMdmR62s9n
          claim_id: c_Ug3i6uA58NyGBFUJKZs9ne
          source_id: s_XTXrD8L14RSEYCEUpsbFNH
          stance: supports
          locator: CBDB:56419
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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
        id: c_o9Cau3SPadNEQfXdyyi5RL
        subject_person_id: p_5gFtU7bz388JJrvKh3CRZC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jL5o4KJacHPUbRKunR4qqG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eDyciDBjU1_XoQEj3ryJVE
          claim_id: c_o9Cau3SPadNEQfXdyyi5RL
          source_id: s_9E7n1SFBCtXS-q4N2z_AT1
          stance: supports
          locator: CBDB 双向互证（丈夫 趙載庭）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9E7n1SFBCtXS-q4N2z_AT1
            source_type: api_record
            title: 中国历代人物传记资料库：趙載庭（CBDB 56421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56421&o=json
            external_identifier: CBDB:56421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jL5o4KJacHPUbRKunR4qqG
        status: active
        display_name: 趙載庭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王碧瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王碧瑩，史料所见人物。本项目依据《中国历代人物传记资料库：王碧瑩（CBDB 56419）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王碧瑩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jL5o4KJacHPUbRKunR4qqG | 趙載庭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王碧瑩（CBDB 56419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56419&o=json)
- [中国历代人物传记资料库：趙載庭（CBDB 56421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56421&o=json)
