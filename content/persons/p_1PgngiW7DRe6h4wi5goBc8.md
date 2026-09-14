---
schema: wang-person/v1
id: p_1PgngiW7DRe6h4wi5goBc8
status: active
merged_into: null
display_name: 王鑌之
cbdb_id: 253206
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y7RvKVL25JTjkTQLkYUAMb
        subject_person_id: p_1PgngiW7DRe6h4wi5goBc8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑌之，明人物。成化十四年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 253206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_YWIDx1RfaKYRZpyMFSZNTS
          claim_id: c_Y7RvKVL25JTjkTQLkYUAMb
          source_id: s_xnjMZoHEWP1qb8PDHXbtYd
          stance: supports
          locator: CBDB:253206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xnjMZoHEWP1qb8PDHXbtYd
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌之（CBDB 253206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253206&o=json
            external_identifier: CBDB:253206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pVBAhK7uHHX8ACQMegtHWp
        subject_person_id: p_1PgngiW7DRe6h4wi5goBc8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑌之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_H2QELo1uDeNPYnQV4LNh1D
          claim_id: c_pVBAhK7uHHX8ACQMegtHWp
          source_id: s_xnjMZoHEWP1qb8PDHXbtYd
          stance: supports
          locator: CBDB:253206
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gF7r8nrvmNy1CJSil9-04l
        subject_person_id: p_X8pnsgqtNiK4YaNNve2N13
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1PgngiW7DRe6h4wi5goBc8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4uQ4DIYgdVkNzQPyLhCLae
          claim_id: c_gF7r8nrvmNy1CJSil9-04l
          source_id: s_JB4ky1MAPZWswYCtVztMpH
          stance: supports
          locator: CBDB：兄弟 王鑑之（126887）之父／母 王詵
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑌之 与 王鑑之 为同胞（CBDB 记「弟」），王鑑之 之父／母即 王鑌之 之父／母。
          source:
            id: s_JB4ky1MAPZWswYCtVztMpH
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌之（CBDB 253206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253206&o=json
            external_identifier: CBDB:253206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8pnsgqtNiK4YaNNve2N13
        status: active
        display_name: 王詵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UO71xTrUYcKKAvYDkW-ZQX
        subject_person_id: p_1PgngiW7DRe6h4wi5goBc8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ycYMvRnUtkJaB3y8gmGyCM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2wYusuj65_GvHFX3YxG6z7
          claim_id: c_UO71xTrUYcKKAvYDkW-ZQX
          source_id: s_JB4ky1MAPZWswYCtVztMpH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126887 王鑑之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JB4ky1MAPZWswYCtVztMpH
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌之（CBDB 253206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253206&o=json
            external_identifier: CBDB:253206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ycYMvRnUtkJaB3y8gmGyCM
        status: active
        display_name: 王鑑之
        merged_into_person_id: null
---

# 王鑌之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鑌之，明人物。成化十四年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 253206） | accepted |
| name.primary | 王鑌之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X8pnsgqtNiK4YaNNve2N13 | 王詵 | accepted |
| other | p_ycYMvRnUtkJaB3y8gmGyCM | 王鑑之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑌之（CBDB 253206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253206&o=json)
