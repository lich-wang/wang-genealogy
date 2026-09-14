---
schema: wang-person/v1
id: p_uFwD6xBc7pcKYRU4SJgBny
status: active
merged_into: null
display_name: 王萬悅
cbdb_id: 268919
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5NKnmWu8W2XnkuLUHFAMMN
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬悅，明人物。弘治九年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 268919）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gej2TFN_nGz-iYb7p_4fKs
          claim_id: c_5NKnmWu8W2XnkuLUHFAMMN
          source_id: s_tjME41QacEY3KkCZmk9uf5
          stance: supports
          locator: CBDB:268919
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tjME41QacEY3KkCZmk9uf5
            source_type: api_record
            title: 中国历代人物传记资料库：王萬悅（CBDB 268919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268919&o=json
            external_identifier: CBDB:268919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3ndNjVr7yJaq6YA3mTzfWH
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬悅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZmTqbRCL3Vt2tMREsHcD1t
          claim_id: c_3ndNjVr7yJaq6YA3mTzfWH
          source_id: s_tjME41QacEY3KkCZmk9uf5
          stance: supports
          locator: CBDB:268919
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4fSARp_BbHd9vvUXfvcDrI
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0fzeytyLfMmtGc7jfOH8dX
          claim_id: c_4fSARp_BbHd9vvUXfvcDrI
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LGyeE5TDnWyhmnVTgaqgAC
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201213&o=json
            external_identifier: CBDB:201213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BNDHcwrQU46tvDsz7UJKUr
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_ujQqEc6EXMblsXRZvJ23iJ
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_33j9uQiGD4MQDenFMrKYdL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wK5WQ6cfh3s-303gOaXZap
          claim_id: c_ujQqEc6EXMblsXRZvJ23iJ
          source_id: s_P-RJEFC2lRPdlPA_mgnOMZ
          stance: supports
          locator: CBDB：兄弟 王璽（201213）之父／母 王萬悅
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑬 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王瑬 之父／母。
          source:
            id: s_P-RJEFC2lRPdlPA_mgnOMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑬（CBDB 268923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268923&o=json
            external_identifier: CBDB:268923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_33j9uQiGD4MQDenFMrKYdL
        status: active
        display_name: 王瑬
        merged_into_person_id: null
    - claim:
        id: c_UZoWxncZLBXZ99PsT3DO-A
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5KK47qSrMbyEx7ctY3vj7c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJYQxuP5mhAvdjokqQR3B0
          claim_id: c_UZoWxncZLBXZ99PsT3DO-A
          source_id: s_a-YzOZviHM_ahcbSF5Hz5m
          stance: supports
          locator: CBDB：兄弟 王璽（201213）之父／母 王萬悅
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑩 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王瑩 之父／母。
          source:
            id: s_a-YzOZviHM_ahcbSF5Hz5m
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 268926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268926&o=json
            external_identifier: CBDB:268926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5KK47qSrMbyEx7ctY3vj7c
        status: active
        display_name: 王瑩
        merged_into_person_id: null
    - claim:
        id: c_nJD-ZYRZTc-VC9My_HioUG
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NJTzSodDAYAt4B2JFu3oGY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LfzH4dm1UicJ6-VEy_O_ga
          claim_id: c_nJD-ZYRZTc-VC9My_HioUG
          source_id: s_4r3kHzJbR_xp7Xj7QHUyyJ
          stance: supports
          locator: CBDB：兄弟 王璽（201213）之父／母 王萬悅
          quotation: null
          interpretation_note: 由兄弟关系推断：王璗 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璗 之父／母。
          source:
            id: s_4r3kHzJbR_xp7Xj7QHUyyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璗（CBDB 268925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268925&o=json
            external_identifier: CBDB:268925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NJTzSodDAYAt4B2JFu3oGY
        status: active
        display_name: 王璗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬悅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王萬悅，明人物。弘治九年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 268919） | accepted |
| name.primary | 王萬悅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BNDHcwrQU46tvDsz7UJKUr | 王璽 | accepted |
| children | p_33j9uQiGD4MQDenFMrKYdL | 王瑬 | accepted |
| children | p_5KK47qSrMbyEx7ctY3vj7c | 王瑩 | accepted |
| children | p_NJTzSodDAYAt4B2JFu3oGY | 王璗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璗（CBDB 268925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268925&o=json)
- [中国历代人物传记资料库：王瑬（CBDB 268923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268923&o=json)
- [中国历代人物传记资料库：王萬悅（CBDB 268919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268919&o=json)
- [中国历代人物传记资料库：王璽（CBDB 201213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201213&o=json)
- [中国历代人物传记资料库：王瑩（CBDB 268926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268926&o=json)
