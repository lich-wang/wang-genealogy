---
schema: wang-person/v1
id: p_GAxpmc5jtxH2GJzF9JXcGq
status: active
merged_into: null
display_name: 何鶴延
revision: 1
cbdb_id: 121703
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_IxY21GCNryV67wchs-ERl0
        subject_person_id: p_GAxpmc5jtxH2GJzF9JXcGq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何鶴延
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oXrrMRMablecGZMsv52Bgy
          claim_id: c_IxY21GCNryV67wchs-ERl0
          source_id: s_aZQxQ6hP2tL31Su514ek3O
          stance: supports
          locator: CBDB:121703
          quotation: null
          interpretation_note: CBDB 明确记录的王令聞配偶
          source: &a1
            id: s_aZQxQ6hP2tL31Su514ek3O
            source_type: api_record
            title: 中国历代人物传记资料库：何鶴延（CBDB 121703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121703&o=json
            external_identifier: CBDB:121703
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
        id: c_miQoinGSd2IxzI_IwZ2yYu
        subject_person_id: p_uym8ZYHMZML23NLgGPRY4p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GAxpmc5jtxH2GJzF9JXcGq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0hZ8ubaC1kd4leBK8KvPB
          claim_id: c_miQoinGSd2IxzI_IwZ2yYu
          source_id: s_aZQxQ6hP2tL31Su514ek3O
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4198, HuWenKai #231：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uym8ZYHMZML23NLgGPRY4p
        status: active
        display_name: 王令聞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何鶴延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 何鶴延 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uym8ZYHMZML23NLgGPRY4p | 王令聞 | accepted |

## 外部来源

- [中国历代人物传记资料库：何鶴延（CBDB 121703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121703&o=json)
