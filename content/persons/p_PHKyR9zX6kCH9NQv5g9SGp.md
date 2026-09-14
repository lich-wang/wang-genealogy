---
schema: wang-person/v1
id: p_PHKyR9zX6kCH9NQv5g9SGp
status: active
merged_into: null
display_name: 王深
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cJMsKparfxcREuYfoQfpyN
        subject_person_id: p_PHKyR9zX6kCH9NQv5g9SGp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L6JodYGR8zHrfZG3Gh26Ce
          claim_id: c_cJMsKparfxcREuYfoQfpyN
          source_id: s_rrLwg88EAUHqnvSmdTcySy
          stance: supports
          locator: CBDB:247657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247657）
          source: &a1
            id: s_rrLwg88EAUHqnvSmdTcySy
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 247657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247657&o=json
            external_identifier: CBDB:247657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uHZHaqbcRZwsbcYDEvCEyA
        subject_person_id: p_PHKyR9zX6kCH9NQv5g9SGp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深，明人物。成化十一年進士，籍贯武進。（中国历代人物传记资料库 CBDB 247657）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w-VCpuOFEV-jEFW2F6TPex
          claim_id: c_uHZHaqbcRZwsbcYDEvCEyA
          source_id: s_rrLwg88EAUHqnvSmdTcySy
          stance: supports
          locator: CBDB:247657
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oCpJishW-YnyrX9xdPXHGy
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PHKyR9zX6kCH9NQv5g9SGp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nLtiOYkWUQ_cJSo4YN7lZ8
          claim_id: c_oCpJishW-YnyrX9xdPXHGy
          source_id: s_uyPPNH3Wm9-qjhMWVnJNmU
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王深 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王深 之父／母。
          source:
            id: s_uyPPNH3Wm9-qjhMWVnJNmU
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 247657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247657&o=json
            external_identifier: CBDB:247657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MiT45BEZABeDdxC6DUoAF7
        status: active
        display_name: 王㒜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4TnyYP19iC4PbzJfNfuQqA
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PHKyR9zX6kCH9NQv5g9SGp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jiLwo6pS9-VuRimBY_yLTc
          claim_id: c_4TnyYP19iC4PbzJfNfuQqA
          source_id: s_uyPPNH3Wm9-qjhMWVnJNmU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uyPPNH3Wm9-qjhMWVnJNmU
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 247657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247657&o=json
            external_identifier: CBDB:247657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
---

# 王深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深 | accepted |
| bio.summary | 王深，明人物。成化十一年進士，籍贯武進。（中国历代人物传记资料库 CBDB 247657） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |
| other | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王深（CBDB 247657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247657&o=json)
