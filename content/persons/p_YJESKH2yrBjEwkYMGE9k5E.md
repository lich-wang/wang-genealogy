---
schema: wang-person/v1
id: p_YJESKH2yrBjEwkYMGE9k5E
status: active
merged_into: null
display_name: 王儼
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rSFM3RjBziHoSH6x1gx7Y
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZqS7KQ7fWErfwyFWXg5o95
          claim_id: c_1rSFM3RjBziHoSH6x1gx7Y
          source_id: s_SY4M5FbD5PFCMcQFkwBwSB
          stance: supports
          locator: CBDB:244046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244046）
          source: &a1
            id: s_SY4M5FbD5PFCMcQFkwBwSB
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 244046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244046&o=json
            external_identifier: CBDB:244046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LxCPhtFfAtzcNnGnYE2VnU
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。成化五年進士，籍贯內鄉，入仕鄉貢舉人，曾任光祿寺少卿。（中国历代人物传记资料库 CBDB 244046）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SWYxFSFwgC_w-S_xRE-wMG
          claim_id: c_LxCPhtFfAtzcNnGnYE2VnU
          source_id: s_SY4M5FbD5PFCMcQFkwBwSB
          stance: supports
          locator: CBDB:244046
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RISMi0ryut8pyhMGt84YmQ
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EvMsr_ZSEfK6Q3eIWQLKcA
          claim_id: c_RISMi0ryut8pyhMGt84YmQ
          source_id: s_SY4M5FbD5PFCMcQFkwBwSB
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v5g4H2q2EXrnEQmwfqdSHb
        status: active
        display_name: 王溥
        merged_into_person_id: null
    - claim:
        id: c_qbh9D3pxj_VejrORiJ02_u
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SKFucuE68KyiC5xcaUKG5t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BzwiAinie7ncQhsVAugWlh
          claim_id: c_qbh9D3pxj_VejrORiJ02_u
          source_id: s_5NgH3hbS6ci7kLZEWnA2IW
          stance: supports
          locator: CBDB：兄弟 王溥（199368）之父／母 王儼
          quotation: null
          interpretation_note: 由兄弟关系推断：王淳 与 王溥 为同胞（CBDB 记「兄」），王溥 之父／母即 王淳 之父／母。
          source:
            id: s_5NgH3hbS6ci7kLZEWnA2IW
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 244051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244051&o=json
            external_identifier: CBDB:244051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SKFucuE68KyiC5xcaUKG5t
        status: active
        display_name: 王淳
        merged_into_person_id: null
    - claim:
        id: c_X7SWhOGDDZ9afLlskQIlFI
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iKQiG772Qww6F6UKUzUMja
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zM1UhQBKIoyDxAS5IFOVk
          claim_id: c_X7SWhOGDDZ9afLlskQIlFI
          source_id: s_bPOvNKY_v68jwDQ_BOHXAV
          stance: supports
          locator: CBDB：兄弟 王溥（199368）之父／母 王儼
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀚 与 王溥 为同胞（CBDB 记「兄」），王溥 之父／母即 王瀚 之父／母。
          source:
            id: s_bPOvNKY_v68jwDQ_BOHXAV
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 244050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244050&o=json
            external_identifier: CBDB:244050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iKQiG772Qww6F6UKUzUMja
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。成化五年進士，籍贯內鄉，入仕鄉貢舉人，曾任光祿寺少卿。（中国历代人物传记资料库 CBDB 244046） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v5g4H2q2EXrnEQmwfqdSHb | 王溥 | accepted |
| children | p_SKFucuE68KyiC5xcaUKG5t | 王淳 | accepted |
| children | p_iKQiG772Qww6F6UKUzUMja | 王瀚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淳（CBDB 244051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244051&o=json)
- [中国历代人物传记资料库：王瀚（CBDB 244050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244050&o=json)
- [中国历代人物传记资料库：王儼（CBDB 244046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244046&o=json)
