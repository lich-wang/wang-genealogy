---
schema: wang-person/v1
id: p_kipnbgKAQxDFwKijYNoqua
status: active
merged_into: null
display_name: 王寔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5q1TRS4caAmgXf1QcTJG3k
        subject_person_id: p_kipnbgKAQxDFwKijYNoqua
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mkSYo1AzG3hTKLgZ1eQ9br
          claim_id: c_5q1TRS4caAmgXf1QcTJG3k
          source_id: s_w6P1GCQMGLhPLj4NoiDE8B
          stance: supports
          locator: CBDB:22124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22124）
          source: &a1
            id: s_w6P1GCQMGLhPLj4NoiDE8B
            source_type: api_record
            title: 中国历代人物传记资料库：王寔（CBDB 22124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22124&o=json
            external_identifier: CBDB:22124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Te8qEcmU727Z8kR6HoCdsu
        subject_person_id: p_kipnbgKAQxDFwKijYNoqua
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寔，宋人物。籍贯潁昌府，入仕薦舉 (保任,保舉)，曾任籍田司令。（中国历代人物传记资料库 CBDB 22124）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4cztlKK957XHbDIjzKqeXN
          claim_id: c_Te8qEcmU727Z8kR6HoCdsu
          source_id: s_w6P1GCQMGLhPLj4NoiDE8B
          stance: supports
          locator: CBDB:22124
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nt90rst9BA3asRX_b59NQE
        subject_person_id: p_RV7rHymbjAuMVkCqKsJaax
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kipnbgKAQxDFwKijYNoqua
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tNYNLGMNhg6eFGE628t_XY
          claim_id: c_nt90rst9BA3asRX_b59NQE
          source_id: s_OsAqRirv7XfeL64dyR-uyV
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22123）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_OsAqRirv7XfeL64dyR-uyV
            source_type: api_record
            title: 中国历代人物传记资料库：王寔（CBDB 22124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22124&o=json
            external_identifier: CBDB:22124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RV7rHymbjAuMVkCqKsJaax
        status: active
        display_name: 王陶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寔 | accepted |
| bio.summary | 王寔，宋人物。籍贯潁昌府，入仕薦舉 (保任,保舉)，曾任籍田司令。（中国历代人物传记资料库 CBDB 22124） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RV7rHymbjAuMVkCqKsJaax | 王陶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寔（CBDB 22124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22124&o=json)
