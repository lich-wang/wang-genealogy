---
schema: wang-person/v1
id: p_ahmQR7tn3qPGKNt46MLQ8k
status: active
merged_into: null
display_name: 王蘊時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iQ1Av8f9RgDZfpMCpwk1AM
        subject_person_id: p_ahmQR7tn3qPGKNt46MLQ8k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mGPTsPpRLrUz778DyrSDpL
          claim_id: c_iQ1Av8f9RgDZfpMCpwk1AM
          source_id: s_W3P1Estsbsa6x1YGmvuynA
          stance: supports
          locator: CBDB:640185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640185）
          source: &a1
            id: s_W3P1Estsbsa6x1YGmvuynA
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊時（CBDB 640185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640185&o=json
            external_identifier: CBDB:640185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AiQCFVLhYARRT6aoCKrqKB
        subject_person_id: p_ahmQR7tn3qPGKNt46MLQ8k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊時，清人物。籍贯無錫，入仕副榜，曾任知縣。（中国历代人物传记资料库 CBDB 640185）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SX3PXcwOXT5KO8ZUuXF4Dq
          claim_id: c_AiQCFVLhYARRT6aoCKrqKB
          source_id: s_W3P1Estsbsa6x1YGmvuynA
          stance: supports
          locator: CBDB:640185
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

# 王蘊時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊時 | accepted |
| bio.summary | 王蘊時，清人物。籍贯無錫，入仕副榜，曾任知縣。（中国历代人物传记资料库 CBDB 640185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘊時（CBDB 640185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640185&o=json)
