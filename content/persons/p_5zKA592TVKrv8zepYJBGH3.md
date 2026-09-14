---
schema: wang-person/v1
id: p_5zKA592TVKrv8zepYJBGH3
status: active
merged_into: null
display_name: 王紘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D4sSsZ6FKPE2vs1NejGduG
        subject_person_id: p_5zKA592TVKrv8zepYJBGH3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kqb6YLfXUip6dRxkR5Ntxi
          claim_id: c_D4sSsZ6FKPE2vs1NejGduG
          source_id: s_MNrWPR9n66EyYheUaYN7XB
          stance: supports
          locator: CBDB:261824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261824）
          source: &a1
            id: s_MNrWPR9n66EyYheUaYN7XB
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 261824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261824&o=json
            external_identifier: CBDB:261824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C85EsX88zKisvF7PR3LFEz
        subject_person_id: p_5zKA592TVKrv8zepYJBGH3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WvoK5T8vo1Ay4nOqsBQAqE
          claim_id: c_C85EsX88zKisvF7PR3LFEz
          source_id: s_MNrWPR9n66EyYheUaYN7XB
          stance: supports
          locator: CBDB:261824
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m3GUOWnTgd25xmVMz9fIQ0
        subject_person_id: p_reuJ3Gy5K3tzEUt9VByf69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5zKA592TVKrv8zepYJBGH3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cWYnqjbxR9-YMtMnfuLrB_
          claim_id: c_m3GUOWnTgd25xmVMz9fIQ0
          source_id: s_vVih2t2UQfzaeOQlhqKSLW
          stance: supports
          locator: CBDB：兄弟 王经（200712）之父／母 王理
          quotation: null
          interpretation_note: 由兄弟关系推断：王紘 与 王经 为同胞（CBDB 记「弟」），王经 之父／母即 王紘 之父／母。
          source:
            id: s_vVih2t2UQfzaeOQlhqKSLW
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 261824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261824&o=json
            external_identifier: CBDB:261824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_reuJ3Gy5K3tzEUt9VByf69
        status: active
        display_name: 王理
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B3-xRjnx2dG1r7dUmMf76Q
        subject_person_id: p_38MrYsNYkPoBeMisQP7Sof
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5zKA592TVKrv8zepYJBGH3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVCs5hbCKJMnKj7IYkWSoT
          claim_id: c_B3-xRjnx2dG1r7dUmMf76Q
          source_id: s_vVih2t2UQfzaeOQlhqKSLW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200712 王經）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vVih2t2UQfzaeOQlhqKSLW
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 261824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261824&o=json
            external_identifier: CBDB:261824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
---

# 王紘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紘 | accepted |
| bio.summary | 王紘，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_reuJ3Gy5K3tzEUt9VByf69 | 王理 | accepted |
| other | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紘（CBDB 261824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261824&o=json)
