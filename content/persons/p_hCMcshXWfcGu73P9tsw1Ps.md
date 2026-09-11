---
schema: wang-person/v1
id: p_hCMcshXWfcGu73P9tsw1Ps
status: active
merged_into: null
display_name: 王士淳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VLm9P24DmB3KR8nWQ6GP9J
        subject_person_id: p_hCMcshXWfcGu73P9tsw1Ps
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士淳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sdPuSTRD5ikjG1R6FJtkDi
          claim_id: c_VLm9P24DmB3KR8nWQ6GP9J
          source_id: s_w74UJFpBbZG8PqnUvgnC64
          stance: supports
          locator: CBDB:636803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636803）
          source: &a1
            id: s_w74UJFpBbZG8PqnUvgnC64
            source_type: api_record
            title: 中国历代人物传记资料库：王士淳（CBDB 636803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636803&o=json
            external_identifier: CBDB:636803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qoT1n8B96GB3wyn14uwB6G
        subject_person_id: p_hCMcshXWfcGu73P9tsw1Ps
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士淳，清人物。籍贯大同，入仕優貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 636803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gQfq3jCWHs76UiXUkw-iPs
          claim_id: c_qoT1n8B96GB3wyn14uwB6G
          source_id: s_w74UJFpBbZG8PqnUvgnC64
          stance: supports
          locator: CBDB:636803
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

# 王士淳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士淳 | accepted |
| bio.summary | 王士淳，清人物。籍贯大同，入仕優貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 636803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士淳（CBDB 636803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636803&o=json)
