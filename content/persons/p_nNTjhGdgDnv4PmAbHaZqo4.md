---
schema: wang-person/v1
id: p_nNTjhGdgDnv4PmAbHaZqo4
status: active
merged_into: null
display_name: 王念貽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PbMtQB4Rc1NnNpgPDd5HqC
        subject_person_id: p_nNTjhGdgDnv4PmAbHaZqo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念貽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M3iPWSXrhF8HgyGxyD3Dm6
          claim_id: c_PbMtQB4Rc1NnNpgPDd5HqC
          source_id: s_NbG55TdJtmkVczgWkQzGx5
          stance: supports
          locator: CBDB:637790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637790）
          source: &a1
            id: s_NbG55TdJtmkVczgWkQzGx5
            source_type: api_record
            title: 中国历代人物传记资料库：王念貽（CBDB 637790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637790&o=json
            external_identifier: CBDB:637790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4XFH2Sr1cxDezHqA3pC1PU
        subject_person_id: p_nNTjhGdgDnv4PmAbHaZqo4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念貽，清人物。籍贯重慶府，曾任訓導。（中国历代人物传记资料库 CBDB 637790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q3JeYAjxRrBvn5ORsaVqFE
          claim_id: c_4XFH2Sr1cxDezHqA3pC1PU
          source_id: s_NbG55TdJtmkVczgWkQzGx5
          stance: supports
          locator: CBDB:637790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王念貽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念貽 | accepted |
| bio.summary | 王念貽，清人物。籍贯重慶府，曾任訓導。（中国历代人物传记资料库 CBDB 637790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王念貽（CBDB 637790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637790&o=json)
