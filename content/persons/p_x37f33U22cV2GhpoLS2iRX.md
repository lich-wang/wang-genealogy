---
schema: wang-person/v1
id: p_x37f33U22cV2GhpoLS2iRX
status: active
merged_into: null
display_name: 王華
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fVnGdxACFYBr41eV9jkpbe
        subject_person_id: p_x37f33U22cV2GhpoLS2iRX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oW4cqRTYZ7JaFBCNdmiYGL
          claim_id: c_fVnGdxACFYBr41eV9jkpbe
          source_id: s_TJMQdy7ABS84dY4HcruV1Q
          stance: supports
          locator: CBDB:35526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35526）
          source: &a1
            id: s_TJMQdy7ABS84dY4HcruV1Q
            source_type: api_record
            title: 中国历代人物传记资料库：王華（CBDB 35526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35526&o=json
            external_identifier: CBDB:35526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qMcniNB36JrS5EHtp4dNNS
        subject_person_id: p_x37f33U22cV2GhpoLS2iRX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35526）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mvlIis7N4XiaQ-FEpk0zNG
          claim_id: c_qMcniNB36JrS5EHtp4dNNS
          source_id: s_TJMQdy7ABS84dY4HcruV1Q
          stance: supports
          locator: CBDB:35526
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
  ancestors:
    - claim:
        id: c_gCpsNqAIIMEFZkCZGJzD2f
        subject_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x37f33U22cV2GhpoLS2iRX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q-HPWpVBZ90kgGWWTvvKwz
          claim_id: c_gCpsNqAIIMEFZkCZGJzD2f
          source_id: s_TJMQdy7ABS84dY4HcruV1Q
          stance: supports
          locator: CBDB 双向互证（祖父 王斯覺 ⇄ 孫 王華）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華 | accepted |
| bio.summary | 王華，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35526） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王華（CBDB 35526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35526&o=json)
