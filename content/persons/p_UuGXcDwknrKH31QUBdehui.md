---
schema: wang-person/v1
id: p_UuGXcDwknrKH31QUBdehui
status: active
merged_into: null
display_name: 王傑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6rxNTj9vkWoaAuA9uomTaQ
        subject_person_id: p_UuGXcDwknrKH31QUBdehui
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LsQ24rQMBHbbHoea75k6Ue
          claim_id: c_6rxNTj9vkWoaAuA9uomTaQ
          source_id: s_e7B4Qsq18Uoph2EbVEa7Yk
          stance: supports
          locator: CBDB:297013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297013）
          source: &a1
            id: s_e7B4Qsq18Uoph2EbVEa7Yk
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 297013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297013&o=json
            external_identifier: CBDB:297013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V2rFGC4K3LL8JYB7nWEvgz
        subject_person_id: p_UuGXcDwknrKH31QUBdehui
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 297013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wO_vTkn_mgHe0MKxHCLGTW
          claim_id: c_V2rFGC4K3LL8JYB7nWEvgz
          source_id: s_e7B4Qsq18Uoph2EbVEa7Yk
          stance: supports
          locator: CBDB:297013
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_keXfBw7UfU2n1neGLenAvl
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UuGXcDwknrKH31QUBdehui
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ei8KotkFZCnx4tPrF8k5t1
          claim_id: c_keXfBw7UfU2n1neGLenAvl
          source_id: s_oV-ycNjr4K7dXNExYQZNSW
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王傑 之父／母。
          source:
            id: s_oV-ycNjr4K7dXNExYQZNSW
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 297013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297013&o=json
            external_identifier: CBDB:297013
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
        id: c_Ohuzns2PIAJ2QVfD64i9tT
        subject_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UuGXcDwknrKH31QUBdehui
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lrXL_8OT0IELz6BCtt2Mcp
          claim_id: c_Ohuzns2PIAJ2QVfD64i9tT
          source_id: s_oV-ycNjr4K7dXNExYQZNSW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198633 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oV-ycNjr4K7dXNExYQZNSW
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 297013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297013&o=json
            external_identifier: CBDB:297013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vXY7qFFYMcnZjgBc9EDs8
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。天順元年進士，籍贯盧龍。（中国历代人物传记资料库 CBDB 297013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e8GwzBVysey3Kb4uNTABDK | 王敬 | accepted |
| other | p_1vXY7qFFYMcnZjgBc9EDs8 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 297013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297013&o=json)
