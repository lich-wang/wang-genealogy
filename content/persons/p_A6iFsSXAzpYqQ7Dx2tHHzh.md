---
schema: wang-person/v1
id: p_A6iFsSXAzpYqQ7Dx2tHHzh
status: active
merged_into: null
display_name: 王賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U7wJ1JYBkxxKGw2bD4A8j9
        subject_person_id: p_A6iFsSXAzpYqQ7Dx2tHHzh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pBP5jrQRPcYaVbwkQg3h1m
          claim_id: c_U7wJ1JYBkxxKGw2bD4A8j9
          source_id: s_2ViUHkR28UFmoBMcXAEDgw
          stance: supports
          locator: CBDB:241026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241026）
          source: &a1
            id: s_2ViUHkR28UFmoBMcXAEDgw
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 241026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241026&o=json
            external_identifier: CBDB:241026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZnKQc2ihjN8NFMZS3H1mmV
        subject_person_id: p_A6iFsSXAzpYqQ7Dx2tHHzh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢，明人物。正統十三年進士，籍贯夏縣。（中国历代人物传记资料库 CBDB 241026）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4YapGKcnEdpotG7i8PKmhx
          claim_id: c_ZnKQc2ihjN8NFMZS3H1mmV
          source_id: s_2ViUHkR28UFmoBMcXAEDgw
          stance: supports
          locator: CBDB:241026
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bK76ogg7oP5wiJAZfgjbdA
        subject_person_id: p_2h2iTcWMQkG9VP954w7RTi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A6iFsSXAzpYqQ7Dx2tHHzh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tGsOWCsZeJ9EETXjlHslLY
          claim_id: c_bK76ogg7oP5wiJAZfgjbdA
          source_id: s_xdcm72ol3Qmd9BrqMZMecF
          stance: supports
          locator: CBDB：兄弟 王正（208144）之父／母 王礪
          quotation: null
          interpretation_note: 由兄弟关系推断：王賢 与 王正 为同胞（CBDB 记「弟」），王正 之父／母即 王賢 之父／母。
          source:
            id: s_xdcm72ol3Qmd9BrqMZMecF
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 241026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241026&o=json
            external_identifier: CBDB:241026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2h2iTcWMQkG9VP954w7RTi
        status: active
        display_name: 王礪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OH-xD3U3Q3BGmGzz6Ux9zl
        subject_person_id: p_A6iFsSXAzpYqQ7Dx2tHHzh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRG3-10nxH4KZNAQDeqbQm
          claim_id: c_OH-xD3U3Q3BGmGzz6Ux9zl
          source_id: s_xdcm72ol3Qmd9BrqMZMecF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208144 王正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xdcm72ol3Qmd9BrqMZMecF
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 241026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241026&o=json
            external_identifier: CBDB:241026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bfSy8dPRhP5ZK4VbYiPWT2
        status: active
        display_name: 王正
        merged_into_person_id: null
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | 王賢，明人物。正統十三年進士，籍贯夏縣。（中国历代人物传记资料库 CBDB 241026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2h2iTcWMQkG9VP954w7RTi | 王礪 | accepted |
| other | p_bfSy8dPRhP5ZK4VbYiPWT2 | 王正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 241026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241026&o=json)
