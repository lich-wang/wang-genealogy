---
schema: wang-person/v1
id: p_CGgacbGZFCBxdmoDnHfJ5t
status: active
merged_into: null
display_name: 汪氏
revision: 1
cbdb_id: 270231
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jDdR62rtmFNHeG-ZnAwLg-
        subject_person_id: p_CGgacbGZFCBxdmoDnHfJ5t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪氏，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 270231）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fws2uBc8zegLI5igr7r84k
          claim_id: c_jDdR62rtmFNHeG-ZnAwLg-
          source_id: s_BVpjvZZIje8W7EH_PL7O3M
          stance: supports
          locator: CBDB:270231
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BVpjvZZIje8W7EH_PL7O3M
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王濟妻)（CBDB 270231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270231&o=json
            external_identifier: CBDB:270231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_I8XjmA8kxF9zt_yLehKd4U
        subject_person_id: p_CGgacbGZFCBxdmoDnHfJ5t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iFdHnt1kUPbNwcd9Gb2Dwk
          claim_id: c_I8XjmA8kxF9zt_yLehKd4U
          source_id: s_BVpjvZZIje8W7EH_PL7O3M
          stance: supports
          locator: CBDB:270231
          quotation: null
          interpretation_note: CBDB 明确记录的王濟配偶
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
        id: c_yh8-Tj5LfYJj-74pVyA9qR
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CGgacbGZFCBxdmoDnHfJ5t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3XbiXewH6Q9cgGIrCaYuXI
          claim_id: c_yh8-Tj5LfYJj-74pVyA9qR
          source_id: s_BVpjvZZIje8W7EH_PL7O3M
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汪氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 汪氏，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 270231） | accepted |
| name.primary | 汪氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王濟妻)（CBDB 270231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270231&o=json)
