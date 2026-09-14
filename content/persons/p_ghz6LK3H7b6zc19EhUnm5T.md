---
schema: wang-person/v1
id: p_ghz6LK3H7b6zc19EhUnm5T
status: active
merged_into: null
display_name: 王世傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BPcepGP57mwAyhSbBca3FJ
        subject_person_id: p_ghz6LK3H7b6zc19EhUnm5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YFm1PgMFCbvdsc4RFqtprd
          claim_id: c_BPcepGP57mwAyhSbBca3FJ
          source_id: s_Joh8KF8mhajLQfDsZ4LkFF
          stance: supports
          locator: CBDB:56706
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56706）
          source: &a1
            id: s_Joh8KF8mhajLQfDsZ4LkFF
            source_type: api_record
            title: 中国历代人物传记资料库：王世傑（CBDB 56706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56706&o=json
            external_identifier: CBDB:56706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mA1aFrWp6iMDxKcaSEKiFU
        subject_person_id: p_ghz6LK3H7b6zc19EhUnm5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑，史料所见人物。本项目依据《中国历代人物传记资料库：王世傑（CBDB 56706）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YItWV6Re2vQpQ2ES9azLmu
          claim_id: c_mA1aFrWp6iMDxKcaSEKiFU
          source_id: s_Joh8KF8mhajLQfDsZ4LkFF
          stance: supports
          locator: CBDB:56706
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  descendants: []
  other:
    - claim:
        id: c_B4DA4BzV40bgnttP_pEswp
        subject_person_id: p_TysZYAL243LGEd1gAUSbh6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghz6LK3H7b6zc19EhUnm5T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_icwKZTpDsXFtvvULk50LRI
          claim_id: c_B4DA4BzV40bgnttP_pEswp
          source_id: s_NEzhykC7MipqeRHATYol8o
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 56706 王世傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NEzhykC7MipqeRHATYol8o
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾（CBDB 133849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133849&o=json
            external_identifier: CBDB:133849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TysZYAL243LGEd1gAUSbh6
        status: active
        display_name: 王瑾
        merged_into_person_id: null
---

# 王世傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世傑 | accepted |
| bio.summary | 王世傑，史料所见人物。本项目依据《中国历代人物传记资料库：王世傑（CBDB 56706）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_TysZYAL243LGEd1gAUSbh6 | 王瑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑾（CBDB 133849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133849&o=json)
- [中国历代人物传记资料库：王世傑（CBDB 56706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56706&o=json)
