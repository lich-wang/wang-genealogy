---
schema: wang-person/v1
id: p_zbpfchjodqKUG7ENoVMRrY
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 250479
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y5Um8oNkLpeoYlyflNeMxT
        subject_person_id: p_zbpfchjodqKUG7ENoVMRrY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FrRphR1kx5ybpfZI7D0GRS
          claim_id: c_Y5Um8oNkLpeoYlyflNeMxT
          source_id: s_BZYNVTt6ULpTLn27dbWkst
          stance: supports
          locator: CBDB:250479
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BZYNVTt6ULpTLn27dbWkst
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王華妻)（CBDB 250479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250479&o=json
            external_identifier: CBDB:250479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_U_GUxceMUqyR1Qv9uV18RJ
        subject_person_id: p_zbpfchjodqKUG7ENoVMRrY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kCGAHkLYN3GobwJhr7E1gC
          claim_id: c_U_GUxceMUqyR1Qv9uV18RJ
          source_id: s_BZYNVTt6ULpTLn27dbWkst
          stance: supports
          locator: CBDB:250479
          quotation: null
          interpretation_note: CBDB 明确记录的王華配偶
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
        id: c_KfwHaLgFNia0TScPuupOtU
        subject_person_id: p_6EMaiK2d7QYsew9Vg9gPZP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zbpfchjodqKUG7ENoVMRrY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MGJOSVnm0wlOqfq5n93c-y
          claim_id: c_KfwHaLgFNia0TScPuupOtU
          source_id: s_BZYNVTt6ULpTLn27dbWkst
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百八十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6EMaiK2d7QYsew9Vg9gPZP
        status: active
        display_name: 王華
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250479） | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6EMaiK2d7QYsew9Vg9gPZP | 王華 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王華妻)（CBDB 250479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250479&o=json)
