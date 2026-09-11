---
schema: wang-person/v1
id: p_ZmFMsNBuCzYmgMk19H2yHX
status: active
merged_into: null
display_name: 王塗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JgUTfAtFbg8WKJuxsD6Vb
        subject_person_id: p_ZmFMsNBuCzYmgMk19H2yHX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D68sBNGZ2rcgNTA47KbQzp
          claim_id: c_2JgUTfAtFbg8WKJuxsD6Vb
          source_id: s_NtkEPP6dRj2Qtetp7NcFHu
          stance: supports
          locator: CBDB:636759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636759）
          source: &a1
            id: s_NtkEPP6dRj2Qtetp7NcFHu
            source_type: api_record
            title: 中国历代人物传记资料库：王塗（CBDB 636759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636759&o=json
            external_identifier: CBDB:636759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B2E8MC6kFYWPNPGihYbphL
        subject_person_id: p_ZmFMsNBuCzYmgMk19H2yHX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塗，清人物。籍贯兗州府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 636759）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IqQEJMBKLHxRw5ZEfFeW3y
          claim_id: c_B2E8MC6kFYWPNPGihYbphL
          source_id: s_NtkEPP6dRj2Qtetp7NcFHu
          stance: supports
          locator: CBDB:636759
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

# 王塗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塗 | accepted |
| bio.summary | 王塗，清人物。籍贯兗州府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 636759） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王塗（CBDB 636759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636759&o=json)
