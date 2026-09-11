---
schema: wang-person/v1
id: p_ZBwZdB8tEY2KUEfDHqhpeB
status: active
merged_into: null
display_name: 王景
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BsH8f1jQdH3gghMzM6pqav
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CEP5bHGQf3EEgFDa8Wn9yD
          claim_id: c_BsH8f1jQdH3gghMzM6pqav
          source_id: s_UJZTr2sGggKgZh27cf91L4
          stance: supports
          locator: CBDB:242761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242761）
          source: &a1
            id: s_UJZTr2sGggKgZh27cf91L4
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 242761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242761&o=json
            external_identifier: CBDB:242761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KL4RpW8RFU78HqPwRHUHN2
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
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
        - id: cs_XNpfMFCsdiMMuQy9d1FtLS
          claim_id: c_KL4RpW8RFU78HqPwRHUHN2
          source_id: s_UJZTr2sGggKgZh27cf91L4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_U0Giy7KSApj3fylG9herOo
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7nLDqRUiM1HQGsWK6gxVHc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7ZVQ89WfPAjwWj75-y5p8
          claim_id: c_U0Giy7KSApj3fylG9herOo
          source_id: s_gLTowmCEC7vGFGymkruUKP
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gLTowmCEC7vGFGymkruUKP
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 67734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json
            external_identifier: CBDB:67734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7nLDqRUiM1HQGsWK6gxVHc
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_rXpHYVqdzOpL1wvRkogs4B
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1kKIMl78vHOygc5Q1sX1u
          claim_id: c_rXpHYVqdzOpL1wvRkogs4B
          source_id: s_UJZTr2sGggKgZh27cf91L4
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fKzK34U3bvaoYweEWJgVKJ
        status: active
        display_name: 王琚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7nLDqRUiM1HQGsWK6gxVHc | 王瑞 | accepted |
| children | p_fKzK34U3bvaoYweEWJgVKJ | 王琚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 242761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242761&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 67734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67734&o=json)
