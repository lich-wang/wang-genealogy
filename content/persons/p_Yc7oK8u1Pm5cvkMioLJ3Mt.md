---
schema: wang-person/v1
id: p_Yc7oK8u1Pm5cvkMioLJ3Mt
status: active
merged_into: null
display_name: 王良臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9cKYZyHPxo3R4S54KuQG3r
        subject_person_id: p_Yc7oK8u1Pm5cvkMioLJ3Mt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tPvBYEdEQP2ZbhXGqZHNq8
          claim_id: c_9cKYZyHPxo3R4S54KuQG3r
          source_id: s_38st7QGuWfB5hizLYskXa5
          stance: supports
          locator: CBDB:512665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（512665）
          source: &a1
            id: s_38st7QGuWfB5hizLYskXa5
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 512665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512665&o=json
            external_identifier: CBDB:512665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VXVTF2P7KRSQKx3oHTH8Px
        subject_person_id: p_Yc7oK8u1Pm5cvkMioLJ3Mt
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
        - id: cs_13XYuh4AyvBRGxTYTZwDM6
          claim_id: c_VXVTF2P7KRSQKx3oHTH8Px
          source_id: s_38st7QGuWfB5hizLYskXa5
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
  spouses:
    - claim:
        id: c_t7nWkJ84xWqsEp5TFVj-E1
        subject_person_id: p_Yc7oK8u1Pm5cvkMioLJ3Mt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uRVJDkv93K2rGEiPGFS9k5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WL7ByQ12iAcJMAL9RYSrP9
          claim_id: c_t7nWkJ84xWqsEp5TFVj-E1
          source_id: s_ehidsk64-6OcKQraSQTNkB
          stance: supports
          locator: 順義縣志，lgid=11323：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ehidsk64-6OcKQraSQTNkB
            source_type: api_record
            title: 中国历代人物传记资料库：薛氏(王良臣妻)（CBDB 512664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512664&o=json
            external_identifier: CBDB:512664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uRVJDkv93K2rGEiPGFS9k5
        status: active
        display_name: 薛氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王良臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良臣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uRVJDkv93K2rGEiPGFS9k5 | 薛氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良臣（CBDB 512665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512665&o=json)
- [中国历代人物传记资料库：薛氏(王良臣妻)（CBDB 512664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512664&o=json)
