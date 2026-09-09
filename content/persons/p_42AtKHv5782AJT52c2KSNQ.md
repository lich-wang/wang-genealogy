---
schema: wang-person/v1
id: p_42AtKHv5782AJT52c2KSNQ
status: active
merged_into: null
display_name: 王紓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CFoMVUh7GGzGwdHz91KLm2
        subject_person_id: p_42AtKHv5782AJT52c2KSNQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QDkpw6WNsA7dC9eB66zXgA
          claim_id: c_CFoMVUh7GGzGwdHz91KLm2
          source_id: s_UPbaZWNsGiXPUMmmhLBK8L
          stance: supports
          locator: CBDB:445540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445540）
          source: &a1
            id: s_UPbaZWNsGiXPUMmmhLBK8L
            source_type: api_record
            title: 中国历代人物传记资料库：王紓（CBDB 445540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445540&o=json
            external_identifier: CBDB:445540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kFxu39JdwPtZ4SJaLMuEZr
        subject_person_id: p_42AtKHv5782AJT52c2KSNQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_81q77RzrFTyiDTqXTTWysW
          claim_id: c_kFxu39JdwPtZ4SJaLMuEZr
          source_id: s_UPbaZWNsGiXPUMmmhLBK8L
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
  descendants: []
  other: []
---

# 王紓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紓 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紓（CBDB 445540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445540&o=json)
