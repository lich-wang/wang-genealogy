---
schema: wang-person/v1
id: p_W7MvwLJztb6yUptHTZ9M5C
status: active
merged_into: null
display_name: 王崇仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qv9w7nTEuh32y5RZqFA575
        subject_person_id: p_W7MvwLJztb6yUptHTZ9M5C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9htCRDfTcb8ZaidfKeUkj5
          claim_id: c_qv9w7nTEuh32y5RZqFA575
          source_id: s_MiuTh8FWgd4eM56DN1JHFN
          stance: supports
          locator: CBDB:296445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296445）
          source: &a1
            id: s_MiuTh8FWgd4eM56DN1JHFN
            source_type: api_record
            title: 中国历代人物传记资料库：王崇仁（CBDB 296445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296445&o=json
            external_identifier: CBDB:296445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uG1wj53aBqaoEMwxjoC5V3
        subject_person_id: p_W7MvwLJztb6yUptHTZ9M5C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇仁，明人物。嘉靖十四年進士，籍贯榆次。（中国历代人物传记资料库 CBDB 296445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_meUR3hAWUVP-RyeEG3yGWn
          claim_id: c_uG1wj53aBqaoEMwxjoC5V3
          source_id: s_MiuTh8FWgd4eM56DN1JHFN
          stance: supports
          locator: CBDB:296445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TCIOPSo1g7dmWwUmvt7Xg-
        subject_person_id: p_WKi2gp1aMEpd772NtPQKTC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W7MvwLJztb6yUptHTZ9M5C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cbr3AdN312Mt40rHTokcP3
          claim_id: c_TCIOPSo1g7dmWwUmvt7Xg-
          source_id: s_llbhEyibraqSkEMLO7_uLV
          stance: supports
          locator: CBDB：兄弟 王崇冠（202901）之父／母 王明
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇仁 与 王崇冠 为同胞（CBDB 记「弟」），王崇冠 之父／母即 王崇仁 之父／母。
          source:
            id: s_llbhEyibraqSkEMLO7_uLV
            source_type: api_record
            title: 中国历代人物传记资料库：王崇仁（CBDB 296445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296445&o=json
            external_identifier: CBDB:296445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WKi2gp1aMEpd772NtPQKTC
        status: active
        display_name: 王明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XDbL2N5dsY8q1MOZh4j_JD
        subject_person_id: p_RQeyyQ8v759GU56Ye8JJst
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W7MvwLJztb6yUptHTZ9M5C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o4HCM_414nFuFlH4v6pAaa
          claim_id: c_XDbL2N5dsY8q1MOZh4j_JD
          source_id: s_llbhEyibraqSkEMLO7_uLV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202901 王崇冠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_llbhEyibraqSkEMLO7_uLV
            source_type: api_record
            title: 中国历代人物传记资料库：王崇仁（CBDB 296445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296445&o=json
            external_identifier: CBDB:296445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQeyyQ8v759GU56Ye8JJst
        status: active
        display_name: 王崇冠
        merged_into_person_id: null
---

# 王崇仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇仁 | accepted |
| bio.summary | 王崇仁，明人物。嘉靖十四年進士，籍贯榆次。（中国历代人物传记资料库 CBDB 296445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WKi2gp1aMEpd772NtPQKTC | 王明 | accepted |
| other | p_RQeyyQ8v759GU56Ye8JJst | 王崇冠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇仁（CBDB 296445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296445&o=json)
