---
schema: wang-person/v1
id: p_kVCSYsdy5sn4L4NNEMKcyf
status: active
merged_into: null
display_name: 王元斌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2v1hdBzWpnoT5ZGF8sxu2i
        subject_person_id: p_kVCSYsdy5sn4L4NNEMKcyf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EJTxZ5aSv92LdTBWpyRKsC
          claim_id: c_2v1hdBzWpnoT5ZGF8sxu2i
          source_id: s_Fz7LFEgGnZe8UcDXD2pPn5
          stance: supports
          locator: CBDB:701080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701080）
          source: &a1
            id: s_Fz7LFEgGnZe8UcDXD2pPn5
            source_type: api_record
            title: 中国历代人物传记资料库：王元斌（CBDB 701080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701080&o=json
            external_identifier: CBDB:701080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.603Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y71Fwk6DgMBC58jAuRJbAp
        subject_person_id: p_kVCSYsdy5sn4L4NNEMKcyf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元斌，清人物。籍贯錢塘，身份为孝子/孝女，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 701080）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Opi6vnd3uAMxm8iwBExWiL
          claim_id: c_y71Fwk6DgMBC58jAuRJbAp
          source_id: s_Fz7LFEgGnZe8UcDXD2pPn5
          stance: supports
          locator: CBDB:701080
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_phHTwxG-2JXHeYno8S6koz
        subject_person_id: p_c1bRD4P2CFm7Gm43GrchAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kVCSYsdy5sn4L4NNEMKcyf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UxPpbFfa2pOIJJ_J1R-CES
          claim_id: c_phHTwxG-2JXHeYno8S6koz
          source_id: s_FgEKhjdBHxPB8rn6SGLJxy
          stance: supports
          locator: 錢塘縣志，lgid=219778：子
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元斌 | accepted |
| bio.summary | 王元斌，清人物。籍贯錢塘，身份为孝子/孝女，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 701080） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c1bRD4P2CFm7Gm43GrchAK | 王脩玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王脩玉（CBDB 700752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700752&o=json)
- [中国历代人物传记资料库：王元斌（CBDB 701080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701080&o=json)
