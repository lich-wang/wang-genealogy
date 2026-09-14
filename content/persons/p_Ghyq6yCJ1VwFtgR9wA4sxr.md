---
schema: wang-person/v1
id: p_Ghyq6yCJ1VwFtgR9wA4sxr
status: active
merged_into: null
display_name: 王洛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5zVZ7KhNq4YdCcJPTKcL6B
        subject_person_id: p_Ghyq6yCJ1VwFtgR9wA4sxr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wDS2T7PdujGBF8JoAcY1sC
          claim_id: c_5zVZ7KhNq4YdCcJPTKcL6B
          source_id: s_o65wjJJfyzVUTx8Bo3Bq9J
          stance: supports
          locator: CBDB:247656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247656）
          source: &a1
            id: s_o65wjJJfyzVUTx8Bo3Bq9J
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 247656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247656&o=json
            external_identifier: CBDB:247656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xuHw5eCZr4bfevKSkCLtHS
        subject_person_id: p_Ghyq6yCJ1VwFtgR9wA4sxr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洛，明人物。成化十一年進士，籍贯武進。（中国历代人物传记资料库 CBDB 247656）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mlD2wxXoPNqpT14UetU0YH
          claim_id: c_xuHw5eCZr4bfevKSkCLtHS
          source_id: s_o65wjJJfyzVUTx8Bo3Bq9J
          stance: supports
          locator: CBDB:247656
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hg9cAv3gjxJmsQonYqdwQt
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ghyq6yCJ1VwFtgR9wA4sxr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAit3ezc2cZaZEPiCOmLpS
          claim_id: c_hg9cAv3gjxJmsQonYqdwQt
          source_id: s_G8HtGvptPViZMm6znAdvEs
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王洛 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王洛 之父／母。
          source:
            id: s_G8HtGvptPViZMm6znAdvEs
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 247656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247656&o=json
            external_identifier: CBDB:247656
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
        id: c_R5Et3PKSiTY3VBIQjc-Gbb
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ghyq6yCJ1VwFtgR9wA4sxr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KqcT0tguNvIvNI3tOawDic
          claim_id: c_R5Et3PKSiTY3VBIQjc-Gbb
          source_id: s_G8HtGvptPViZMm6znAdvEs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_G8HtGvptPViZMm6znAdvEs
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 247656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247656&o=json
            external_identifier: CBDB:247656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
---

# 王洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洛 | accepted |
| bio.summary | 王洛，明人物。成化十一年進士，籍贯武進。（中国历代人物传记资料库 CBDB 247656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |
| other | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洛（CBDB 247656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247656&o=json)
