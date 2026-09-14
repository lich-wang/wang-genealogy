---
schema: wang-person/v1
id: p_EPQ4muHTFxT1vGnPNc3xmX
status: active
merged_into: null
display_name: 王逵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9g7stJEJAZSE93ryDCrNVM
        subject_person_id: p_EPQ4muHTFxT1vGnPNc3xmX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_69Lr2HwHZ7sxCCKHM3hkbo
          claim_id: c_9g7stJEJAZSE93ryDCrNVM
          source_id: s_YjgJa38ogbkFQejdAv2Uxp
          stance: supports
          locator: CBDB:257949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257949）
          source: &a1
            id: s_YjgJa38ogbkFQejdAv2Uxp
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 257949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257949&o=json
            external_identifier: CBDB:257949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LPJj7cNJ2v8cRJH2WHpJRa
        subject_person_id: p_EPQ4muHTFxT1vGnPNc3xmX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵，明人物。成化二十三年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 257949）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hSmmK30fgFiRZr5MIoPtGI
          claim_id: c_LPJj7cNJ2v8cRJH2WHpJRa
          source_id: s_YjgJa38ogbkFQejdAv2Uxp
          stance: supports
          locator: CBDB:257949
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_6viAMHrM5RymA1BEH8cpA3
        status: active
        display_name: 王端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PjGTXAJSaUtHeCAbXVWFeo
        subject_person_id: p_EPQ4muHTFxT1vGnPNc3xmX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CvEqTgZ5WCF8bK5ZZCjSgL
          claim_id: c_PjGTXAJSaUtHeCAbXVWFeo
          source_id: s_lEoeV2HUtTxp0ZKvLGvnYv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200444 王迪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_Yi63SwvU3iiXw7LYSrnJmq
        status: active
        display_name: 王迪
        merged_into_person_id: null
---

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逵 | accepted |
| bio.summary | 王逵，明人物。成化二十三年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 257949） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6viAMHrM5RymA1BEH8cpA3 | 王端 | accepted |
| other | p_Yi63SwvU3iiXw7LYSrnJmq | 王迪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逵（CBDB 257949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257949&o=json)
