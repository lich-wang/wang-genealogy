---
schema: wang-person/v1
id: p_sQSiQnz7Twehf79tPVfVn2
status: active
merged_into: null
display_name: 王璔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_daE9qZAK8FcuNrnVU3GARE
        subject_person_id: p_sQSiQnz7Twehf79tPVfVn2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xxWAHxUyh2z6Yi211cKnhJ
          claim_id: c_daE9qZAK8FcuNrnVU3GARE
          source_id: s_sLkdFMvaEmE6Vj4sah4tjw
          stance: supports
          locator: CBDB:267896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267896）
          source: &a1
            id: s_sLkdFMvaEmE6Vj4sah4tjw
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 267896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267896&o=json
            external_identifier: CBDB:267896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qBj89T4miEhP5c4wVkHaZ4
        subject_person_id: p_sQSiQnz7Twehf79tPVfVn2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璔，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267896）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PqoY1m_78m5oTfYKRhHCrO
          claim_id: c_qBj89T4miEhP5c4wVkHaZ4
          source_id: s_sLkdFMvaEmE6Vj4sah4tjw
          stance: supports
          locator: CBDB:267896
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

# 王璔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璔 | accepted |
| bio.summary | 王璔，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璔（CBDB 267896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267896&o=json)
