---
schema: wang-person/v1
id: p_oBjY9MfZi5thmW69NmwGdo
status: active
merged_into: null
display_name: 周氏
revision: 1
cbdb_id: 254951
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MUBLHuH9rH49XfqoTiIrCa
        subject_person_id: p_oBjY9MfZi5thmW69NmwGdo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mSlv20s5Op3Da4BE4zheQd
          claim_id: c_MUBLHuH9rH49XfqoTiIrCa
          source_id: s_SOEGymn7sX4el1o8dduk-D
          stance: supports
          locator: CBDB:254951
          quotation: null
          interpretation_note: CBDB 明确记录的王機配偶
          source: &a1
            id: s_SOEGymn7sX4el1o8dduk-D
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王機妻)（CBDB 254951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254951&o=json
            external_identifier: CBDB:254951
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
        id: c_3POI7OcfLJlhjEyhoEiZxm
        subject_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_oBjY9MfZi5thmW69NmwGdo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_My2xDX0tyt9z5p0fHDq9qM
          claim_id: c_3POI7OcfLJlhjEyhoEiZxm
          source_id: s_SOEGymn7sX4el1o8dduk-D
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第二十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G8UB9fUGo95gK5v77Cu4Q6
        status: active
        display_name: 王機
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 周氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_G8UB9fUGo95gK5v77Cu4Q6 | 王機 | accepted |

## 外部来源

- [中国历代人物传记资料库：周氏(王機妻)（CBDB 254951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254951&o=json)
