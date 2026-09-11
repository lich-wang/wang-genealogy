---
schema: wang-person/v1
id: p_jQMo6KQCt9uucGKbC5rA3E
status: active
merged_into: null
display_name: 王譽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oC2qfF4V5GHHskPvY7z25v
        subject_person_id: p_jQMo6KQCt9uucGKbC5rA3E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_43fvNNRmfe5Wgbx8Poc2a4
          claim_id: c_oC2qfF4V5GHHskPvY7z25v
          source_id: s_hTGYNsFSSj4cmDvjEZ2Qh3
          stance: supports
          locator: CBDB:302891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302891）
          source: &a1
            id: s_hTGYNsFSSj4cmDvjEZ2Qh3
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 302891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302891&o=json
            external_identifier: CBDB:302891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.665Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KaNeGJMeVFHLtB35ppHnuo
        subject_person_id: p_jQMo6KQCt9uucGKbC5rA3E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譽，明人物。嘉靖二十年進士，籍贯武進，入仕監生。（中国历代人物传记资料库 CBDB 302891）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T9P8LJl6D721SnHF4_W4Vz
          claim_id: c_KaNeGJMeVFHLtB35ppHnuo
          source_id: s_hTGYNsFSSj4cmDvjEZ2Qh3
          stance: supports
          locator: CBDB:302891
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

# 王譽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王譽 | accepted |
| bio.summary | 王譽，明人物。嘉靖二十年進士，籍贯武進，入仕監生。（中国历代人物传记资料库 CBDB 302891） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王譽（CBDB 302891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302891&o=json)
