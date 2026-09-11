---
schema: wang-person/v1
id: p_RP3GcPBFcyF7KTU1f9dhPb
status: active
merged_into: null
display_name: 王廷襄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YPuxJd9BXj4E2UCCjMgF2m
        subject_person_id: p_RP3GcPBFcyF7KTU1f9dhPb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GRB9Er9Q8hyjVKC8e78Eep
          claim_id: c_YPuxJd9BXj4E2UCCjMgF2m
          source_id: s_w3uYxQbCx7tLG5Xd1akZ9D
          stance: supports
          locator: CBDB:637560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637560）
          source: &a1
            id: s_w3uYxQbCx7tLG5Xd1akZ9D
            source_type: api_record
            title: 中国历代人物传记资料库：王廷襄（CBDB 637560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637560&o=json
            external_identifier: CBDB:637560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jHUxvBDLURqGJnDuEmmVkf
        subject_person_id: p_RP3GcPBFcyF7KTU1f9dhPb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷襄，清人物。籍贯湖南省，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 637560）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D_hCayvf_S3otmtUGuOx7-
          claim_id: c_jHUxvBDLURqGJnDuEmmVkf
          source_id: s_w3uYxQbCx7tLG5Xd1akZ9D
          stance: supports
          locator: CBDB:637560
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

# 王廷襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷襄 | accepted |
| bio.summary | 王廷襄，清人物。籍贯湖南省，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 637560） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷襄（CBDB 637560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637560&o=json)
