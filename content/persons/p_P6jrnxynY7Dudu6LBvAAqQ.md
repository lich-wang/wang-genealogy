---
schema: wang-person/v1
id: p_P6jrnxynY7Dudu6LBvAAqQ
status: active
merged_into: null
display_name: 王璟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NeuiGjx3THquhBqqj2fdET
        subject_person_id: p_P6jrnxynY7Dudu6LBvAAqQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NnSSx5BLAcAuTHYJHuQcBw
          claim_id: c_NeuiGjx3THquhBqqj2fdET
          source_id: s_AKcy4a7hFRW2PGB1AFS3qu
          stance: supports
          locator: CBDB:250568
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250568）
          source: &a1
            id: s_AKcy4a7hFRW2PGB1AFS3qu
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 250568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250568&o=json
            external_identifier: CBDB:250568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wcxoqDh6voZQvdg5tMxKsY
        subject_person_id: p_P6jrnxynY7Dudu6LBvAAqQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q9UM8FjeF1WgC43TFuykt7
          claim_id: c_wcxoqDh6voZQvdg5tMxKsY
          source_id: s_AKcy4a7hFRW2PGB1AFS3qu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZBMUbXPkym1TOoP7XCNQU3
        subject_person_id: p_P6jrnxynY7Dudu6LBvAAqQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GGm15a95bmjM4yFUpB9QGR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJkhVXSodFTai1Geem5it8
          claim_id: c_ZBMUbXPkym1TOoP7XCNQU3
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZFRacVdsrHF9g9mvSJ3aS2
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 338703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338703&o=json
            external_identifier: CBDB:338703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GGm15a95bmjM4yFUpB9QGR
        status: active
        display_name: 王儼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GGm15a95bmjM4yFUpB9QGR | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 250568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250568&o=json)
- [中国历代人物传记资料库：王儼（CBDB 338703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338703&o=json)
