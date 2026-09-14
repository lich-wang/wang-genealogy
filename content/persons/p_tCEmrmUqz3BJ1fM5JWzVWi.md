---
schema: wang-person/v1
id: p_tCEmrmUqz3BJ1fM5JWzVWi
status: active
merged_into: null
display_name: 王澧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wSQ5jt626EFCPT7XNp1WTw
        subject_person_id: p_tCEmrmUqz3BJ1fM5JWzVWi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3qfLGsLCdrSRzUmVwi69NM
          claim_id: c_wSQ5jt626EFCPT7XNp1WTw
          source_id: s_a67JsJTfeAQ3GzUFUgDBnn
          stance: supports
          locator: CBDB:237498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237498）
          source: &a1
            id: s_a67JsJTfeAQ3GzUFUgDBnn
            source_type: api_record
            title: 中国历代人物传记资料库：王澧（CBDB 237498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237498&o=json
            external_identifier: CBDB:237498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GiQexApZhGTYiMxiWtCJ5R
        subject_person_id: p_tCEmrmUqz3BJ1fM5JWzVWi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澧，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__nPd06CZx22uuwN7SCpWlT
          claim_id: c_GiQexApZhGTYiMxiWtCJ5R
          source_id: s_a67JsJTfeAQ3GzUFUgDBnn
          stance: supports
          locator: CBDB:237498
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x7Acnr2IzBwbrSIRvhzvmk
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tCEmrmUqz3BJ1fM5JWzVWi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3lJKPC61KEgJxe-k5e2GTl
          claim_id: c_x7Acnr2IzBwbrSIRvhzvmk
          source_id: s_NU3OlvqBXQnuvD-Hujd8ji
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王澧 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王澧 之父／母。
          source:
            id: s_NU3OlvqBXQnuvD-Hujd8ji
            source_type: api_record
            title: 中国历代人物传记资料库：王澧（CBDB 237498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237498&o=json
            external_identifier: CBDB:237498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lj8WT4nJBhsqQXhWW65SRH
        status: active
        display_name: 王志善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bP63twTXqtN7d9vNw5Xnpm
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tCEmrmUqz3BJ1fM5JWzVWi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bcKsdz1IpD-nC-u2BytiWt
          claim_id: c_bP63twTXqtN7d9vNw5Xnpm
          source_id: s_NU3OlvqBXQnuvD-Hujd8ji
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NU3OlvqBXQnuvD-Hujd8ji
            source_type: api_record
            title: 中国历代人物传记资料库：王澧（CBDB 237498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237498&o=json
            external_identifier: CBDB:237498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V99Mmn5gsgVZ4CwJWSpRRc
        status: active
        display_name: 王賓
        merged_into_person_id: null
---

# 王澧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澧 | accepted |
| bio.summary | 王澧，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lj8WT4nJBhsqQXhWW65SRH | 王志善 | accepted |
| other | p_V99Mmn5gsgVZ4CwJWSpRRc | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澧（CBDB 237498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237498&o=json)
