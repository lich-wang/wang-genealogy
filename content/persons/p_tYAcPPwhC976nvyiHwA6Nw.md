---
schema: wang-person/v1
id: p_tYAcPPwhC976nvyiHwA6Nw
status: active
merged_into: null
display_name: 王孟暉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3rYrimHaCPFvdWGzDGUjvj
        subject_person_id: p_tYAcPPwhC976nvyiHwA6Nw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟暉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ffffRpcgCW1exj4TieANA
          claim_id: c_3rYrimHaCPFvdWGzDGUjvj
          source_id: s_vZpvHf88fcR5yxrMw64Gzu
          stance: supports
          locator: CBDB:228578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228578）
          source: &a1
            id: s_vZpvHf88fcR5yxrMw64Gzu
            source_type: api_record
            title: 中国历代人物传记资料库：王孟暉（CBDB 228578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228578&o=json
            external_identifier: CBDB:228578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cuW8PfGq2JaTpqkDynbt8K
        subject_person_id: p_tYAcPPwhC976nvyiHwA6Nw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟暉，明人物。萬曆丙戌科進士進士，籍贯安邱，入仕廩生。（中国历代人物传记资料库 CBDB 228578）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_15jWa46F8pLzcBLdPv64s7
          claim_id: c_cuW8PfGq2JaTpqkDynbt8K
          source_id: s_vZpvHf88fcR5yxrMw64Gzu
          stance: supports
          locator: CBDB:228578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uRowp0nWgy1Su5fQBuD2xz
        subject_person_id: p_xAnhmoVcnedrkYag8SmuS8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tYAcPPwhC976nvyiHwA6Nw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__QxApGHtltUOUOXqP8OVny
          claim_id: c_uRowp0nWgy1Su5fQBuD2xz
          source_id: s_iFsv8Tpt3dYsYjRRy6MfEL
          stance: supports
          locator: CBDB：兄弟 王孟煦（207153）之父／母 王士瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟暉 与 王孟煦 为同胞（CBDB 记「弟」），王孟煦 之父／母即 王孟暉 之父／母。
          source:
            id: s_iFsv8Tpt3dYsYjRRy6MfEL
            source_type: api_record
            title: 中国历代人物传记资料库：王孟暉（CBDB 228578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228578&o=json
            external_identifier: CBDB:228578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xAnhmoVcnedrkYag8SmuS8
        status: active
        display_name: 王士瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GdVD2kXkb4es4kVn8bgwPT
        subject_person_id: p_Z1sXa1thNM94WHiooGYHug
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tYAcPPwhC976nvyiHwA6Nw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cssWCFuxTRLlwj74VsLz31
          claim_id: c_GdVD2kXkb4es4kVn8bgwPT
          source_id: s_iFsv8Tpt3dYsYjRRy6MfEL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207153 王孟煦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iFsv8Tpt3dYsYjRRy6MfEL
            source_type: api_record
            title: 中国历代人物传记资料库：王孟暉（CBDB 228578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228578&o=json
            external_identifier: CBDB:228578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z1sXa1thNM94WHiooGYHug
        status: active
        display_name: 王孟煦
        merged_into_person_id: null
---

# 王孟暉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟暉 | accepted |
| bio.summary | 王孟暉，明人物。萬曆丙戌科進士進士，籍贯安邱，入仕廩生。（中国历代人物传记资料库 CBDB 228578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xAnhmoVcnedrkYag8SmuS8 | 王士瑤 | accepted |
| other | p_Z1sXa1thNM94WHiooGYHug | 王孟煦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟暉（CBDB 228578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228578&o=json)
