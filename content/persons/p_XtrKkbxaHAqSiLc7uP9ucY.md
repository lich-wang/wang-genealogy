---
schema: wang-person/v1
id: p_XtrKkbxaHAqSiLc7uP9ucY
status: active
merged_into: null
display_name: 王蔭棠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kuDCAgFmF63a5kqWkQvzp3
        subject_person_id: p_XtrKkbxaHAqSiLc7uP9ucY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭棠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jiRMhNHNud5DKx8QHmVLM7
          claim_id: c_kuDCAgFmF63a5kqWkQvzp3
          source_id: s_gnQ9nUFd2pRwhr58BQLQNE
          stance: supports
          locator: CBDB:640158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640158）
          source: &a1
            id: s_gnQ9nUFd2pRwhr58BQLQNE
            source_type: api_record
            title: 中国历代人物传记资料库：王蔭棠（CBDB 640158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640158&o=json
            external_identifier: CBDB:640158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gWnFQSLMtxHQ1JHaiJk2bZ
        subject_person_id: p_XtrKkbxaHAqSiLc7uP9ucY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭棠，清人物。籍贯盱眙，入仕鄉貢舉人，曾任經歷、郎中、主事。（中国历代人物传记资料库 CBDB 640158）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Td25VzsWhDCVZq1rqL66co
          claim_id: c_gWnFQSLMtxHQ1JHaiJk2bZ
          source_id: s_gnQ9nUFd2pRwhr58BQLQNE
          stance: supports
          locator: CBDB:640158
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

# 王蔭棠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔭棠 | accepted |
| bio.summary | 王蔭棠，清人物。籍贯盱眙，入仕鄉貢舉人，曾任經歷、郎中、主事。（中国历代人物传记资料库 CBDB 640158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蔭棠（CBDB 640158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640158&o=json)
