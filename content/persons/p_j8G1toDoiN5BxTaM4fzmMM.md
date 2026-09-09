---
schema: wang-person/v1
id: p_j8G1toDoiN5BxTaM4fzmMM
status: active
merged_into: null
display_name: 王公亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Thp4N59DhXuYUypzoLNzE3
        subject_person_id: p_j8G1toDoiN5BxTaM4fzmMM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iNfTehb4ottnQUvzQN94R5
          claim_id: c_Thp4N59DhXuYUypzoLNzE3
          source_id: s_ZLiVk6DTUv7eF1qr7UTR7B
          stance: supports
          locator: CBDB:145199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145199）
          source: &a1
            id: s_ZLiVk6DTUv7eF1qr7UTR7B
            source_type: api_record
            title: 中国历代人物传记资料库：王公亮（CBDB 145199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145199&o=json
            external_identifier: CBDB:145199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QLivd1YCGAKN177BA43JEv
        subject_person_id: p_j8G1toDoiN5BxTaM4fzmMM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 784年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KgHCFXRpMdJWJMNArYGZpQ
          claim_id: c_QLivd1YCGAKN177BA43JEv
          source_id: s_ZLiVk6DTUv7eF1qr7UTR7B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9eM89aMkDHxgQ21gzQKxDx
        subject_person_id: p_j8G1toDoiN5BxTaM4fzmMM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CXH5sBKN719Nw56br5Ag9i
          claim_id: c_9eM89aMkDHxgQ21gzQKxDx
          source_id: s_ZLiVk6DTUv7eF1qr7UTR7B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wKryrhzCyr4UVJ5VCZ53Mb
        subject_person_id: p_j8G1toDoiN5BxTaM4fzmMM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NCtunuFEFgNpGeP5kpPPyM
          claim_id: c_wKryrhzCyr4UVJ5VCZ53Mb
          source_id: s_ZLiVk6DTUv7eF1qr7UTR7B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公亮 | accepted |
| birth.date | 784年 | accepted |
| death.date | 842年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公亮（CBDB 145199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145199&o=json)
