---
schema: wang-person/v1
id: p_Mm6YXV7FP22H8DfjeHF6Xp
status: active
merged_into: null
display_name: 王信
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qQJQS6AVkLBAKXwkrfzmA8
        subject_person_id: p_Mm6YXV7FP22H8DfjeHF6Xp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vgfu7xtRvrjCvygM9YeCbc
          claim_id: c_qQJQS6AVkLBAKXwkrfzmA8
          source_id: s_7NHmcgKtiis4jy3fLtqnnm
          stance: supports
          locator: CBDB:28766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28766）
          source: &a1
            id: s_7NHmcgKtiis4jy3fLtqnnm
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 28766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28766&o=json
            external_identifier: CBDB:28766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EMMCcNpbPaQQE1SQUU7ZvJ
        subject_person_id: p_Mm6YXV7FP22H8DfjeHF6Xp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w1agq6Vbd9mm42HGQakU4U
          claim_id: c_EMMCcNpbPaQQE1SQUU7ZvJ
          source_id: s_7NHmcgKtiis4jy3fLtqnnm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_t44rkFVEZPP20gxTA9HlJz
        subject_person_id: p_Mm6YXV7FP22H8DfjeHF6Xp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eT4UaUTDjt3LEVBKFPVkzV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3v4SMD91rDR5W--hWCG50M
          claim_id: c_t44rkFVEZPP20gxTA9HlJz
          source_id: s_23Q58q6H8xrx1dN3iLZPEr
          stance: supports
          locator: CBDB 双向互证（父 王信 ⇄ 子 王博文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_23Q58q6H8xrx1dN3iLZPEr
            source_type: api_record
            title: 中国历代人物传记资料库：王博文（CBDB 28769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28769&o=json
            external_identifier: CBDB:28769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eT4UaUTDjt3LEVBKFPVkzV
        status: active
        display_name: 王博文
        merged_into_person_id: null
    - claim:
        id: c_bmDDT2EM_gf5LkEhSrfTqo
        subject_person_id: p_Mm6YXV7FP22H8DfjeHF6Xp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uit4q1iEBsqQenMBFGDdLJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zeJ1jpAP7VqdU_Mf4ZhqXQ
          claim_id: c_bmDDT2EM_gf5LkEhSrfTqo
          source_id: s_7NHmcgKtiis4jy3fLtqnnm
          stance: supports
          locator: CBDB 双向互证（子 王鐸 ⇄ 父 王信）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Uit4q1iEBsqQenMBFGDdLJ
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_n0YrB8S1ApeBt5KxgItHuK
        subject_person_id: p_Mm6YXV7FP22H8DfjeHF6Xp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_C9fyNDneqDkXgdD5rKxejP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvoWbe_G2INqiv2dztmGgc
          claim_id: c_n0YrB8S1ApeBt5KxgItHuK
          source_id: s_F0LRYZZEjuvdKfix0uIkAO
          stance: supports
          locator: CBDB 双向互证（妻子 左氏(王信妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F0LRYZZEjuvdKfix0uIkAO
            source_type: api_record
            title: 中国历代人物传记资料库：左氏(王信妻)（CBDB 28767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28767&o=json
            external_identifier: CBDB:28767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C9fyNDneqDkXgdD5rKxejP
        status: active
        display_name: 左氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eT4UaUTDjt3LEVBKFPVkzV | 王博文 | accepted |
| children | p_Uit4q1iEBsqQenMBFGDdLJ | 王鐸 | accepted |
| spouses | p_C9fyNDneqDkXgdD5rKxejP | 左氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王博文（CBDB 28769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28769&o=json)
- [中国历代人物传记资料库：王信（CBDB 28766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28766&o=json)
- [中国历代人物传记资料库：左氏(王信妻)（CBDB 28767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28767&o=json)
