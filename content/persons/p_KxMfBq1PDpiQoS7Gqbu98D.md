---
schema: wang-person/v1
id: p_KxMfBq1PDpiQoS7Gqbu98D
status: active
merged_into: null
display_name: 王源
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNCkYxk3C43YbAAF81xE8y
        subject_person_id: p_KxMfBq1PDpiQoS7Gqbu98D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fzHcWaXURsoKjjJoNbgFuS
          claim_id: c_yNCkYxk3C43YbAAF81xE8y
          source_id: s_32UDKTJBFob1LM5rcmUKvF
          stance: supports
          locator: CBDB:39441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39441）
          source: &a1
            id: s_32UDKTJBFob1LM5rcmUKvF
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 39441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39441&o=json
            external_identifier: CBDB:39441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KXL8FXNJ6aL5h2U8gfubF7
        subject_person_id: p_KxMfBq1PDpiQoS7Gqbu98D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源，宋人物。籍贯廬陵，曾任朝請大夫、秘書省著作郎。（中国历代人物传记资料库 CBDB 39441）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qHGhh82iedA6BFyLt2Pi8s
          claim_id: c_KXL8FXNJ6aL5h2U8gfubF7
          source_id: s_32UDKTJBFob1LM5rcmUKvF
          stance: supports
          locator: CBDB:39441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zTKuHfuzWfa1_tOCDmQ9EQ
        subject_person_id: p_YorBp3QdkukixtBGPrhSQo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KxMfBq1PDpiQoS7Gqbu98D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4p3Dxi5ldV44E5iejsZLBm
          claim_id: c_zTKuHfuzWfa1_tOCDmQ9EQ
          source_id: s_32UDKTJBFob1LM5rcmUKvF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1664;1665：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YorBp3QdkukixtBGPrhSQo
        status: active
        display_name: 王伯芻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源 | accepted |
| bio.summary | 王源，宋人物。籍贯廬陵，曾任朝請大夫、秘書省著作郎。（中国历代人物传记资料库 CBDB 39441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YorBp3QdkukixtBGPrhSQo | 王伯芻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王源（CBDB 39441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39441&o=json)
