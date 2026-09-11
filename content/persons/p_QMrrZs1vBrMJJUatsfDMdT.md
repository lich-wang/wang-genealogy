---
schema: wang-person/v1
id: p_QMrrZs1vBrMJJUatsfDMdT
status: active
merged_into: null
display_name: 王珏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NxdqqpyaJWRCek9e3WjBdC
        subject_person_id: p_QMrrZs1vBrMJJUatsfDMdT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PpkaLQVRCuGHVG8DzxzdzC
          claim_id: c_NxdqqpyaJWRCek9e3WjBdC
          source_id: s_D9PoCG1oG7MDk6ZGqSB6M4
          stance: supports
          locator: CBDB:138212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138212）
          source: &a1
            id: s_D9PoCG1oG7MDk6ZGqSB6M4
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 138212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138212&o=json
            external_identifier: CBDB:138212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_482WnXhhtx1M7Lc9Rs5gJF
        subject_person_id: p_QMrrZs1vBrMJJUatsfDMdT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏，宋人物。寶祐進士，籍贯廬江。（中国历代人物传记资料库 CBDB 138212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bIJ5HuZpNUv9xHOQoOKEzD
          claim_id: c_482WnXhhtx1M7Lc9Rs5gJF
          source_id: s_D9PoCG1oG7MDk6ZGqSB6M4
          stance: supports
          locator: CBDB:138212
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
        id: c_hR_K0ZDBQt5pthHBbgEVBF
        subject_person_id: p_QMrrZs1vBrMJJUatsfDMdT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KUHUUuyG7febNqFiWGQsMx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4YvnpUDNK1A3ZiqJOVqTQ
          claim_id: c_hR_K0ZDBQt5pthHBbgEVBF
          source_id: s_zD4HBKCDHsp3zrKHW9Ai2a
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zD4HBKCDHsp3zrKHW9Ai2a
            source_type: api_record
            title: 中国历代人物传记资料库：王之純（CBDB 136686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136686&o=json
            external_identifier: CBDB:136686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KUHUUuyG7febNqFiWGQsMx
        status: active
        display_name: 王之純
        merged_into_person_id: null
    - claim:
        id: c_u22-2ck8hSmXUzdC0ey0nb
        subject_person_id: p_QMrrZs1vBrMJJUatsfDMdT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RSyHLCzgNL6rMFbB6oghwV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9e_1rw1XdFnm45WR66IZIK
          claim_id: c_u22-2ck8hSmXUzdC0ey0nb
          source_id: s_D9PoCG1oG7MDk6ZGqSB6M4
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RSyHLCzgNL6rMFbB6oghwV
        status: active
        display_name: 王朝佐
        merged_into_person_id: null
  other: []
---

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| bio.summary | 王珏，宋人物。寶祐進士，籍贯廬江。（中国历代人物传记资料库 CBDB 138212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_KUHUUuyG7febNqFiWGQsMx | 王之純 | accepted |
| descendants | p_RSyHLCzgNL6rMFbB6oghwV | 王朝佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 138212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138212&o=json)
- [中国历代人物传记资料库：王之純（CBDB 136686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136686&o=json)
