---
schema: wang-person/v1
id: p_fUrkW6ozGrAosrVsTorpqL
status: active
merged_into: null
display_name: 王乾明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eoRstRu3qNM5xMrSo8VEgQ
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dXfa6nbDbUyiNsu5K7FoRf
          claim_id: c_eoRstRu3qNM5xMrSo8VEgQ
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
          stance: supports
          locator: CBDB:555106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555106）
          source: &a1
            id: s_JHhmqNMAL3cz2t6ShErLh5
            source_type: api_record
            title: 中国历代人物传记资料库：王乾明（CBDB 555106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555106&o=json
            external_identifier: CBDB:555106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BaFVzS4zm1w913L52C6YDg
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
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
        - id: cs_6bjDtVVucc4G5T5y9QcN4J
          claim_id: c_BaFVzS4zm1w913L52C6YDg
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
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
        id: c_kgjDd5XDLu5FV2b08Kg8Ub
        subject_person_id: p_nczT1Bx4gQZPAL8J9oF8s6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fUrkW6ozGrAosrVsTorpqL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4bjLHn9hgyX1FT8Cesz9Or
          claim_id: c_kgjDd5XDLu5FV2b08Kg8Ub
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nczT1Bx4gQZPAL8J9oF8s6
        status: active
        display_name: 王繼祖
        merged_into_person_id: null
  children:
    - claim:
        id: c_l_iZ73O0VYAK77PNrISNrI
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ip7XEAQBd5SU56FCiqsDGa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z0gHzs8S6noLqg1wbZkFev
          claim_id: c_l_iZ73O0VYAK77PNrISNrI
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ip7XEAQBd5SU56FCiqsDGa
        status: active
        display_name: 王受元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Dwj2bLSLZXQfi7Bha25ysI
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_j4i9tZd4rBCbNz6pcMktw7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3uXlMhfGi-AyhDvySzqxkW
          claim_id: c_Dwj2bLSLZXQfi7Bha25ysI
          source_id: s_WdeQMhI1-FougPO94ElgHm
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WdeQMhI1-FougPO94ElgHm
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王乾明妻)（CBDB 555110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555110&o=json
            external_identifier: CBDB:555110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j4i9tZd4rBCbNz6pcMktw7
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_j2pKYNJVhMheVtCEPHZfj7
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kGhjBDdewAMKtwMDXvy2ts
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1yLYXjJfQtydnF9YR14xu
          claim_id: c_j2pKYNJVhMheVtCEPHZfj7
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kGhjBDdewAMKtwMDXvy2ts
        status: active
        display_name: 王良臣
        merged_into_person_id: null
  other: []
---

# 王乾明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nczT1Bx4gQZPAL8J9oF8s6 | 王繼祖 | accepted |
| children | p_ip7XEAQBd5SU56FCiqsDGa | 王受元 | accepted |
| spouses | p_j4i9tZd4rBCbNz6pcMktw7 | 張氏 | accepted |
| descendants | p_kGhjBDdewAMKtwMDXvy2ts | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乾明（CBDB 555106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555106&o=json)
- [中国历代人物传记资料库：張氏(王乾明妻)（CBDB 555110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555110&o=json)
