---
schema: wang-person/v1
id: p_7BBF3smPNu36M4kDoFPqQG
status: active
merged_into: null
display_name: 王笴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dt4CwWCnKfGFdsduJ1gvgQ
        subject_person_id: p_7BBF3smPNu36M4kDoFPqQG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王笴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c645DqsYeugm9Zu2AFvfL7
          claim_id: c_Dt4CwWCnKfGFdsduJ1gvgQ
          source_id: s_K5zzAYDEUWqm4GmS2hGpmN
          stance: supports
          locator: CBDB:28740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28740）
          source: &a1
            id: s_K5zzAYDEUWqm4GmS2hGpmN
            source_type: api_record
            title: 中国历代人物传记资料库：王笴（CBDB 28740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28740&o=json
            external_identifier: CBDB:28740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7ZG8DkTYVPVRdJzWfFFzz6
        subject_person_id: p_7BBF3smPNu36M4kDoFPqQG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KHHa8CPvj7CgYoAAwdV1HU
          claim_id: c_7ZG8DkTYVPVRdJzWfFFzz6
          source_id: s_K5zzAYDEUWqm4GmS2hGpmN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hak7F1WD3mMPwGs4tuXw7U
        subject_person_id: p_7BBF3smPNu36M4kDoFPqQG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王笴（生于1275年），元人物。籍贯汲縣，曾任祕書郎、刑部郎官。（中国历代人物传记资料库 CBDB 28740）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pK2m89rn32sv5l_Nc3rlVU
          claim_id: c_Hak7F1WD3mMPwGs4tuXw7U
          source_id: s_K5zzAYDEUWqm4GmS2hGpmN
          stance: supports
          locator: CBDB:28740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z7hXtQx5eE3E4A7E6XhihW
        subject_person_id: p_7sZNjwMqvL59PRZhNDpau4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7BBF3smPNu36M4kDoFPqQG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FVWosHd6Gb4hjli2my4yqr
          claim_id: c_z7hXtQx5eE3E4A7E6XhihW
          source_id: s_K5zzAYDEUWqm4GmS2hGpmN
          stance: supports
          locator: 元人傳記資料索引，18654：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7sZNjwMqvL59PRZhNDpau4
        status: active
        display_name: 王公孺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王笴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王笴 | accepted |
| birth.date | 1275年 | accepted |
| bio.summary | 王笴（生于1275年），元人物。籍贯汲縣，曾任祕書郎、刑部郎官。（中国历代人物传记资料库 CBDB 28740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7sZNjwMqvL59PRZhNDpau4 | 王公孺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王笴（CBDB 28740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28740&o=json)
