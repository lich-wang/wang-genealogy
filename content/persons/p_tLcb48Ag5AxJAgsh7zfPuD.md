---
schema: wang-person/v1
id: p_tLcb48Ag5AxJAgsh7zfPuD
status: active
merged_into: null
display_name: 王道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pAsgDDs5kBMd5AnVtF2Soa
        subject_person_id: p_tLcb48Ag5AxJAgsh7zfPuD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SF3rF6SnSgNaC6j4EuH43a
          claim_id: c_pAsgDDs5kBMd5AnVtF2Soa
          source_id: s_9xrMARrMTGukG5mXK73SJh
          stance: supports
          locator: CBDB:209783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209783）
          source: &a1
            id: s_9xrMARrMTGukG5mXK73SJh
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 209783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209783&o=json
            external_identifier: CBDB:209783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_21V8VPZ3ZL2NsyuVUWAE1Y
        subject_person_id: p_tLcb48Ag5AxJAgsh7zfPuD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道，明人物。隆慶五年進士，曾任通判。（中国历代人物传记资料库 CBDB 209783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MEVnkhQj_L-w60FpGeRpn_
          claim_id: c_21V8VPZ3ZL2NsyuVUWAE1Y
          source_id: s_9xrMARrMTGukG5mXK73SJh
          stance: supports
          locator: CBDB:209783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_YaSibm05f0NN9sRJ6khjYZ
        subject_person_id: p_tLcb48Ag5AxJAgsh7zfPuD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3T3cPb-mm_p5mS1vlnDVB9
          claim_id: c_YaSibm05f0NN9sRJ6khjYZ
          source_id: s_9xrMARrMTGukG5mXK73SJh
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Eo3x5BVMmizyxxEaJmawa5
        status: active
        display_name: 王嘉柔
        merged_into_person_id: null
  other: []
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | 王道，明人物。隆慶五年進士，曾任通判。（中国历代人物传记资料库 CBDB 209783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Eo3x5BVMmizyxxEaJmawa5 | 王嘉柔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 209783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209783&o=json)
