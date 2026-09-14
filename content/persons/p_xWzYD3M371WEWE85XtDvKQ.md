---
schema: wang-person/v1
id: p_xWzYD3M371WEWE85XtDvKQ
status: active
merged_into: null
display_name: 王顗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9pW9Pj94WXGJiycUtHbaqy
        subject_person_id: p_xWzYD3M371WEWE85XtDvKQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZJz761Nq5idk2FgBGaL2Vk
          claim_id: c_9pW9Pj94WXGJiycUtHbaqy
          source_id: s_uwZDQT7cAzqe1DLLP7hAEK
          stance: supports
          locator: CBDB:19224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19224）
          source: &a1
            id: s_uwZDQT7cAzqe1DLLP7hAEK
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 19224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19224&o=json
            external_identifier: CBDB:19224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9nLZz5AvsKE97wS3CEX5E4
        subject_person_id: p_xWzYD3M371WEWE85XtDvKQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顗，宋人物。籍贯青神，入仕進士。（中国历代人物传记资料库 CBDB 19224）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TlehnEAX7MamOTj5Xdgvwe
          claim_id: c_9nLZz5AvsKE97wS3CEX5E4
          source_id: s_uwZDQT7cAzqe1DLLP7hAEK
          stance: supports
          locator: CBDB:19224
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CTgVNAKzQJpzLdag2P30cx
        subject_person_id: p_MeFZQEb7d1NDXAkETnNC7B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xWzYD3M371WEWE85XtDvKQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jWJnBFW4OV2dagc7PqZBQ0
          claim_id: c_CTgVNAKzQJpzLdag2P30cx
          source_id: s_HbLkesrWiHh50p0XDMgPKr
          stance: supports
          locator: CBDB 亲属：父（KinPerson 19221）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_HbLkesrWiHh50p0XDMgPKr
            source_type: api_record
            title: 中国历代人物传记资料库：王顗（CBDB 19224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19224&o=json
            external_identifier: CBDB:19224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MeFZQEb7d1NDXAkETnNC7B
        status: active
        display_name: 王東美
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王顗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顗 | accepted |
| bio.summary | 王顗，宋人物。籍贯青神，入仕進士。（中国历代人物传记资料库 CBDB 19224） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MeFZQEb7d1NDXAkETnNC7B | 王東美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王顗（CBDB 19224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19224&o=json)
