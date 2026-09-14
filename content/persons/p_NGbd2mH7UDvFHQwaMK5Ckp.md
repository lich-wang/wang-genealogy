---
schema: wang-person/v1
id: p_NGbd2mH7UDvFHQwaMK5Ckp
status: active
merged_into: null
display_name: 王琲
cbdb_id: 266767
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7AEReQDSiT1LKrvLwSFRCp
        subject_person_id: p_NGbd2mH7UDvFHQwaMK5Ckp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琲，明人物。弘治九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 266767）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8ot13lig6DU0Sak1CIheiO
          claim_id: c_7AEReQDSiT1LKrvLwSFRCp
          source_id: s_mfXXNL7tPnCa5H3TJgpYtU
          stance: supports
          locator: CBDB:266767
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mfXXNL7tPnCa5H3TJgpYtU
            source_type: api_record
            title: 中国历代人物传记资料库：王琲（CBDB 266767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266767&o=json
            external_identifier: CBDB:266767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yAZmrhuAktrrno3irf4dfz
        subject_person_id: p_NGbd2mH7UDvFHQwaMK5Ckp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3dGzyZ8rHZLZ2ze5wJq9DK
          claim_id: c_yAZmrhuAktrrno3irf4dfz
          source_id: s_mfXXNL7tPnCa5H3TJgpYtU
          stance: supports
          locator: CBDB:266767
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RZ2kH8hhUCcVD8irZQX5WK
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NGbd2mH7UDvFHQwaMK5Ckp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7AnxVLp1F3V18oC7SaQY3A
          claim_id: c_RZ2kH8hhUCcVD8irZQX5WK
          source_id: s_lqcLr7sdcqfD_LP7HiuXG8
          stance: supports
          locator: CBDB：兄弟 王瓚（126892）之父／母 王祚
          quotation: null
          interpretation_note: 由兄弟关系推断：王琲 与 王瓚 为同胞（CBDB 记「弟」），王瓚 之父／母即 王琲 之父／母。
          source:
            id: s_lqcLr7sdcqfD_LP7HiuXG8
            source_type: api_record
            title: 中国历代人物传记资料库：王琲（CBDB 266767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266767&o=json
            external_identifier: CBDB:266767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NkjrkfLSubJRquGWk6KTAC
        status: active
        display_name: 王祚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PxSV_FNBRZ73jFb1iZo-y4
        subject_person_id: p_NGbd2mH7UDvFHQwaMK5Ckp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pMwsjI1uowIufC6I856A_P
          claim_id: c_PxSV_FNBRZ73jFb1iZo-y4
          source_id: s_lqcLr7sdcqfD_LP7HiuXG8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126892 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lqcLr7sdcqfD_LP7HiuXG8
            source_type: api_record
            title: 中国历代人物传记资料库：王琲（CBDB 266767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266767&o=json
            external_identifier: CBDB:266767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJMiNXJSvn8avCPNUFL6Jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
---

# 王琲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琲，明人物。弘治九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 266767） | accepted |
| name.primary | 王琲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NkjrkfLSubJRquGWk6KTAC | 王祚 | accepted |
| other | p_aJMiNXJSvn8avCPNUFL6Jr | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琲（CBDB 266767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266767&o=json)
