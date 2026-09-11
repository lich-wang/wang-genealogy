---
schema: wang-person/v1
id: p_TQCmZy5brGG6jApKc6x9Nd
status: active
merged_into: null
display_name: 王冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sX2pqUMVDsevG56RDEesz9
        subject_person_id: p_TQCmZy5brGG6jApKc6x9Nd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EA7HqeQP1ijGcEqsPycCdX
          claim_id: c_sX2pqUMVDsevG56RDEesz9
          source_id: s_Mu4P45SUwi2k1JJmuUnVxw
          stance: supports
          locator: CBDB:479452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（479452）
          source: &a1
            id: s_Mu4P45SUwi2k1JJmuUnVxw
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 479452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479452&o=json
            external_identifier: CBDB:479452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JYDSMCkKcP16RcN9a6gdmv
        subject_person_id: p_TQCmZy5brGG6jApKc6x9Nd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕，元人物。曾任行中書省員外郎。（中国历代人物传记资料库 CBDB 479452）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CnqruQjv0d5bg7ACKnVIkR
          claim_id: c_JYDSMCkKcP16RcN9a6gdmv
          source_id: s_Mu4P45SUwi2k1JJmuUnVxw
          stance: supports
          locator: CBDB:479452
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| bio.summary | 王冕，元人物。曾任行中書省員外郎。（中国历代人物传记资料库 CBDB 479452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 479452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=479452&o=json)
