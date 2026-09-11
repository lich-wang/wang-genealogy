---
schema: wang-person/v1
id: p_EM2R8hBc8q1SuXPJaqg19Z
status: active
merged_into: null
display_name: 王紹堃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hmLxZLXp9npn9L6WDhkJRU
        subject_person_id: p_EM2R8hBc8q1SuXPJaqg19Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹堃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PSvedrwvFWN4BHUwC4Zhq9
          claim_id: c_hmLxZLXp9npn9L6WDhkJRU
          source_id: s_5Vjsw2aypipPGPcxjyEg2G
          stance: supports
          locator: CBDB:639759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639759）
          source: &a1
            id: s_5Vjsw2aypipPGPcxjyEg2G
            source_type: api_record
            title: 中国历代人物传记资料库：王紹堃（CBDB 639759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639759&o=json
            external_identifier: CBDB:639759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iBt8xrjemq6dDNbNv27PTv
        subject_person_id: p_EM2R8hBc8q1SuXPJaqg19Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹堃，清人物。籍贯歸安，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 639759）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LweSQRJw3FrsLSYM3CkmOh
          claim_id: c_iBt8xrjemq6dDNbNv27PTv
          source_id: s_5Vjsw2aypipPGPcxjyEg2G
          stance: supports
          locator: CBDB:639759
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

# 王紹堃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹堃 | accepted |
| bio.summary | 王紹堃，清人物。籍贯歸安，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 639759） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹堃（CBDB 639759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639759&o=json)
