---
schema: wang-person/v1
id: p_G8wAUPTPssWeMX57eL6dJb
status: active
merged_into: null
display_name: 王有榕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aEUeb2GSBZ7zdR75Rg2iKB
        subject_person_id: p_G8wAUPTPssWeMX57eL6dJb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有榕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pdxf2YEECyXPXoqaSE6A5H
          claim_id: c_aEUeb2GSBZ7zdR75Rg2iKB
          source_id: s_N8LRX9ffJ5jvaDErfWCbPR
          stance: supports
          locator: CBDB:638593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638593）
          source: &a1
            id: s_N8LRX9ffJ5jvaDErfWCbPR
            source_type: api_record
            title: 中国历代人物传记资料库：王有榕（CBDB 638593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638593&o=json
            external_identifier: CBDB:638593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8qLtLaB48YFwm4r1NFGHVv
        subject_person_id: p_G8wAUPTPssWeMX57eL6dJb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有榕，清人物。籍贯孝感，入仕優貢生，曾任知縣。（中国历代人物传记资料库 CBDB 638593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o_2pD1fM1nrYtGiD0QfzDZ
          claim_id: c_8qLtLaB48YFwm4r1NFGHVv
          source_id: s_N8LRX9ffJ5jvaDErfWCbPR
          stance: supports
          locator: CBDB:638593
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

# 王有榕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有榕 | accepted |
| bio.summary | 王有榕，清人物。籍贯孝感，入仕優貢生，曾任知縣。（中国历代人物传记资料库 CBDB 638593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有榕（CBDB 638593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638593&o=json)
