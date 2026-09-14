---
schema: wang-person/v1
id: p_JEGtxykFgdsAvLgBBdgN9F
status: active
merged_into: null
display_name: 王宏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74CLpTF3CzUkAqNT4j9xN9
        subject_person_id: p_JEGtxykFgdsAvLgBBdgN9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_71i1p36ALyQ4j1YZeYZNnv
          claim_id: c_74CLpTF3CzUkAqNT4j9xN9
          source_id: s_zfdUeauBmj1J8prPxjJAAs
          stance: supports
          locator: CBDB:238668
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238668）
          source: &a1
            id: s_zfdUeauBmj1J8prPxjJAAs
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 238668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238668&o=json
            external_identifier: CBDB:238668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_guvkbMttLVAeW7zwBjxc9a
        subject_person_id: p_JEGtxykFgdsAvLgBBdgN9F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，明人物。正统七年進士，籍贯淇縣。（中国历代人物传记资料库 CBDB 238668）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MJSP6_YZBCr780Hy4MoaAB
          claim_id: c_guvkbMttLVAeW7zwBjxc9a
          source_id: s_zfdUeauBmj1J8prPxjJAAs
          stance: supports
          locator: CBDB:238668
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SO04YBSelPGvyEkQpTvY3i
        subject_person_id: p_FDiJqJn77s6sHnYjqwgysR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JEGtxykFgdsAvLgBBdgN9F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bIksIEBXAbOC5r6cHR1MPx
          claim_id: c_SO04YBSelPGvyEkQpTvY3i
          source_id: s_A76s97hmMLdGxmJiJSe2n-
          stance: supports
          locator: CBDB：兄弟 王宣（126596）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王宏 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王宏 之父／母。
          source:
            id: s_A76s97hmMLdGxmJiJSe2n-
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 238668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238668&o=json
            external_identifier: CBDB:238668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FDiJqJn77s6sHnYjqwgysR
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0BxgqjYi2h_4PCodVfGSY2
        subject_person_id: p_JEGtxykFgdsAvLgBBdgN9F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Kr82p89DPcaLRwmJJapqo8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xJkt_veXpG6lNAeA6ynegk
          claim_id: c_0BxgqjYi2h_4PCodVfGSY2
          source_id: s_A76s97hmMLdGxmJiJSe2n-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126596 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A76s97hmMLdGxmJiJSe2n-
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 238668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238668&o=json
            external_identifier: CBDB:238668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Kr82p89DPcaLRwmJJapqo8
        status: active
        display_name: 王宣
        merged_into_person_id: null
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，明人物。正统七年進士，籍贯淇縣。（中国历代人物传记资料库 CBDB 238668） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FDiJqJn77s6sHnYjqwgysR | 王忠 | accepted |
| other | p_Kr82p89DPcaLRwmJJapqo8 | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 238668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238668&o=json)
