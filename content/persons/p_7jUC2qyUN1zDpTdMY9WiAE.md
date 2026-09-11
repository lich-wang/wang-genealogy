---
schema: wang-person/v1
id: p_7jUC2qyUN1zDpTdMY9WiAE
status: active
merged_into: null
display_name: 王世昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QhByA1qHnJo6DytFkXuH7j
        subject_person_id: p_7jUC2qyUN1zDpTdMY9WiAE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xC58Gq6UHg61LZLHPPPnrv
          claim_id: c_QhByA1qHnJo6DytFkXuH7j
          source_id: s_eSsvWMqA8mAnkbWve1J8vP
          stance: supports
          locator: CBDB:26365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26365）
          source: &a1
            id: s_eSsvWMqA8mAnkbWve1J8vP
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 26365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json
            external_identifier: CBDB:26365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4P3jfGRF2RRXcaN8U5Zwu
        subject_person_id: p_7jUC2qyUN1zDpTdMY9WiAE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 26365）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yvsBagftGWNTi3cAHJm5JH
          claim_id: c_B4P3jfGRF2RRXcaN8U5Zwu
          source_id: s_eSsvWMqA8mAnkbWve1J8vP
          stance: supports
          locator: CBDB:26365
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

# 王世昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世昌 | accepted |
| bio.summary | 王世昌，宋人物。籍贯開封。（中国历代人物传记资料库 CBDB 26365） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世昌（CBDB 26365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26365&o=json)
