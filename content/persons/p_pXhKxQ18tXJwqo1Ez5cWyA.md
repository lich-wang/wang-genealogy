---
schema: wang-person/v1
id: p_pXhKxQ18tXJwqo1Ez5cWyA
status: active
merged_into: null
display_name: 王麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uyDjTJ2Wj5aGFsSdRXsdQH
        subject_person_id: p_pXhKxQ18tXJwqo1Ez5cWyA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gCw1VFrn5SoQxXt7YTa9Bz
          claim_id: c_uyDjTJ2Wj5aGFsSdRXsdQH
          source_id: s_y5be3EfqXNzQHf585oictr
          stance: supports
          locator: CBDB:240153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240153）
          source: &a1
            id: s_y5be3EfqXNzQHf585oictr
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 240153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240153&o=json
            external_identifier: CBDB:240153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_At7MKcJqTXJdUGyNwuVaZU
        subject_person_id: p_pXhKxQ18tXJwqo1Ez5cWyA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。成化二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 240153）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1PaeaUGYky2ApgmZGTneqM
          claim_id: c_At7MKcJqTXJdUGyNwuVaZU
          source_id: s_y5be3EfqXNzQHf585oictr
          stance: supports
          locator: CBDB:240153
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_v4VcbS_-9EqJmE33knHZ0M
        subject_person_id: p_pXhKxQ18tXJwqo1Ez5cWyA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUIFCg277CoZK86eXMUDAu
          claim_id: c_v4VcbS_-9EqJmE33knHZ0M
          source_id: s_whVVwFfuq3kv612rh95dCN
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_whVVwFfuq3kv612rh95dCN
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 199167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199167&o=json
            external_identifier: CBDB:199167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hx7iGJRJAsCsAgYtQcK5NG
        status: active
        display_name: 王昶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。成化二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 240153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hx7iGJRJAsCsAgYtQcK5NG | 王昶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昶（CBDB 199167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199167&o=json)
- [中国历代人物传记资料库：王麟（CBDB 240153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240153&o=json)
