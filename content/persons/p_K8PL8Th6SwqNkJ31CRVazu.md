---
schema: wang-person/v1
id: p_K8PL8Th6SwqNkJ31CRVazu
status: active
merged_into: null
display_name: 王有貞
cbdb_id: 223505
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TueYriBz6YuGFU4B1XMmui
        subject_person_id: p_K8PL8Th6SwqNkJ31CRVazu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有貞，明人物。萬曆十一年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 223505）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uhc3krU06urAL3ExT9hlxo
          claim_id: c_TueYriBz6YuGFU4B1XMmui
          source_id: s_BqG8tNsVXQkQsiaWK5LC9Q
          stance: supports
          locator: CBDB:223505
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BqG8tNsVXQkQsiaWK5LC9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王有貞（CBDB 223505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223505&o=json
            external_identifier: CBDB:223505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNoZE88qeXoiLLXj1LLKyP
        subject_person_id: p_K8PL8Th6SwqNkJ31CRVazu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_m1MffpaP8CePUuu8ozkFaQ
          claim_id: c_tNoZE88qeXoiLLXj1LLKyP
          source_id: s_BqG8tNsVXQkQsiaWK5LC9Q
          stance: supports
          locator: CBDB:223505
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K_FsINpLC4tV9xM12co5oE
        subject_person_id: p_D5ec5jupf1WyP5yU3NHEdT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K8PL8Th6SwqNkJ31CRVazu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p2f1-4GwChMMa0BpEZ3_ud
          claim_id: c_K_FsINpLC4tV9xM12co5oE
          source_id: s_beboH7ykmBJbOvGz5LW4fb
          stance: supports
          locator: CBDB：兄弟 王有功（206804）之父／母 王寵光
          quotation: null
          interpretation_note: 由兄弟关系推断：王有貞 与 王有功 为同胞（CBDB 记「兄」），王有功 之父／母即 王有貞 之父／母。
          source:
            id: s_beboH7ykmBJbOvGz5LW4fb
            source_type: api_record
            title: 中国历代人物传记资料库：王有貞（CBDB 223505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223505&o=json
            external_identifier: CBDB:223505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D5ec5jupf1WyP5yU3NHEdT
        status: active
        display_name: 王寵光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NU8YGyXkeCKndrGVW2rKd4
        subject_person_id: p_BYJfPhEZfG99snxow17KHG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_K8PL8Th6SwqNkJ31CRVazu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pf3mAl3WOrzr1xuU_R68y-
          claim_id: c_NU8YGyXkeCKndrGVW2rKd4
          source_id: s_beboH7ykmBJbOvGz5LW4fb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206804 王有功）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_beboH7ykmBJbOvGz5LW4fb
            source_type: api_record
            title: 中国历代人物传记资料库：王有貞（CBDB 223505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223505&o=json
            external_identifier: CBDB:223505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BYJfPhEZfG99snxow17KHG
        status: active
        display_name: 王有功
        merged_into_person_id: null
---

# 王有貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有貞，明人物。萬曆十一年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 223505） | accepted |
| name.primary | 王有貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D5ec5jupf1WyP5yU3NHEdT | 王寵光 | accepted |
| other | p_BYJfPhEZfG99snxow17KHG | 王有功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王有貞（CBDB 223505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223505&o=json)
