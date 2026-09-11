---
schema: wang-person/v1
id: p_LxHzuFLodDjYAodhqdeJE6
status: active
merged_into: null
display_name: 王中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z16oKS13j7GU3Z2SUjUe61
        subject_person_id: p_LxHzuFLodDjYAodhqdeJE6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EjEuhAECwigP443FBzUz3N
          claim_id: c_z16oKS13j7GU3Z2SUjUe61
          source_id: s_8cfnxRb3a7VhHGaSp2qEhP
          stance: supports
          locator: CBDB:290255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290255）
          source: &a1
            id: s_8cfnxRb3a7VhHGaSp2qEhP
            source_type: api_record
            title: 中国历代人物传记资料库：王中（CBDB 290255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290255&o=json
            external_identifier: CBDB:290255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JiimJqwh5TQiqUiPNnbeSe
        subject_person_id: p_LxHzuFLodDjYAodhqdeJE6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中，明人物。嘉靖八年進士，曾任教諭。（中国历代人物传记资料库 CBDB 290255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4JFCuK7Io36eA8l9TecCZQ
          claim_id: c_JiimJqwh5TQiqUiPNnbeSe
          source_id: s_8cfnxRb3a7VhHGaSp2qEhP
          stance: supports
          locator: CBDB:290255
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
        id: c_MeFUi0iqIzYWJuz0Hgfxpk
        subject_person_id: p_LxHzuFLodDjYAodhqdeJE6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIAA2qXzGW1h-LBmLDfmJI
          claim_id: c_MeFUi0iqIzYWJuz0Hgfxpk
          source_id: s_8cfnxRb3a7VhHGaSp2qEhP
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Td2fuKuEoYV2zfraAXswcd
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
  other: []
---

# 王中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中 | accepted |
| bio.summary | 王中，明人物。嘉靖八年進士，曾任教諭。（中国历代人物传记资料库 CBDB 290255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Td2fuKuEoYV2zfraAXswcd | 王汝楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王中（CBDB 290255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290255&o=json)
