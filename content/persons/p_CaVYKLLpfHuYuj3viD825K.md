---
schema: wang-person/v1
id: p_CaVYKLLpfHuYuj3viD825K
status: active
merged_into: null
display_name: 王氏
revision: 1
cbdb_id: 41576
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d0zWC4pIWxIoRVZKLv3mis
        subject_person_id: p_CaVYKLLpfHuYuj3viD825K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HE951OwTtpQNNS2GQ1Z5v7
          claim_id: c_d0zWC4pIWxIoRVZKLv3mis
          source_id: s_fI2YwpIxtnTgeUKCKwlXiM
          stance: supports
          locator: CBDB:41576
          quotation: null
          interpretation_note: CBDB 明确记录的吴安持配偶
          source: &a1
            id: s_fI2YwpIxtnTgeUKCKwlXiM
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(吳安持妻)（CBDB 41576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41576&o=json
            external_identifier: CBDB:41576
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
        id: c_r3SLTE5u7hTngNETYqif3o
        subject_person_id: p_JnkpTWbJcvJCtHDJoXUsKb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CaVYKLLpfHuYuj3viD825K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzSj5xWR3MfSJdPqHSRFTf
          claim_id: c_r3SLTE5u7hTngNETYqif3o
          source_id: s_fI2YwpIxtnTgeUKCKwlXiM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，6317;6318：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JnkpTWbJcvJCtHDJoXUsKb
        status: active
        display_name: 吴安持
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JnkpTWbJcvJCtHDJoXUsKb | 吴安持 | accepted |

## 外部来源

- [中国历代人物传记资料库：王氏(吳安持妻)（CBDB 41576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41576&o=json)
