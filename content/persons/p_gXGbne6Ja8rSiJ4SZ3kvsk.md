---
schema: wang-person/v1
id: p_gXGbne6Ja8rSiJ4SZ3kvsk
status: active
merged_into: null
display_name: 王廷器
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1s1iva6ANz5iaMWrFzeF29
        subject_person_id: p_gXGbne6Ja8rSiJ4SZ3kvsk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8sGdm6AL3e9cqGcUj4TMD2
          claim_id: c_1s1iva6ANz5iaMWrFzeF29
          source_id: s_WmgPLYnWHAVv2iJi7xK9ht
          stance: supports
          locator: CBDB:274819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274819）
          source: &a1
            id: s_WmgPLYnWHAVv2iJi7xK9ht
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 274819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274819&o=json
            external_identifier: CBDB:274819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14ek7VapHYYDt8REtaemj7
        subject_person_id: p_gXGbne6Ja8rSiJ4SZ3kvsk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷器，明人物。景泰五年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 274819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jj-1QMqfn7GozrNn__u94f
          claim_id: c_14ek7VapHYYDt8REtaemj7
          source_id: s_WmgPLYnWHAVv2iJi7xK9ht
          stance: supports
          locator: CBDB:274819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hRs_rOQwFnJGQ1IYf0c9U4
        subject_person_id: p_aR7p28hCpPSCDFnd7Y6HJL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gXGbne6Ja8rSiJ4SZ3kvsk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MHixucfONhWF0tIhoqeB2G
          claim_id: c_hRs_rOQwFnJGQ1IYf0c9U4
          source_id: s_4JaOOk3xGEEEC4wd2wNsSP
          stance: supports
          locator: CBDB：兄弟 王璘（198460）之父／母 王秉惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷器 与 王璘 为同胞（CBDB 记「弟」），王璘 之父／母即 王廷器 之父／母。
          source:
            id: s_4JaOOk3xGEEEC4wd2wNsSP
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 274819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274819&o=json
            external_identifier: CBDB:274819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aR7p28hCpPSCDFnd7Y6HJL
        status: active
        display_name: 王秉惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_A9VExO3ii_rw9koGDa6CUg
        subject_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gXGbne6Ja8rSiJ4SZ3kvsk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fpHnNZW8so5r9E5Pj6VVHq
          claim_id: c_A9VExO3ii_rw9koGDa6CUg
          source_id: s_4JaOOk3xGEEEC4wd2wNsSP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198460 王璘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4JaOOk3xGEEEC4wd2wNsSP
            source_type: api_record
            title: 中国历代人物传记资料库：王廷器（CBDB 274819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274819&o=json
            external_identifier: CBDB:274819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7tdhj3xqs6eFzthKS1AGvP
        status: active
        display_name: 王璘
        merged_into_person_id: null
---

# 王廷器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷器 | accepted |
| bio.summary | 王廷器，明人物。景泰五年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 274819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aR7p28hCpPSCDFnd7Y6HJL | 王秉惠 | accepted |
| other | p_7tdhj3xqs6eFzthKS1AGvP | 王璘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷器（CBDB 274819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274819&o=json)
