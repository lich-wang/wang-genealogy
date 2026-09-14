---
schema: wang-person/v1
id: p_c1bRD4P2CFm7Gm43GrchAK
status: active
merged_into: null
display_name: 王脩玉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tqcKXuuBy19DPaLm5Upan9
        subject_person_id: p_c1bRD4P2CFm7Gm43GrchAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dv9uXBwQbRVQQCpd2vFw8h
          claim_id: c_tqcKXuuBy19DPaLm5Upan9
          source_id: s_FgEKhjdBHxPB8rn6SGLJxy
          stance: supports
          locator: CBDB:700752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700752）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jnjX8nG5rjC1Y4XyfNEWMJ
        subject_person_id: p_c1bRD4P2CFm7Gm43GrchAK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩玉，清人物。籍贯錢塘，身份为詩人、孝子/孝女，入仕廩生。（中国历代人物传记资料库 CBDB 700752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YHC-LJ_A4j9xIEYLez393G
          claim_id: c_jnjX8nG5rjC1Y4XyfNEWMJ
          source_id: s_FgEKhjdBHxPB8rn6SGLJxy
          stance: supports
          locator: CBDB:700752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_wCoovt4pSzTLw9ZnGZJZzt
        status: active
        display_name: 王名世
        merged_into_person_id: null
  children:
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
          source: *a1
      object_person:
        id: p_kVCSYsdy5sn4L4NNEMKcyf
        status: active
        display_name: 王元斌
        merged_into_person_id: null
    - claim:
        id: c_VjKT4-PXq7uOl6oOPVv4r9
        subject_person_id: p_c1bRD4P2CFm7Gm43GrchAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSBYNf67v8rpKrgTycu8xZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pQMugm2DGQXhxmAnyNIiBY
          claim_id: c_VjKT4-PXq7uOl6oOPVv4r9
          source_id: s_0ChDSJSWGHW13w-OXN1QQA
          stance: supports
          locator: CBDB：兄弟 王元斌（701080）之父／母 王脩玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王元穉 与 王元斌 为同胞（CBDB 记「兄」），王元斌 之父／母即 王元穉 之父／母。
          source:
            id: s_0ChDSJSWGHW13w-OXN1QQA
            source_type: api_record
            title: 中国历代人物传记资料库：王元穉（CBDB 341786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341786&o=json
            external_identifier: CBDB:341786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LSBYNf67v8rpKrgTycu8xZ
        status: active
        display_name: 王元穉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王脩玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王脩玉 | accepted |
| bio.summary | 王脩玉，清人物。籍贯錢塘，身份为詩人、孝子/孝女，入仕廩生。（中国历代人物传记资料库 CBDB 700752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wCoovt4pSzTLw9ZnGZJZzt | 王名世 | accepted |
| children | p_kVCSYsdy5sn4L4NNEMKcyf | 王元斌 | accepted |
| children | p_LSBYNf67v8rpKrgTycu8xZ | 王元穉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王脩玉（CBDB 700752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700752&o=json)
- [中国历代人物传记资料库：王元穉（CBDB 341786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341786&o=json)
