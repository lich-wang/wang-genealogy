---
schema: wang-person/v1
id: p_zFbpxQtGYwWDiJxKzHRPE1
status: active
merged_into: null
display_name: 王燁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EM8uCX8CHuLtnLZZ2htLW9
        subject_person_id: p_zFbpxQtGYwWDiJxKzHRPE1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RShAk6bEuH7NBkN7yG2fYc
          claim_id: c_EM8uCX8CHuLtnLZZ2htLW9
          source_id: s_ZpWHVdDc5A3WbaRusbmJ9N
          stance: supports
          locator: CBDB:272147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272147）
          source: &a1
            id: s_ZpWHVdDc5A3WbaRusbmJ9N
            source_type: api_record
            title: 中国历代人物传记资料库：王燁（CBDB 272147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272147&o=json
            external_identifier: CBDB:272147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxB7W4ZDXQBuPyf7rCNKnE
        subject_person_id: p_zFbpxQtGYwWDiJxKzHRPE1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燁，明人物。弘治十五年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 272147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tk0Lk5QhQuWD-ZgWTY3JWv
          claim_id: c_zxB7W4ZDXQBuPyf7rCNKnE
          source_id: s_ZpWHVdDc5A3WbaRusbmJ9N
          stance: supports
          locator: CBDB:272147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PVSr_S1UrvEh9npynUHF-w
        subject_person_id: p_Zc7mv2e4ZRM13rfjpkZkya
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zFbpxQtGYwWDiJxKzHRPE1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRVvBOJ0_KX52OehD13rnx
          claim_id: c_PVSr_S1UrvEh9npynUHF-w
          source_id: s_lfiHtzYr_uFCxFKTldP9LR
          stance: supports
          locator: CBDB：兄弟 王爌（68280）之父／母 王玼
          quotation: null
          interpretation_note: 由兄弟关系推断：王燁 与 王爌 为同胞（CBDB 记「弟」），王爌 之父／母即 王燁 之父／母。
          source:
            id: s_lfiHtzYr_uFCxFKTldP9LR
            source_type: api_record
            title: 中国历代人物传记资料库：王燁（CBDB 272147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272147&o=json
            external_identifier: CBDB:272147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zc7mv2e4ZRM13rfjpkZkya
        status: active
        display_name: 王玼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_A8QJOarrB52yXOAd6EMYST
        subject_person_id: p_YFXpD1H4mYzD71g98dxSNt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zFbpxQtGYwWDiJxKzHRPE1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mEPXewYuRKUGnpEJhDTG7h
          claim_id: c_A8QJOarrB52yXOAd6EMYST
          source_id: s_lfiHtzYr_uFCxFKTldP9LR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68280 王爌）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lfiHtzYr_uFCxFKTldP9LR
            source_type: api_record
            title: 中国历代人物传记资料库：王燁（CBDB 272147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272147&o=json
            external_identifier: CBDB:272147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YFXpD1H4mYzD71g98dxSNt
        status: active
        display_name: 王爌
        merged_into_person_id: null
---

# 王燁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燁 | accepted |
| bio.summary | 王燁，明人物。弘治十五年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 272147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zc7mv2e4ZRM13rfjpkZkya | 王玼 | accepted |
| other | p_YFXpD1H4mYzD71g98dxSNt | 王爌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燁（CBDB 272147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272147&o=json)
