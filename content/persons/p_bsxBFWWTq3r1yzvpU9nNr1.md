---
schema: wang-person/v1
id: p_bsxBFWWTq3r1yzvpU9nNr1
status: active
merged_into: null
display_name: 王湜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eVXKN2swrKN759CS27M8Uk
        subject_person_id: p_bsxBFWWTq3r1yzvpU9nNr1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H9TFCgh9UprwCY54TF3KRb
          claim_id: c_eVXKN2swrKN759CS27M8Uk
          source_id: s_bdL5dnevPJ9mLPWJEj9R8p
          stance: supports
          locator: CBDB:262877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262877）
          source: &a1
            id: s_bdL5dnevPJ9mLPWJEj9R8p
            source_type: api_record
            title: 中国历代人物传记资料库：王湜（CBDB 262877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262877&o=json
            external_identifier: CBDB:262877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3htpQFXKAQ9T9GzMQ5iTSK
        subject_person_id: p_bsxBFWWTq3r1yzvpU9nNr1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uKuJeCNqG5U8VDoQBPcsKE
          claim_id: c_3htpQFXKAQ9T9GzMQ5iTSK
          source_id: s_bdL5dnevPJ9mLPWJEj9R8p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_n8KmYcvB0IOUaxbD_oWJlo
        subject_person_id: p_bsxBFWWTq3r1yzvpU9nNr1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__75TYO-66ILGcxWiJQU2eV
          claim_id: c_n8KmYcvB0IOUaxbD_oWJlo
          source_id: s_YEFc76BF7d689AbSJF4e5B
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百一十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YEFc76BF7d689AbSJF4e5B
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 126636）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json
            external_identifier: CBDB:126636
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        status: active
        display_name: 王哲
        merged_into_person_id: null
  other: []
---

# 王湜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_8Z1UQ2GEaLW3fJdsaEnJcd | 王哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王湜（CBDB 262877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262877&o=json)
- [中国历代人物传记资料库：王哲（CBDB 126636）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126636&o=json)
