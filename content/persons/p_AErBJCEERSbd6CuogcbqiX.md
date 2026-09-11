---
schema: wang-person/v1
id: p_AErBJCEERSbd6CuogcbqiX
status: active
merged_into: null
display_name: 王篪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xagnHXdAmGf2VnMyBGnZX4
        subject_person_id: p_AErBJCEERSbd6CuogcbqiX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王篪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pcGDNVe3BWY111LGpN31uF
          claim_id: c_xagnHXdAmGf2VnMyBGnZX4
          source_id: s_K2yscFMiwSjCWm9PHCCcHm
          stance: supports
          locator: CBDB:550766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550766）
          source: &a1
            id: s_K2yscFMiwSjCWm9PHCCcHm
            source_type: api_record
            title: 中国历代人物传记资料库：王篪（CBDB 550766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550766&o=json
            external_identifier: CBDB:550766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VRcjBuETkU1vJsZKiQNAJK
        subject_person_id: p_AErBJCEERSbd6CuogcbqiX
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
        - id: cs_mQwWLBM8zYEJQf29keZhvs
          claim_id: c_VRcjBuETkU1vJsZKiQNAJK
          source_id: s_K2yscFMiwSjCWm9PHCCcHm
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
        id: c_6_gPKUKpuDiZwsLIdByMlk
        subject_person_id: p_TfSUDCjDByc2kg8tK9UUea
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AErBJCEERSbd6CuogcbqiX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mzyaHB5GZ_kruyLG3BBxhJ
          claim_id: c_6_gPKUKpuDiZwsLIdByMlk
          source_id: s_K2yscFMiwSjCWm9PHCCcHm
          stance: supports
          locator: 滸墅關志，lgid=176454：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TfSUDCjDByc2kg8tK9UUea
        status: active
        display_name: 王璡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王篪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王篪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TfSUDCjDByc2kg8tK9UUea | 王璡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王篪（CBDB 550766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550766&o=json)
