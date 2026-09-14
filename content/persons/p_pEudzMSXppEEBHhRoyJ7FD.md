---
schema: wang-person/v1
id: p_pEudzMSXppEEBHhRoyJ7FD
status: active
merged_into: null
display_name: 王敔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J4bd1o97FT78GRmHA7CLfN
        subject_person_id: p_pEudzMSXppEEBHhRoyJ7FD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P3v1P5nHEHfnXhrUMhjBPs
          claim_id: c_J4bd1o97FT78GRmHA7CLfN
          source_id: s_2mSAfSMe5kPN9VHejByRWa
          stance: supports
          locator: CBDB:310007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310007）
          source: &a1
            id: s_2mSAfSMe5kPN9VHejByRWa
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 310007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310007&o=json
            external_identifier: CBDB:310007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FimuiPtx1kUMWxNewKG47d
        subject_person_id: p_pEudzMSXppEEBHhRoyJ7FD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敔，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 310007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xmXqLYaoegaeTgXErv4t_V
          claim_id: c_FimuiPtx1kUMWxNewKG47d
          source_id: s_2mSAfSMe5kPN9VHejByRWa
          stance: supports
          locator: CBDB:310007
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sK-dr4cIq0c3fELfZjX6nG
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pEudzMSXppEEBHhRoyJ7FD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUTWDmgsJaD9_Arvp8OwvB
          claim_id: c_sK-dr4cIq0c3fELfZjX6nG
          source_id: s_DFxxgs_AX014p9Ruj4ANuU
          stance: supports
          locator: CBDB：兄弟 王徽（67717）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王敔 与 王徽 为同胞（CBDB 记「兄」），王徽 之父／母即 王敔 之父／母。
          source:
            id: s_DFxxgs_AX014p9Ruj4ANuU
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 310007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310007&o=json
            external_identifier: CBDB:310007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mmhxQ3mMMbafknFpAgKiQp
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PbU71vu7hjxVkr6HZpGojO
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pEudzMSXppEEBHhRoyJ7FD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4sjGUmgjvpu1KuyxkY1NXp
          claim_id: c_PbU71vu7hjxVkr6HZpGojO
          source_id: s_DFxxgs_AX014p9Ruj4ANuU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67717 王徽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DFxxgs_AX014p9Ruj4ANuU
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 310007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310007&o=json
            external_identifier: CBDB:310007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL3MrLTYLivcbMQDRsPBD7
        status: active
        display_name: 王徽
        merged_into_person_id: null
---

# 王敔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敔 | accepted |
| bio.summary | 王敔，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 310007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mmhxQ3mMMbafknFpAgKiQp | 王寧 | accepted |
| other | p_EL3MrLTYLivcbMQDRsPBD7 | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敔（CBDB 310007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310007&o=json)
