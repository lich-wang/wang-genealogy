---
schema: wang-person/v1
id: p_Sfrou1xDvJgJkL15LxBw5w
status: active
merged_into: null
display_name: 王約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AQ2jvKBqtnd28SGpAeqZPp
        subject_person_id: p_Sfrou1xDvJgJkL15LxBw5w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SQ591gnLF4XnbAfhFuZ7r9
          claim_id: c_AQ2jvKBqtnd28SGpAeqZPp
          source_id: s_oJMg1n8ETQ3wfpRbC4j98L
          stance: supports
          locator: CBDB:452709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452709）
          source: &a1
            id: s_oJMg1n8ETQ3wfpRbC4j98L
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 452709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452709&o=json
            external_identifier: CBDB:452709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oHKRDGL2vrp9KUmBvX7Pw3
        subject_person_id: p_Sfrou1xDvJgJkL15LxBw5w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 452709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mUS0XeJqx7WZ8YES8Colos
          claim_id: c_oHKRDGL2vrp9KUmBvX7Pw3
          source_id: s_oJMg1n8ETQ3wfpRbC4j98L
          stance: supports
          locator: CBDB:452709
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

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| bio.summary | 王約，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 452709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王約（CBDB 452709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452709&o=json)
