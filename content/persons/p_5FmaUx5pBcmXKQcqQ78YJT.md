---
schema: wang-person/v1
id: p_5FmaUx5pBcmXKQcqQ78YJT
status: active
merged_into: null
display_name: 王森
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKFphfd7VBfcHpmNHuQbD1
        subject_person_id: p_5FmaUx5pBcmXKQcqQ78YJT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VPQXT9KRY7p48rqER5AqV4
          claim_id: c_rKFphfd7VBfcHpmNHuQbD1
          source_id: s_gWRygmXD5nGtf8sy19RVct
          stance: supports
          locator: CBDB:297002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297002）
          source: &a1
            id: s_gWRygmXD5nGtf8sy19RVct
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 297002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297002&o=json
            external_identifier: CBDB:297002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t8YwLBzxwK3SNoBD7c4DPK
        subject_person_id: p_5FmaUx5pBcmXKQcqQ78YJT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 297002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__7CybfTMpi1EJPa7bTzEaH
          claim_id: c_t8YwLBzxwK3SNoBD7c4DPK
          source_id: s_gWRygmXD5nGtf8sy19RVct
          stance: supports
          locator: CBDB:297002
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8CGdh8j9Cu-NnhREyfPapC
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5FmaUx5pBcmXKQcqQ78YJT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vyG_va6rp9Q-EgiJG2vwK1
          claim_id: c_8CGdh8j9Cu-NnhREyfPapC
          source_id: s_KKvfI3LgaCl6Xsoh7-cq2O
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王森 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王森 之父／母。
          source:
            id: s_KKvfI3LgaCl6Xsoh7-cq2O
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 297002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297002&o=json
            external_identifier: CBDB:297002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8GwzBVysey3Kb4uNTABDK
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_w7OOrIytwiJliiR9UzqjSo
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5FmaUx5pBcmXKQcqQ78YJT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IamUsSF9655ukhMaV0-T-t
          claim_id: c_w7OOrIytwiJliiR9UzqjSo
          source_id: s_KKvfI3LgaCl6Xsoh7-cq2O
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KKvfI3LgaCl6Xsoh7-cq2O
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 297002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297002&o=json
            external_identifier: CBDB:297002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vXY7qFFYMcnZjgBc9EDs8
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| bio.summary | 王森，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 297002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e8GwzBVysey3Kb4uNTABDK | 王敬 | accepted |
| other | p_1vXY7qFFYMcnZjgBc9EDs8 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 297002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297002&o=json)
