---
schema: wang-person/v1
id: p_8C6sytTQSRKy1JrArNBF7Y
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 336836
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_no89bukh3PSFid0uMG7-eL
        subject_person_id: p_8C6sytTQSRKy1JrArNBF7Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336836）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mA61oQWyS-wJWkvzUrgi26
          claim_id: c_no89bukh3PSFid0uMG7-eL
          source_id: s_RIyKYLZnDlqkwFPda6YkAa
          stance: supports
          locator: CBDB:336836
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RIyKYLZnDlqkwFPda6YkAa
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王儼妻)（CBDB 336836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336836&o=json
            external_identifier: CBDB:336836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NGpQ0SEHd-BofGMaA3ZcKP
        subject_person_id: p_8C6sytTQSRKy1JrArNBF7Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i6OQAxStq1vmGKmWM9bxN0
          claim_id: c_NGpQ0SEHd-BofGMaA3ZcKP
          source_id: s_RIyKYLZnDlqkwFPda6YkAa
          stance: supports
          locator: CBDB:336836
          quotation: null
          interpretation_note: CBDB 明确记录的王儼配偶
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
        id: c_VhWg_64uu00jjaWtRNG0PV
        subject_person_id: p_5eqa2npzGNMyLY9apLyg93
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8C6sytTQSRKy1JrArNBF7Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sU4iidrFb9bWJT6n9sQQxI
          claim_id: c_VhWg_64uu00jjaWtRNG0PV
          source_id: s_RIyKYLZnDlqkwFPda6YkAa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5eqa2npzGNMyLY9apLyg93
        status: active
        display_name: 王儼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336836） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5eqa2npzGNMyLY9apLyg93 | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王儼妻)（CBDB 336836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336836&o=json)
