---
schema: wang-person/v1
id: p_XLkZGVxRBQSEaHVjzv1aDG
status: active
merged_into: null
display_name: 王奇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gDoCb5YgJMKjVVQJGa17fZ
        subject_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1AEErEWQdkbVstfKhi6W6
          claim_id: c_gDoCb5YgJMKjVVQJGa17fZ
          source_id: s_N21HDxQ1i5Pe7s6Q2gNTBa
          stance: supports
          locator: CBDB:25667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25667）
          source: &a1
            id: s_N21HDxQ1i5Pe7s6Q2gNTBa
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 25667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25667&o=json
            external_identifier: CBDB:25667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1NwgddBctEiZihDBdyzcum
        subject_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇，宋人物。籍贯巢縣，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 25667）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MgRBkrtgQ_Thw6LLROs1F3
          claim_id: c_1NwgddBctEiZihDBdyzcum
          source_id: s_N21HDxQ1i5Pe7s6Q2gNTBa
          stance: supports
          locator: CBDB:25667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hMv4Z7-6Yt4dF8nQ5bBQFC
        subject_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qdfj8n9aJt992f6xYnsVk6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQUi_trhohtDQrZZEzC371
          claim_id: c_hMv4Z7-6Yt4dF8nQ5bBQFC
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
          stance: supports
          locator: CBDB 双向互证（父 王奇 ⇄ 子 王之道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_1hCzGChYAR9f6yAtLzbQMr
            source_type: api_record
            title: 中国历代人物传记资料库：王之道（CBDB 1786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1786&o=json
            external_identifier: CBDB:1786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
    - claim:
        id: c_klydjXVHiDd1E4Q5FpZdzT
        subject_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S1K9VxMVUpV3Bfb216WDQS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cc3l6HpSHyCE1s6tWV43Qa
          claim_id: c_klydjXVHiDd1E4Q5FpZdzT
          source_id: s_N21HDxQ1i5Pe7s6Q2gNTBa
          stance: supports
          locator: CBDB 双向互证（子 王之義 ⇄ 父 王奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_S1K9VxMVUpV3Bfb216WDQS
        status: active
        display_name: 王之義
        merged_into_person_id: null
    - claim:
        id: c_Gx1xT91pc8KMC9dcmctzpu
        subject_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4aZ592cpCp96xtdzFxzUN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MF3RgDzXN5REBwJer5_aTj
          claim_id: c_Gx1xT91pc8KMC9dcmctzpu
          source_id: s_N21HDxQ1i5Pe7s6Q2gNTBa
          stance: supports
          locator: CBDB 双向互证（子 王之深 ⇄ 父 王奇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_H4aZ592cpCp96xtdzFxzUN
        status: active
        display_name: 王之深
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_H-5F9HJa-ZjBgU9-6Q_Zbd
        subject_person_id: p_gRXJVz45DHQ9S8749k34H4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1abjwrQNx-VouzolxBa4RJ
          claim_id: c_H-5F9HJa-ZjBgU9-6Q_Zbd
          source_id: s_rFvReZyqPjrxviHBgK5fbs
          stance: supports
          locator: CBDB 双向互证（孫 王奇 ⇄ 祖父 王用和）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_rFvReZyqPjrxviHBgK5fbs
            source_type: api_record
            title: 中国历代人物传记资料库：王用和（CBDB 25666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25666&o=json
            external_identifier: CBDB:25666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gRXJVz45DHQ9S8749k34H4
        status: active
        display_name: 王用和
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奇 | accepted |
| bio.summary | 王奇，宋人物。籍贯巢縣，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 25667） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |
| children | p_S1K9VxMVUpV3Bfb216WDQS | 王之義 | accepted |
| children | p_H4aZ592cpCp96xtdzFxzUN | 王之深 | accepted |
| ancestors | p_gRXJVz45DHQ9S8749k34H4 | 王用和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奇（CBDB 25667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25667&o=json)
- [中国历代人物传记资料库：王用和（CBDB 25666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25666&o=json)
- [中国历代人物传记资料库：王之道（CBDB 1786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1786&o=json)
