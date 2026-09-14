---
schema: wang-person/v1
id: p_kYW2vP1JT4ALsCwic8833c
status: active
merged_into: null
display_name: 王洪緒
cbdb_id: 280941
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JeH5ysC4JBjYN59aQDe6ni
        subject_person_id: p_kYW2vP1JT4ALsCwic8833c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪緒，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wG0y7RGgFwUwNil3ilgGdO
          claim_id: c_JeH5ysC4JBjYN59aQDe6ni
          source_id: s_gXNmM2Z7LTkLrMrRDAp9aB
          stance: supports
          locator: CBDB:280941
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gXNmM2Z7LTkLrMrRDAp9aB
            source_type: api_record
            title: 中国历代人物传记资料库：王洪緒（CBDB 280941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280941&o=json
            external_identifier: CBDB:280941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHHAS63g6yk2nEggQgiuDn
        subject_person_id: p_kYW2vP1JT4ALsCwic8833c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_imMccfFixXSBV4NzZD6bNQ
          claim_id: c_GHHAS63g6yk2nEggQgiuDn
          source_id: s_gXNmM2Z7LTkLrMrRDAp9aB
          stance: supports
          locator: CBDB:280941
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bDPJqqV5D_Ex8aRr5_5VrL
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kYW2vP1JT4ALsCwic8833c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bKm-ioBldtQevPy6blLT5V
          claim_id: c_bDPJqqV5D_Ex8aRr5_5VrL
          source_id: s_MPVxRu588ZiYfHKQPs_-Sm
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪緒 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王洪緒 之父／母。
          source:
            id: s_MPVxRu588ZiYfHKQPs_-Sm
            source_type: api_record
            title: 中国历代人物传记资料库：王洪緒（CBDB 280941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280941&o=json
            external_identifier: CBDB:280941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E31oomNBRBVCzfypYEt5JV
        status: active
        display_name: 王嘉謀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dgoZsErwYREqupuPTn2OGW
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kYW2vP1JT4ALsCwic8833c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OjvNUW8O9_Dx8iJkwkTPs3
          claim_id: c_dgoZsErwYREqupuPTn2OGW
          source_id: s_MPVxRu588ZiYfHKQPs_-Sm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MPVxRu588ZiYfHKQPs_-Sm
            source_type: api_record
            title: 中国历代人物传记资料库：王洪緒（CBDB 280941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280941&o=json
            external_identifier: CBDB:280941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J9N7hzaFrJkzxknueiQ82Y
        status: active
        display_name: 王度
        merged_into_person_id: null
---

# 王洪緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洪緒，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280941） | accepted |
| name.primary | 王洪緒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E31oomNBRBVCzfypYEt5JV | 王嘉謀 | accepted |
| other | p_J9N7hzaFrJkzxknueiQ82Y | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪緒（CBDB 280941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280941&o=json)
