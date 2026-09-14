---
schema: wang-person/v1
id: p_QRnnDR27ftNKQGRE1MogD3
status: active
merged_into: null
display_name: 王堪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4mjXzVGn12oeMHDZ6xrbjW
        subject_person_id: p_QRnnDR27ftNKQGRE1MogD3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BuBYrNKZbKjjYPeEZoCvCt
          claim_id: c_4mjXzVGn12oeMHDZ6xrbjW
          source_id: s_v8iTRKxvPRZd7hyyxCqoZh
          stance: supports
          locator: CBDB:329629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329629）
          source: &a1
            id: s_v8iTRKxvPRZd7hyyxCqoZh
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 329629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329629&o=json
            external_identifier: CBDB:329629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_et4jsK5chQAJ3VGkPfWAbe
        subject_person_id: p_QRnnDR27ftNKQGRE1MogD3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堪，明人物。嘉靖四十四年進士，籍贯登州府。（中国历代人物传记资料库 CBDB 329629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gMyKTyJXkRovqTVlf-TBF1
          claim_id: c_et4jsK5chQAJ3VGkPfWAbe
          source_id: s_v8iTRKxvPRZd7hyyxCqoZh
          stance: supports
          locator: CBDB:329629
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AbmwUAlUdy_bC-A_73oe8S
        subject_person_id: p_6sYWcb482zJ4XWUwwNYJRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QRnnDR27ftNKQGRE1MogD3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EK10vYa-wa-9_v3K297et8
          claim_id: c_AbmwUAlUdy_bC-A_73oe8S
          source_id: s_W2G6bqKZbH-HIA2ciHEOVD
          stance: supports
          locator: CBDB：兄弟 王基（126676）之父／母 王士先
          quotation: null
          interpretation_note: 由兄弟关系推断：王堪 与 王基 为同胞（CBDB 记「兄」），王基 之父／母即 王堪 之父／母。
          source:
            id: s_W2G6bqKZbH-HIA2ciHEOVD
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 329629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329629&o=json
            external_identifier: CBDB:329629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6sYWcb482zJ4XWUwwNYJRi
        status: active
        display_name: 王士先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yWIzzIkswOJK9zkBWNLSSX
        subject_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QRnnDR27ftNKQGRE1MogD3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qso9BzAYdLtkgdM7ZcODbh
          claim_id: c_yWIzzIkswOJK9zkBWNLSSX
          source_id: s_W2G6bqKZbH-HIA2ciHEOVD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126676 王基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W2G6bqKZbH-HIA2ciHEOVD
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 329629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329629&o=json
            external_identifier: CBDB:329629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lha1sy2QN5ZZFX6JESvChc
        status: active
        display_name: 王基
        merged_into_person_id: null
---

# 王堪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堪 | accepted |
| bio.summary | 王堪，明人物。嘉靖四十四年進士，籍贯登州府。（中国历代人物传记资料库 CBDB 329629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6sYWcb482zJ4XWUwwNYJRi | 王士先 | accepted |
| other | p_Lha1sy2QN5ZZFX6JESvChc | 王基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堪（CBDB 329629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329629&o=json)
