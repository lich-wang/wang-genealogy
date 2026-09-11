---
schema: wang-person/v1
id: p_6MNxbLMUF7ZGM2A5Z7B1Ju
status: active
merged_into: null
display_name: 王晦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bovnAGfbAgxq5n1PBptQQr
        subject_person_id: p_6MNxbLMUF7ZGM2A5Z7B1Ju
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XqLXjcmAA946M825b1CyQF
          claim_id: c_bovnAGfbAgxq5n1PBptQQr
          source_id: s_ZZRPNoGqPVbMhFRwwMcNaV
          stance: supports
          locator: CBDB:247374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247374）
          source: &a1
            id: s_ZZRPNoGqPVbMhFRwwMcNaV
            source_type: api_record
            title: 中国历代人物传记资料库：王晦（CBDB 247374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247374&o=json
            external_identifier: CBDB:247374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AnDZEYeZPCXZHfQN8r79er
        subject_person_id: p_6MNxbLMUF7ZGM2A5Z7B1Ju
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晦，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247374）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FZzYLbboyZ9ME_kGCVj43L
          claim_id: c_AnDZEYeZPCXZHfQN8r79er
          source_id: s_ZZRPNoGqPVbMhFRwwMcNaV
          stance: supports
          locator: CBDB:247374
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

# 王晦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晦 | accepted |
| bio.summary | 王晦，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晦（CBDB 247374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247374&o=json)
