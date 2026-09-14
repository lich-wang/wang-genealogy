---
schema: wang-person/v1
id: p_ZMG7zxUUERXEX6oUEJMoj1
status: active
merged_into: null
display_name: 王公弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cFp1bjCv1LyjUtnctPZy43
        subject_person_id: p_ZMG7zxUUERXEX6oUEJMoj1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JENMUzKyzZgM8TZkuwa7ka
          claim_id: c_cFp1bjCv1LyjUtnctPZy43
          source_id: s_JEM2KfFwCuwWuLoe6PGHGs
          stance: supports
          locator: CBDB:38290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38290）
          source: &a1
            id: s_JEM2KfFwCuwWuLoe6PGHGs
            source_type: api_record
            title: 中国历代人物传记资料库：王公弼（CBDB 38290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38290&o=json
            external_identifier: CBDB:38290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w8RigdJ8nZTiiAW934jURU
        subject_person_id: p_ZMG7zxUUERXEX6oUEJMoj1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公弼，宋人物。籍贯臨海，入仕武舉進士，曾任武翼郎。（中国历代人物传记资料库 CBDB 38290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8W9pL5oGDwNaylGcuv2G8Y
          claim_id: c_w8RigdJ8nZTiiAW934jURU
          source_id: s_JEM2KfFwCuwWuLoe6PGHGs
          stance: supports
          locator: CBDB:38290
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other:
    - claim:
        id: c_QRTUoEw_I7z7r-PvDR0eyi
        subject_person_id: p_71Hi4GJJudhNG7GFzK1uDa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZMG7zxUUERXEX6oUEJMoj1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qTxBKoqxznoZyIYGsyJVSQ
          claim_id: c_QRTUoEw_I7z7r-PvDR0eyi
          source_id: s_zb_ayYcGStHGSbvZ-TI-lT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 38290 王公弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zb_ayYcGStHGSbvZ-TI-lT
            source_type: api_record
            title: 中国历代人物传记资料库：王公佐（CBDB 38289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38289&o=json
            external_identifier: CBDB:38289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_71Hi4GJJudhNG7GFzK1uDa
        status: active
        display_name: 王公佐
        merged_into_person_id: null
---

# 王公弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公弼 | accepted |
| bio.summary | 王公弼，宋人物。籍贯臨海，入仕武舉進士，曾任武翼郎。（中国历代人物传记资料库 CBDB 38290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_71Hi4GJJudhNG7GFzK1uDa | 王公佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公弼（CBDB 38290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38290&o=json)
- [中国历代人物传记资料库：王公佐（CBDB 38289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38289&o=json)
