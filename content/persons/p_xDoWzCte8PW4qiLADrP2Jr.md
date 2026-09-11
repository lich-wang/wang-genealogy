---
schema: wang-person/v1
id: p_xDoWzCte8PW4qiLADrP2Jr
status: active
merged_into: null
display_name: 王静
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ANddbDBocQS5fUAznwZntR
        subject_person_id: p_xDoWzCte8PW4qiLADrP2Jr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王静
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R6mtXx8RSAWnzjEDMN2LTp
          claim_id: c_ANddbDBocQS5fUAznwZntR
          source_id: s_pD4131LgZpk3yLEVVp4qP7
          stance: supports
          locator: CBDB:531555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531555）
          source: &a1
            id: s_pD4131LgZpk3yLEVVp4qP7
            source_type: api_record
            title: 中国历代人物传记资料库：王静（CBDB 531555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531555&o=json
            external_identifier: CBDB:531555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kqt5jTCMuWimkKMPfX7xqc
        subject_person_id: p_xDoWzCte8PW4qiLADrP2Jr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王静，宋人物。籍贯嘉興，入仕進士。（中国历代人物传记资料库 CBDB 531555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d_twlxqAWMu8WaDQr4PKMV
          claim_id: c_kqt5jTCMuWimkKMPfX7xqc
          source_id: s_pD4131LgZpk3yLEVVp4qP7
          stance: supports
          locator: CBDB:531555
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

# 王静

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王静 | accepted |
| bio.summary | 王静，宋人物。籍贯嘉興，入仕進士。（中国历代人物传记资料库 CBDB 531555） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王静（CBDB 531555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531555&o=json)
