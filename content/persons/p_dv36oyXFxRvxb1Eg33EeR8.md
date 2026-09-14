---
schema: wang-person/v1
id: p_dv36oyXFxRvxb1Eg33EeR8
status: active
merged_into: null
display_name: 王三槐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vww5XZn4WBbpidge7qo1VB
        subject_person_id: p_dv36oyXFxRvxb1Eg33EeR8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QAQikxmTHs2NEgjt4tPgCz
          claim_id: c_vww5XZn4WBbpidge7qo1VB
          source_id: s_WGUCjebifRU77YHcbyJpWe
          stance: supports
          locator: CBDB:214404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214404）
          source: &a1
            id: s_WGUCjebifRU77YHcbyJpWe
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 214404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214404&o=json
            external_identifier: CBDB:214404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_un532fhhKktNQXQyvJNw8D
        subject_person_id: p_dv36oyXFxRvxb1Eg33EeR8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐，明人物。萬曆二年進士，籍贯安平，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 214404）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BmJQO5seZnH4ZAD0DHkBGI
          claim_id: c_un532fhhKktNQXQyvJNw8D
          source_id: s_WGUCjebifRU77YHcbyJpWe
          stance: supports
          locator: CBDB:214404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lNEe6v44XrGz1x9qonyTPk
        subject_person_id: p_NMZVjztWKmHmBJ3VeqqESt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dv36oyXFxRvxb1Eg33EeR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_969hkEQ2Tn_L8Fs1YidYRE
          claim_id: c_lNEe6v44XrGz1x9qonyTPk
          source_id: s_WKV1S2wSWegyYENE4YUfhe
          stance: supports
          locator: CBDB：兄弟 王三餘（126452）之父／母 王遜
          quotation: null
          interpretation_note: 由兄弟关系推断：王三槐 与 王三餘 为同胞（CBDB 记「弟」），王三餘 之父／母即 王三槐 之父／母。
          source:
            id: s_WKV1S2wSWegyYENE4YUfhe
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 214404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214404&o=json
            external_identifier: CBDB:214404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NMZVjztWKmHmBJ3VeqqESt
        status: active
        display_name: 王遜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EXHKpI4BpmgRl6uDPax8mt
        subject_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dv36oyXFxRvxb1Eg33EeR8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvT18u_zcdtIyf5Bq3XSjM
          claim_id: c_EXHKpI4BpmgRl6uDPax8mt
          source_id: s_WKV1S2wSWegyYENE4YUfhe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126452 王三餘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WKV1S2wSWegyYENE4YUfhe
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 214404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214404&o=json
            external_identifier: CBDB:214404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D1pWDsHWNd5wRUwygKh8wV
        status: active
        display_name: 王三餘
        merged_into_person_id: null
---

# 王三槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三槐 | accepted |
| bio.summary | 王三槐，明人物。萬曆二年進士，籍贯安平，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 214404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NMZVjztWKmHmBJ3VeqqESt | 王遜 | accepted |
| other | p_D1pWDsHWNd5wRUwygKh8wV | 王三餘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三槐（CBDB 214404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214404&o=json)
