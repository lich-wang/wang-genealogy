---
schema: wang-person/v1
id: p_XuQqYyCT3CcPuEr7EZ5EGu
status: active
merged_into: null
display_name: 王敬從
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3G48ursD9jTckY1DqoUC2Q
        subject_person_id: p_XuQqYyCT3CcPuEr7EZ5EGu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬從
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ekyexYSQSGjc46ikwCeoKW
          claim_id: c_3G48ursD9jTckY1DqoUC2Q
          source_id: s_XTBgFZp2j2Q7XgFd7TLNv4
          stance: supports
          locator: CBDB:145257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145257）
          source: &a1
            id: s_XTBgFZp2j2Q7XgFd7TLNv4
            source_type: api_record
            title: 中国历代人物传记资料库：王敬從（CBDB 145257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145257&o=json
            external_identifier: CBDB:145257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LmfPQniW7iQ17YkVMR41kq
        subject_person_id: p_XuQqYyCT3CcPuEr7EZ5EGu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 679年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2u9QSAtoey8xs1qTnjH3sh
          claim_id: c_LmfPQniW7iQ17YkVMR41kq
          source_id: s_XTBgFZp2j2Q7XgFd7TLNv4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fhVgYABkbskiMHKHFRouBN
        subject_person_id: p_XuQqYyCT3CcPuEr7EZ5EGu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 740年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HmcjAH1yVr541b1Hi1zK5d
          claim_id: c_fhVgYABkbskiMHKHFRouBN
          source_id: s_XTBgFZp2j2Q7XgFd7TLNv4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_efDxkME3j8FcX3n96pzBcc
        subject_person_id: p_XuQqYyCT3CcPuEr7EZ5EGu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sEHGR3DBtHV6mb9yohjJa5
          claim_id: c_efDxkME3j8FcX3n96pzBcc
          source_id: s_XTBgFZp2j2Q7XgFd7TLNv4
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
        id: c_x7-qIJ4d6qwCfCxVzljPTm
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XuQqYyCT3CcPuEr7EZ5EGu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2siIZTzH_ZgmW4Wxjkjajk
          claim_id: c_x7-qIJ4d6qwCfCxVzljPTm
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9wQqFz1g9NPy4Aq7kAejE
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 175940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json
            external_identifier: CBDB:175940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WG4LcJdg2iBTqvpZQpDp9o
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬從

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬從 | accepted |
| birth.date | 679年 | accepted |
| death.date | 740年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WG4LcJdg2iBTqvpZQpDp9o | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬從（CBDB 145257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145257&o=json)
- [中国历代人物传记资料库：王慶（CBDB 175940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json)
