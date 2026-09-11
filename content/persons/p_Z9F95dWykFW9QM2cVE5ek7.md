---
schema: wang-person/v1
id: p_Z9F95dWykFW9QM2cVE5ek7
status: active
merged_into: null
display_name: 王佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UhrXUaowEy3H2daqVuAfVF
        subject_person_id: p_Z9F95dWykFW9QM2cVE5ek7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p6AiPcarYKPKhHvofLo7n2
          claim_id: c_UhrXUaowEy3H2daqVuAfVF
          source_id: s_DgjkE5P2AS68ygibYmWTrK
          stance: supports
          locator: CBDB:22233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22233）
          source: &a1
            id: s_DgjkE5P2AS68ygibYmWTrK
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 22233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22233&o=json
            external_identifier: CBDB:22233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BJ58rxk5n3My1YL8Hgpa6o
        subject_person_id: p_Z9F95dWykFW9QM2cVE5ek7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，唐人物。籍贯洛陽，曾任知縣。（中国历代人物传记资料库 CBDB 22233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__fBFnLL5IKXzfRD5bMeJG5
          claim_id: c_BJ58rxk5n3My1YL8Hgpa6o
          source_id: s_DgjkE5P2AS68ygibYmWTrK
          stance: supports
          locator: CBDB:22233
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EBEaLk7nObxdjPDOtTwmPT
        subject_person_id: p_VnR3LX6747i4jnii3dvQo3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z9F95dWykFW9QM2cVE5ek7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Y7xBYTNUhKrIbGfq1jp5C
          claim_id: c_EBEaLk7nObxdjPDOtTwmPT
          source_id: s_L7Ffk9hkZNZevUqv8uHT85
          stance: supports
          locator: CBDB 双向互证（子 王佐 ⇄ 父 王翰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_L7Ffk9hkZNZevUqv8uHT85
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 22232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22232&o=json
            external_identifier: CBDB:22232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VnR3LX6747i4jnii3dvQo3
        status: active
        display_name: 王翰
        merged_into_person_id: null
  children:
    - claim:
        id: c_dcKZnDSA9xHfC-dI4ZJKPf
        subject_person_id: p_Z9F95dWykFW9QM2cVE5ek7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_adSFBxvab7wAmE72xwSTAi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aQAraB-4ZfBQCssmzZj8F7
          claim_id: c_dcKZnDSA9xHfC-dI4ZJKPf
          source_id: s_KRJDFzK7vuQ6vTDbWQADNr
          stance: supports
          locator: CBDB 双向互证（父 王佐 ⇄ 子 王珣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_KRJDFzK7vuQ6vTDbWQADNr
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 22234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22234&o=json
            external_identifier: CBDB:22234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_adSFBxvab7wAmE72xwSTAi
        status: active
        display_name: 王珣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，唐人物。籍贯洛陽，曾任知縣。（中国历代人物传记资料库 CBDB 22233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VnR3LX6747i4jnii3dvQo3 | 王翰 | accepted |
| children | p_adSFBxvab7wAmE72xwSTAi | 王珣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 22232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22232&o=json)
- [中国历代人物传记资料库：王珣（CBDB 22234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22234&o=json)
- [中国历代人物传记资料库：王佐（CBDB 22233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22233&o=json)
