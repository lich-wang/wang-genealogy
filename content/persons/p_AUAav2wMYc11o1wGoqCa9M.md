---
schema: wang-person/v1
id: p_AUAav2wMYc11o1wGoqCa9M
status: active
merged_into: null
display_name: 王沂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D2jEo9Cjaj4uiq8f3dcfGS
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QT5Hk6mKyryXrqbj4SX3Kz
          claim_id: c_D2jEo9Cjaj4uiq8f3dcfGS
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: CBDB:126526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126526）
          source: &a1
            id: s_7sKxut838DNA7k1qTDbBK1
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 126526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json
            external_identifier: CBDB:126526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2sN4TnGN9ec7x5METH7k1d
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
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
        - id: cs_ncqQCw1cyAmPzffRQBRKFK
          claim_id: c_2sN4TnGN9ec7x5METH7k1d
          source_id: s_7sKxut838DNA7k1qTDbBK1
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
        id: c_Lv_Mh59dmxxhIbyMxQ0HII
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCmbhAnbS2CXPr1v-qHhQL
          claim_id: c_Lv_Mh59dmxxhIbyMxQ0HII
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 江南通志，lgid=65779：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MiT45BEZABeDdxC6DUoAF7
        status: active
        display_name: 王㒜
        merged_into_person_id: null
    - claim:
        id: c_LAIC9Sl5vaAK3w__VnFXi0
        subject_person_id: p_Zs5gecTe439MQSMXdKdr5j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Rq_7SyCYqH4WT05XzhFMA
          claim_id: c_LAIC9Sl5vaAK3w__VnFXi0
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zs5gecTe439MQSMXdKdr5j
        status: active
        display_name: 王㵰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bd3bBOYtYGLFhn6pjQnN9b
        subject_person_id: p_pkraRhhFphQavzPodgyG7o
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_prVut3izybG3Hwu9EzCJOX
          claim_id: c_bd3bBOYtYGLFhn6pjQnN9b
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pkraRhhFphQavzPodgyG7o
        status: active
        display_name: 王友諒
        merged_into_person_id: null
    - claim:
        id: c_zDb8k8ZIcftD2AaU1QoKle
        subject_person_id: p_ytW3PF5bJ7iCcWzAC9C94F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q6UhLeik1sCo1Y1nubG9Yh
          claim_id: c_zDb8k8ZIcftD2AaU1QoKle
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ytW3PF5bJ7iCcWzAC9C94F
        status: active
        display_name: 王守正
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |
| parents | p_Zs5gecTe439MQSMXdKdr5j | 王㵰 | accepted |
| ancestors | p_pkraRhhFphQavzPodgyG7o | 王友諒 | accepted |
| ancestors | p_ytW3PF5bJ7iCcWzAC9C94F | 王守正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沂（CBDB 126526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json)
