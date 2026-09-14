---
schema: wang-person/v1
id: p_54N819RTs5pjwtb5S3HRmk
status: active
merged_into: null
display_name: 王禮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FhJ3ktn7L3DPdZA2weMZYT
        subject_person_id: p_54N819RTs5pjwtb5S3HRmk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uBDBaHT1ni8Sdcx8Yqdo6c
          claim_id: c_FhJ3ktn7L3DPdZA2weMZYT
          source_id: s_xdYCznJvNC6aWnVZbBbUzo
          stance: supports
          locator: CBDB:245230
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245230）
          source: &a1
            id: s_xdYCznJvNC6aWnVZbBbUzo
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245230&o=json
            external_identifier: CBDB:245230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t8hA6uu2nicjTP8aTjtgVa
        subject_person_id: p_54N819RTs5pjwtb5S3HRmk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245230）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hWWDKnsDR3RadxPV7EfXxQ
          claim_id: c_t8hA6uu2nicjTP8aTjtgVa
          source_id: s_xdYCznJvNC6aWnVZbBbUzo
          stance: supports
          locator: CBDB:245230
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Exm_O7B8sgvCe4uSalvLKU
        subject_person_id: p_7qmh6ExHEGb6N6NWE8gC5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_54N819RTs5pjwtb5S3HRmk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ecejpo-tQL-ySBIccjS2Xq
          claim_id: c_Exm_O7B8sgvCe4uSalvLKU
          source_id: s_7A9LZRXbcAmtqZju-DkMGb
          stance: supports
          locator: CBDB：兄弟 王智（198244）之父／母 王昭
          quotation: null
          interpretation_note: 由兄弟关系推断：王禮 与 王智 为同胞（CBDB 记「弟」），王智 之父／母即 王禮 之父／母。
          source:
            id: s_7A9LZRXbcAmtqZju-DkMGb
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245230&o=json
            external_identifier: CBDB:245230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qmh6ExHEGb6N6NWE8gC5i
        status: active
        display_name: 王昭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TzpxP4oI6IXEYud9PzUoDg
        subject_person_id: p_54N819RTs5pjwtb5S3HRmk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xrH9r6c2DqKwXRhBDFYrEZ
          claim_id: c_TzpxP4oI6IXEYud9PzUoDg
          source_id: s_7A9LZRXbcAmtqZju-DkMGb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198244 王智）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7A9LZRXbcAmtqZju-DkMGb
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245230&o=json
            external_identifier: CBDB:245230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YA1G7T5veW43cswnoFX8Ym
        status: active
        display_name: 王智
        merged_into_person_id: null
---

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮 | accepted |
| bio.summary | 王禮，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245230） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qmh6ExHEGb6N6NWE8gC5i | 王昭 | accepted |
| other | p_YA1G7T5veW43cswnoFX8Ym | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 245230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245230&o=json)
