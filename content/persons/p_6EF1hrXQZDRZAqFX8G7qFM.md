---
schema: wang-person/v1
id: p_6EF1hrXQZDRZAqFX8G7qFM
status: active
merged_into: null
display_name: 王忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fbFsb84WM1tWiMJZVC38HC
        subject_person_id: p_6EF1hrXQZDRZAqFX8G7qFM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oZZLCfLxvmE4P2AS2Hf97P
          claim_id: c_fbFsb84WM1tWiMJZVC38HC
          source_id: s_EgtZR3CwDb1Ehcs8hR8rae
          stance: supports
          locator: CBDB:280169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280169）
          source: &a1
            id: s_EgtZR3CwDb1Ehcs8hR8rae
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 280169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280169&o=json
            external_identifier: CBDB:280169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZnGCSkbCkrQfo8zeve8sdj
        subject_person_id: p_6EF1hrXQZDRZAqFX8G7qFM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。正德十二年進士，曾任都指揮同知、正千戶。（中国历代人物传记资料库 CBDB 280169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3nUP752hgUcz03XcIrMIr2
          claim_id: c_ZnGCSkbCkrQfo8zeve8sdj
          source_id: s_EgtZR3CwDb1Ehcs8hR8rae
          stance: supports
          locator: CBDB:280169
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
  descendants:
    - claim:
        id: c_AMvbzb8uod9EthqN1N2Zh_
        subject_person_id: p_6EF1hrXQZDRZAqFX8G7qFM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_691jukaqPqsQGsFHBsNzWD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LaPs5jxVxvN9MEz3jFYmyL
          claim_id: c_AMvbzb8uod9EthqN1N2Zh_
          source_id: s_EgtZR3CwDb1Ehcs8hR8rae
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第七十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_691jukaqPqsQGsFHBsNzWD
        status: active
        display_name: 王至善
        merged_into_person_id: null
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。正德十二年進士，曾任都指揮同知、正千戶。（中国历代人物传记资料库 CBDB 280169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_691jukaqPqsQGsFHBsNzWD | 王至善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 280169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280169&o=json)
