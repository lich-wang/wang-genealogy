---
schema: wang-person/v1
id: p_iRdbog9FskNuJtfSnnVFzE
status: active
merged_into: null
display_name: 王之年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k7rRDRjeBLF4kPfgMvDxNB
        subject_person_id: p_iRdbog9FskNuJtfSnnVFzE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LeaV3JPGC155p6TL7JNYPS
          claim_id: c_k7rRDRjeBLF4kPfgMvDxNB
          source_id: s_FHAZqPJa9NskvJYJgP4sRV
          stance: supports
          locator: CBDB:635782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635782）
          source: &a1
            id: s_FHAZqPJa9NskvJYJgP4sRV
            source_type: api_record
            title: 中国历代人物传记资料库：王之年（CBDB 635782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635782&o=json
            external_identifier: CBDB:635782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pq7ExLkgWQ27iwm8kJPAjZ
        subject_person_id: p_iRdbog9FskNuJtfSnnVFzE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之年，清人物。籍贯松江府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 635782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cblqj8u47cIRpC3TnqH08D
          claim_id: c_pq7ExLkgWQ27iwm8kJPAjZ
          source_id: s_FHAZqPJa9NskvJYJgP4sRV
          stance: supports
          locator: CBDB:635782
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
  other: []
---

# 王之年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之年 | accepted |
| bio.summary | 王之年，清人物。籍贯松江府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 635782） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之年（CBDB 635782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635782&o=json)
