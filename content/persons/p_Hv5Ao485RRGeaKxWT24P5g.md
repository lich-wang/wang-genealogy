---
schema: wang-person/v1
id: p_Hv5Ao485RRGeaKxWT24P5g
status: active
merged_into: null
display_name: 王棟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_en9J7iVJy8G9C9JsHDsVtz
        subject_person_id: p_Hv5Ao485RRGeaKxWT24P5g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zEJwfFi6ucJMuXH9xZ7qjM
          claim_id: c_en9J7iVJy8G9C9JsHDsVtz
          source_id: s_1LHBiAjk6Ez3pwhmoVnqVj
          stance: supports
          locator: CBDB:312874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312874）
          source: &a1
            id: s_1LHBiAjk6Ez3pwhmoVnqVj
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 312874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312874&o=json
            external_identifier: CBDB:312874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VewdXEig3hEQhi5epE1c4P
        subject_person_id: p_Hv5Ao485RRGeaKxWT24P5g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。嘉靖二十九年進士，籍贯無為州。（中国历代人物传记资料库 CBDB 312874）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ACVgUjjHzPBRYpM8hgN0fn
          claim_id: c_VewdXEig3hEQhi5epE1c4P
          source_id: s_1LHBiAjk6Ez3pwhmoVnqVj
          stance: supports
          locator: CBDB:312874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vS82tsczUOu4yvEtTjH3P_
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hv5Ao485RRGeaKxWT24P5g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2j9YXo-D8fVoWYj2hXo71
          claim_id: c_vS82tsczUOu4yvEtTjH3P_
          source_id: s_GB0CJsL-ivgEELqACrCLLq
          stance: supports
          locator: CBDB：兄弟 王極（203985）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王極 为同胞（CBDB 记「兄」），王極 之父／母即 王棟 之父／母。
          source:
            id: s_GB0CJsL-ivgEELqACrCLLq
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 312874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312874&o=json
            external_identifier: CBDB:312874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZF7x3DbwQHhujvboCuokUD
        subject_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Hv5Ao485RRGeaKxWT24P5g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YyCDCuzrqYCVWKwcPTYvtH
          claim_id: c_ZF7x3DbwQHhujvboCuokUD
          source_id: s_GB0CJsL-ivgEELqACrCLLq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203985 王極）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GB0CJsL-ivgEELqACrCLLq
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 312874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312874&o=json
            external_identifier: CBDB:312874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3m7CP7DGKJ8uiCH5xxVdzo
        status: active
        display_name: 王極
        merged_into_person_id: null
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。嘉靖二十九年進士，籍贯無為州。（中国历代人物传记资料库 CBDB 312874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6EWBQvVPeb2Qhu8gDXSsQ8 | 王濟 | accepted |
| other | p_3m7CP7DGKJ8uiCH5xxVdzo | 王極 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 312874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312874&o=json)
