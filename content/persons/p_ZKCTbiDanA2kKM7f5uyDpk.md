---
schema: wang-person/v1
id: p_ZKCTbiDanA2kKM7f5uyDpk
status: active
merged_into: null
display_name: 王楨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yWgHM6jEf9wx6vGLnzF3su
        subject_person_id: p_ZKCTbiDanA2kKM7f5uyDpk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u63zZKXn3trmbDVYdJfpSM
          claim_id: c_yWgHM6jEf9wx6vGLnzF3su
          source_id: s_4yQNDoJmhb6Y4pRT3uHFem
          stance: supports
          locator: CBDB:28787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28787）
          source: &a1
            id: s_4yQNDoJmhb6Y4pRT3uHFem
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 28787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28787&o=json
            external_identifier: CBDB:28787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_57C1fnufFF1Ww82P9XfsSK
        subject_person_id: p_ZKCTbiDanA2kKM7f5uyDpk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨，元人物。籍贯須城。（中国历代人物传记资料库 CBDB 28787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s1dXyiC0zb1bawL6iJa-HL
          claim_id: c_57C1fnufFF1Ww82P9XfsSK
          source_id: s_4yQNDoJmhb6Y4pRT3uHFem
          stance: supports
          locator: CBDB:28787
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5giwGTIdDAvM646dLVwRHg
        subject_person_id: p_7azhxqix4L7NzFdHMRSmU1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZKCTbiDanA2kKM7f5uyDpk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ayDSxQcN5ZIkaK0NVqogaB
          claim_id: c_5giwGTIdDAvM646dLVwRHg
          source_id: s_x1hsNOFEm_Mxs46sHz1aaS
          stance: supports
          locator: CBDB 亲属：父（KinPerson 28786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_x1hsNOFEm_Mxs46sHz1aaS
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 28787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28787&o=json
            external_identifier: CBDB:28787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7azhxqix4L7NzFdHMRSmU1
        status: active
        display_name: 王公淵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨 | accepted |
| bio.summary | 王楨，元人物。籍贯須城。（中国历代人物传记资料库 CBDB 28787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7azhxqix4L7NzFdHMRSmU1 | 王公淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楨（CBDB 28787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28787&o=json)
