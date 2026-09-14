---
schema: wang-person/v1
id: p_9Qv4fnxmNanZo1jw1xR9XD
status: active
merged_into: null
display_name: 王好生
cbdb_id: 10130
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jo9uTMZTCRKehMYcJtHbo8
        subject_person_id: p_9Qv4fnxmNanZo1jw1xR9XD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好生，宋人物。籍贯臨海。（中国历代人物传记资料库 CBDB 10130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GOEapR1whJYBwMOTvtiN1c
          claim_id: c_jo9uTMZTCRKehMYcJtHbo8
          source_id: s_F8CD2mSNRqYENPEuqhxig4
          stance: supports
          locator: CBDB:10130
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_F8CD2mSNRqYENPEuqhxig4
            source_type: api_record
            title: 中国历代人物传记资料库：王好生（CBDB 10130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10130&o=json
            external_identifier: CBDB:10130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CRCTckrMiyzbCRrNWSrzT2
        subject_person_id: p_9Qv4fnxmNanZo1jw1xR9XD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3KvuvevZNEBh7FgaQ7PWeM
          claim_id: c_CRCTckrMiyzbCRrNWSrzT2
          source_id: s_F8CD2mSNRqYENPEuqhxig4
          stance: supports
          locator: CBDB:10130
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jOcd2liXXuZFmAuQFZQ9AL
        subject_person_id: p_mHn5jwES88buhNttuppCPJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Qv4fnxmNanZo1jw1xR9XD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e2ykVQHcSUwPNcQqO2NYoY
          claim_id: c_jOcd2liXXuZFmAuQFZQ9AL
          source_id: s_mLSKuuZQCiyJtEOepe0qFp
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10127）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_mLSKuuZQCiyJtEOepe0qFp
            source_type: api_record
            title: 中国历代人物传记资料库：王好生（CBDB 10130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10130&o=json
            external_identifier: CBDB:10130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mHn5jwES88buhNttuppCPJ
        status: active
        display_name: 王卿月
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EXIPLIISzivsyByY9Dg_3P
        subject_person_id: p_9Qv4fnxmNanZo1jw1xR9XD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y6iMagGLVNis6PzvwJdQia
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-6SOn2EFW7BMlLFAz4cBb
          claim_id: c_EXIPLIISzivsyByY9Dg_3P
          source_id: s_mLSKuuZQCiyJtEOepe0qFp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10128 王好謙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mLSKuuZQCiyJtEOepe0qFp
            source_type: api_record
            title: 中国历代人物传记资料库：王好生（CBDB 10130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10130&o=json
            external_identifier: CBDB:10130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y6iMagGLVNis6PzvwJdQia
        status: active
        display_name: 王好謙
        merged_into_person_id: null
    - claim:
        id: c_GCmdIZruvH74Jnb8pSN2zi
        subject_person_id: p_9Qv4fnxmNanZo1jw1xR9XD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z2PJv9RdHTQmQPattazjJc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6dJ_2xeRDHRZnSwwQsX_gq
          claim_id: c_GCmdIZruvH74Jnb8pSN2zi
          source_id: s_mLSKuuZQCiyJtEOepe0qFp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10129 王好問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mLSKuuZQCiyJtEOepe0qFp
            source_type: api_record
            title: 中国历代人物传记资料库：王好生（CBDB 10130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10130&o=json
            external_identifier: CBDB:10130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z2PJv9RdHTQmQPattazjJc
        status: active
        display_name: 王好問
        merged_into_person_id: null
---

# 王好生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王好生，宋人物。籍贯臨海。（中国历代人物传记资料库 CBDB 10130） | accepted |
| name.primary | 王好生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mHn5jwES88buhNttuppCPJ | 王卿月 | accepted |
| other | p_Y6iMagGLVNis6PzvwJdQia | 王好謙 | accepted |
| other | p_z2PJv9RdHTQmQPattazjJc | 王好問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王好生（CBDB 10130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10130&o=json)
