---
schema: wang-person/v1
id: p_GAeLRTZkJHf27aCa6TLAnS
status: active
merged_into: null
display_name: 王道充
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mdRhfmtGD41aWBxs6n86Fx
        subject_person_id: p_GAeLRTZkJHf27aCa6TLAnS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道充
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9rQMYuDNXRYAXSymeBdZiH
          claim_id: c_mdRhfmtGD41aWBxs6n86Fx
          source_id: s_3is5u2XsaGDBeEp3trVmuE
          stance: supports
          locator: CBDB:214953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214953）
          source: &a1
            id: s_3is5u2XsaGDBeEp3trVmuE
            source_type: api_record
            title: 中国历代人物传记资料库：王道充（CBDB 214953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214953&o=json
            external_identifier: CBDB:214953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N8pjbt77iBoXoPUCNTYksh
        subject_person_id: p_GAeLRTZkJHf27aCa6TLAnS
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
        - id: cs_KKNKQCgfQAmnfsSC7JGakQ
          claim_id: c_N8pjbt77iBoXoPUCNTYksh
          source_id: s_3is5u2XsaGDBeEp3trVmuE
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
        id: c_QOIzRwOjig5nnoDVpxgWQA
        subject_person_id: p_GAeLRTZkJHf27aCa6TLAnS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4I-VLedK0xy27qovmY2SA0
          claim_id: c_QOIzRwOjig5nnoDVpxgWQA
          source_id: s_3is5u2XsaGDBeEp3trVmuE
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hCaEhKRsvc7eH6eDHWHssK
        status: active
        display_name: 王國祚
        merged_into_person_id: null
  other: []
---

# 王道充

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道充 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hCaEhKRsvc7eH6eDHWHssK | 王國祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道充（CBDB 214953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214953&o=json)
