---
schema: wang-person/v1
id: p_bDhTt7eEHZKhPZjTtaVUeV
status: active
merged_into: null
display_name: 王靖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bGbeJE9QoBwpgp123HP1iV
        subject_person_id: p_bDhTt7eEHZKhPZjTtaVUeV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hSHy68DMj4hwPsGxakvXiQ
          claim_id: c_bGbeJE9QoBwpgp123HP1iV
          source_id: s_TV8bYfbEijdGVXnbUfF5hZ
          stance: supports
          locator: CBDB:217982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217982）
          source: &a1
            id: s_TV8bYfbEijdGVXnbUfF5hZ
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 217982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217982&o=json
            external_identifier: CBDB:217982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HEMdRzW43bLGTYsHjLXZ2R
        subject_person_id: p_bDhTt7eEHZKhPZjTtaVUeV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖，明人物。萬曆五年進士，曾任知縣。（中国历代人物传记资料库 CBDB 217982）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_godRFI00W93k11eedJ-2NP
          claim_id: c_HEMdRzW43bLGTYsHjLXZ2R
          source_id: s_TV8bYfbEijdGVXnbUfF5hZ
          stance: supports
          locator: CBDB:217982
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
        id: c_hgh8gOTNNDR5qAqiVOQxtB
        subject_person_id: p_bDhTt7eEHZKhPZjTtaVUeV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MoTp1H1qMsn6hE765X8qFG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qgNZmv_byVv8MvmOo9H1eS
          claim_id: c_hgh8gOTNNDR5qAqiVOQxtB
          source_id: s_TV8bYfbEijdGVXnbUfF5hZ
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百七十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MoTp1H1qMsn6hE765X8qFG
        status: active
        display_name: 王九儀
        merged_into_person_id: null
  other: []
---

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靖 | accepted |
| bio.summary | 王靖，明人物。萬曆五年進士，曾任知縣。（中国历代人物传记资料库 CBDB 217982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_MoTp1H1qMsn6hE765X8qFG | 王九儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 217982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217982&o=json)
