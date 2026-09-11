---
schema: wang-person/v1
id: p_N6PhY9mfw2dgNWgqVAXnLj
status: active
merged_into: null
display_name: 王君卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1RQMLmRoXFMr9DtZ6Vt8cT
        subject_person_id: p_N6PhY9mfw2dgNWgqVAXnLj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fh3zrfcoJ21tkuVjk5JLH5
          claim_id: c_1RQMLmRoXFMr9DtZ6Vt8cT
          source_id: s_Goj99xtDvRvDBavJFw9put
          stance: supports
          locator: CBDB:150999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150999）
          source: &a1
            id: s_Goj99xtDvRvDBavJFw9put
            source_type: api_record
            title: 中国历代人物传记资料库：王君卿（CBDB 150999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150999&o=json
            external_identifier: CBDB:150999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2rpz5FhoJHB81ATYotRMiK
        subject_person_id: p_N6PhY9mfw2dgNWgqVAXnLj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君卿，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 150999）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kG036zT6EIuSSTFW14G6y5
          claim_id: c_2rpz5FhoJHB81ATYotRMiK
          source_id: s_Goj99xtDvRvDBavJFw9put
          stance: supports
          locator: CBDB:150999
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_smUPS_Nid28ARb--7SLMnf
        subject_person_id: p_N6PhY9mfw2dgNWgqVAXnLj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2pUFp58kQxZiv37UYSDcqB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ecCZrimtbA8ByWlkEManum
          claim_id: c_smUPS_Nid28ARb--7SLMnf
          source_id: s_EfXWDpLrLMEyYjyZRb9EJ5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Taiji 5：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EfXWDpLrLMEyYjyZRb9EJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王天（CBDB 139941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139941&o=json
            external_identifier: CBDB:139941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2pUFp58kQxZiv37UYSDcqB
        status: active
        display_name: 王天
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君卿 | accepted |
| bio.summary | 王君卿，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 150999） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2pUFp58kQxZiv37UYSDcqB | 王天 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君卿（CBDB 150999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150999&o=json)
- [中国历代人物传记资料库：王天（CBDB 139941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139941&o=json)
