---
schema: wang-person/v1
id: p_FDiJqJn77s6sHnYjqwgysR
status: active
merged_into: null
display_name: 王忠
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FY2JAQV99e6Z9v69bEYk9Y
        subject_person_id: p_FDiJqJn77s6sHnYjqwgysR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uo5AMQYx3TBX45ks36e5jD
          claim_id: c_FY2JAQV99e6Z9v69bEYk9Y
          source_id: s_NEzzTGNyLsjQEr3xW7sFhr
          stance: supports
          locator: CBDB:238665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238665）
          source: &a1
            id: s_NEzzTGNyLsjQEr3xW7sFhr
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 238665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238665&o=json
            external_identifier: CBDB:238665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_geHn4EgDQxaWnxNwykSLDk
        subject_person_id: p_FDiJqJn77s6sHnYjqwgysR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。正统七年進士，籍贯淇縣。（中国历代人物传记资料库 CBDB 238665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_98TdsgLQg-4EzhlbBx0clJ
          claim_id: c_geHn4EgDQxaWnxNwykSLDk
          source_id: s_NEzzTGNyLsjQEr3xW7sFhr
          stance: supports
          locator: CBDB:238665
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3nGX36Yes17kzbEtJSWx8b
        subject_person_id: p_FDiJqJn77s6sHnYjqwgysR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kr82p89DPcaLRwmJJapqo8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZnoATCHQegc6GRY5OsEY3B
          claim_id: c_3nGX36Yes17kzbEtJSWx8b
          source_id: s_NEzzTGNyLsjQEr3xW7sFhr
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kr82p89DPcaLRwmJJapqo8
        status: active
        display_name: 王宣
        merged_into_person_id: null
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
        id: p_JEGtxykFgdsAvLgBBdgN9F
        status: active
        display_name: 王宏
        merged_into_person_id: null
    - claim:
        id: c_DhaGHSbDlDlwU4Blw5BKHZ
        subject_person_id: p_FDiJqJn77s6sHnYjqwgysR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wq43WpFyVyEQAXJuFqEhuS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CompI-dVZ1izmnPVIS2sNW
          claim_id: c_DhaGHSbDlDlwU4Blw5BKHZ
          source_id: s_quWzXe42IqWXWn_6TzQ10p
          stance: supports
          locator: CBDB：兄弟 王宣（126596）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王寧 之父／母。
          source:
            id: s_quWzXe42IqWXWn_6TzQ10p
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 238669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238669&o=json
            external_identifier: CBDB:238669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wq43WpFyVyEQAXJuFqEhuS
        status: active
        display_name: 王寧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。正统七年進士，籍贯淇縣。（中国历代人物传记资料库 CBDB 238665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Kr82p89DPcaLRwmJJapqo8 | 王宣 | accepted |
| children | p_JEGtxykFgdsAvLgBBdgN9F | 王宏 | accepted |
| children | p_wq43WpFyVyEQAXJuFqEhuS | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 238668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238668&o=json)
- [中国历代人物传记资料库：王寧（CBDB 238669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238669&o=json)
- [中国历代人物传记资料库：王忠（CBDB 238665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238665&o=json)
