---
schema: wang-person/v1
id: p_HvDxwBhaLDFSeutLCPFiED
status: active
merged_into: null
display_name: 王汝璐
cbdb_id: 441158
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2qeHm3EU18YB3mGTAthKL
        subject_person_id: p_HvDxwBhaLDFSeutLCPFiED
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝璐，清人物。籍贯諸城，入仕廩生。（中国历代人物传记资料库 CBDB 441158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gwxLnPyLwp7dhGtw_D96_G
          claim_id: c_U2qeHm3EU18YB3mGTAthKL
          source_id: s_pXy4MJL1J7PFfoYMxws89B
          stance: supports
          locator: CBDB:441158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pXy4MJL1J7PFfoYMxws89B
            source_type: api_record
            title: 中国历代人物传记资料库：王汝璐（CBDB 441158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441158&o=json
            external_identifier: CBDB:441158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A26XY4DanC4rn9NyD3BibM
        subject_person_id: p_HvDxwBhaLDFSeutLCPFiED
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝璐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aP4oZ6cz3K1bVZBFJC3GB8
          claim_id: c_A26XY4DanC4rn9NyD3BibM
          source_id: s_pXy4MJL1J7PFfoYMxws89B
          stance: supports
          locator: CBDB:441158
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝璐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝璐，清人物。籍贯諸城，入仕廩生。（中国历代人物传记资料库 CBDB 441158） | accepted |
| name.primary | 王汝璐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝璐（CBDB 441158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441158&o=json)
