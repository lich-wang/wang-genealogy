---
schema: wang-person/v1
id: p_eMDP1q9C4pkhGjAYDKDRYY
status: active
merged_into: null
display_name: 王相
revision: 6
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
          text: 王相（生于1454年），明人物。明清進士進士，籍贯商水，入仕進士。（中国历代人物传记资料库 CBDB 200038）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q5NJ3vUMnCxEQFvpKUp4R3
          claim_id: c_9peFtY6rbQwTurCUKYttBX
          source_id: s_NXxFJQ5QppEL8W3nndMu23
          stance: supports
          locator: CBDB:200038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other:
    - claim:
        id: c_ieobfZ6jgASV7HlbXo3lVc
        subject_person_id: p_5PM57LBmM2Zn9DXGq8G5ur
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_prjVAE9maGRm89XyP_keLY
          claim_id: c_ieobfZ6jgASV7HlbXo3lVc
          source_id: s_PWAiD0jVvhdFvM6xw5NE4-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200038 王相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PWAiD0jVvhdFvM6xw5NE4-
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 253012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253012&o=json
            external_identifier: CBDB:253012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5PM57LBmM2Zn9DXGq8G5ur
        status: active
        display_name: 王臣
        merged_into_person_id: null
    - claim:
        id: c_QtKV5PBmNQ10nrwjfwEYLm
        subject_person_id: p_DKdWehyu53DXawDAjBeLeE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ohXbMyBlF5kejqwSjllUA
          claim_id: c_QtKV5PBmNQ10nrwjfwEYLm
          source_id: s_wR43jO7G3-2lqx5g6loxum
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200038 王相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wR43jO7G3-2lqx5g6loxum
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 253014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253014&o=json
            external_identifier: CBDB:253014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DKdWehyu53DXawDAjBeLeE
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_fhF8ycvELYSyBcJ7j5g2OA
        subject_person_id: p_eMDP1q9C4pkhGjAYDKDRYY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sSygLJJMQZ7P7DvxBNAKDF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bW5bRRat1o_FLwrLhgKfdp
          claim_id: c_fhF8ycvELYSyBcJ7j5g2OA
          source_id: s_FOcyapC2VWmyLthFXpt-BX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200038 王相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FOcyapC2VWmyLthFXpt-BX
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 253015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253015&o=json
            external_identifier: CBDB:253015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sSygLJJMQZ7P7DvxBNAKDF
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| birth.date | 1454年 | accepted |
| bio.summary | 王相（生于1454年），明人物。明清進士進士，籍贯商水，入仕進士。（中国历代人物传记资料库 CBDB 200038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W2tHNBRVD1pCHXRqxW1ADG | 王榮 | accepted |
| spouses | p_wEtwwJVfUx19apR9keMrR6 | 梁氏 | accepted |
| ancestors | p_uniLqgzge71dmTKasq5KKr | 王三 | accepted |
| ancestors | p_NUGwp7MRutH8tF2iExKxwD | 王溢 | accepted |
| other | p_5PM57LBmM2Zn9DXGq8G5ur | 王臣 | accepted |
| other | p_DKdWehyu53DXawDAjBeLeE | 王佐 | accepted |
| other | p_sSygLJJMQZ7P7DvxBNAKDF | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：梁氏(王相妻)（CBDB 253010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253010&o=json)
- [中国历代人物传记资料库：王臣（CBDB 253012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253012&o=json)
- [中国历代人物传记资料库：王相（CBDB 200038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200038&o=json)
- [中国历代人物传记资料库：王詔（CBDB 253015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253015&o=json)
- [中国历代人物传记资料库：王佐（CBDB 253014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253014&o=json)
