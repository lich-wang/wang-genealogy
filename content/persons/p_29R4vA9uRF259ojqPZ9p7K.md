---
schema: wang-person/v1
id: p_29R4vA9uRF259ojqPZ9p7K
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MbaDFZEAru14UiFLu4yNLj
        subject_person_id: p_29R4vA9uRF259ojqPZ9p7K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Y7NP9FUiAsjqT5Vq7K65C
          claim_id: c_MbaDFZEAru14UiFLu4yNLj
          source_id: s_RmEHB7edaUfVQ1CQQUVuS7
          stance: supports
          locator: CBDB:221871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221871）
          source: &a1
            id: s_RmEHB7edaUfVQ1CQQUVuS7
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 221871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221871&o=json
            external_identifier: CBDB:221871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ES8W6323Mfc6PT7dcSah16
        subject_person_id: p_29R4vA9uRF259ojqPZ9p7K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 221871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kiqeXGwlvR03Eqx4I2looX
          claim_id: c_ES8W6323Mfc6PT7dcSah16
          source_id: s_RmEHB7edaUfVQ1CQQUVuS7
          stance: supports
          locator: CBDB:221871
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
        id: c_At4N7vkTH4lwYJQ_ijko-1
        subject_person_id: p_29R4vA9uRF259ojqPZ9p7K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aagqj9-eMuOz_Y9xPuVN_B
          claim_id: c_At4N7vkTH4lwYJQ_ijko-1
          source_id: s_RmEHB7edaUfVQ1CQQUVuS7
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第二十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HgcYnzEt3BLPFrXjEUGzEm
        status: active
        display_name: 王玶
        merged_into_person_id: null
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 221871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HgcYnzEt3BLPFrXjEUGzEm | 王玶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 221871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221871&o=json)
