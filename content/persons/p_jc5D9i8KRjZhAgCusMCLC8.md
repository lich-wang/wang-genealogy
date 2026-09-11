---
schema: wang-person/v1
id: p_jc5D9i8KRjZhAgCusMCLC8
status: active
merged_into: null
display_name: 王暠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FXNDzdJ91BujwUNB4NNEoA
        subject_person_id: p_jc5D9i8KRjZhAgCusMCLC8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NtHgKxF2mE7BDLraJGLH1X
          claim_id: c_FXNDzdJ91BujwUNB4NNEoA
          source_id: s_4jetYRjRZos1oSyGK8B1x6
          stance: supports
          locator: CBDB:155485
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155485）
          source: &a1
            id: s_4jetYRjRZos1oSyGK8B1x6
            source_type: api_record
            title: 中国历代人物传记资料库：王暠（CBDB 155485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155485&o=json
            external_identifier: CBDB:155485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vfdfXK1GxyfZYfzy9nDcr8
        subject_person_id: p_jc5D9i8KRjZhAgCusMCLC8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5fnjSgf4QEgEyA2xXAMd5k
          claim_id: c_vfdfXK1GxyfZYfzy9nDcr8
          source_id: s_4jetYRjRZos1oSyGK8B1x6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Tir1nLY85QmsnAK7qk5veG
        subject_person_id: p_jc5D9i8KRjZhAgCusMCLC8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dW2Y9fcQkf4j5aMn8SBkL4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2oc6ggR5tpsUbsmEKce7u0
          claim_id: c_Tir1nLY85QmsnAK7qk5veG
          source_id: s_rJgABCHNJnJkpEWjYqbxrA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rJgABCHNJnJkpEWjYqbxrA
            source_type: api_record
            title: 中国历代人物传记资料库：王釴（CBDB 155486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155486&o=json
            external_identifier: CBDB:155486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dW2Y9fcQkf4j5aMn8SBkL4
        status: active
        display_name: 王釴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王暠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暠 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dW2Y9fcQkf4j5aMn8SBkL4 | 王釴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暠（CBDB 155485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155485&o=json)
- [中国历代人物传记资料库：王釴（CBDB 155486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155486&o=json)
