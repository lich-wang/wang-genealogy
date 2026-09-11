---
schema: wang-person/v1
id: p_os3EARVo1edJtSU4wyQ9C6
status: active
merged_into: null
display_name: 王錫朋
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2ddY75E6nxHkwpR2hsoxN
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XQ57mxJSq6wSGCPiGh8c5C
          claim_id: c_F2ddY75E6nxHkwpR2hsoxN
          source_id: s_TPdR3oLiy1F3ZtRWyubAuW
          stance: supports
          locator: CBDB:58634
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58634）
          source: &a1
            id: s_TPdR3oLiy1F3ZtRWyubAuW
            source_type: api_record
            title: 中国历代人物传记资料库：王錫朋（CBDB 58634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58634&o=json
            external_identifier: CBDB:58634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.827Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uFNqLUx9LHGwzh5n7MZLT3
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1uX6KniYty9drAvFyLmMBu
          claim_id: c_uFNqLUx9LHGwzh5n7MZLT3
          source_id: s_TPdR3oLiy1F3ZtRWyubAuW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UAac5HrmLnXfbrE5We7PVC
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BJgPEJbkMjHeanSQqNc1Bk
          claim_id: c_UAac5HrmLnXfbrE5We7PVC
          source_id: s_TPdR3oLiy1F3ZtRWyubAuW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S82uh7cJKZV8LBUQxMV65u
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pGSD6sL1M6EQHmBrmtoLo5
          claim_id: c_S82uh7cJKZV8LBUQxMV65u
          source_id: s_TPdR3oLiy1F3ZtRWyubAuW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2i3P5O9OCuQwEYKbiwSF9A
        subject_person_id: p_dsobJxrH7CHJep3PXNHaLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_os3EARVo1edJtSU4wyQ9C6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e39Aroto9lAVj9CfTDoTBM
          claim_id: c_2i3P5O9OCuQwEYKbiwSF9A
          source_id: s_CutASrtcixrt7Uk2fx6DGY
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1896：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CutASrtcixrt7Uk2fx6DGY
            source_type: api_record
            title: 中国历代人物传记资料库：王者佐（CBDB 517448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517448&o=json
            external_identifier: CBDB:517448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dsobJxrH7CHJep3PXNHaLo
        status: active
        display_name: 王者佐
        merged_into_person_id: null
  children:
    - claim:
        id: c_EfEeDYe04zDw7dTSUcCsSG
        subject_person_id: p_os3EARVo1edJtSU4wyQ9C6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QgK9MrMqteXZrt3w2SFxjG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VFFQgk09BVaiTOXn4pLokJ
          claim_id: c_EfEeDYe04zDw7dTSUcCsSG
          source_id: s_TrHdxgRY9J7JWg61cK9iCq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1896：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TrHdxgRY9J7JWg61cK9iCq
            source_type: api_record
            title: 中国历代人物传记资料库：王承瀚（CBDB 517447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517447&o=json
            external_identifier: CBDB:517447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QgK9MrMqteXZrt3w2SFxjG
        status: active
        display_name: 王承瀚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Q6YQz4RaVJ5HJspoRBAP3E
        subject_person_id: p_1njht49uj6Dbij2r7uCY1b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_os3EARVo1edJtSU4wyQ9C6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DmFTa0QEa6rRblPHaLYFvz
          claim_id: c_Q6YQz4RaVJ5HJspoRBAP3E
          source_id: s_tK3kMjRK737oBSB8tDYMxA
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1896：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tK3kMjRK737oBSB8tDYMxA
            source_type: api_record
            title: 中国历代人物传记资料库：王秀生（CBDB 517446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517446&o=json
            external_identifier: CBDB:517446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1njht49uj6Dbij2r7uCY1b
        status: active
        display_name: 王秀生
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王錫朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫朋 | accepted |
| birth.date | 1786年 | accepted |
| death.date | 1841年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dsobJxrH7CHJep3PXNHaLo | 王者佐 | accepted |
| children | p_QgK9MrMqteXZrt3w2SFxjG | 王承瀚 | accepted |
| ancestors | p_1njht49uj6Dbij2r7uCY1b | 王秀生 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承瀚（CBDB 517447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517447&o=json)
- [中国历代人物传记资料库：王錫朋（CBDB 58634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58634&o=json)
- [中国历代人物传记资料库：王秀生（CBDB 517446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517446&o=json)
- [中国历代人物传记资料库：王者佐（CBDB 517448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517448&o=json)
