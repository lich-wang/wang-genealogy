---
schema: wang-person/v1
id: p_FRKaNC4sdNU7bptj3K9pfx
status: active
merged_into: null
display_name: 王琪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eLD4GJ2d5NuCkf7HzQN4qL
        subject_person_id: p_FRKaNC4sdNU7bptj3K9pfx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B4djJ4keeFGTUco1ApfUYM
          claim_id: c_eLD4GJ2d5NuCkf7HzQN4qL
          source_id: s_7xP2tNFCMDcN1CtiCKABYU
          stance: supports
          locator: CBDB:265523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265523）
          source: &a1
            id: s_7xP2tNFCMDcN1CtiCKABYU
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 265523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265523&o=json
            external_identifier: CBDB:265523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n61SxpfMvJ75wR15FKVDGF
        subject_person_id: p_FRKaNC4sdNU7bptj3K9pfx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琪，明人物。弘治六年進士，籍贯永清。（中国历代人物传记资料库 CBDB 265523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_juz-38Eh0mXk-ndWZgYY-b
          claim_id: c_n61SxpfMvJ75wR15FKVDGF
          source_id: s_7xP2tNFCMDcN1CtiCKABYU
          stance: supports
          locator: CBDB:265523
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f_Q8bJzTw6rJqDWPk8uUkj
        subject_person_id: p_amEGG68EW7aciY6Xv6ntD7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FRKaNC4sdNU7bptj3K9pfx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pVmjzYWRfilhZLEejThSsP
          claim_id: c_f_Q8bJzTw6rJqDWPk8uUkj
          source_id: s_Sb3dmY6sWV4KdILoUAG5_-
          stance: supports
          locator: CBDB：兄弟 王雄（68045）之父／母 王海
          quotation: null
          interpretation_note: 由兄弟关系推断：王琪 与 王雄 为同胞（CBDB 记「兄」），王雄 之父／母即 王琪 之父／母。
          source:
            id: s_Sb3dmY6sWV4KdILoUAG5_-
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 265523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265523&o=json
            external_identifier: CBDB:265523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_amEGG68EW7aciY6Xv6ntD7
        status: active
        display_name: 王海
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_H3GtYV-F64ytzQ_leQN1Rh
        subject_person_id: p_CwNoR4RewoHTE9KBp57Caf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FRKaNC4sdNU7bptj3K9pfx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMO4E6a0juxohl3kICO3Ko
          claim_id: c_H3GtYV-F64ytzQ_leQN1Rh
          source_id: s_Sb3dmY6sWV4KdILoUAG5_-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68045 王雄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Sb3dmY6sWV4KdILoUAG5_-
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 265523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265523&o=json
            external_identifier: CBDB:265523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CwNoR4RewoHTE9KBp57Caf
        status: active
        display_name: 王雄
        merged_into_person_id: null
---

# 王琪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琪 | accepted |
| bio.summary | 王琪，明人物。弘治六年進士，籍贯永清。（中国历代人物传记资料库 CBDB 265523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_amEGG68EW7aciY6Xv6ntD7 | 王海 | accepted |
| other | p_CwNoR4RewoHTE9KBp57Caf | 王雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琪（CBDB 265523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265523&o=json)
