---
schema: wang-person/v1
id: p_yJ3tqFpnqrfbLB4rm5bw6h
status: active
merged_into: null
display_name: 郭氏
revision: 1
cbdb_id: 555109
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S9lQNdfuvAP7xL_EJifaLU
        subject_person_id: p_yJ3tqFpnqrfbLB4rm5bw6h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏，史料所见人物。本项目依据《中国历代人物传记资料库：郭氏(王繼祖妻)（CBDB 555109）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SJhyX8t1igJofODRfeBwET
          claim_id: c_S9lQNdfuvAP7xL_EJifaLU
          source_id: s_zRjnxWld4seaX__7SX9Rvq
          stance: supports
          locator: CBDB:555109
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zRjnxWld4seaX__7SX9Rvq
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王繼祖妻)（CBDB 555109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555109&o=json
            external_identifier: CBDB:555109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WtLkDVFrP-f97_R4x6VVEe
        subject_person_id: p_yJ3tqFpnqrfbLB4rm5bw6h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ifLYuoWD9wKT84aLWPdoGP
          claim_id: c_WtLkDVFrP-f97_R4x6VVEe
          source_id: s_zRjnxWld4seaX__7SX9Rvq
          stance: supports
          locator: CBDB:555109
          quotation: null
          interpretation_note: CBDB 明确记录的王繼祖配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_89BWMMrmx5-_wyTA3aye9y
        subject_person_id: p_nczT1Bx4gQZPAL8J9oF8s6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yJ3tqFpnqrfbLB4rm5bw6h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QlMWL3ZIKfAffZxc4pVHIJ
          claim_id: c_89BWMMrmx5-_wyTA3aye9y
          source_id: s_zRjnxWld4seaX__7SX9Rvq
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nczT1Bx4gQZPAL8J9oF8s6
        status: active
        display_name: 王繼祖
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 郭氏，史料所见人物。本项目依据《中国历代人物传记资料库：郭氏(王繼祖妻)（CBDB 555109）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 郭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_nczT1Bx4gQZPAL8J9oF8s6 | 王繼祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王繼祖妻)（CBDB 555109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555109&o=json)
