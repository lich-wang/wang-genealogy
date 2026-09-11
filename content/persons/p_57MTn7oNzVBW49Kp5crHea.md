---
schema: wang-person/v1
id: p_57MTn7oNzVBW49Kp5crHea
status: active
merged_into: null
display_name: 王思正
cbdb_id: 10126
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUi7b3F8AyqjsBCW68nGFQ
        subject_person_id: p_57MTn7oNzVBW49Kp5crHea
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思正，宋人物。中国历代人物传记资料库（CBDB）以人物编号 10126 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Wt-o6BAbe_XM34Y4O34kYN
          claim_id: c_UUi7b3F8AyqjsBCW68nGFQ
          source_id: s_3DjR9W2HUa5BeEmTDNpHcu
          stance: supports
          locator: CBDB:10126
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_3DjR9W2HUa5BeEmTDNpHcu
            source_type: api_record
            title: 中国历代人物传记资料库：王思正（CBDB 10126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10126&o=json
            external_identifier: CBDB:10126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BFEGB8qzF6Dm76kz7DJKjp
        subject_person_id: p_57MTn7oNzVBW49Kp5crHea
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_unUTBSR4UtjPtsJz18Mue8
          claim_id: c_BFEGB8qzF6Dm76kz7DJKjp
          source_id: s_3DjR9W2HUa5BeEmTDNpHcu
          stance: supports
          locator: CBDB:10126
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_3DjR9W2HUa5BeEmTDNpHcu
            source_type: api_record
            title: 中国历代人物传记资料库：王思正（CBDB 10126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10126&o=json
            external_identifier: CBDB:10126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3n5bUCf9pve_lUtb5_sOp6
        subject_person_id: p_MmHa3r1KxWqnTHyPbbJ4r7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_57MTn7oNzVBW49Kp5crHea
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nQ7rSMScLF_0PV2eclGLC4
          claim_id: c_3n5bUCf9pve_lUtb5_sOp6
          source_id: s_a61QKMjn3b7koxMK1ayGW7
          stance: supports
          locator: CBDB 双向互证（子 王思正 ⇄ 父 王阜）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_a61QKMjn3b7koxMK1ayGW7
            source_type: api_record
            title: 中国历代人物传记资料库：王阜（CBDB 10125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10125&o=json
            external_identifier: CBDB:10125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MmHa3r1KxWqnTHyPbbJ4r7
        status: active
        display_name: 王阜
        merged_into_person_id: null
  children:
    - claim:
        id: c_GGvLRhr-d-NG5sELrjjyi2
        subject_person_id: p_57MTn7oNzVBW49Kp5crHea
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mHn5jwES88buhNttuppCPJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqA7uqUYQPf4AL9KDYgWX9
          claim_id: c_GGvLRhr-d-NG5sELrjjyi2
          source_id: s_Mx3ajEqeJb4j3FVLb1yFDm
          stance: supports
          locator: CBDB 双向互证（父 王思正 ⇄ 子 王卿月）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Mx3ajEqeJb4j3FVLb1yFDm
            source_type: api_record
            title: 中国历代人物传记资料库：王卿月（CBDB 10127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10127&o=json
            external_identifier: CBDB:10127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mHn5jwES88buhNttuppCPJ
        status: active
        display_name: 王卿月
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思正，宋人物。中国历代人物传记资料库（CBDB）以人物编号 10126 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王思正 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MmHa3r1KxWqnTHyPbbJ4r7 | 王阜 | accepted |
| children | p_mHn5jwES88buhNttuppCPJ | 王卿月 | accepted |

## 外部来源

- [中国历代人物传记资料库：王阜（CBDB 10125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10125&o=json)
- [中国历代人物传记资料库：王卿月（CBDB 10127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10127&o=json)
- [中国历代人物传记资料库：王思正（CBDB 10126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10126&o=json)
