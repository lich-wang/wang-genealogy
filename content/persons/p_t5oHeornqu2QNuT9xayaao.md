---
schema: wang-person/v1
id: p_t5oHeornqu2QNuT9xayaao
status: active
merged_into: null
display_name: 王英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t1YALr7g47vpBPX78j4uoy
        subject_person_id: p_t5oHeornqu2QNuT9xayaao
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xNE1Yp7mSQpjRWTbnBFH5Q
          claim_id: c_t1YALr7g47vpBPX78j4uoy
          source_id: s_pG3DPPHQ3jf2TuAPQJUn3H
          stance: supports
          locator: CBDB:207910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207910）
          source: &a1
            id: s_pG3DPPHQ3jf2TuAPQJUn3H
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 207910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207910&o=json
            external_identifier: CBDB:207910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aaKzj9u6MF1hcuNAQbLV4J
        subject_person_id: p_t5oHeornqu2QNuT9xayaao
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1409年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_886UAEiaytBr2cUUF8ft3h
          claim_id: c_aaKzj9u6MF1hcuNAQbLV4J
          source_id: s_pG3DPPHQ3jf2TuAPQJUn3H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zP9mCVJgXZwattJya2fEgj
        subject_person_id: p_t5oHeornqu2QNuT9xayaao
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iisd2pekWYjuF1wAt9Sguw
          claim_id: c_zP9mCVJgXZwattJya2fEgj
          source_id: s_pG3DPPHQ3jf2TuAPQJUn3H
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
        id: c_-j2z-l9JM3nHa0w4FrRHRH
        subject_person_id: p_t5oHeornqu2QNuT9xayaao
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5CduZYd3M32UzBRfFgkTNy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Ng43zi1PIEtc3lp8TFQo5
          claim_id: c_-j2z-l9JM3nHa0w4FrRHRH
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VYJvgz4n1AbQdfJrLeEkYN
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 199491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199491&o=json
            external_identifier: CBDB:199491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5CduZYd3M32UzBRfFgkTNy
        status: active
        display_name: 王祿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| birth.date | 1409年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5CduZYd3M32UzBRfFgkTNy | 王祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 199491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199491&o=json)
- [中国历代人物传记资料库：王英（CBDB 207910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207910&o=json)
