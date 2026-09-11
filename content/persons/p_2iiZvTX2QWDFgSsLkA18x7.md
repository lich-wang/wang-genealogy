---
schema: wang-person/v1
id: p_2iiZvTX2QWDFgSsLkA18x7
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 153496
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t3-uj0xqIetPQnEzTm-l4i
        subject_person_id: p_2iiZvTX2QWDFgSsLkA18x7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Im8g2MzuCQOQ5F9sZthspd
          claim_id: c_t3-uj0xqIetPQnEzTm-l4i
          source_id: s_skau6U4yM3XMWrD81rwfOg
          stance: supports
          locator: CBDB:153496
          quotation: null
          interpretation_note: CBDB 明确记录的王元配偶
          source: &a1
            id: s_skau6U4yM3XMWrD81rwfOg
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王元妻)（CBDB 153496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153496&o=json
            external_identifier: CBDB:153496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_p4yWBdie2UW1qfAoi1FQlD
        subject_person_id: p_k7j2kTSqw8xmFbcrQ74eeU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2iiZvTX2QWDFgSsLkA18x7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VRWPwNWcwl5sqWvqtLHTNN
          claim_id: c_p4yWBdie2UW1qfAoi1FQlD
          source_id: s_skau6U4yM3XMWrD81rwfOg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 59：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k7j2kTSqw8xmFbcrQ74eeU
        status: active
        display_name: 王元
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_k7j2kTSqw8xmFbcrQ74eeU | 王元 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王元妻)（CBDB 153496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153496&o=json)
