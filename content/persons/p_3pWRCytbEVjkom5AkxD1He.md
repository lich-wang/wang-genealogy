---
schema: wang-person/v1
id: p_3pWRCytbEVjkom5AkxD1He
status: active
merged_into: null
display_name: 王聚秀
cbdb_id: 30065
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ofpoyYiVxdZAe6JgeRBdvA
        subject_person_id: p_3pWRCytbEVjkom5AkxD1He
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eNyR4Jon90h8QNaB7dD-_v
          claim_id: c_ofpoyYiVxdZAe6JgeRBdvA
          source_id: s_cN1yKcugqT4Av9gtzyKGPg
          stance: supports
          locator: CBDB:30065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cN1yKcugqT4Av9gtzyKGPg
            source_type: api_record
            title: 中国历代人物传记资料库：王聚秀（CBDB 30065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30065&o=json
            external_identifier: CBDB:30065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CR3nr4j2AGvuajsLgQYKUA
        subject_person_id: p_3pWRCytbEVjkom5AkxD1He
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yfankTDLC615M7t87jDNVq
          claim_id: c_CR3nr4j2AGvuajsLgQYKUA
          source_id: s_cN1yKcugqT4Av9gtzyKGPg
          stance: supports
          locator: CBDB:30065
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sXiD5xCte9IXb4oChLhkvw
        subject_person_id: p_Rtn4knLShMzCHnFn2QERef
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3pWRCytbEVjkom5AkxD1He
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLBLBtumoq5GXS-rMYCgNF
          claim_id: c_sXiD5xCte9IXb4oChLhkvw
          source_id: s_14LUUNITVp4p6Vf8XiOVEe
          stance: supports
          locator: CBDB 亲属：父（KinPerson 30048）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_14LUUNITVp4p6Vf8XiOVEe
            source_type: api_record
            title: 中国历代人物传记资料库：王聚秀（CBDB 30065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30065&o=json
            external_identifier: CBDB:30065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rtn4knLShMzCHnFn2QERef
        status: active
        display_name: 王振聲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王聚秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王聚秀，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30065） | accepted |
| name.primary | 王聚秀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rtn4knLShMzCHnFn2QERef | 王振聲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聚秀（CBDB 30065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30065&o=json)
