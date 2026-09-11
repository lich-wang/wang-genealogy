---
schema: wang-person/v1
id: p_wCoovt4pSzTLw9ZnGZJZzt
status: active
merged_into: null
display_name: 王名世
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sZiqinxufF6P6MLQgmtYQv
        subject_person_id: p_wCoovt4pSzTLw9ZnGZJZzt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名世
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BC6bZn8oXxUNzToUkBNbKf
          claim_id: c_sZiqinxufF6P6MLQgmtYQv
          source_id: s_gK2tC5bsczu2AfFA7fbTdN
          stance: supports
          locator: CBDB:700753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700753）
          source: &a1
            id: s_gK2tC5bsczu2AfFA7fbTdN
            source_type: api_record
            title: 中国历代人物传记资料库：王名世（CBDB 700753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700753&o=json
            external_identifier: CBDB:700753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6MKvxXh9ChoFSStjkkJY17
        subject_person_id: p_wCoovt4pSzTLw9ZnGZJZzt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王名世，明人物。籍贯錢塘，入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 700753）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fJBQXzUQGUoRaPxl67Eyj6
          claim_id: c_6MKvxXh9ChoFSStjkkJY17
          source_id: s_gK2tC5bsczu2AfFA7fbTdN
          stance: supports
          locator: CBDB:700753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Vw21GUhdtMvCig_yK4Ruzx
        subject_person_id: p_wCoovt4pSzTLw9ZnGZJZzt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c1bRD4P2CFm7Gm43GrchAK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SnTVT8dW6hfCUiXaQbZHZb
          claim_id: c_Vw21GUhdtMvCig_yK4Ruzx
          source_id: s_FgEKhjdBHxPB8rn6SGLJxy
          stance: supports
          locator: 錢塘縣志，lgid=219769：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FgEKhjdBHxPB8rn6SGLJxy
            source_type: api_record
            title: 中国历代人物传记资料库：王脩玉（CBDB 700752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700752&o=json
            external_identifier: CBDB:700752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c1bRD4P2CFm7Gm43GrchAK
        status: active
        display_name: 王脩玉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王名世

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王名世 | accepted |
| bio.summary | 王名世，明人物。籍贯錢塘，入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 700753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_c1bRD4P2CFm7Gm43GrchAK | 王脩玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王名世（CBDB 700753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700753&o=json)
- [中国历代人物传记资料库：王脩玉（CBDB 700752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700752&o=json)
