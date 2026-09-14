---
schema: wang-person/v1
id: p_BhbAU3WR9UHqtoFuXW7bEE
status: active
merged_into: null
display_name: 王芝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YtFBPZLEgn1LCKi3JEnDnv
        subject_person_id: p_BhbAU3WR9UHqtoFuXW7bEE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r8ozjCKb8tJ9jR9RKhsmHT
          claim_id: c_YtFBPZLEgn1LCKi3JEnDnv
          source_id: s_UEa1vt7tCH3VgCck4KDmmW
          stance: supports
          locator: CBDB:318412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318412）
          source: &a1
            id: s_UEa1vt7tCH3VgCck4KDmmW
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 318412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318412&o=json
            external_identifier: CBDB:318412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TNCuQxfn7NDKfupaVfLGPZ
        subject_person_id: p_BhbAU3WR9UHqtoFuXW7bEE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝，明人物。嘉靖三十二年進士，籍贯高陵。（中国历代人物传记资料库 CBDB 318412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YfWa2OBu_ywKgGStGPouGC
          claim_id: c_TNCuQxfn7NDKfupaVfLGPZ
          source_id: s_UEa1vt7tCH3VgCck4KDmmW
          stance: supports
          locator: CBDB:318412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2mVLeubeiJ0D5XypRWrDcE
        subject_person_id: p_JMTBrHHf3Ax27PTfG4rkZA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BhbAU3WR9UHqtoFuXW7bEE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jfavuGLgCd6VAGaFomachm
          claim_id: c_2mVLeubeiJ0D5XypRWrDcE
          source_id: s_e4XcdWvkfJmAbq2oktlzTw
          stance: supports
          locator: CBDB：兄弟 王業（204388）之父／母 王仲仁
          quotation: null
          interpretation_note: 由兄弟关系推断：王芝 与 王業 为同胞（CBDB 记「兄」），王業 之父／母即 王芝 之父／母。
          source:
            id: s_e4XcdWvkfJmAbq2oktlzTw
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 318412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318412&o=json
            external_identifier: CBDB:318412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JMTBrHHf3Ax27PTfG4rkZA
        status: active
        display_name: 王仲仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DyYShJaUTGy0GgUUBB4en7
        subject_person_id: p_7ZDTot2mHCYEpXe9YLwZZs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BhbAU3WR9UHqtoFuXW7bEE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4I8N-4Wb83elGbiMO8ldP
          claim_id: c_DyYShJaUTGy0GgUUBB4en7
          source_id: s_e4XcdWvkfJmAbq2oktlzTw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204388 王業）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e4XcdWvkfJmAbq2oktlzTw
            source_type: api_record
            title: 中国历代人物传记资料库：王芝（CBDB 318412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318412&o=json
            external_identifier: CBDB:318412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7ZDTot2mHCYEpXe9YLwZZs
        status: active
        display_name: 王業
        merged_into_person_id: null
---

# 王芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芝 | accepted |
| bio.summary | 王芝，明人物。嘉靖三十二年進士，籍贯高陵。（中国历代人物传记资料库 CBDB 318412） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JMTBrHHf3Ax27PTfG4rkZA | 王仲仁 | accepted |
| other | p_7ZDTot2mHCYEpXe9YLwZZs | 王業 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芝（CBDB 318412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318412&o=json)
