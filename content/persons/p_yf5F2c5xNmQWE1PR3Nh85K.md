---
schema: wang-person/v1
id: p_yf5F2c5xNmQWE1PR3Nh85K
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 277199
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NtvfMopol68PnGoclGjM-z
        subject_person_id: p_yf5F2c5xNmQWE1PR3Nh85K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 277199）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hV6wEDPCpoKtJDoS2MA5hk
          claim_id: c_NtvfMopol68PnGoclGjM-z
          source_id: s_90RmZ6eUIOOxKP0iGSh3f1
          stance: supports
          locator: CBDB:277199
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_90RmZ6eUIOOxKP0iGSh3f1
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王瑋妻)（CBDB 277199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277199&o=json
            external_identifier: CBDB:277199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ibKi6hgTmov1P8WJlzgjd
        subject_person_id: p_yf5F2c5xNmQWE1PR3Nh85K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_63YbGhMw-z0h1yA5_Gafn3
          claim_id: c_8ibKi6hgTmov1P8WJlzgjd
          source_id: s_90RmZ6eUIOOxKP0iGSh3f1
          stance: supports
          locator: CBDB:277199
          quotation: null
          interpretation_note: CBDB 明确记录的王瑋配偶
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
        id: c_XuJ3yesqyI7NgXkMguwyty
        subject_person_id: p_dC2kXoLn9HGUMNL9QippS6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yf5F2c5xNmQWE1PR3Nh85K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_awt95J-JCzeLNCfgLKhi4t
          claim_id: c_XuJ3yesqyI7NgXkMguwyty
          source_id: s_90RmZ6eUIOOxKP0iGSh3f1
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dC2kXoLn9HGUMNL9QippS6
        status: active
        display_name: 王瑋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙氏，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 277199） | accepted |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dC2kXoLn9HGUMNL9QippS6 | 王瑋 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王瑋妻)（CBDB 277199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277199&o=json)
