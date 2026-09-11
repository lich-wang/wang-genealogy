---
schema: wang-person/v1
id: p_86TnGt4PhupaRsN9wjqbjL
status: active
merged_into: null
display_name: 王魯峯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VewdN9gxopyyGVK1hvMkPf
        subject_person_id: p_86TnGt4PhupaRsN9wjqbjL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯峯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9C1pGoRQVMWZmWB77A7Rv
          claim_id: c_VewdN9gxopyyGVK1hvMkPf
          source_id: s_Cv9r21h1TcgqBWLm35GPXC
          stance: supports
          locator: CBDB:699109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699109）
          source: &a1
            id: s_Cv9r21h1TcgqBWLm35GPXC
            source_type: api_record
            title: 中国历代人物传记资料库：王魯峯（CBDB 699109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699109&o=json
            external_identifier: CBDB:699109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KS3mkc7xSp6f4hhyN1ttw2
        subject_person_id: p_86TnGt4PhupaRsN9wjqbjL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魯峯，清人物。籍贯渮澤。（中国历代人物传记资料库 CBDB 699109）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uY1nZKBl6edQ-oMEe0ovsd
          claim_id: c_KS3mkc7xSp6f4hhyN1ttw2
          source_id: s_Cv9r21h1TcgqBWLm35GPXC
          stance: supports
          locator: CBDB:699109
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f7jbi1shnVgNLvQWn6BWBZ
        subject_person_id: p_EsATjcH2T2DuSoEWUsrrCU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_86TnGt4PhupaRsN9wjqbjL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WxS7hi7IMXsgRilQBl8PS5
          claim_id: c_f7jbi1shnVgNLvQWn6BWBZ
          source_id: s_Cv9r21h1TcgqBWLm35GPXC
          stance: supports
          locator: 新修菏澤縣志，lgid=725119：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EsATjcH2T2DuSoEWUsrrCU
        status: active
        display_name: 王為章
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王魯峯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魯峯 | accepted |
| bio.summary | 王魯峯，清人物。籍贯渮澤。（中国历代人物传记资料库 CBDB 699109） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EsATjcH2T2DuSoEWUsrrCU | 王為章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王魯峯（CBDB 699109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699109&o=json)
