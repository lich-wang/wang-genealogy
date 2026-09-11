---
schema: wang-person/v1
id: p_PTxfNR99cTHoxTzKNs5Z9y
status: active
merged_into: null
display_name: 王兆榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BAHJuACRf9cY2rg4BVU7CJ
        subject_person_id: p_PTxfNR99cTHoxTzKNs5Z9y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2KpNBRaMiTKqAe2wH2dwSj
          claim_id: c_BAHJuACRf9cY2rg4BVU7CJ
          source_id: s_EFWAnWHMNfU4snD7G4f8q1
          stance: supports
          locator: CBDB:636203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636203）
          source: &a1
            id: s_EFWAnWHMNfU4snD7G4f8q1
            source_type: api_record
            title: 中国历代人物传记资料库：王兆榮（CBDB 636203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636203&o=json
            external_identifier: CBDB:636203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WJQFQJ82yUFpdHxm4RqQVG
        subject_person_id: p_PTxfNR99cTHoxTzKNs5Z9y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆榮，清人物。籍贯甘肅省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 636203）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fr2yK3NriRMsIiQ5TdEaRV
          claim_id: c_WJQFQJ82yUFpdHxm4RqQVG
          source_id: s_EFWAnWHMNfU4snD7G4f8q1
          stance: supports
          locator: CBDB:636203
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

# 王兆榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆榮 | accepted |
| bio.summary | 王兆榮，清人物。籍贯甘肅省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 636203） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆榮（CBDB 636203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636203&o=json)
