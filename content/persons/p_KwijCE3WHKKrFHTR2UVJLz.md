---
schema: wang-person/v1
id: p_KwijCE3WHKKrFHTR2UVJLz
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 324277
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1dbxcM8_mNnON7XV2fP297
        subject_person_id: p_KwijCE3WHKKrFHTR2UVJLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6istXxtfyndWcUlKXb5Owr
          claim_id: c_1dbxcM8_mNnON7XV2fP297
          source_id: s_yAEFC7L730ZMzN66KOyFTo
          stance: supports
          locator: CBDB:324277
          quotation: null
          interpretation_note: CBDB 明确记录的王儒配偶
          source: &a1
            id: s_yAEFC7L730ZMzN66KOyFTo
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王儒妻)（CBDB 324277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324277&o=json
            external_identifier: CBDB:324277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
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
        id: c_5mWMsWCamQ-pTnTb2_upnn
        subject_person_id: p_KwijCE3WHKKrFHTR2UVJLz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_16nv23omiPWM5bXpCbD3EC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQ18s3LEuL7ArS30GhhtKe
          claim_id: c_5mWMsWCamQ-pTnTb2_upnn
          source_id: s_yAEFC7L730ZMzN66KOyFTo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第三十三名：丈夫
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_16nv23omiPWM5bXpCbD3EC
        status: active
        display_name: 王儒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 徐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_16nv23omiPWM5bXpCbD3EC | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王儒妻)（CBDB 324277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324277&o=json)
