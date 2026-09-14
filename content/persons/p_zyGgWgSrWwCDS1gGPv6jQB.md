---
schema: wang-person/v1
id: p_zyGgWgSrWwCDS1gGPv6jQB
status: active
merged_into: null
display_name: 王近光
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NPM18Fbuim7rTzbPTQWFM2
        subject_person_id: p_zyGgWgSrWwCDS1gGPv6jQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王近光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PMDJ7dD5EgCM6WJGAsPpKn
          claim_id: c_NPM18Fbuim7rTzbPTQWFM2
          source_id: s_ET8qBkVuTG1cdWZcvYPtQZ
          stance: supports
          locator: CBDB:308159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308159）
          source: &a1
            id: s_ET8qBkVuTG1cdWZcvYPtQZ
            source_type: api_record
            title: 中国历代人物传记资料库：王近光（CBDB 308159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json
            external_identifier: CBDB:308159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RVX4GMvJzgQpM1gtjDALxw
        subject_person_id: p_zyGgWgSrWwCDS1gGPv6jQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王近光，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308159）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aKOEb4RClL6osbXSvIkmj_
          claim_id: c_RVX4GMvJzgQpM1gtjDALxw
          source_id: s_ET8qBkVuTG1cdWZcvYPtQZ
          stance: supports
          locator: CBDB:308159
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YIa6pAgpnqj0yoA0EyHibQ
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zyGgWgSrWwCDS1gGPv6jQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2xMcg_c4NKvUhdXaq5_AhC
          claim_id: c_YIa6pAgpnqj0yoA0EyHibQ
          source_id: s_AIEGaUjYuwtFQNbV8U1G8q
          stance: supports
          locator: CBDB：兄弟 王國光（125310）之父／母 王承祖
          quotation: null
          interpretation_note: 由兄弟关系推断：王近光 与 王國光 为同胞（CBDB 记「兄」），王國光 之父／母即 王近光 之父／母。
          source:
            id: s_AIEGaUjYuwtFQNbV8U1G8q
            source_type: api_record
            title: 中国历代人物传记资料库：王近光（CBDB 308159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json
            external_identifier: CBDB:308159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GvhnbSfs4k75xQrdJJphA9
        status: active
        display_name: 王承祖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GjEdkAkFVaetg1_gKvMATW
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zyGgWgSrWwCDS1gGPv6jQB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gk6aOHWg7jqAXgO3czNJ78
          claim_id: c_GjEdkAkFVaetg1_gKvMATW
          source_id: s_AIEGaUjYuwtFQNbV8U1G8q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 125310 王國光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AIEGaUjYuwtFQNbV8U1G8q
            source_type: api_record
            title: 中国历代人物传记资料库：王近光（CBDB 308159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json
            external_identifier: CBDB:308159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fAeAj1ECenpg29AWYPB25D
        status: active
        display_name: 王國光
        merged_into_person_id: null
---

# 王近光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王近光 | accepted |
| bio.summary | 王近光，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308159） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GvhnbSfs4k75xQrdJJphA9 | 王承祖 | accepted |
| other | p_fAeAj1ECenpg29AWYPB25D | 王國光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王近光（CBDB 308159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308159&o=json)
