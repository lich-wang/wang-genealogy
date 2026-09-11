---
schema: wang-person/v1
id: p_y8Py4mqPRv28azcg2h36MX
status: active
merged_into: null
display_name: 王鼎仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S8RSKoteWALKE59rUKvc1z
        subject_person_id: p_y8Py4mqPRv28azcg2h36MX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Femh48HAuFtAVT6LA6nE5t
          claim_id: c_S8RSKoteWALKE59rUKvc1z
          source_id: s_ZJB93xMdqRoJY87Z9dUf78
          stance: supports
          locator: CBDB:641041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641041）
          source: &a1
            id: s_ZJB93xMdqRoJY87Z9dUf78
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎仁（CBDB 641041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641041&o=json
            external_identifier: CBDB:641041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BL7sfsmqd1CukMwiLoj6za
        subject_person_id: p_y8Py4mqPRv28azcg2h36MX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎仁，清人物。籍贯上元，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 641041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xgmgVCnoeK4dN2m2qEpn1T
          claim_id: c_BL7sfsmqd1CukMwiLoj6za
          source_id: s_ZJB93xMdqRoJY87Z9dUf78
          stance: supports
          locator: CBDB:641041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other: []
---

# 王鼎仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎仁 | accepted |
| bio.summary | 王鼎仁，清人物。籍贯上元，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 641041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎仁（CBDB 641041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641041&o=json)
