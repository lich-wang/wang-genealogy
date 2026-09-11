---
schema: wang-person/v1
id: p_BiHBv5kE6hFqq82j1ZogDT
status: active
merged_into: null
display_name: 王祥
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zoN9rhzewZCcZgvE9tE9Vi
        subject_person_id: p_BiHBv5kE6hFqq82j1ZogDT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVeUABR1HhTa1wrxcRxh7n
          claim_id: c_zoN9rhzewZCcZgvE9tE9Vi
          source_id: s_2zi8KRRLv2som9w3FcVQQE
          stance: supports
          locator: CBDB:198179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198179）
          source: &a1
            id: s_2zi8KRRLv2som9w3FcVQQE
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 198179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198179&o=json
            external_identifier: CBDB:198179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NfZ7ChXuio4FXALmqoa1uJ
        subject_person_id: p_BiHBv5kE6hFqq82j1ZogDT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1421年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LcLerxDHZDpXnAAW92CzLH
          claim_id: c_NfZ7ChXuio4FXALmqoa1uJ
          source_id: s_2zi8KRRLv2som9w3FcVQQE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14MVztMRoSHf9GGUf83vPE
        subject_person_id: p_BiHBv5kE6hFqq82j1ZogDT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥（生于1421年），明人物。明清進士進士，籍贯資縣，入仕進士。（中国历代人物传记资料库 CBDB 198179）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q6u5DQ9rmx45POdCx0txld
          claim_id: c_14MVztMRoSHf9GGUf83vPE
          source_id: s_2zi8KRRLv2som9w3FcVQQE
          stance: supports
          locator: CBDB:198179
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OVP96vcwMDepRibeheGfiN
        subject_person_id: p_47zTuVhM3yUPPv2H3gbjLL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BiHBv5kE6hFqq82j1ZogDT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_09CzihqhpkJYI4dm0crl3I
          claim_id: c_OVP96vcwMDepRibeheGfiN
          source_id: s_K2Amyg7tf25G1bEniHAeHQ
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K2Amyg7tf25G1bEniHAeHQ
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 326218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326218&o=json
            external_identifier: CBDB:326218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_47zTuVhM3yUPPv2H3gbjLL
        status: active
        display_name: 王源
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_beajc8Ii3N90v8CVgZ9OHB
        subject_person_id: p_147vTB9B2hmyVeDmch7YB2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BiHBv5kE6hFqq82j1ZogDT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_frdf9A7Da82dDkVmfYt6CO
          claim_id: c_beajc8Ii3N90v8CVgZ9OHB
          source_id: s_scZF58Sm2AdgtDUm64F71m
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_scZF58Sm2AdgtDUm64F71m
            source_type: api_record
            title: 中国历代人物传记资料库：王應先（CBDB 326107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326107&o=json
            external_identifier: CBDB:326107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_147vTB9B2hmyVeDmch7YB2
        status: active
        display_name: 王應先
        merged_into_person_id: null
    - claim:
        id: c_ciZGcKR8HWkjlDxQGJsLui
        subject_person_id: p_dWYb6X7kmuycUpQPFrF9H9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BiHBv5kE6hFqq82j1ZogDT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xVxdxBSogu3MmeLbBHOGe7
          claim_id: c_ciZGcKR8HWkjlDxQGJsLui
          source_id: s_7mL9us5VE8nuSXf7t82HnZ
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7mL9us5VE8nuSXf7t82HnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王普恕（CBDB 325996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325996&o=json
            external_identifier: CBDB:325996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_dWYb6X7kmuycUpQPFrF9H9
        status: active
        display_name: 王普恕
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| birth.date | 1421年 | accepted |
| bio.summary | 王祥（生于1421年），明人物。明清進士進士，籍贯資縣，入仕進士。（中国历代人物传记资料库 CBDB 198179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_47zTuVhM3yUPPv2H3gbjLL | 王源 | accepted |
| ancestors | p_147vTB9B2hmyVeDmch7YB2 | 王應先 | accepted |
| ancestors | p_dWYb6X7kmuycUpQPFrF9H9 | 王普恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王普恕（CBDB 325996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325996&o=json)
- [中国历代人物传记资料库：王祥（CBDB 198179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198179&o=json)
- [中国历代人物传记资料库：王應先（CBDB 326107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326107&o=json)
- [中国历代人物传记资料库：王源（CBDB 326218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326218&o=json)
