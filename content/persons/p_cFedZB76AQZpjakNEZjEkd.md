---
schema: wang-person/v1
id: p_cFedZB76AQZpjakNEZjEkd
status: active
merged_into: null
display_name: 王琇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LibBA4ts2oQ4KWcLjPv2fr
        subject_person_id: p_cFedZB76AQZpjakNEZjEkd
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
        - id: cs_HcHctfL9x9QGmxwqJoHBnr
          claim_id: c_LibBA4ts2oQ4KWcLjPv2fr
          source_id: s_jQ83gApDLQumUoSNXzDv55
          stance: supports
          locator: CBDB:260250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260250）
          source: &a1
            id: s_jQ83gApDLQumUoSNXzDv55
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 260250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260250&o=json
            external_identifier: CBDB:260250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r9Tt5BvDGzMYRxEQAdAAAB
        subject_person_id: p_cFedZB76AQZpjakNEZjEkd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琇，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260250）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0NIUh6yoJ4sEUTDtpRRF87
          claim_id: c_r9Tt5BvDGzMYRxEQAdAAAB
          source_id: s_jQ83gApDLQumUoSNXzDv55
          stance: supports
          locator: CBDB:260250
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iu31DmWHG_b6VhOUmPIqeZ
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cFedZB76AQZpjakNEZjEkd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GURzWa6MF1v-WOpWAo3eEn
          claim_id: c_iu31DmWHG_b6VhOUmPIqeZ
          source_id: s_C8uSFaJ9pOHlXj9WXmA7iQ
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王琇 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王琇 之父／母。
          source:
            id: s_C8uSFaJ9pOHlXj9WXmA7iQ
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 260250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260250&o=json
            external_identifier: CBDB:260250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y9VpT5a4bHRsBrje4LpbfA
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__9SmjiayWTMFtBq_-SlwBY
        subject_person_id: p_cFedZB76AQZpjakNEZjEkd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2dvKp6yPmJ61BIPzKtUhZe
          claim_id: c__9SmjiayWTMFtBq_-SlwBY
          source_id: s_C8uSFaJ9pOHlXj9WXmA7iQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C8uSFaJ9pOHlXj9WXmA7iQ
            source_type: api_record
            title: 中国历代人物传记资料库：王琇（CBDB 260250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260250&o=json
            external_identifier: CBDB:260250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v3b97W1yi7J7kSEqJr8m4E
        status: active
        display_name: 王玹
        merged_into_person_id: null
---

# 王琇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琇 | accepted |
| bio.summary | 王琇，明人物。成化二十三年進士，籍贯海豐。（中国历代人物传记资料库 CBDB 260250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y9VpT5a4bHRsBrje4LpbfA | 王豫 | accepted |
| other | p_v3b97W1yi7J7kSEqJr8m4E | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琇（CBDB 260250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260250&o=json)
