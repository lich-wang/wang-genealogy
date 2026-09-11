---
schema: wang-person/v1
id: p_PxWBye2QiwngCAxW7GaGTJ
status: active
merged_into: null
display_name: 王嘉曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tY458rMyvh3LtoKKw3naSP
        subject_person_id: p_PxWBye2QiwngCAxW7GaGTJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k3FnM7nC9fxJzW77ScrK2z
          claim_id: c_tY458rMyvh3LtoKKw3naSP
          source_id: s_SDnDSLXfMJnp49pgEXXC1J
          stance: supports
          locator: CBDB:72151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72151）
          source: &a1
            id: s_SDnDSLXfMJnp49pgEXXC1J
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉曾（CBDB 72151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72151&o=json
            external_identifier: CBDB:72151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DorMTMZTSPzFsLrbmjAiDQ
        subject_person_id: p_PxWBye2QiwngCAxW7GaGTJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1729年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ba15W6RzxmVowB4tTgU12v
          claim_id: c_DorMTMZTSPzFsLrbmjAiDQ
          source_id: s_SDnDSLXfMJnp49pgEXXC1J
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
        id: c_DSJDMezLCpHynqUVKonNdj
        subject_person_id: p_PxWBye2QiwngCAxW7GaGTJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V7p2HNPEVEWY5FtmtGLG3G
          claim_id: c_DSJDMezLCpHynqUVKonNdj
          source_id: s_SDnDSLXfMJnp49pgEXXC1J
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
        id: c_MYH1d2NNwWVMJP5sdxJgvu
        subject_person_id: p_PxWBye2QiwngCAxW7GaGTJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉曾（1729年—1781年），清人物。籍贯金山。（中国历代人物传记资料库 CBDB 72151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IfQThlM0cx5YQdbgZoBnKT
          claim_id: c_MYH1d2NNwWVMJP5sdxJgvu
          source_id: s_SDnDSLXfMJnp49pgEXXC1J
          stance: supports
          locator: CBDB:72151
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

# 王嘉曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉曾 | accepted |
| birth.date | 1729年 | accepted |
| death.date | 1781年 | accepted |
| bio.summary | 王嘉曾（1729年—1781年），清人物。籍贯金山。（中国历代人物传记资料库 CBDB 72151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉曾（CBDB 72151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72151&o=json)
