---
schema: wang-person/v1
id: p_KQ43jri1TgMLLT1r2xbZb7
status: active
merged_into: null
display_name: 王家材
cbdb_id: 233440
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KW7NM2nbBnmRao8YB9XpzS
        subject_person_id: p_KQ43jri1TgMLLT1r2xbZb7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家材，明人物。籍贯海鹽，入仕庠生，曾任鄉飲賓。（中国历代人物传记资料库 CBDB 233440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PaOsUz7OdVmJi1nHEUQZ97
          claim_id: c_KW7NM2nbBnmRao8YB9XpzS
          source_id: s_iTBAJ1tio1ic9vPQKZ2mS7
          stance: supports
          locator: CBDB:233440
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iTBAJ1tio1ic9vPQKZ2mS7
            source_type: api_record
            title: 中国历代人物传记资料库：王家材（CBDB 233440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233440&o=json
            external_identifier: CBDB:233440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hbARyUYEXbupMqu4hetg1k
        subject_person_id: p_KQ43jri1TgMLLT1r2xbZb7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_455z8zB2J6hWs65Q7BCRiz
          claim_id: c_hbARyUYEXbupMqu4hetg1k
          source_id: s_iTBAJ1tio1ic9vPQKZ2mS7
          stance: supports
          locator: CBDB:233440
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HvyqBI8Nt-NhbDhG8ObtA2
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KQ43jri1TgMLLT1r2xbZb7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3_LkFfmV2ejbT8qtNzJbR1
          claim_id: c_HvyqBI8Nt-NhbDhG8ObtA2
          source_id: s_dKNCxyeUwU5e0rROYhBlk_
          stance: supports
          locator: CBDB：兄弟 王家相（207666）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王家材 与 王家相 为同胞（CBDB 记「弟」），王家相 之父／母即 王家材 之父／母。
          source:
            id: s_dKNCxyeUwU5e0rROYhBlk_
            source_type: api_record
            title: 中国历代人物传记资料库：王家材（CBDB 233440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233440&o=json
            external_identifier: CBDB:233440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uE1u3bYV3J8fuYnjaWRvAs
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e3DAKdKzpHni4JPEQzLZSC
        subject_person_id: p_KQ43jri1TgMLLT1r2xbZb7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cpGBEq63QojtvoRHpvNFEb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_h07SnHPlZb94fLBPqthn
          claim_id: c_e3DAKdKzpHni4JPEQzLZSC
          source_id: s_dKNCxyeUwU5e0rROYhBlk_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207666 王家相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dKNCxyeUwU5e0rROYhBlk_
            source_type: api_record
            title: 中国历代人物传记资料库：王家材（CBDB 233440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233440&o=json
            external_identifier: CBDB:233440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
---

# 王家材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家材，明人物。籍贯海鹽，入仕庠生，曾任鄉飲賓。（中国历代人物传记资料库 CBDB 233440） | accepted |
| name.primary | 王家材 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uE1u3bYV3J8fuYnjaWRvAs | 王釗 | accepted |
| other | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家材（CBDB 233440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233440&o=json)
