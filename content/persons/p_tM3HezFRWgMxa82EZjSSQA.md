---
schema: wang-person/v1
id: p_tM3HezFRWgMxa82EZjSSQA
status: active
merged_into: null
display_name: 王琇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hnhUkFDBX1PBh6fLg6mp7q
        subject_person_id: p_tM3HezFRWgMxa82EZjSSQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Li1M1fEapCxRUHxdCRoZ13
          claim_id: c_hnhUkFDBX1PBh6fLg6mp7q
          source_id: s_unppJNgo1HUZcW7L2LZpmW
          stance: supports
          locator: CBDB:292484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292484）
          source: &a1
            id: s_unppJNgo1HUZcW7L2LZpmW
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 292484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292484&o=json
            external_identifier: CBDB:292484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yH89i7FqqJQzFwqk7F1jmB
        subject_person_id: p_tM3HezFRWgMxa82EZjSSQA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇，明人物。天順元年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 292484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FNJ3r5pmp621yy8ti924XX
          claim_id: c_yH89i7FqqJQzFwqk7F1jmB
          source_id: s_unppJNgo1HUZcW7L2LZpmW
          stance: supports
          locator: CBDB:292484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1XNAcR52oLkKszZoTpJQ9P
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tM3HezFRWgMxa82EZjSSQA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__b70FQPKUzv0g6WEiQ0PWs
          claim_id: c_1XNAcR52oLkKszZoTpJQ9P
          source_id: s_eN-VedSITrwJakelFddaZI
          stance: supports
          locator: CBDB：兄弟 王預（198598）之父／母 王思齊
          quotation: null
          interpretation_note: 由兄弟关系推断：王琇 与 王預 为同胞（CBDB 记「兄」），王預 之父／母即 王琇 之父／母。
          source:
            id: s_eN-VedSITrwJakelFddaZI
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 292484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292484&o=json
            external_identifier: CBDB:292484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ngzLTQ61GEdZsLrb6boLr4
        status: active
        display_name: 王思齊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gPJzRQ2zKCJ7nhwqlXBQzU
        subject_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tM3HezFRWgMxa82EZjSSQA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_63Mu1trM2PjKUbBnjT8fiN
          claim_id: c_gPJzRQ2zKCJ7nhwqlXBQzU
          source_id: s_eN-VedSITrwJakelFddaZI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198598 王預）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eN-VedSITrwJakelFddaZI
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 292484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292484&o=json
            external_identifier: CBDB:292484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MB31qtyXiP7DGzQ9oxGxHs
        status: active
        display_name: 王預
        merged_into_person_id: null
---

# 王琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琇 | accepted |
| bio.summary | 王琇，明人物。天順元年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 292484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ngzLTQ61GEdZsLrb6boLr4 | 王思齊 | accepted |
| other | p_MB31qtyXiP7DGzQ9oxGxHs | 王預 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琇（CBDB 292484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292484&o=json)
