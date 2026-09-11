---
schema: wang-person/v1
id: p_eMDP1q9C4pkhGjAYDKDRYY
status: active
merged_into: null
display_name: 王相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mK8WPdLXdhYKNcPkot9kZT
        subject_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LYNFFkaZupUhvct16tydDs
          claim_id: c_mK8WPdLXdhYKNcPkot9kZT
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: CBDB:200038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200038）
          source: &a1
            id: s_NXxFJQ5QppEL8W3nndMu23
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 200038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json
            external_identifier: CBDB:200038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wGgidh3TjHC41zd9cewLJR
        subject_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1454年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4JiLKi71BSPdxRyAfHgQN5
          claim_id: c_wGgidh3TjHC41zd9cewLJR
          source_id: s_NXxFJQ5QppEL8W3nndMu23
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
        id: c_9peFtY6rbQwTurCUKYttBX
        subject_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
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
        - id: cs_UbZxtsHbvJwE2SdGZ23P12
          claim_id: c_9peFtY6rbQwTurCUKYttBX
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nZNp5pUh5MmQY0nl6qmvti
        subject_person_id: p_W2tHNBRVD1pCHXRqxW1ADG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_43oxrVydbBuY01x9FDd5UP
          claim_id: c_nZNp5pUh5MmQY0nl6qmvti
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W2tHNBRVD1pCHXRqxW1ADG
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FqbhQlERPc0hiZyFhg1mud
        subject_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wEtwwJVfUx19apR9keMrR6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PI2_bxze9PSYdlZ_6SJA1i
          claim_id: c_FqbhQlERPc0hiZyFhg1mud
          source_id: s_GWOo8NZSgFhbs-9jtrj5Oa
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GWOo8NZSgFhbs-9jtrj5Oa
            source_type: api_record
            title: 中国历代人物传记资料库：梁氏(王相妻)（CBDB 253010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253010&o=json
            external_identifier: CBDB:253010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wEtwwJVfUx19apR9keMrR6
        status: active
        display_name: 梁氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_AwF1NUr49v9M_heH0oqi47
        subject_person_id: p_uniLqgzge71dmTKasq5KKr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Jv1V_impgYOJm0ZcX6ugw
          claim_id: c_AwF1NUr49v9M_heH0oqi47
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uniLqgzge71dmTKasq5KKr
        status: active
        display_name: 王三
        merged_into_person_id: null
    - claim:
        id: c_Fu4MQtUwLNGf03RihnxBap
        subject_person_id: p_NUGwp7MRutH8tF2iExKxwD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzGLWl4gnVTf3LEym5Oq_O
          claim_id: c_Fu4MQtUwLNGf03RihnxBap
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NUGwp7MRutH8tF2iExKxwD
        status: active
        display_name: 王溢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| birth.date | 1454年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W2tHNBRVD1pCHXRqxW1ADG | 王榮 | accepted |
| spouses | p_wEtwwJVfUx19apR9keMrR6 | 梁氏 | accepted |
| ancestors | p_uniLqgzge71dmTKasq5KKr | 王三 | accepted |
| ancestors | p_NUGwp7MRutH8tF2iExKxwD | 王溢 | accepted |

## 外部来源

- [中国历代人物传记资料库：梁氏(王相妻)（CBDB 253010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253010&o=json)
- [中国历代人物传记资料库：王相（CBDB 200038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json)
