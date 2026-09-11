---
schema: wang-person/v1
id: p_8thUHCr9twjHPLL78tgjMM
status: active
merged_into: null
display_name: 王輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UGJD2EFFQsWfWrK34AcWie
        subject_person_id: p_8thUHCr9twjHPLL78tgjMM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JWY5k1Mhuf4hgcJTWq42ub
          claim_id: c_UGJD2EFFQsWfWrK34AcWie
          source_id: s_RzQ2HQq7GGj9jMcg4A6icB
          stance: supports
          locator: CBDB:237542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237542）
          source: &a1
            id: s_RzQ2HQq7GGj9jMcg4A6icB
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 237542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237542&o=json
            external_identifier: CBDB:237542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s6C2NNPsJNRwc9K79ncbGL
        subject_person_id: p_8thUHCr9twjHPLL78tgjMM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237542）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P3GMz8-s-bB-l974KIcx91
          claim_id: c_s6C2NNPsJNRwc9K79ncbGL
          source_id: s_RzQ2HQq7GGj9jMcg4A6icB
          stance: supports
          locator: CBDB:237542
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

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | 王輔，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237542） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 237542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237542&o=json)
