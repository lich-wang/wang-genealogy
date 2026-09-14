---
schema: wang-person/v1
id: p_ie4ty6AGh2xzEj7TbWPL2T
status: active
merged_into: null
display_name: 王荷
cbdb_id: 222183
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EiWAsLWAX6HmQEVRa1xPor
        subject_person_id: p_ie4ty6AGh2xzEj7TbWPL2T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荷，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222183）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_I1Aoco2A-se0k75zS1MuKG
          claim_id: c_EiWAsLWAX6HmQEVRa1xPor
          source_id: s_sZf4asDMGJ8qxmC41neWwF
          stance: supports
          locator: CBDB:222183
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sZf4asDMGJ8qxmC41neWwF
            source_type: api_record
            title: 中国历代人物传记资料库：王荷（CBDB 222183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222183&o=json
            external_identifier: CBDB:222183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jxjxq6ySJU7YTs31gx2JAc
        subject_person_id: p_ie4ty6AGh2xzEj7TbWPL2T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6ADGRZ3863JjcNCGMMzB2a
          claim_id: c_jxjxq6ySJU7YTs31gx2JAc
          source_id: s_sZf4asDMGJ8qxmC41neWwF
          stance: supports
          locator: CBDB:222183
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JZJfhNoeA_6IJ_ieVdW16h
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ie4ty6AGh2xzEj7TbWPL2T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wZ4_Kvi5aGHZGPxbCa9fwL
          claim_id: c_JZJfhNoeA_6IJ_ieVdW16h
          source_id: s_JwM2dRFji4RVaqNXCEx6U8
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王荷 与 王荁 为同胞（CBDB 记「兄」），王荁 之父／母即 王荷 之父／母。
          source:
            id: s_JwM2dRFji4RVaqNXCEx6U8
            source_type: api_record
            title: 中国历代人物传记资料库：王荷（CBDB 222183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222183&o=json
            external_identifier: CBDB:222183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_miQBcK4jqJAfweCMT7iV4p
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nMcoSRwyJq55dfKGtRJfMa
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ie4ty6AGh2xzEj7TbWPL2T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2IFpIhZ6XJRoMVP2N8vVZz
          claim_id: c_nMcoSRwyJq55dfKGtRJfMa
          source_id: s_JwM2dRFji4RVaqNXCEx6U8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JwM2dRFji4RVaqNXCEx6U8
            source_type: api_record
            title: 中国历代人物传记资料库：王荷（CBDB 222183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222183&o=json
            external_identifier: CBDB:222183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ahJ97i6Ls8wgTe2hMc2p2s
        status: active
        display_name: 王荁
        merged_into_person_id: null
---

# 王荷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王荷，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222183） | accepted |
| name.primary | 王荷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |
| other | p_ahJ97i6Ls8wgTe2hMc2p2s | 王荁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王荷（CBDB 222183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222183&o=json)
