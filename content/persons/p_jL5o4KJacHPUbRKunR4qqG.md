---
schema: wang-person/v1
id: p_jL5o4KJacHPUbRKunR4qqG
status: active
merged_into: null
display_name: 趙載庭
revision: 1
cbdb_id: 56421
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BQ670PAXHq4XWXSEhsoqdX
        subject_person_id: p_jL5o4KJacHPUbRKunR4qqG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙載庭，史料所见人物。本项目依据《中国历代人物传记资料库：趙載庭（CBDB 56421）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZbXvhGd0El_o0XubJp4CtM
          claim_id: c_BQ670PAXHq4XWXSEhsoqdX
          source_id: s_9E7n1SFBCtXS-q4N2z_AT1
          stance: supports
          locator: CBDB:56421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5_OuUXbo8DDPAwKEhPPH3T
        subject_person_id: p_jL5o4KJacHPUbRKunR4qqG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙載庭
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HpfR04R-6jUTHDNasqtKcS
          claim_id: c_5_OuUXbo8DDPAwKEhPPH3T
          source_id: s_9E7n1SFBCtXS-q4N2z_AT1
          stance: supports
          locator: CBDB:56421
          quotation: null
          interpretation_note: CBDB 明确记录的王碧瑩配偶
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
          source: *a1
      object_person:
        id: p_5gFtU7bz388JJrvKh3CRZC
        status: active
        display_name: 王碧瑩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙載庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙載庭，史料所见人物。本项目依据《中国历代人物传记资料库：趙載庭（CBDB 56421）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 趙載庭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5gFtU7bz388JJrvKh3CRZC | 王碧瑩 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙載庭（CBDB 56421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56421&o=json)
