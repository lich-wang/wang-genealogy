---
schema: wang-person/v1
id: p_ga1Zg1T9kuUr93iK7UoAH2
status: active
merged_into: null
display_name: 王揀
cbdb_id: 290254
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cHA8W2Dd2imgQT9MBSCZtA
        subject_person_id: p_ga1Zg1T9kuUr93iK7UoAH2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揀，明人物。嘉靖八年進士，曾任教授。（中国历代人物传记资料库 CBDB 290254）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_oS6GJ7wtqEwT4CGah_TaHX
          claim_id: c_cHA8W2Dd2imgQT9MBSCZtA
          source_id: s_wfuxpEU2NypZWYhr6zaNiq
          stance: supports
          locator: CBDB:290254
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wfuxpEU2NypZWYhr6zaNiq
            source_type: api_record
            title: 中国历代人物传记资料库：王揀（CBDB 290254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290254&o=json
            external_identifier: CBDB:290254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2EGXjGaYXDHp9RBnFR4pBJ
        subject_person_id: p_ga1Zg1T9kuUr93iK7UoAH2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王揀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z2XbtaMk5tqs3EQdBhDPAK
          claim_id: c_2EGXjGaYXDHp9RBnFR4pBJ
          source_id: s_wfuxpEU2NypZWYhr6zaNiq
          stance: supports
          locator: CBDB:290254
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_B_dRh_vdAcrknuu2dM6dXT
        subject_person_id: p_ga1Zg1T9kuUr93iK7UoAH2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Td2fuKuEoYV2zfraAXswcd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rxnZ2nvIfS7uDsfqmbJoM8
          claim_id: c_B_dRh_vdAcrknuu2dM6dXT
          source_id: s_wfuxpEU2NypZWYhr6zaNiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wfuxpEU2NypZWYhr6zaNiq
            source_type: api_record
            title: 中国历代人物传记资料库：王揀（CBDB 290254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290254&o=json
            external_identifier: CBDB:290254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Td2fuKuEoYV2zfraAXswcd
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
  other: []
---

# 王揀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王揀，明人物。嘉靖八年進士，曾任教授。（中国历代人物传记资料库 CBDB 290254） | accepted |
| name.primary | 王揀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Td2fuKuEoYV2zfraAXswcd | 王汝楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王揀（CBDB 290254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290254&o=json)
