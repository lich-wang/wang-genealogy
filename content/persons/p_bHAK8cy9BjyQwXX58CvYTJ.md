---
schema: wang-person/v1
id: p_bHAK8cy9BjyQwXX58CvYTJ
status: active
merged_into: null
display_name: 王僴
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tMH4H6TxUhGyNG2kTqWeE
        subject_person_id: p_bHAK8cy9BjyQwXX58CvYTJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b1UGjyrK1ks4hb4mz4uuMx
          claim_id: c_5tMH4H6TxUhGyNG2kTqWeE
          source_id: s_VU1T8AsB94g689hrNmF9Bs
          stance: supports
          locator: CBDB:214688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214688）
          source: &a1
            id: s_VU1T8AsB94g689hrNmF9Bs
            source_type: api_record
            title: 中国历代人物传记资料库：王僴（CBDB 214688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214688&o=json
            external_identifier: CBDB:214688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kyeLF5ovS1KvcUD2q3WNsC
        subject_person_id: p_bHAK8cy9BjyQwXX58CvYTJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僴，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214688）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RnAN85hhoLOA1zRF5G5fSP
          claim_id: c_kyeLF5ovS1KvcUD2q3WNsC
          source_id: s_VU1T8AsB94g689hrNmF9Bs
          stance: supports
          locator: CBDB:214688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1HhbmO-KLcmPjhGHVAm454
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bHAK8cy9BjyQwXX58CvYTJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Grt8zyWOVuLBnBfqwUlvYr
          claim_id: c_1HhbmO-KLcmPjhGHVAm454
          source_id: s_KaFOURxb2Z9vyWXxAL0t26
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王僴 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王僴 之父／母。
          source:
            id: s_KaFOURxb2Z9vyWXxAL0t26
            source_type: api_record
            title: 中国历代人物传记资料库：王僴（CBDB 214688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214688&o=json
            external_identifier: CBDB:214688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pgpmm7wnTqLY7xY2HfhhZC
        status: active
        display_name: 王繼乾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oNE9o2ppkXPqBr7RXb6Ej4
        subject_person_id: p_bHAK8cy9BjyQwXX58CvYTJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__7MYf4nWZit2bP2wgIFxAF
          claim_id: c_oNE9o2ppkXPqBr7RXb6Ej4
          source_id: s_KaFOURxb2Z9vyWXxAL0t26
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KaFOURxb2Z9vyWXxAL0t26
            source_type: api_record
            title: 中国历代人物传记资料库：王僴（CBDB 214688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214688&o=json
            external_identifier: CBDB:214688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y879UiTRBKZaXHHY531ywf
        status: active
        display_name: 王价
        merged_into_person_id: null
---

# 王僴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僴 | accepted |
| bio.summary | 王僴，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pgpmm7wnTqLY7xY2HfhhZC | 王繼乾 | accepted |
| other | p_y879UiTRBKZaXHHY531ywf | 王价 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僴（CBDB 214688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214688&o=json)
