---
schema: wang-person/v1
id: p_RRsdpNBt4C7vWYviTZiLTp
status: active
merged_into: null
display_name: 王橐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P1irkuJjBhNcyqwx98cCYk
        subject_person_id: p_RRsdpNBt4C7vWYviTZiLTp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ME7NgMSE4WXE9QJWqti6ZH
          claim_id: c_P1irkuJjBhNcyqwx98cCYk
          source_id: s_egPJ28HN64hGVZjUa8HFzc
          stance: supports
          locator: CBDB:16691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16691）
          source: &a1
            id: s_egPJ28HN64hGVZjUa8HFzc
            source_type: api_record
            title: 中国历代人物传记资料库：王橐（CBDB 16691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16691&o=json
            external_identifier: CBDB:16691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GbLDDB1fBACEVLatYJqEya
        subject_person_id: p_RRsdpNBt4C7vWYviTZiLTp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1161年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pxH6YdWCZQAPYB1H5XqotK
          claim_id: c_GbLDDB1fBACEVLatYJqEya
          source_id: s_egPJ28HN64hGVZjUa8HFzc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dGtwdcqzKAaUg9NNyRgRPm
        subject_person_id: p_RRsdpNBt4C7vWYviTZiLTp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5qnU7cyBQ1K1MTJBf8pLBe
          claim_id: c_dGtwdcqzKAaUg9NNyRgRPm
          source_id: s_egPJ28HN64hGVZjUa8HFzc
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
        id: c_9-s5RdHZhgd9zPj0LYaqBL
        subject_person_id: p_RRsdpNBt4C7vWYviTZiLTp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eTn5grdY57WP95rxAMqTrj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TKPhoJFN4aOBQLfYyMlNLV
          claim_id: c_9-s5RdHZhgd9zPj0LYaqBL
          source_id: s_ayXwHa3P8JZGjiVZ55uyM9
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1119：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ayXwHa3P8JZGjiVZ55uyM9
            source_type: api_record
            title: 中国历代人物传记资料库：王炎（CBDB 16692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16692&o=json
            external_identifier: CBDB:16692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eTn5grdY57WP95rxAMqTrj
        status: active
        display_name: 王炎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王橐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王橐 | accepted |
| death.date | 1161年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eTn5grdY57WP95rxAMqTrj | 王炎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王橐（CBDB 16691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16691&o=json)
- [中国历代人物传记资料库：王炎（CBDB 16692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16692&o=json)
