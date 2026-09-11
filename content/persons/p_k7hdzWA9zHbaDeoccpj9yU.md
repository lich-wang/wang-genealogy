---
schema: wang-person/v1
id: p_k7hdzWA9zHbaDeoccpj9yU
status: active
merged_into: null
display_name: 王景羲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbJEDjKrh34Q9CLA4fecaj
        subject_person_id: p_k7hdzWA9zHbaDeoccpj9yU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HxjXFiSwJ58MBHoCejtMLW
          claim_id: c_cbJEDjKrh34Q9CLA4fecaj
          source_id: s_fouUqSzdKAs9a4CmbtqCJz
          stance: supports
          locator: CBDB:72075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72075）
          source: &a1
            id: s_fouUqSzdKAs9a4CmbtqCJz
            source_type: api_record
            title: 中国历代人物传记资料库：王景羲（CBDB 72075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72075&o=json
            external_identifier: CBDB:72075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EXxpLVb1bPub3Q6UJQGWEC
        subject_person_id: p_k7hdzWA9zHbaDeoccpj9yU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3HhKWZisRKbjJ6rMR2uQ5S
          claim_id: c_EXxpLVb1bPub3Q6UJQGWEC
          source_id: s_fouUqSzdKAs9a4CmbtqCJz
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
        id: c_nL6nKbfwUiiEcsHSm4bJXX
        subject_person_id: p_k7hdzWA9zHbaDeoccpj9yU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1916年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Efh4NCQdiFCpf3n9ToNfJi
          claim_id: c_nL6nKbfwUiiEcsHSm4bJXX
          source_id: s_fouUqSzdKAs9a4CmbtqCJz
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
        id: c_PQvKFVbsC93xhPB4HwAMpF
        subject_person_id: p_k7hdzWA9zHbaDeoccpj9yU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景羲（1860年—1916年），中華民國人物。籍贯瑞安。（中国历代人物传记资料库 CBDB 72075）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HJM3oiZ1W1Q7gh0Oapjy-_
          claim_id: c_PQvKFVbsC93xhPB4HwAMpF
          source_id: s_fouUqSzdKAs9a4CmbtqCJz
          stance: supports
          locator: CBDB:72075
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

# 王景羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景羲 | accepted |
| birth.date | 1860年 | accepted |
| death.date | 1916年 | accepted |
| bio.summary | 王景羲（1860年—1916年），中華民國人物。籍贯瑞安。（中国历代人物传记资料库 CBDB 72075） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景羲（CBDB 72075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72075&o=json)
