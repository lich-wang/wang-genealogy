---
schema: wang-person/v1
id: p_iBCLsppDC9AygsASsGw5FH
status: active
merged_into: null
display_name: 王春霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w7WQTyd1AQUd15D2uGDtSD
        subject_person_id: p_iBCLsppDC9AygsASsGw5FH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jFhRCd18VLgLgzLaGgV22z
          claim_id: c_w7WQTyd1AQUd15D2uGDtSD
          source_id: s_KKs3fF7BBa3H58YAA739Ro
          stance: supports
          locator: CBDB:638427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638427）
          source: &a1
            id: s_KKs3fF7BBa3H58YAA739Ro
            source_type: api_record
            title: 中国历代人物传记资料库：王春霖（CBDB 638427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638427&o=json
            external_identifier: CBDB:638427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CgfpU3bcF46RdVavcZGKrC
        subject_person_id: p_iBCLsppDC9AygsASsGw5FH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春霖，清人物。籍贯衡陽，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 638427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n8qM88UNV7EE2iZcBc5SBe
          claim_id: c_CgfpU3bcF46RdVavcZGKrC
          source_id: s_KKs3fF7BBa3H58YAA739Ro
          stance: supports
          locator: CBDB:638427
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

# 王春霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春霖 | accepted |
| bio.summary | 王春霖，清人物。籍贯衡陽，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 638427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春霖（CBDB 638427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638427&o=json)
