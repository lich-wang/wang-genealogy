---
schema: wang-person/v1
id: p_2qDFnQGzqiHheeCqmHKnxS
status: active
merged_into: null
display_name: 王談
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kHNS2QqeVVnaZVQQHWBUdh
        subject_person_id: p_2qDFnQGzqiHheeCqmHKnxS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王談
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NeRC3iJRHCuGtBWFMrWsNo
          claim_id: c_kHNS2QqeVVnaZVQQHWBUdh
          source_id: s_pcdCmbxyuz1C8JPyT62N6k
          stance: supports
          locator: CBDB:227708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227708）
          source: &a1
            id: s_pcdCmbxyuz1C8JPyT62N6k
            source_type: api_record
            title: 中国历代人物传记资料库：王談（CBDB 227708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227708&o=json
            external_identifier: CBDB:227708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wHyz4gxBM9dRn1qGwxuA7j
        subject_person_id: p_2qDFnQGzqiHheeCqmHKnxS
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
        - id: cs_sFDM3xSACQgrFyqaKfZHrk
          claim_id: c_wHyz4gxBM9dRn1qGwxuA7j
          source_id: s_pcdCmbxyuz1C8JPyT62N6k
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_o9Yg-FFJKA7ec6_EVulC92
        subject_person_id: p_2qDFnQGzqiHheeCqmHKnxS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6eBg2ZNHCrtaS8i5-_SPmn
          claim_id: c_o9Yg-FFJKA7ec6_EVulC92
          source_id: s_pcdCmbxyuz1C8JPyT62N6k
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  other: []
---

# 王談

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王談 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王談（CBDB 227708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227708&o=json)
