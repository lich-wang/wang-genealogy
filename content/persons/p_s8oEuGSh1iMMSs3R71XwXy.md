---
schema: wang-person/v1
id: p_s8oEuGSh1iMMSs3R71XwXy
status: active
merged_into: null
display_name: 王弘太
cbdb_id: 160794
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ey3eCJL2PUnjtgficAaBcq
        subject_person_id: p_s8oEuGSh1iMMSs3R71XwXy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘太，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160794 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vBeNaLQ-13wyO-5fJfKSKX
          claim_id: c_Ey3eCJL2PUnjtgficAaBcq
          source_id: s_DF5B9216aE2LNFuPDhCZxg
          stance: supports
          locator: CBDB:160794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DF5B9216aE2LNFuPDhCZxg
            source_type: api_record
            title: 中国历代人物传记资料库：王弘太（CBDB 160794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160794&o=json
            external_identifier: CBDB:160794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sg3P7L3b2egb8uko1cegyQ
        subject_person_id: p_s8oEuGSh1iMMSs3R71XwXy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘太
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JfcJc9PQXD9cGRwH4K751H
          claim_id: c_sg3P7L3b2egb8uko1cegyQ
          source_id: s_DF5B9216aE2LNFuPDhCZxg
          stance: supports
          locator: CBDB:160794
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_DF5B9216aE2LNFuPDhCZxg
            source_type: api_record
            title: 中国历代人物传记资料库：王弘太（CBDB 160794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160794&o=json
            external_identifier: CBDB:160794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eyMetWRHnCF5BOM44WrJ4X
        subject_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s8oEuGSh1iMMSs3R71XwXy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DdahAAoqzsk1uA5IQBJ2X
          claim_id: c_eyMetWRHnCF5BOM44WrJ4X
          source_id: s_DF5B9216aE2LNFuPDhCZxg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 83：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X3KgUwftEJuFzG5Sp9xV61
        status: active
        display_name: 王公晟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘太

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘太，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160794 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王弘太 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X3KgUwftEJuFzG5Sp9xV61 | 王公晟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘太（CBDB 160794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160794&o=json)
