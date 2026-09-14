---
schema: wang-person/v1
id: p_nAUNQxetZCDDk4ZynrR94s
status: active
merged_into: null
display_name: 王鍈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fzj5CQ9bzMwCgy32a4gcKv
        subject_person_id: p_nAUNQxetZCDDk4ZynrR94s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gnUyGHLNxDmLfMoK2B6jmq
          claim_id: c_fzj5CQ9bzMwCgy32a4gcKv
          source_id: s_f48amK4T5wDdA45SNPP49P
          stance: supports
          locator: CBDB:247845
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247845）
          source: &a1
            id: s_f48amK4T5wDdA45SNPP49P
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 247845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247845&o=json
            external_identifier: CBDB:247845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eiHEKSxG4JmGaa7sdK7fd9
        subject_person_id: p_nAUNQxetZCDDk4ZynrR94s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍈，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247845）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DYDQCgVNGKYS3ZHWLtG3Pi
          claim_id: c_eiHEKSxG4JmGaa7sdK7fd9
          source_id: s_f48amK4T5wDdA45SNPP49P
          stance: supports
          locator: CBDB:247845
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fDbw5jVYOHHwMyre7rRbXB
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nAUNQxetZCDDk4ZynrR94s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GTzsavE-B2jAp0QzZ7ypn0
          claim_id: c_fDbw5jVYOHHwMyre7rRbXB
          source_id: s_GFb1mNCXQgiEL1XlY8AHkH
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍈 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王鍈 之父／母。
          source:
            id: s_GFb1mNCXQgiEL1XlY8AHkH
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 247845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247845&o=json
            external_identifier: CBDB:247845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyKQYKFYiRFh2ZMNQQhCtN
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_D8bSs1sSYwTi1s-AYaX_5N
        subject_person_id: p_ZjuF9BMneyLuUjQuike359
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nAUNQxetZCDDk4ZynrR94s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JOKHAI1UnUb9dUNaU1mVzn
          claim_id: c_D8bSs1sSYwTi1s-AYaX_5N
          source_id: s_GFb1mNCXQgiEL1XlY8AHkH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GFb1mNCXQgiEL1XlY8AHkH
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 247845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247845&o=json
            external_identifier: CBDB:247845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
---

# 王鍈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍈 | accepted |
| bio.summary | 王鍈，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247845） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyKQYKFYiRFh2ZMNQQhCtN | 王鼎 | accepted |
| other | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍈（CBDB 247845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247845&o=json)
