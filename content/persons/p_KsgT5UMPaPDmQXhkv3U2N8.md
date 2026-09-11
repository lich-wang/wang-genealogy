---
schema: wang-person/v1
id: p_KsgT5UMPaPDmQXhkv3U2N8
status: active
merged_into: null
display_name: 楊氏
revision: 1
cbdb_id: 279056
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_laZMAi7Ynm1svKb-pcb1js
        subject_person_id: p_KsgT5UMPaPDmQXhkv3U2N8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊氏，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 279056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L5hjMfVPzEp57BxV6utiwq
          claim_id: c_laZMAi7Ynm1svKb-pcb1js
          source_id: s_2cxQLxByZBltlp6thWByG_
          stance: supports
          locator: CBDB:279056
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2cxQLxByZBltlp6thWByG_
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王寧妻)（CBDB 279056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279056&o=json
            external_identifier: CBDB:279056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CWNMLOBAj-e3IarZXC8WXQ
        subject_person_id: p_KsgT5UMPaPDmQXhkv3U2N8
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
        - id: cs_YOcRsJ7mMkDvpvlpg8qNqt
          claim_id: c_CWNMLOBAj-e3IarZXC8WXQ
          source_id: s_2cxQLxByZBltlp6thWByG_
          stance: supports
          locator: CBDB:279056
          quotation: null
          interpretation_note: CBDB 明确记录的王寧配偶
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
        id: c_Czx-sIwPNSGS29NmN3UOxj
        subject_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KsgT5UMPaPDmQXhkv3U2N8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SruEEEWgkkr_eKwOHczejE
          claim_id: c_Czx-sIwPNSGS29NmN3UOxj
          source_id: s_2cxQLxByZBltlp6thWByG_
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yE8R4Fu2xBRHQnxP4vnrau
        status: active
        display_name: 王寧
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
| bio.summary | 楊氏，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 279056） | accepted |
| name.primary | 楊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yE8R4Fu2xBRHQnxP4vnrau | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊氏(王寧妻)（CBDB 279056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279056&o=json)
