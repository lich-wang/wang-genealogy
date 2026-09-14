---
schema: wang-person/v1
id: p_6viAMHrM5RymA1BEH8cpA3
status: active
merged_into: null
display_name: 王端
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2D5g4Dy1PJVAdueJSWjx3b
        subject_person_id: p_6viAMHrM5RymA1BEH8cpA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KZXmW1EL5C6B2Lt4GjtGiv
          claim_id: c_2D5g4Dy1PJVAdueJSWjx3b
          source_id: s_Z7B9cuBFnU8Duuyk4FqKVb
          stance: supports
          locator: CBDB:257944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257944）
          source: &a1
            id: s_Z7B9cuBFnU8Duuyk4FqKVb
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 257944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257944&o=json
            external_identifier: CBDB:257944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NWPxDVGb5huC2oLA8XCUCG
        subject_person_id: p_6viAMHrM5RymA1BEH8cpA3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端，明人物。成化二十三年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 257944）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1ocNagghJni5t1zmQoyreD
          claim_id: c_NWPxDVGb5huC2oLA8XCUCG
          source_id: s_Z7B9cuBFnU8Duuyk4FqKVb
          stance: supports
          locator: CBDB:257944
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2kg1yQD7PvBf62If29pzlL
        subject_person_id: p_6viAMHrM5RymA1BEH8cpA3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ItFZGTwLL5B7Z2sf3JBSR
          claim_id: c_2kg1yQD7PvBf62If29pzlL
          source_id: s_Z7B9cuBFnU8Duuyk4FqKVb
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Yi63SwvU3iiXw7LYSrnJmq
        status: active
        display_name: 王迪
        merged_into_person_id: null
    - claim:
        id: c_Ei8iGcgCKTE-vM9vb1e-lk
        subject_person_id: p_6viAMHrM5RymA1BEH8cpA3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EPQ4muHTFxT1vGnPNc3xmX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7hVXCM6mF3wrN6RsTLa9S4
          claim_id: c_Ei8iGcgCKTE-vM9vb1e-lk
          source_id: s_lEoeV2HUtTxp0ZKvLGvnYv
          stance: supports
          locator: CBDB：兄弟 王迪（200444）之父／母 王端
          quotation: null
          interpretation_note: 由兄弟关系推断：王逵 与 王迪 为同胞（CBDB 记「兄」），王迪 之父／母即 王逵 之父／母。
          source:
            id: s_lEoeV2HUtTxp0ZKvLGvnYv
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 257949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257949&o=json
            external_identifier: CBDB:257949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EPQ4muHTFxT1vGnPNc3xmX
        status: active
        display_name: 王逵
        merged_into_person_id: null
    - claim:
        id: c_HN-DgmpUiywOlu8riB-Zl5
        subject_person_id: p_6viAMHrM5RymA1BEH8cpA3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eDR6tLPhLCK8UJHjLtEsxB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zefWr0vho8PMGzhEBsxmt7
          claim_id: c_HN-DgmpUiywOlu8riB-Zl5
          source_id: s_WWCliI28v2RFV1y9eLjzgp
          stance: supports
          locator: CBDB：兄弟 王迪（200444）之父／母 王端
          quotation: null
          interpretation_note: 由兄弟关系推断：王達 与 王迪 为同胞（CBDB 记「弟」），王迪 之父／母即 王達 之父／母。
          source:
            id: s_WWCliI28v2RFV1y9eLjzgp
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 257948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257948&o=json
            external_identifier: CBDB:257948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eDR6tLPhLCK8UJHjLtEsxB
        status: active
        display_name: 王達
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | 王端，明人物。成化二十三年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 257944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Yi63SwvU3iiXw7LYSrnJmq | 王迪 | accepted |
| children | p_EPQ4muHTFxT1vGnPNc3xmX | 王逵 | accepted |
| children | p_eDR6tLPhLCK8UJHjLtEsxB | 王達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 257948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257948&o=json)
- [中国历代人物传记资料库：王端（CBDB 257944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257944&o=json)
- [中国历代人物传记资料库：王逵（CBDB 257949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257949&o=json)
